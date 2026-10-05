import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase/admin";

const allowedCategories = new Set([
  "mechanics",
  "restaurants",
  "tours-activities",
  "delivery",
  "pharmacies",
  "air-conditioning",
  "pools",
  "handyman",
  "barbershops",
  "pet-services",
]);

const allowedAreas = new Set([
  "potrero",
  "surfside",
  "flamingo",
  "brasilito",
  "las-catalinas",
  "huacas",
  "tamarindo",
]);

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp"]);

const MAX_PHOTO_SIZE = 5 * 1024 * 1024;
const MAX_PHOTOS = 5;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getExtension(file: File) {
  const extensionFromName = file.name.split(".").pop()?.toLowerCase();

  if (extensionFromName === "jpg" || extensionFromName === "jpeg") {
    return "jpg";
  }

  if (extensionFromName === "png") {
    return "png";
  }

  if (extensionFromName === "webp") {
    return "webp";
  }

  if (file.type === "image/jpeg") {
    return "jpg";
  }

  if (file.type === "image/png") {
    return "png";
  }

  if (file.type === "image/webp") {
    return "webp";
  }

  return null;
}

export async function POST(request: Request) {
  let applicationId: string | null = null;
  const uploadedPaths: string[] = [];

  try {
    const formData = await request.formData();

    const businessName = String(formData.get("businessName") ?? "").trim();

    const categoryId = String(formData.get("categoryId") ?? "").trim();

    const description = String(formData.get("description") ?? "").trim();

    const mainAreaId = String(formData.get("mainAreaId") ?? "").trim();

    const serviceAreaIds = formData
      .getAll("serviceAreaIds")
      .map((value) => String(value).trim())
      .filter(Boolean);

    const contactName = String(formData.get("contactName") ?? "").trim();

    const whatsapp = String(formData.get("whatsapp") ?? "").trim();

    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();

    const googleBusinessUrl =
      String(formData.get("googleBusinessUrl") ?? "").trim() || null;

    const instagramUrl =
      String(formData.get("instagramUrl") ?? "").trim() || null;

    const facebookUrl =
      String(formData.get("facebookUrl") ?? "").trim() || null;

    const websiteUrl = String(formData.get("websiteUrl") ?? "").trim() || null;

    const authorityConfirmed = formData.get("authorityConfirmed") === "true";

    const privacyConsent = formData.get("privacyConsent") === "true";

    const publicationConsent = formData.get("publicationConsent") === "true";

    const photos = formData
      .getAll("photos")
      .filter((item): item is File => item instanceof File && item.size > 0);

    if (businessName.length < 2 || businessName.length > 100) {
      return NextResponse.json(
        { error: "Invalid business name." },
        { status: 400 },
      );
    }

    if (!allowedCategories.has(categoryId)) {
      return NextResponse.json({ error: "Invalid category." }, { status: 400 });
    }

    if (description.length < 20 || description.length > 500) {
      return NextResponse.json(
        { error: "Invalid business description." },
        { status: 400 },
      );
    }

    if (!allowedAreas.has(mainAreaId)) {
      return NextResponse.json(
        { error: "Invalid main area." },
        { status: 400 },
      );
    }

    if (
      serviceAreaIds.length === 0 ||
      serviceAreaIds.some((areaId) => !allowedAreas.has(areaId))
    ) {
      return NextResponse.json(
        { error: "Invalid service area." },
        { status: 400 },
      );
    }

    if (contactName.length < 2 || contactName.length > 100) {
      return NextResponse.json(
        { error: "Invalid contact name." },
        { status: 400 },
      );
    }

    if (whatsapp.length < 8) {
      return NextResponse.json(
        { error: "Invalid WhatsApp number." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (!authorityConfirmed || !privacyConsent || !publicationConsent) {
      return NextResponse.json(
        {
          error: "All required consents must be accepted.",
        },
        { status: 400 },
      );
    }

    if (photos.length < 1 || photos.length > MAX_PHOTOS) {
      return NextResponse.json(
        {
          error: "Between 1 and 5 photos are required.",
        },
        { status: 400 },
      );
    }

    for (const photo of photos) {
      if (!allowedMimeTypes.has(photo.type)) {
        return NextResponse.json(
          { error: "Unsupported photo format." },
          { status: 400 },
        );
      }

      if (photo.size > MAX_PHOTO_SIZE) {
        return NextResponse.json(
          {
            error: "Each photo must be 5 MB or smaller.",
          },
          { status: 400 },
        );
      }
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedWhatsapp = whatsapp.replace(/\D/g, "");

    const { data: existingApplication, error: existingApplicationError } =
      await supabaseAdmin
        .from("provider_applications")
        .select("id, status")
        .or(
          `email_normalized.eq.${normalizedEmail},whatsapp_normalized.eq.${normalizedWhatsapp}`,
        )
        .in("status", ["pending", "approved"])
        .limit(1)
        .maybeSingle();

    if (existingApplicationError) {
      console.error(
        "Existing application lookup error:",
        existingApplicationError,
      );

      return NextResponse.json(
        {
          error: "Unable to validate existing applications.",
        },
        { status: 500 },
      );
    }

    if (existingApplication) {
      return NextResponse.json(
        {
          error: "Ya existe una solicitud activa con este correo o WhatsApp.",
        },
        { status: 409 },
      );
    }
    const { data: application, error: applicationError } = await supabaseAdmin
      .from("provider_applications")
      .insert({
        business_name: businessName,
        category_id: categoryId,
        description,
        main_area_id: mainAreaId,
        service_area_ids: serviceAreaIds,
        contact_name: contactName,
        whatsapp,
        email,
        google_business_url: googleBusinessUrl,
        instagram_url: instagramUrl,
        facebook_url: facebookUrl,
        website_url: websiteUrl,
        authority_confirmed: authorityConfirmed,
        privacy_consent: privacyConsent,
        publication_consent: publicationConsent,
        status: "pending",
      })
      .select("id")
      .single();

    if (applicationError) {
      console.error("Provider application insert error:", applicationError);

      if (applicationError.code === "23505") {
        return NextResponse.json(
          {
            error: "Ya existe una solicitud activa con este correo o WhatsApp.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        {
          error: "Unable to create provider application.",
        },
        { status: 500 },
      );
    }

    applicationId = application.id;

    const photoRows: {
      application_id: string;
      storage_path: string;
      position: number;
    }[] = [];

    for (let index = 0; index < photos.length; index += 1) {
      const photo = photos[index];
      const extension = getExtension(photo);

      if (!extension) {
        throw new Error("Unable to determine photo extension.");
      }

      const storagePath = `${application.id}/${index}.${extension}`;

      const bytes = await photo.arrayBuffer();

      const { error: uploadError } = await supabaseAdmin.storage
        .from("provider-application-photos")
        .upload(storagePath, bytes, {
          contentType: photo.type,
          upsert: false,
        });

      if (uploadError) {
        throw new Error(
          `Unable to upload provider photo: ${uploadError.message}`,
        );
      }

      uploadedPaths.push(storagePath);

      photoRows.push({
        application_id: application.id,
        storage_path: storagePath,
        position: index,
      });
    }

    const { error: photosInsertError } = await supabaseAdmin
      .from("provider_application_photos")
      .insert(photoRows);

    if (photosInsertError) {
      throw new Error(
        `Unable to save provider photo records: ${photosInsertError.message}`,
      );
    }

    return NextResponse.json(
      {
        success: true,
        applicationId: application.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Provider application route error:", error);

    if (uploadedPaths.length > 0) {
      await supabaseAdmin.storage
        .from("provider-application-photos")
        .remove(uploadedPaths);
    }

    if (applicationId) {
      await supabaseAdmin
        .from("provider_applications")
        .delete()
        .eq("id", applicationId);
    }

    return NextResponse.json(
      {
        error: "Something went wrong while submitting the application.",
      },
      { status: 500 },
    );
  }
}
