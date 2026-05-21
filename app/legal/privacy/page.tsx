import type { Metadata } from "next";
import { Prose } from "@/components/primitives/Prose";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Nebula collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <article>
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
          Last updated · May 14, 2026
        </p>
        <h1 className="mt-4 text-display-md font-semibold tracking-tight text-gradient">
          Privacy policy
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-zinc-400">
          We take privacy seriously. This page explains in plain English what we
          collect, why we collect it, and how we protect it.
        </p>
      </header>

      <Prose className="mt-12">
        <h2>What we collect</h2>
        <p>
          We collect only what we need to run Nebula. This includes account
          information (name, email, organization), usage data (what features you
          use and how often), and the workflow data you choose to connect.
        </p>
        <ul>
          <li>Account: name, email, profile picture</li>
          <li>Telemetry: anonymized usage events</li>
          <li>Workflow data: only what your integrations push to Nebula</li>
          <li>Payment: handled by Stripe — we never see your card details</li>
        </ul>

        <h2>How we use it</h2>
        <p>
          We use your data to operate, secure, and improve Nebula. We never sell
          it. We never train shared AI models on it. Your workspace data is used
          only to power features for your workspace.
        </p>

        <h2 id="security">Security</h2>
        <p>
          Data is encrypted in transit with TLS 1.3 and at rest with AES-256.
          We're SOC 2 Type II and ISO 27001 certified, audited annually by an
          independent firm. Pen tests every six months.
        </p>
        <p>
          For Enterprise customers we offer dedicated environments, EU/US data
          residency, and the option to run Nebula inside your own VPC.
        </p>

        <h2>Your rights</h2>
        <p>
          You can export, modify, or delete your data at any time. If you're in
          the EU, UK, or California you have additional rights under GDPR and
          CCPA — write to{" "}
          <a href="mailto:privacy@nebula.app">privacy@nebula.app</a> and we'll
          respond within 30 days.
        </p>

        <h2>Cookies</h2>
        <p>
          We use a minimum of cookies — one for your session, one for
          remembering your preferences. We do not use third-party advertising
          cookies. Analytics is first-party and aggregated.
        </p>

        <h2>Sub-processors</h2>
        <p>
          A current list of our sub-processors is available at{" "}
          <a href="#">nebula.app/legal/subprocessors</a>. We notify customers at
          least 30 days before adding a new one.
        </p>

        <h2>Changes</h2>
        <p>
          When we change this policy materially, we'll notify you by email and
          give at least 30 days' notice before the change takes effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Write to <a href="mailto:privacy@nebula.app">privacy@nebula.app</a>.
          For the data protection officer specifically:{" "}
          <a href="mailto:dpo@nebula.app">dpo@nebula.app</a>.
        </p>
      </Prose>
    </article>
  );
}
