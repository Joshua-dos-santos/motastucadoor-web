import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../common/Button";
import Card from "../common/Card";

const serviceOptions = [
  "Buitengevel",
  "Sierpleister",
  "Pleisterwerk",
  "Wanden",
  "Plafonds",
  "Lijsten & ornamenten",
  "Ander stucwerk",
  "Ik weet het nog niet",
];

const fieldClasses =
  "mt-2 w-full rounded-md border border-[var(--color-border)] bg-white px-4 py-3 text-base text-[var(--color-mota-dark)] outline-none transition-colors focus:border-[var(--color-mota-orange)] focus:ring-2 focus:ring-[rgba(240,69,29,0.18)]";

const errorClasses = "mt-2 text-sm font-semibold text-[var(--color-mota-orange)]";

const quoteFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string().min(1, "Vul je achternaam in."),
  email: z.string().min(1, "Vul je e-mailadres in.").email("Vul een geldig e-mailadres in."),
  phone: z.string().min(1, "Vul je telefoonnummer in."),
  city: z.string(),
  service: z.string().min(1, "Kies een dienst of werkzaamheid."),
  message: z.string().min(1, "Vul je bericht in."),
  privacy: z
    .boolean()
    .refine((value) => value, "Je moet akkoord gaan voordat je de aanvraag kunt versturen."),
  website: z.string(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

function QuoteForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;
  const isFormspreeConfigured = Boolean(formspreeFormId);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<QuoteFormValues>({
    defaultValues: {
      city: "",
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
      privacy: false,
      service: "",
      website: "",
    },
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setSubmitStatus("idle");
    setSubmitMessage("");

    if (values.website) {
      reset();
      return;
    }

    if (!formspreeFormId) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Formspree is nog niet geconfigureerd. Voeg VITE_FORMSPREE_FORM_ID toe aan je .env bestand.",
      );
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        body: JSON.stringify({
          _subject: "Nieuwe offerteaanvraag via Mota Stucadoor",
          Bericht: values.message,
          "Dienst / werkzaamheden": values.service,
          "E-mailadres": values.email,
          Achternaam: values.lastName,
          Telefoonnummer: values.phone,
          Voornaam: values.firstName,
          Woonplaats: values.city,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        setSubmitStatus("error");
        setSubmitMessage(
          "Het versturen is niet gelukt. Probeer het later opnieuw of neem rechtstreeks contact op.",
        );
        return;
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage(
        "Het versturen is niet gelukt. Probeer het later opnieuw of neem rechtstreeks contact op.",
      );
      return;
    }

    reset();
    setSubmitStatus("success");
    setSubmitMessage("Bedankt, je offerteaanvraag is verzonden.");
  };

  return (
    <Card className="p-6 md:p-8">
      {!isFormspreeConfigured ? (
        <div className="mb-5 rounded-md border border-[var(--color-mota-orange)] bg-[#fff3ef] px-4 py-3 text-sm font-semibold text-[var(--color-mota-dark)]">
          Development error: stel `VITE_FORMSPREE_FORM_ID` in om het formulier
          te kunnen versturen.
        </div>
      ) : null}

      {submitMessage ? (
        <div
          className={`mb-5 rounded-md border px-4 py-3 text-sm font-semibold ${
            submitStatus === "success"
              ? "border-green-700 bg-green-50 text-green-800"
              : "border-[var(--color-mota-orange)] bg-[#fff3ef] text-[var(--color-mota-dark)]"
          }`}
          role="status"
        >
          {submitMessage}
        </div>
      ) : null}

      <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="sr-only" htmlFor="website">
          Laat dit veld leeg
        </label>
        <input
          id="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="text-sm font-bold text-[var(--color-mota-dark)]"
              htmlFor="firstName"
            >
              Voornaam
            </label>
            <input
              id="firstName"
              className={fieldClasses}
              type="text"
              {...register("firstName")}
            />
          </div>

          <div>
            <label
              className="text-sm font-bold text-[var(--color-mota-dark)]"
              htmlFor="lastName"
            >
              Achternaam *
            </label>
            <input
              id="lastName"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className={fieldClasses}
              type="text"
              {...register("lastName")}
            />
            {errors.lastName ? (
              <p id="lastName-error" className={errorClasses}>
                {errors.lastName.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              className="text-sm font-bold text-[var(--color-mota-dark)]"
              htmlFor="email"
            >
              E-mailadres *
            </label>
            <input
              id="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClasses}
              type="email"
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className={errorClasses}>
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              className="text-sm font-bold text-[var(--color-mota-dark)]"
              htmlFor="phone"
            >
              Telefoonnummer *
            </label>
            <input
              id="phone"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClasses}
              type="tel"
              {...register("phone")}
            />
            {errors.phone ? (
              <p id="phone-error" className={errorClasses}>
                {errors.phone.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            className="text-sm font-bold text-[var(--color-mota-dark)]"
            htmlFor="city"
          >
            Woonplaats
          </label>
          <input id="city" className={fieldClasses} type="text" {...register("city")} />
        </div>

        <div>
          <label
            className="text-sm font-bold text-[var(--color-mota-dark)]"
            htmlFor="service"
          >
            Dienst / werkzaamheden *
          </label>
          <select
            id="service"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={fieldClasses}
            {...register("service")}
          >
            <option disabled value="">
              Kies een dienst
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className={errorClasses}>
              {errors.service.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            className="text-sm font-bold text-[var(--color-mota-dark)]"
            htmlFor="message"
          >
            Bericht *
          </label>
          <textarea
            id="message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClasses} min-h-36 resize-y`}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className={errorClasses}>
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <label
          className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-muted)]"
          htmlFor="privacy"
        >
          <input
            id="privacy"
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-5 w-5 rounded border-[var(--color-border)] accent-[var(--color-mota-orange)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mota-orange)]"
            type="checkbox"
            {...register("privacy")}
          />
          <span>
            Ik ga akkoord dat mijn gegevens worden gebruikt om contact met mij
            op te nemen over mijn offerteaanvraag. *
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-error" className={errorClasses}>
            {errors.privacy.message}
          </p>
        ) : null}

        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Versturen..." : "Offerte aanvragen"}
        </Button>
      </form>
    </Card>
  );
}

export default QuoteForm;
