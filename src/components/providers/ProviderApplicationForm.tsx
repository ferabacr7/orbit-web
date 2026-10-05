"use client";

import { useTranslations } from "next-intl";
import { ChangeEvent, useState } from "react";

const categories = [
  { id: "mechanics", translationKey: "mechanics" },
  { id: "restaurants", translationKey: "restaurants" },
  { id: "tours-activities", translationKey: "toursActivities" },
  { id: "delivery", translationKey: "delivery" },
  { id: "pharmacies", translationKey: "pharmacies" },
  { id: "air-conditioning", translationKey: "airConditioning" },
  { id: "pools", translationKey: "pools" },
  { id: "handyman", translationKey: "handyman" },
  { id: "barbershops", translationKey: "barbershops" },
  { id: "pet-services", translationKey: "petServices" },
] as const;

const serviceAreas = [
  { id: "potrero", label: "Potrero" },
  { id: "surfside", label: "Surfside" },
  { id: "flamingo", label: "Flamingo" },
  { id: "brasilito", label: "Brasilito" },
  { id: "las-catalinas", label: "Las Catalinas" },
  { id: "huacas", label: "Huacas" },
  { id: "tamarindo", label: "Tamarindo" },
];

type FormData = {
  businessName: string;
  categoryId: string;
  description: string;
  mainAreaId: string;
  serviceAreaIds: string[];

  contactName: string;
  whatsapp: string;
  email: string;
  googleBusinessUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  websiteUrl: string;

  photos: File[];
  authorityConfirmed: boolean;
  privacyConsent: boolean;
  publicationConsent: boolean;
};

const initialFormData: FormData = {
  businessName: "",
  categoryId: "",
  description: "",
  mainAreaId: "",
  serviceAreaIds: [],

  contactName: "",
  whatsapp: "",
  email: "",
  googleBusinessUrl: "",
  instagramUrl: "",
  facebookUrl: "",
  websiteUrl: "",

  photos: [],
  authorityConfirmed: false,
  privacyConsent: false,
  publicationConsent: false,
};

export function ProviderApplicationForm() {
  const t = useTranslations("ProviderApplication");

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K],
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleServiceArea = (areaId: string) => {
    setFormData((current) => {
      const alreadySelected = current.serviceAreaIds.includes(areaId);

      return {
        ...current,
        serviceAreaIds: alreadySelected
          ? current.serviceAreaIds.filter((id) => id !== areaId)
          : [...current.serviceAreaIds, areaId],
      };
    });
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      return;
    }

    const nextPhotos = [...formData.photos, ...files].slice(0, 5);

    updateField("photos", nextPhotos);

    event.target.value = "";
  };

  const removePhoto = (indexToRemove: number) => {
    updateField(
      "photos",
      formData.photos.filter((_, index) => index !== indexToRemove),
    );
  };

  const canContinueStepOne =
    formData.businessName.trim().length >= 2 &&
    formData.categoryId !== "" &&
    formData.description.trim().length >= 20;

  const canContinueStepTwo =
    formData.mainAreaId !== "" && formData.serviceAreaIds.length > 0;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const canContinueStepThree =
    formData.contactName.trim().length >= 2 &&
    formData.whatsapp.trim().length >= 8 &&
    isEmailValid;

  const canSubmit =
    formData.photos.length >= 1 &&
    formData.authorityConfirmed &&
    formData.privacyConsent &&
    formData.publicationConsent;

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    if (!canSubmit) {
      alert(t("validation.step4"));
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("businessName", formData.businessName);
      payload.append("categoryId", formData.categoryId);
      payload.append("description", formData.description);
      payload.append("mainAreaId", formData.mainAreaId);

      formData.serviceAreaIds.forEach((areaId) => {
        payload.append("serviceAreaIds", areaId);
      });

      payload.append("contactName", formData.contactName);
      payload.append("whatsapp", formData.whatsapp);
      payload.append("email", formData.email);

      payload.append("googleBusinessUrl", formData.googleBusinessUrl);
      payload.append("instagramUrl", formData.instagramUrl);
      payload.append("facebookUrl", formData.facebookUrl);
      payload.append("websiteUrl", formData.websiteUrl);

      payload.append("authorityConfirmed", String(formData.authorityConfirmed));

      payload.append("privacyConsent", String(formData.privacyConsent));

      payload.append("publicationConsent", String(formData.publicationConsent));

      formData.photos.forEach((photo) => {
        payload.append("photos", photo);
      });

      const response = await fetch("/api/provider-applications", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Unable to submit application.");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Provider application request failed:", error);

      alert("Something went wrong while submitting the application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#f7f4ef] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[32px] border border-black/10 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
              ✓
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
              {t("success.eyebrow")}
            </p>

            <h1 className="font-[var(--font-editorial)] text-4xl leading-tight text-black">
              {t("success.title")}
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-black/60">
              {t("success.description")}
            </p>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-black/50">
              {t("success.founding")}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f7f4ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-black/50">
            {t("progress", {
              step,
              total: 4,
            })}
          </p>

          <div className="h-2 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-orange-500 transition-all duration-300"
              style={{
                width: `${(step / 4) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
          {step === 1 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  {t("step1.eyebrow")}
                </p>

                <h1 className="font-[var(--font-editorial)] text-4xl leading-tight text-black">
                  {t("step1.title")}
                </h1>

                <p className="mt-3 max-w-xl text-base leading-7 text-black/60">
                  {t("step1.description")}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.businessName.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <input
                    id="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={(event) =>
                      updateField("businessName", event.target.value)
                    }
                    placeholder={t("fields.businessName.placeholder")}
                    maxLength={100}
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.category.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <select
                    id="category"
                    value={formData.categoryId}
                    onChange={(event) =>
                      updateField("categoryId", event.target.value)
                    }
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  >
                    <option value="">{t("fields.category.placeholder")}</option>

                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {t(`categories.${category.translationKey}`)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-black"
                    >
                      {t("fields.description.label")}{" "}
                      <span className="text-orange-600">*</span>
                    </label>

                    <span className="text-xs text-black/40">
                      {formData.description.length}/500
                    </span>
                  </div>

                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(event) =>
                      updateField("description", event.target.value)
                    }
                    placeholder={t("fields.description.placeholder")}
                    minLength={20}
                    maxLength={500}
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />

                  <p className="mt-2 text-xs text-black/45">
                    {t("fields.description.helper")}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!canContinueStepOne) {
                      alert(t("validation.step1"));
                      return;
                    }

                    setStep(2);
                  }}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                >
                  {t("actions.continue")}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  {t("step2.eyebrow")}
                </p>

                <h1 className="font-[var(--font-editorial)] text-4xl leading-tight text-black">
                  {t("step2.title")}
                </h1>

                <p className="mt-3 max-w-xl text-base leading-7 text-black/60">
                  {t("step2.description")}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label
                    htmlFor="mainArea"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.mainArea.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <select
                    id="mainArea"
                    value={formData.mainAreaId}
                    onChange={(event) =>
                      updateField("mainAreaId", event.target.value)
                    }
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  >
                    <option value="">{t("fields.mainArea.placeholder")}</option>

                    {serviceAreas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-black">
                      {t("fields.serviceAreas.label")}{" "}
                      <span className="text-orange-600">*</span>
                    </p>

                    <p className="mt-1 text-sm text-black/50">
                      {t("fields.serviceAreas.description")}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {serviceAreas.map((area) => {
                      const selected = formData.serviceAreaIds.includes(
                        area.id,
                      );

                      return (
                        <button
                          key={area.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => toggleServiceArea(area.id)}
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                            selected
                              ? "border-orange-500 bg-orange-500 text-white"
                              : "border-black/15 bg-white text-black hover:border-black/30"
                          }`}
                        >
                          {area.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                >
                  {t("actions.back")}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!canContinueStepTwo) {
                      alert(t("validation.step2"));
                      return;
                    }

                    setStep(3);
                  }}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                >
                  {t("actions.continue")}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  {t("step3.eyebrow")}
                </p>

                <h1 className="font-[var(--font-editorial)] text-4xl leading-tight text-black">
                  {t("step3.title")}
                </h1>

                <p className="mt-3 max-w-xl text-base leading-7 text-black/60">
                  {t("step3.description")}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="contactName"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.contactName.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <input
                    id="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={(event) =>
                      updateField("contactName", event.target.value)
                    }
                    placeholder={t("fields.contactName.placeholder")}
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.whatsapp.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <input
                    id="whatsapp"
                    type="tel"
                    inputMode="tel"
                    value={formData.whatsapp}
                    onChange={(event) =>
                      updateField("whatsapp", event.target.value)
                    }
                    placeholder={t("fields.whatsapp.placeholder")}
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />

                  <p className="mt-2 text-xs text-black/45">
                    {t("fields.whatsapp.helper")}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    {t("fields.email.label")}{" "}
                    <span className="text-orange-600">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder={t("fields.email.placeholder")}
                    className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                <div className="border-t border-black/10 pt-6">
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-black">
                      {t("step3.verificationTitle")}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-black/50">
                      {t("step3.verificationDescription")}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="googleBusinessUrl"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        {t("fields.googleBusinessUrl.label")}
                      </label>

                      <input
                        id="googleBusinessUrl"
                        type="url"
                        value={formData.googleBusinessUrl}
                        onChange={(event) =>
                          updateField("googleBusinessUrl", event.target.value)
                        }
                        placeholder={t("fields.googleBusinessUrl.placeholder")}
                        className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="instagramUrl"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        {t("fields.instagramUrl.label")}
                      </label>

                      <input
                        id="instagramUrl"
                        type="url"
                        value={formData.instagramUrl}
                        onChange={(event) =>
                          updateField("instagramUrl", event.target.value)
                        }
                        placeholder={t("fields.instagramUrl.placeholder")}
                        className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="facebookUrl"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        {t("fields.facebookUrl.label")}
                      </label>

                      <input
                        id="facebookUrl"
                        type="url"
                        value={formData.facebookUrl}
                        onChange={(event) =>
                          updateField("facebookUrl", event.target.value)
                        }
                        placeholder={t("fields.facebookUrl.placeholder")}
                        className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="websiteUrl"
                        className="mb-2 block text-sm font-medium text-black"
                      >
                        {t("fields.websiteUrl.label")}
                      </label>

                      <input
                        id="websiteUrl"
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(event) =>
                          updateField("websiteUrl", event.target.value)
                        }
                        placeholder={t("fields.websiteUrl.placeholder")}
                        className="w-full rounded-2xl border border-black/15 bg-white px-4 py-3.5 text-black outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                >
                  {t("actions.back")}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (!canContinueStepThree) {
                      alert(t("validation.step3"));
                      return;
                    }

                    setStep(4);
                  }}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                >
                  {t("actions.continue")}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  {t("step4.eyebrow")}
                </p>

                <h1 className="font-[var(--font-editorial)] text-4xl leading-tight text-black">
                  {t("step4.title")}
                </h1>

                <p className="mt-3 max-w-xl text-base leading-7 text-black/60">
                  {t("step4.description")}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-black">
                      {t("fields.photos.label")}{" "}
                      <span className="text-orange-600">*</span>
                    </p>

                    <p className="mt-1 text-sm text-black/50">
                      {t("fields.photos.helper")}
                    </p>
                  </div>

                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-black/20 bg-black/[0.02] px-6 py-8 text-center transition hover:border-orange-500 hover:bg-orange-50/40"
                  >
                    <span className="text-sm font-semibold text-black">
                      {t("fields.photos.upload")}
                    </span>

                    <span className="mt-1 text-xs text-black/45">
                      {t("fields.photos.formats")}
                    </span>
                  </label>

                  <input
                    id="photos"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handlePhotoChange}
                    className="hidden"
                  />

                  {formData.photos.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.photos.map((photo, index) => (
                        <div
                          key={`${photo.name}-${index}`}
                          className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white px-4 py-3"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-black">
                              {photo.name}
                            </p>

                            <p className="mt-0.5 text-xs text-black/40">
                              {(photo.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="shrink-0 text-sm font-medium text-black/50 transition hover:text-black"
                          >
                            {t("actions.remove")}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 text-xs text-black/45">
                    {t("fields.photos.count", {
                      count: formData.photos.length,
                    })}
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <p className="mb-4 text-sm font-semibold text-black">
                    {t("step4.consentTitle")}
                  </p>

                  <div className="space-y-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.authorityConfirmed}
                        onChange={(event) =>
                          updateField(
                            "authorityConfirmed",
                            event.target.checked,
                          )
                        }
                        className="mt-1 h-4 w-4"
                      />

                      <span className="text-sm leading-6 text-black/70">
                        {t("consent.authority")}
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(event) =>
                          updateField("privacyConsent", event.target.checked)
                        }
                        className="mt-1 h-4 w-4"
                      />

                      <span className="text-sm leading-6 text-black/70">
                        {t("consent.privacy")}
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData.publicationConsent}
                        onChange={(event) =>
                          updateField(
                            "publicationConsent",
                            event.target.checked,
                          )
                        }
                        className="mt-1 h-4 w-4"
                      />

                      <span className="text-sm leading-6 text-black/70">
                        {t("consent.publication")}
                      </span>
                    </label>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-black/45">
                    {t("consent.legalNote")}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                >
                  {t("actions.back")}
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? t("actions.submitting") : t("actions.submit")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
