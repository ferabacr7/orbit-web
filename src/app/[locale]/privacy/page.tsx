import { Link } from "@/i18n/navigation";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

/*
 * IMPORTANT — COMPLETE BEFORE PRODUCTION
 *
 * Costa Rican data-protection notices should clearly identify
 * the responsible party and provide a way for data subjects
 * to exercise their rights.
 */
const PRIVACY_CONTACT = "REPLACE_WITH_PRIVACY_EMAIL";
const LEGAL_CONTROLLER_NAME = "REPLACE_WITH_LEGAL_NAME";

const content = {
  es: {
    eyebrow: "LEGAL",
    title: "Política de Privacidad",
    updated: "Última actualización: 4 de octubre de 2026",

    intro:
      "En ORBIT respetamos tu privacidad y tratamos los datos personales de forma responsable, transparente y limitada a finalidades legítimas relacionadas con el funcionamiento de la plataforma.",

    legalIntro:
      "Esta Política describe cómo ORBIT recopila, utiliza, almacena y protege información personal de conformidad con la Ley N.º 8968, Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales, y su normativa aplicable en Costa Rica.",

    sections: [
      {
        id: "responsible",
        title: "1. Responsable del tratamiento",
        paragraphs: [
          `El responsable del tratamiento de los datos personales recopilados a través de ORBIT es ${LEGAL_CONTROLLER_NAME}.`,
          `Para consultas relacionadas con privacidad o para ejercer derechos sobre tus datos, podés comunicarte a: ${PRIVACY_CONTACT}.`,
        ],
      },

      {
        id: "information",
        title: "2. Información que podemos recopilar",
        paragraphs: [
          "La información recopilada dependerá de la forma en que utilicés ORBIT.",
        ],
        bullets: [
          "Nombre y datos de contacto que proporcionés voluntariamente.",
          "Correo electrónico.",
          "Número de teléfono o WhatsApp.",
          "Nombre e información comercial de un negocio o proveedor.",
          "Categoría, descripción, horarios y áreas de servicio.",
          "Fotografías y otros contenidos enviados para un perfil comercial.",
          "Ubicación general o zona de operación del negocio.",
          "Información relacionada con reseñas o presencia pública del negocio.",
          "Información técnica básica necesaria para operar, proteger y diagnosticar la plataforma, como registros de seguridad y funcionamiento.",
          "Información enviada voluntariamente mediante formularios o comunicaciones con ORBIT.",
        ],
      },

      {
        id: "provider-data",
        title: "3. Información de proveedores y perfiles públicos",
        paragraphs: [
          "Cuando una persona solicita publicar un negocio en ORBIT, cierta información está destinada expresamente a formar parte de un perfil público.",
          "Esto puede incluir el nombre del negocio, fotografías, categoría, descripción, horarios, zonas de servicio, ubicación general, servicios ofrecidos, calificaciones públicas y datos de contacto comercial.",
          "Los datos personales o de contacto que se vayan a publicar públicamente solamente deberán utilizarse y publicarse conforme al consentimiento otorgado por la persona titular o por quien esté debidamente autorizado para representar al negocio.",
        ],
      },

      {
        id: "purposes",
        title: "4. Para qué utilizamos la información",
        paragraphs: [
          "ORBIT limita el tratamiento de los datos a finalidades relacionadas con el funcionamiento y mejora de la plataforma.",
        ],
        bullets: [
          "Procesar solicitudes de proveedores.",
          "Verificar información necesaria para evaluar y publicar negocios.",
          "Crear y mantener perfiles de proveedores.",
          "Facilitar el descubrimiento y contacto entre usuarios y negocios locales.",
          "Responder consultas y solicitudes de soporte.",
          "Mantener la seguridad e integridad de ORBIT.",
          "Detectar errores, fraude, abuso o uso indebido.",
          "Medir de manera agregada el funcionamiento de la plataforma cuando corresponda.",
          "Cumplir obligaciones legales aplicables.",
        ],
      },

      {
        id: "consent",
        title: "5. Consentimiento",
        paragraphs: [
          "Cuando la legislación requiera consentimiento, ORBIT procurará obtener una manifestación expresa, libre, específica, informada e inequívoca antes de realizar el tratamiento correspondiente.",
          "El envío de información mediante un formulario no autoriza automáticamente a ORBIT a utilizarla para finalidades distintas de las informadas al momento de la recolección.",
          "Cuando se requiera consentimiento adicional para una finalidad diferente, este deberá solicitarse de forma separada.",
        ],
      },

      {
        id: "whatsapp",
        title: "6. WhatsApp y enlaces externos",
        paragraphs: [
          "ORBIT facilita enlaces que pueden permitir contactar directamente a proveedores mediante WhatsApp u otros servicios externos.",
          "Cuando seleccionás uno de estos enlaces, abandonás el entorno de ORBIT y el tratamiento posterior de información queda sujeto también a los términos y políticas del servicio externo correspondiente.",
          "ORBIT no recibe automáticamente el contenido de las conversaciones privadas realizadas dentro de WhatsApp.",
        ],
      },

      {
        id: "providers",
        title: "7. Proveedores tecnológicos",
        paragraphs: [
          "ORBIT puede utilizar proveedores tecnológicos para alojamiento, infraestructura, base de datos, almacenamiento, seguridad, correo u otras funciones necesarias para operar la plataforma.",
          "Cuando un proveedor procese datos por cuenta de ORBIT, procuraremos limitar su acceso a lo necesario para prestar el servicio y aplicar medidas contractuales y de seguridad razonables.",
          "Si una operación constituye legalmente una transferencia de datos que requiera consentimiento, ORBIT deberá obtenerlo antes de realizarla, salvo que exista una excepción legal aplicable.",
        ],
      },

      {
        id: "analytics",
        title: "8. Cookies, registros técnicos y analítica",
        paragraphs: [
          "ORBIT puede utilizar registros técnicos estrictamente necesarios para seguridad, funcionamiento y diagnóstico de la plataforma.",
          "Si en el futuro se incorporan herramientas de analítica, publicidad o tecnologías de seguimiento no esenciales que impliquen tratamiento adicional de datos personales, ORBIT actualizará esta Política y aplicará los mecanismos de información o consentimiento que correspondan.",
        ],
      },

      {
        id: "security",
        title: "9. Seguridad y confidencialidad",
        paragraphs: [
          "ORBIT aplicará medidas técnicas y organizativas razonables dirigidas a proteger los datos contra acceso no autorizado, pérdida, alteración, divulgación o tratamiento indebido.",
          "El acceso a información personal deberá limitarse a las personas y proveedores que razonablemente lo necesiten para cumplir una función autorizada.",
          "Las personas que intervengan en el tratamiento deberán respetar las obligaciones de confidencialidad aplicables.",
        ],
      },

      {
        id: "retention",
        title: "10. Conservación de los datos",
        paragraphs: [
          "Conservaremos los datos únicamente durante el tiempo necesario para cumplir la finalidad para la cual fueron recopilados, mantener la relación correspondiente, resolver solicitudes o cumplir obligaciones legales.",
          "Cuando los datos dejen de ser necesarios y no exista una razón legítima o legal para conservarlos, deberán eliminarse, anonimizarse o bloquearse según corresponda.",
        ],
      },

      {
        id: "rights",
        title: "11. Tus derechos",
        paragraphs: [
          "De conformidad con la legislación costarricense aplicable, la persona titular puede solicitar información sobre sus datos personales y ejercer los derechos que correspondan sobre ellos.",
        ],
        bullets: [
          "Solicitar acceso a los datos personales que ORBIT mantiene sobre vos.",
          "Solicitar la rectificación o actualización de información incorrecta o incompleta.",
          "Solicitar la supresión de datos cuando legalmente corresponda.",
          "Revocar el consentimiento cuando el tratamiento dependa de este, sin afectar el tratamiento realizado válidamente con anterioridad.",
          "Consultar las finalidades para las cuales se están utilizando los datos.",
          "Solicitar información sobre transferencias o destinatarios cuando corresponda.",
        ],
        after:
          "Las solicitudes serán atendidas gratuitamente y dentro de los plazos establecidos por la legislación aplicable.",
      },

      {
        id: "children",
        title: "12. Datos de personas menores de edad",
        paragraphs: [
          "ORBIT no está diseñado para solicitar deliberadamente datos personales de personas menores de edad para el registro de proveedores.",
          "Si ORBIT llegara a identificar que se recopilaron datos de una persona menor de edad sin la autorización o fundamento legal requerido, se tomarán medidas razonables para revisar y, cuando corresponda, eliminar dicha información.",
        ],
      },

      {
        id: "changes",
        title: "13. Cambios a esta Política",
        paragraphs: [
          "Podemos actualizar esta Política cuando cambien las funcionalidades de ORBIT, nuestras prácticas de tratamiento o la normativa aplicable.",
          "La versión vigente se publicará en esta página e indicará la fecha de su última actualización.",
        ],
      },

      {
        id: "contact",
        title: "14. Contacto y ejercicio de derechos",
        paragraphs: [
          `Para consultas de privacidad, solicitudes de acceso, rectificación, actualización, supresión o revocación del consentimiento, podés contactar a ORBIT en ${PRIVACY_CONTACT}.`,
          "También podés acudir a la Agencia de Protección de Datos de los Habitantes (PRODHAB) cuando corresponda conforme a la legislación costarricense.",
        ],
      },
    ],

    footerNote:
      "Esta Política debe leerse junto con los Términos de Uso de ORBIT.",

    terms: "Ver Términos de Uso",
  },

  en: {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    updated: "Last updated: October 4, 2026",

    intro:
      "At ORBIT, we respect your privacy and process personal data responsibly, transparently and only for legitimate purposes related to operating the platform.",

    legalIntro:
      "This Policy describes how ORBIT collects, uses, stores and protects personal information in accordance with Costa Rica's Law No. 8968 on the Protection of Individuals with regard to the Processing of Personal Data and other applicable regulations.",

    sections: [
      {
        id: "responsible",
        title: "1. Data controller",
        paragraphs: [
          `The party responsible for personal data processed through ORBIT is ${LEGAL_CONTROLLER_NAME}.`,
          `For privacy questions or to exercise your rights, contact: ${PRIVACY_CONTACT}.`,
        ],
      },

      {
        id: "information",
        title: "2. Information we may collect",
        paragraphs: [
          "The information collected depends on how you use ORBIT.",
        ],
        bullets: [
          "Your name and contact information when voluntarily provided.",
          "Email address.",
          "Phone or WhatsApp number.",
          "Business or provider information.",
          "Category, description, hours and service areas.",
          "Photos and other content submitted for a business profile.",
          "General business location or operating area.",
          "Information concerning public reviews or a business's public presence.",
          "Basic technical information required to operate, secure and diagnose the platform, including security and operational logs.",
          "Information voluntarily submitted through forms or communications with ORBIT.",
        ],
      },

      {
        id: "provider-data",
        title: "3. Provider information and public profiles",
        paragraphs: [
          "When someone applies to publish a business on ORBIT, certain information is specifically intended to form part of a public profile.",
          "This may include the business name, photos, category, description, business hours, service areas, general location, services, public ratings and commercial contact information.",
          "Personal or contact information intended for public display should only be processed and published in accordance with consent provided by the data subject or an individual authorized to represent the business.",
        ],
      },

      {
        id: "purposes",
        title: "4. How we use information",
        paragraphs: [
          "ORBIT limits personal-data processing to purposes related to operating and improving the platform.",
        ],
        bullets: [
          "Processing provider applications.",
          "Verifying information necessary to evaluate and publish businesses.",
          "Creating and maintaining provider profiles.",
          "Helping users discover and contact local businesses.",
          "Responding to questions and support requests.",
          "Protecting the security and integrity of ORBIT.",
          "Detecting errors, fraud, abuse or misuse.",
          "Measuring aggregate platform performance when applicable.",
          "Complying with applicable legal obligations.",
        ],
      },

      {
        id: "consent",
        title: "5. Consent",
        paragraphs: [
          "Where consent is legally required, ORBIT will seek an express, freely given, specific, informed and unambiguous indication before carrying out the corresponding processing.",
          "Submitting information through a form does not automatically authorize ORBIT to use that information for purposes other than those disclosed when the information was collected.",
          "Where separate consent is required for an additional purpose, it should be requested separately.",
        ],
      },

      {
        id: "whatsapp",
        title: "6. WhatsApp and external links",
        paragraphs: [
          "ORBIT may provide links that allow users to contact providers directly through WhatsApp or other external services.",
          "When you select one of these links, you leave the ORBIT environment and subsequent processing may also be subject to the terms and privacy policies of the relevant third-party service.",
          "ORBIT does not automatically receive the contents of private conversations taking place within WhatsApp.",
        ],
      },

      {
        id: "providers",
        title: "7. Technology providers",
        paragraphs: [
          "ORBIT may use technology providers for hosting, infrastructure, databases, storage, security, email or other functions required to operate the platform.",
          "Where a provider processes personal data on ORBIT's behalf, we seek to limit access to what is reasonably necessary to provide the relevant service and to apply appropriate contractual and security safeguards.",
          "If an operation legally constitutes a data transfer requiring consent, ORBIT must obtain that consent before performing the transfer unless an applicable legal exception exists.",
        ],
      },

      {
        id: "analytics",
        title: "8. Cookies, technical logs and analytics",
        paragraphs: [
          "ORBIT may use technical logs that are strictly necessary for security, operation and diagnosis of the platform.",
          "If non-essential analytics, advertising or tracking technologies involving additional processing of personal information are introduced in the future, ORBIT will update this Policy and implement the appropriate notice or consent mechanisms.",
        ],
      },

      {
        id: "security",
        title: "9. Security and confidentiality",
        paragraphs: [
          "ORBIT will use reasonable technical and organizational measures intended to protect personal data against unauthorized access, loss, alteration, disclosure or improper processing.",
          "Access to personal information should be limited to people and service providers who reasonably need it to perform an authorized function.",
          "Anyone involved in processing personal information must comply with applicable confidentiality obligations.",
        ],
      },

      {
        id: "retention",
        title: "10. Data retention",
        paragraphs: [
          "We retain personal information only for as long as necessary to fulfill the purpose for which it was collected, maintain the relevant relationship, resolve requests or comply with legal obligations.",
          "When information is no longer necessary and there is no legitimate or legal reason to retain it, it should be deleted, anonymized or blocked as appropriate.",
        ],
      },

      {
        id: "rights",
        title: "11. Your rights",
        paragraphs: [
          "Under applicable Costa Rican law, data subjects may request information about their personal information and exercise the rights applicable to that information.",
        ],
        bullets: [
          "Request access to personal information held by ORBIT.",
          "Request correction or updating of inaccurate or incomplete information.",
          "Request deletion where legally applicable.",
          "Withdraw consent where processing relies on consent, without affecting valid processing carried out previously.",
          "Ask about the purposes for which personal information is being used.",
          "Request information regarding recipients or transfers where applicable.",
        ],
        after:
          "Requests will be handled free of charge and within the time periods established by applicable law.",
      },

      {
        id: "children",
        title: "12. Children's data",
        paragraphs: [
          "ORBIT is not designed to intentionally request personal information from minors for provider registration.",
          "If ORBIT becomes aware that information concerning a minor was collected without the authorization or legal basis required, reasonable measures will be taken to review and, where appropriate, delete that information.",
        ],
      },

      {
        id: "changes",
        title: "13. Changes to this Policy",
        paragraphs: [
          "We may update this Policy when ORBIT's functionality, our processing practices or applicable law changes.",
          "The current version will be published on this page together with its most recent update date.",
        ],
      },

      {
        id: "contact",
        title: "14. Contact and exercising your rights",
        paragraphs: [
          `For privacy questions or requests concerning access, correction, updating, deletion or withdrawal of consent, contact ORBIT at ${PRIVACY_CONTACT}.`,
          "You may also contact Costa Rica's Data Protection Agency, the Agencia de Protección de Datos de los Habitantes (PRODHAB), when applicable under Costa Rican law.",
        ],
      },
    ],

    footerNote:
      "This Policy should be read together with ORBIT's Terms of Use.",

    terms: "View Terms of Use",
  },
} as const;

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
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

      {/* POLICY */}
      <section className="px-6 py-14 lg:px-[60px] lg:py-18">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* DESKTOP INDEX */}
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

                  {"after" in section && section.after && (
                    <p className="mt-5 text-[15px] leading-7 text-black/65">
                      {section.after}
                    </p>
                  )}
                </section>
              ))}

              {/* TERMS */}
              <div className="mt-14 rounded-[24px] border border-black/[0.06] bg-white/55 p-6 sm:p-8">
                <p className="text-[15px] leading-7 text-black/60">
                  {copy.footerNote}
                </p>

                <Link
                  href="/terms"
                  className="mt-5 inline-flex font-semibold text-orbit-orange transition-opacity hover:opacity-70"
                >
                  {copy.terms} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}