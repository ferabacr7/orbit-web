import { Link } from "@/i18n/navigation";

type TermsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

/*
 * COMPLETE BEFORE PRODUCTION
 */
const LEGAL_OPERATOR_NAME = "REPLACE_WITH_LEGAL_NAME";
const LEGAL_CONTACT_EMAIL = "REPLACE_WITH_CONTACT_EMAIL";

const content = {
  es: {
    eyebrow: "LEGAL",
    title: "Términos de Uso",
    updated: "Última actualización: 4 de octubre de 2026",

    intro:
      "Estos Términos regulan el acceso y uso de ORBIT, una plataforma diseñada para ayudar a personas a descubrir, comparar y contactar negocios, profesionales y proveedores de servicios locales en Guanacaste.",

    legalIntro:
      "Al utilizar ORBIT aceptás estos Términos en la medida permitida por la legislación aplicable. Ninguna disposición de estos Términos pretende limitar derechos irrenunciables reconocidos por la legislación costarricense.",

    sections: [
      {
        id: "operator",
        title: "1. Operador de ORBIT",
        paragraphs: [
          `ORBIT es operado por ${LEGAL_OPERATOR_NAME}.`,
          `Para consultas relacionadas con estos Términos podés comunicarte a ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },

      {
        id: "service",
        title: "2. Qué es ORBIT",
        paragraphs: [
          "ORBIT es una plataforma de descubrimiento de servicios locales.",
          "Su función principal es permitir que usuarios encuentren información sobre negocios y proveedores, comparen opciones y, cuando esté disponible, contacten directamente al proveedor mediante WhatsApp u otros medios externos.",
          "Salvo que ORBIT indique expresamente lo contrario en una funcionalidad futura, ORBIT no participa como parte en el contrato final entre el usuario y el proveedor.",
        ],
      },

      {
        id: "marketplace",
        title: "3. ORBIT no presta los servicios anunciados",
        paragraphs: [
          "Los negocios y profesionales publicados en ORBIT son responsables de los productos o servicios que ofrecen.",
          "ORBIT no presta servicios de mecánica, restaurantes, tours, entregas, farmacia, aire acondicionado, piscinas, handyman, barbería, cuidado de mascotas ni otros servicios ofrecidos por proveedores publicados en la plataforma.",
          "La contratación, precio final, disponibilidad, ejecución, garantías y demás condiciones relacionadas con el servicio prestado por un proveedor son responsabilidad del proveedor correspondiente, salvo que ORBIT indique expresamente otra cosa.",
        ],
      },

      {
        id: "provider-information",
        title: "4. Información de los proveedores",
        paragraphs: [
          "ORBIT busca presentar información útil y confiable sobre los proveedores publicados.",
          "Sin embargo, horarios, precios, disponibilidad, servicios, zonas de cobertura, reseñas, fotografías y demás información pueden cambiar.",
          "Los proveedores son responsables de proporcionar información veraz, actualizada y suficiente sobre sus negocios y servicios.",
          "ORBIT puede verificar, solicitar correcciones, rechazar o retirar información cuando existan razones razonables para considerar que es incorrecta, engañosa, incompleta o incompatible con estos Términos.",
        ],
      },

      {
        id: "reviews",
        title: "5. Calificaciones y reseñas",
        paragraphs: [
          "ORBIT puede mostrar calificaciones, número de reseñas u otra información pública proveniente de fuentes externas cuando corresponda.",
          "La presencia de una calificación o reseña no constituye una garantía, recomendación personal ni certificación de ORBIT sobre la calidad futura de un servicio.",
          "Cuando se identifique una fuente externa, dicha información puede estar sujeta también a las políticas y condiciones de esa fuente.",
        ],
      },

      {
        id: "contact",
        title: "6. Contacto mediante WhatsApp y servicios externos",
        paragraphs: [
          "ORBIT puede facilitar enlaces para que los usuarios contacten directamente a proveedores mediante WhatsApp, llamadas telefónicas u otros servicios externos.",
          "Al utilizar esos enlaces, el usuario puede abandonar ORBIT.",
          "La comunicación posterior entre el usuario y el proveedor se realiza directamente entre esas partes y puede estar sujeta a las políticas del servicio externo utilizado.",
        ],
      },

      {
        id: "users",
        title: "7. Uso permitido de ORBIT",
        paragraphs: [
          "Debés utilizar ORBIT de manera legal, responsable y compatible con la finalidad de la plataforma.",
        ],
        bullets: [
          "No utilizar ORBIT para fraude, engaño, suplantación o actividades ilegales.",
          "No interferir con la seguridad o funcionamiento de la plataforma.",
          "No intentar acceder sin autorización a cuentas, sistemas, datos o infraestructura.",
          "No utilizar sistemas automatizados de forma que degraden, saturen o interfieran con ORBIT.",
          "No recopilar masivamente información personal o comercial de otros usuarios sin autorización.",
          "No publicar contenido falso, engañoso, abusivo, ilegal o que infrinja derechos de terceros.",
        ],
      },

      {
        id: "providers",
        title: "8. Obligaciones de los proveedores",
        paragraphs: [
          "Los proveedores que soliciten aparecer en ORBIT deben proporcionar información auténtica y mantener sus datos razonablemente actualizados.",
        ],
        bullets: [
          "Tener autorización para representar al negocio publicado.",
          "Proporcionar información comercial verdadera.",
          "Utilizar fotografías y contenido que tengan derecho a publicar.",
          "Mantener actualizados los datos relevantes del negocio.",
          "Cumplir la legislación y permisos aplicables a su actividad.",
          "No utilizar ORBIT para promover productos o servicios prohibidos o ilegales.",
          "Tratar a los usuarios de forma responsable y conforme a la normativa aplicable.",
        ],
      },

      {
        id: "approval",
        title: "9. Publicación y moderación de proveedores",
        paragraphs: [
          "El envío de una solicitud de proveedor no garantiza su publicación.",
          "ORBIT puede revisar solicitudes antes de aprobarlas y puede solicitar información adicional cuando sea necesario.",
          "ORBIT podrá rechazar, suspender u ocultar perfiles cuando exista información engañosa, incumplimiento de estos Términos, riesgo para usuarios, actividad ilegal, fraude, abuso o cualquier otra razón legítima relacionada con la seguridad o integridad de la plataforma.",
        ],
      },

      {
        id: "plans",
        title: "10. Planes Free, Pro y Premium",
        paragraphs: [
          "ORBIT puede ofrecer diferentes niveles de presencia comercial, incluyendo planes Free, Pro y Premium.",
          "Las características, precios y disponibilidad de cada plan serán los mostrados en ORBIT al momento correspondiente.",
          "ORBIT puede modificar para nuevas contrataciones las características o precios de sus planes, comunicando de manera clara las condiciones aplicables.",
        ],
      },

      {
        id: "founding",
        title: "11. Ofertas y promociones",
        paragraphs: [
          "ORBIT puede ofrecer promociones temporales, incluyendo beneficios para proveedores fundadores.",
          "Las promociones pueden estar sujetas a requisitos de elegibilidad, disponibilidad, categorías, zonas, fechas o cupos.",
          "Cuando una promoción establezca un período gratuito, ORBIT deberá informar claramente las condiciones aplicables antes de activar cualquier cobro posterior.",
        ],
      },

      {
        id: "payments",
        title: "12. Suscripciones y pagos futuros",
        paragraphs: [
          "El MVP actual de ORBIT no procesa pagos entre consumidores y proveedores por los servicios encontrados mediante la plataforma.",
          "Si ORBIT habilita pagos por planes comerciales, suscripciones u otros productos propios, antes de completar una contratación se mostrará la información aplicable sobre precio, impuestos cuando correspondan, duración, forma de pago, renovación, cancelación y demás condiciones relevantes.",
          "ORBIT no realizará renovaciones automáticas o cargos recurrentes salvo que la persona haya sido informada previamente de manera clara y haya otorgado la autorización que corresponda.",
        ],
      },

      {
        id: "growth",
        title: "13. ORBIT Growth y servicios de marketing",
        paragraphs: [
          "ORBIT puede ofrecer servicios adicionales de marketing o publicidad bajo la marca ORBIT Growth.",
          "Estos servicios no forman parte automáticamente de los planes Free, Pro o Premium salvo que se indique expresamente.",
          "Los servicios personalizados de publicidad, media buying, producción creativa, consultoría u otros trabajos adicionales pueden requerir un acuerdo comercial separado que defina alcance, precio, presupuesto publicitario, entregables y responsabilidades.",
        ],
      },

      {
        id: "intellectual-property",
        title: "14. Propiedad intelectual",
        paragraphs: [
          "La marca ORBIT, diseño visual, software, estructura de la plataforma, textos originales, interfaces y demás contenidos propios están protegidos por los derechos que correspondan.",
          "No se autoriza copiar, reproducir, distribuir o utilizar comercialmente estos elementos fuera de lo permitido por la ley o mediante autorización expresa.",
          "Los proveedores conservan los derechos que les correspondan sobre fotografías, marcas y contenido que proporcionen, y otorgan a ORBIT la autorización necesaria para mostrarlos y utilizarlos dentro de la plataforma y en las actividades promocionales expresamente autorizadas.",
        ],
      },

      {
        id: "availability",
        title: "15. Disponibilidad de la plataforma",
        paragraphs: [
          "ORBIT procura mantener la plataforma disponible y funcionando correctamente.",
          "Sin embargo, pueden ocurrir interrupciones por mantenimiento, actualizaciones, fallos técnicos, proveedores externos, incidentes de seguridad u otras circunstancias.",
          "ORBIT puede modificar, suspender o actualizar funcionalidades cuando sea necesario para mejorar, proteger o mantener la plataforma.",
        ],
      },

      {
        id: "liability",
        title: "16. Responsabilidad",
        paragraphs: [
          "Nada en estos Términos excluye o limita responsabilidades que legalmente no puedan ser excluidas.",
          "Dentro de los límites permitidos por la ley, ORBIT no es responsable de actos, omisiones, calidad del servicio, incumplimientos contractuales o conductas de proveedores independientes cuando ORBIT no sea parte de la relación entre proveedor y usuario.",
          "Los usuarios deben ejercer criterio razonable antes de contratar servicios y verificar directamente con el proveedor cualquier condición que sea relevante para su decisión.",
        ],
      },

      {
        id: "privacy",
        title: "17. Privacidad y datos personales",
        paragraphs: [
          "El tratamiento de datos personales relacionado con ORBIT se describe con mayor detalle en nuestra Política de Privacidad.",
          "Estos Términos deben leerse junto con esa Política.",
        ],
      },

      {
        id: "changes",
        title: "18. Cambios a estos Términos",
        paragraphs: [
          "ORBIT puede actualizar estos Términos para reflejar cambios en el producto, modelo comercial, requisitos legales o funcionamiento de la plataforma.",
          "La versión vigente estará disponible en esta página junto con la fecha de última actualización.",
          "Cuando una modificación requiera información o consentimiento adicional conforme a la ley, ORBIT aplicará el mecanismo correspondiente.",
        ],
      },

      {
        id: "law",
        title: "19. Legislación aplicable",
        paragraphs: [
          "Estos Términos se interpretarán de conformidad con las leyes de la República de Costa Rica.",
          "Nada en esta sección limita los derechos o mecanismos de protección que correspondan a consumidores o titulares de datos personales conforme a normas imperativas aplicables.",
        ],
      },

      {
        id: "contact-terms",
        title: "20. Contacto",
        paragraphs: [
          `Para consultas relacionadas con estos Términos, podés comunicarte con ORBIT en ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },
    ],

    privacyNote:
      "El tratamiento de datos personales en ORBIT se regula además mediante nuestra Política de Privacidad.",

    privacyLink: "Ver Política de Privacidad",
  },

  en: {
    eyebrow: "LEGAL",
    title: "Terms of Use",
    updated: "Last updated: October 4, 2026",

    intro:
      "These Terms govern access to and use of ORBIT, a platform designed to help people discover, compare and contact local businesses, professionals and service providers across Guanacaste.",

    legalIntro:
      "By using ORBIT, you agree to these Terms to the extent permitted by applicable law. Nothing in these Terms is intended to restrict rights that cannot legally be waived under Costa Rican law.",

    sections: [
      {
        id: "operator",
        title: "1. ORBIT operator",
        paragraphs: [
          `ORBIT is operated by ${LEGAL_OPERATOR_NAME}.`,
          `For questions regarding these Terms, contact ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },

      {
        id: "service",
        title: "2. What ORBIT is",
        paragraphs: [
          "ORBIT is a local-service discovery platform.",
          "Its primary purpose is to allow users to find information about businesses and providers, compare available options and, where available, contact providers directly through WhatsApp or other external communication methods.",
          "Unless ORBIT expressly states otherwise for a future feature, ORBIT is not a party to the final agreement between a user and a provider.",
        ],
      },

      {
        id: "marketplace",
        title: "3. ORBIT does not provide listed services",
        paragraphs: [
          "Businesses and professionals listed on ORBIT are responsible for the products and services they offer.",
          "ORBIT does not itself provide mechanics, restaurant, tour, delivery, pharmacy, air-conditioning, pool, handyman, barbershop, pet-care or other services offered by listed providers.",
          "Contracting, final pricing, availability, performance, warranties and other conditions relating to services supplied by a provider remain the responsibility of that provider unless ORBIT expressly states otherwise.",
        ],
      },

      {
        id: "provider-information",
        title: "4. Provider information",
        paragraphs: [
          "ORBIT aims to present useful and trustworthy information about listed providers.",
          "However, business hours, pricing, availability, services, coverage areas, reviews, photos and other information may change.",
          "Providers are responsible for supplying truthful, current and sufficient information about their businesses and services.",
          "ORBIT may verify, request corrections, reject or remove information where there are reasonable grounds to believe it is inaccurate, misleading, incomplete or inconsistent with these Terms.",
        ],
      },

      {
        id: "reviews",
        title: "5. Ratings and reviews",
        paragraphs: [
          "ORBIT may display ratings, review counts or other publicly available information from external sources where applicable.",
          "A rating or review displayed on ORBIT does not constitute a guarantee, personal endorsement or certification by ORBIT of future service quality.",
          "Where an external source is identified, that information may also be subject to the source's own terms and policies.",
        ],
      },

      {
        id: "contact",
        title: "6. WhatsApp and external services",
        paragraphs: [
          "ORBIT may provide links allowing users to contact providers directly through WhatsApp, telephone calls or other external services.",
          "Selecting these links may take you outside the ORBIT environment.",
          "Subsequent communications between users and providers take place directly between those parties and may also be governed by the policies of the external service used.",
        ],
      },

      {
        id: "users",
        title: "7. Permitted use",
        paragraphs: [
          "You must use ORBIT lawfully, responsibly and consistently with the purpose of the platform.",
        ],
        bullets: [
          "Do not use ORBIT for fraud, deception, impersonation or unlawful activity.",
          "Do not interfere with the security or operation of the platform.",
          "Do not attempt to access accounts, systems, data or infrastructure without authorization.",
          "Do not use automated systems in a way that degrades, overloads or interferes with ORBIT.",
          "Do not harvest personal or commercial information from other users without authorization.",
          "Do not submit false, misleading, abusive, unlawful or rights-infringing content.",
        ],
      },

      {
        id: "providers",
        title: "8. Provider responsibilities",
        paragraphs: [
          "Providers applying to appear on ORBIT must provide authentic information and keep relevant business information reasonably current.",
        ],
        bullets: [
          "Be authorized to represent the listed business.",
          "Provide truthful business information.",
          "Use photos and content they have the right to publish.",
          "Keep relevant business details current.",
          "Comply with laws and permits applicable to their activity.",
          "Do not use ORBIT to promote prohibited or unlawful products or services.",
          "Treat users responsibly and in accordance with applicable law.",
        ],
      },

      {
        id: "approval",
        title: "9. Provider approval and moderation",
        paragraphs: [
          "Submitting a provider application does not guarantee publication.",
          "ORBIT may review applications before approval and may request additional information where necessary.",
          "ORBIT may reject, suspend or hide profiles where there is misleading information, violation of these Terms, risk to users, unlawful conduct, fraud, abuse or another legitimate reason related to platform safety or integrity.",
        ],
      },

      {
        id: "plans",
        title: "10. Free, Pro and Premium plans",
        paragraphs: [
          "ORBIT may offer different levels of business presence, including Free, Pro and Premium plans.",
          "The features, prices and availability applicable to each plan will be those displayed by ORBIT at the relevant time.",
          "ORBIT may change features or prices for future subscriptions while clearly communicating the applicable terms.",
        ],
      },

      {
        id: "founding",
        title: "11. Offers and promotions",
        paragraphs: [
          "ORBIT may offer temporary promotions, including benefits for founding providers.",
          "Promotions may be subject to eligibility requirements, availability, categories, locations, dates or capacity limits.",
          "Where an offer provides a free period, ORBIT will clearly explain the applicable terms before any later charge is activated.",
        ],
      },

      {
        id: "payments",
        title: "12. Future subscriptions and payments",
        paragraphs: [
          "ORBIT's current MVP does not process payments between consumers and providers for services discovered through the platform.",
          "If ORBIT enables payment for business plans, subscriptions or its own products, the applicable price, taxes where relevant, duration, payment method, renewal, cancellation and other material conditions will be presented before the transaction is completed.",
          "ORBIT will not apply automatic renewals or recurring charges unless the person has first received clear information and provided the authorization required.",
        ],
      },

      {
        id: "growth",
        title: "13. ORBIT Growth and marketing services",
        paragraphs: [
          "ORBIT may offer additional marketing and advertising services under ORBIT Growth.",
          "These services are not automatically included in Free, Pro or Premium unless expressly stated.",
          "Custom advertising, media buying, creative production, consulting or other additional work may require a separate commercial agreement specifying scope, pricing, advertising budget, deliverables and responsibilities.",
        ],
      },

      {
        id: "intellectual-property",
        title: "14. Intellectual property",
        paragraphs: [
          "The ORBIT brand, visual design, software, platform structure, original copy, interfaces and other proprietary materials are protected by applicable rights.",
          "These elements may not be copied, reproduced, distributed or commercially exploited except where permitted by law or expressly authorized.",
          "Providers retain the rights they hold over photos, trademarks and other content they submit and grant ORBIT the authorization necessary to display and use that content within the platform and for expressly authorized promotional activities.",
        ],
      },

      {
        id: "availability",
        title: "15. Platform availability",
        paragraphs: [
          "ORBIT aims to keep the platform available and operating correctly.",
          "Interruptions may nevertheless occur due to maintenance, updates, technical failures, external providers, security incidents or other circumstances.",
          "ORBIT may modify, suspend or update functionality where reasonably necessary to improve, protect or maintain the platform.",
        ],
      },

      {
        id: "liability",
        title: "16. Liability",
        paragraphs: [
          "Nothing in these Terms excludes or limits liability that cannot legally be excluded.",
          "To the extent permitted by law, ORBIT is not responsible for acts, omissions, service quality, contractual breaches or conduct of independent providers where ORBIT is not a party to the relationship between the provider and the user.",
          "Users should exercise reasonable judgment before hiring services and confirm directly with the provider any conditions relevant to their decision.",
        ],
      },

      {
        id: "privacy",
        title: "17. Privacy and personal information",
        paragraphs: [
          "Personal-data processing associated with ORBIT is described in greater detail in our Privacy Policy.",
          "These Terms should be read together with that Policy.",
        ],
      },

      {
        id: "changes",
        title: "18. Changes to these Terms",
        paragraphs: [
          "ORBIT may update these Terms to reflect changes to the product, business model, legal requirements or platform operation.",
          "The current version will be available on this page together with its latest update date.",
          "Where a change requires additional notice or consent under applicable law, ORBIT will implement the appropriate mechanism.",
        ],
      },

      {
        id: "law",
        title: "19. Governing law",
        paragraphs: [
          "These Terms are governed by the laws of the Republic of Costa Rica.",
          "Nothing in this section restricts consumer-protection or personal-data rights available under mandatory applicable law.",
        ],
      },

      {
        id: "contact-terms",
        title: "20. Contact",
        paragraphs: [
          `For questions regarding these Terms, contact ORBIT at ${LEGAL_CONTACT_EMAIL}.`,
        ],
      },
    ],

    privacyNote:
      "Personal-data processing on ORBIT is also governed by our Privacy Policy.",

    privacyLink: "View Privacy Policy",
  },
} as const;

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale } = await params;
  const copy = locale === "es" ? content.es : content.en;

  return (
    <main className="bg-[#f7f4ef] text-[#111111]">
      {/* HEADER */}
      <section className="border-b border-black/[0.06] px-6 py-14 lg:px-[60px] lg:py-18">
        <div className="mx-auto max-w-[980px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-black/55">
            {copy.eyebrow}
          </p>

          <div className="mt-3 h-[2px] w-10 bg-orbit-orange" />

          <h1 className="mt-5 font-editorial text-[clamp(2.8rem,5vw,5rem)] leading-[0.98] tracking-[-0.03em]">
            {copy.title}
          </h1>

          <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.12em] text-black/40">
            {copy.updated}
          </p>

          <p className="mt-8 max-w-[780px] text-[18px] leading-8 text-black/70">
            {copy.intro}
          </p>

          <p className="mt-4 max-w-[780px] text-[15px] leading-7 text-black/55">
            {copy.legalIntro}
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section className="px-6 py-14 lg:px-[60px] lg:py-18">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* CONTENT INDEX */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
                  {locale === "es" ? "CONTENIDO" : "CONTENTS"}
                </p>

                <nav className="space-y-3">
                  {copy.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-[13px] leading-5 text-black/45 transition-colors hover:text-orbit-orange"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="min-w-0">
              {copy.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={[
                    "scroll-mt-28",
                    index === 0
                      ? ""
                      : "mt-11 border-t border-black/[0.07] pt-11",
                  ].join(" ")}
                >
                  <h2 className="font-editorial text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.02em]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] leading-7 text-black/65"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {"bullets" in section && section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[15px] leading-7 text-black/65"
                        >
                          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-orbit-orange" />

                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* PRIVACY */}
              <div className="mt-14 rounded-[24px] border border-black/[0.06] bg-white/55 p-6 sm:p-8">
                <p className="text-[15px] leading-7 text-black/60">
                  {copy.privacyNote}
                </p>

                <Link
                  href="/privacy"
                  className="mt-5 inline-flex font-semibold text-orbit-orange transition-opacity hover:opacity-70"
                >
                  {copy.privacyLink} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}