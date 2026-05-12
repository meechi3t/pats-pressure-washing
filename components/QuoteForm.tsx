"use client";

import { useId, useMemo, useState } from "react";
import { z } from "zod";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { QuoteSchema } from "@/lib/quote-schema";
import { cx } from "@/lib/cx";
import { BRAND } from "@/lib/brand";
import { Icon } from "./Icon";

// Client-side validation mirrors the server schema. The server is authoritative.
type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

type SelectedFile = { name: string; size: number; previewUrl?: string };

const MAX_FILES = 8;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB cap per file (UI-side only)

export function QuoteForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [files, setFiles] = useState<SelectedFile[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const formId = useId();

  // Build a memoized city list, alphabetized within region.
  const cityOptions = useMemo(() => {
    const sac = CITIES.filter((c) => c.region === "Sacramento").map((c) => ({ value: c.slug, label: c.displayName }));
    const bay = CITIES.filter((c) => c.region === "Bay Area").map((c) => ({ value: c.slug, label: c.displayName }));
    return { sac, bay };
  }, []);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    const next: SelectedFile[] = [];
    const max = Math.min(fileList.length, MAX_FILES);
    for (let i = 0; i < max; i++) {
      const f = fileList.item(i);
      if (!f) continue;
      if (f.size > MAX_FILE_BYTES) continue; // silently skip oversized
      const isImage = f.type.startsWith("image/");
      const previewUrl = isImage ? URL.createObjectURL(f) : undefined;
      next.push({ name: f.name, size: f.size, previewUrl });
    }
    setFiles(next);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.status === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      website: (fd.get("website") as string | null) ?? "",
      name: (fd.get("name") as string | null) ?? "",
      phone: (fd.get("phone") as string | null) ?? "",
      email: (fd.get("email") as string | null) ?? "",
      serviceAddress: (fd.get("serviceAddress") as string | null) ?? "",
      city: (fd.get("city") as string | null) ?? "",
      propertyType: (fd.get("propertyType") as string | null) || undefined,
      services,
      squareFootage: (fd.get("squareFootage") as string | null) || undefined,
      preferredDate: (fd.get("preferredDate") as string | null) || undefined,
      notes: (fd.get("notes") as string | null) ?? "",
      photoFileNames: files.map((f) => f.name),
    };

    // Client-side check — mirror server.
    const parsed = QuoteSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setState({ status: "error", message: "Please fix the highlighted fields.", fieldErrors });
      return;
    }

    // Demo-only path: this site is a static mockup hosted on GitHub Pages, so
    // there is no server to receive the form. Simulate a brief submit delay,
    // then announce via aria-live that the form is not wired up and point the
    // visitor at the business's published phone/email (sourced from lib/brand).
    setState({ status: "submitting" });
    const form = e.currentTarget;
    await new Promise((r) => setTimeout(r, 600));
    setState({
      status: "success",
      message: `This is a demo site — the quote form isn't wired up. To request a real quote, call ${BRAND.phone.display} or email ${BRAND.email}.`,
    });
    form.reset();
    setFiles([]);
    setServices([]);
  }

  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    // Demo-mode confirmation: aria-live="polite" so screen readers announce the
    // notice when the visually hidden form is replaced. tabIndex + autoFocus
    // moves keyboard focus to the notice so it is not lost after submit.
    return (
      <div
        role="status"
        aria-live="polite"
        tabIndex={-1}
        autoFocus
        className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
      >
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-500 text-white">
          <Icon name="check" />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-brand-900">Demo site — form not wired up</h2>
        <p className="mt-2 text-ink-700">{state.message}</p>
        <p className="mt-1 text-sm text-ink-500">
          This page is a static mockup. No data was sent or stored.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate aria-describedby={`${formId}-form-error`}>
      {/* Honeypot — must remain empty. Hidden from sighted users and assistive tech. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website (leave blank)</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={errors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses(!!errors.name)}
          />
        </Field>

        <Field label="Phone" name="phone" required error={errors.phone}>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={inputClasses(!!errors.phone)}
            placeholder="(555) 123-4567"
          />
        </Field>

        <Field label="Email" name="email" required error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClasses(!!errors.email)}
          />
        </Field>

        <Field label="Preferred service date" name="preferredDate" hint="Optional" error={errors.preferredDate}>
          <input
            id={`${formId}-preferredDate`}
            name="preferredDate"
            type="date"
            className={inputClasses(!!errors.preferredDate)}
          />
        </Field>

        <Field label="Service address" name="serviceAddress" required error={errors.serviceAddress} className="sm:col-span-2">
          <input
            id={`${formId}-serviceAddress`}
            name="serviceAddress"
            type="text"
            autoComplete="street-address"
            required
            className={inputClasses(!!errors.serviceAddress)}
          />
        </Field>

        <Field label="City" name="city" required error={errors.city}>
          <select id={`${formId}-city`} name="city" required defaultValue="" className={inputClasses(!!errors.city)}>
            <option value="" disabled>
              Select a city
            </option>
            <optgroup label="Sacramento Region">
              {cityOptions.sac.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Bay Area">
              {cityOptions.bay.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </optgroup>
            <option value="other">Other / not listed</option>
          </select>
        </Field>

        <Field label="Property type" name="propertyType" hint="Optional" error={errors.propertyType}>
          <select id={`${formId}-propertyType`} name="propertyType" defaultValue="" className={inputClasses(!!errors.propertyType)}>
            <option value="">Select…</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="other">Other</option>
          </select>
        </Field>

        <Field label="Approximate square footage" name="squareFootage" hint="Optional — helps us quote faster" error={errors.squareFootage}>
          <input
            id={`${formId}-squareFootage`}
            name="squareFootage"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            className={inputClasses(!!errors.squareFootage)}
            placeholder="e.g. 2000"
          />
        </Field>
      </div>

      {/* Services multi-select as checkbox grid (mobile-friendly). */}
      <fieldset className="grid gap-3" aria-describedby={`${formId}-services-hint`}>
        <legend className="text-sm font-semibold text-brand-900">
          Services needed <span className="font-normal text-ink-500">(optional)</span>
        </legend>
        <p id={`${formId}-services-hint`} className="text-sm text-ink-500">
          Pick any that apply. Not sure? Leave it blank and we&rsquo;ll help narrow it down.
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const checked = services.includes(s.slug);
            return (
              <label
                key={s.slug}
                className={cx(
                  "flex cursor-pointer items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm transition",
                  checked ? "border-brand-500 bg-brand-50 text-brand-900" : "border-ink-200 text-ink-700 hover:border-brand-300"
                )}
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-ink-300 text-brand-600 focus:ring-brand-300"
                  checked={checked}
                  onChange={(e) => {
                    setServices((prev) =>
                      e.target.checked ? [...prev, s.slug] : prev.filter((slug) => slug !== s.slug)
                    );
                  }}
                />
                <span>{s.shortName}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Photo upload (optional, local preview only — see route handler for the discard note). */}
      <Field label="Photos" name="photos" hint="Optional — up to 8 images, 10 MB each">
        <input
          id={`${formId}-photos`}
          name="photos"
          type="file"
          accept="image/*"
          multiple
          onChange={onFilesChange}
          className="block w-full cursor-pointer rounded-xl border border-dashed border-ink-300 bg-ink-50 p-3 text-sm text-ink-700 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-700 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-800"
        />
        {files.length > 0 ? (
          <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {files.map((f, idx) => (
              <li key={idx} className="overflow-hidden rounded-xl border border-ink-200">
                {f.previewUrl ? (
                  /* Object URLs are local-only previews. */
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={f.previewUrl} alt={f.name} className="aspect-square w-full object-cover" />
                ) : (
                  <div className="grid aspect-square place-items-center bg-ink-100 p-2 text-xs text-ink-500">
                    {f.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </Field>

      <Field label="Anything else we should know?" name="notes" hint="Optional" error={errors.notes}>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={4}
          maxLength={2000}
          className={inputClasses(!!errors.notes)}
          placeholder="Stairs, gate codes, target areas, time-of-day preferences…"
        />
      </Field>

      {state.status === "error" ? (
        <p id={`${formId}-form-error`} role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className={cx(
            "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-accent-600 px-6 text-base font-semibold text-white shadow-soft transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
            state.status === "submitting" ? "" : "hover:bg-accent-700"
          )}
        >
          {state.status === "submitting" ? "Sending…" : "Send my quote request"}
          {state.status === "submitting" ? null : <Icon name="arrow-right" className="h-5 w-5" />}
        </button>
        <p className="text-xs text-ink-500">
          By submitting, you agree to be contacted about your quote. We won&rsquo;t share your information.
        </p>
      </div>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cx(
    "block w-full rounded-xl border bg-white px-3 py-2 text-base text-ink-900 placeholder:text-ink-400 transition focus:outline-none focus:ring-2",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-ink-200 focus:border-brand-500 focus:ring-brand-200"
  );
}

function Field({
  label,
  name,
  required,
  hint,
  error,
  className,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  // Note: nested <label> wrapping the input gives implicit association.
  return (
    <label className={cx("grid gap-1.5 text-sm", className)} htmlFor={undefined /* implicit via wrap */}>
      <span className="font-medium text-brand-900">
        {label} {required ? <span className="text-red-600">*</span> : null}
        {hint && !required ? <span className="ml-1 font-normal text-ink-500">— {hint}</span> : null}
      </span>
      {children}
      {error ? (
        <span role="alert" className="text-xs text-red-600" data-field={name}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

// Re-export so unit tests can import the same instance.
export { QuoteSchema, z };
