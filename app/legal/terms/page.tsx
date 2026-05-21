import type { Metadata } from "next";
import { Prose } from "@/components/primitives/Prose";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that govern your use of Nebula.",
};

export default function TermsPage() {
  return (
    <article>
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
          Last updated · May 14, 2026
        </p>
        <h1 className="mt-4 text-display-md font-semibold tracking-tight text-gradient">
          Terms of service
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-zinc-400">
          These terms govern your use of Nebula. We've kept them short and clear.
        </p>
      </header>

      <Prose className="mt-12">
        <h2>The deal</h2>
        <p>
          By signing up, you agree to these terms and to our{" "}
          <a href="/legal/privacy">privacy policy</a>. We agree to provide the
          service described on our site, with the uptime and support level
          appropriate to your plan.
        </p>

        <h2>Your account</h2>
        <p>
          You're responsible for keeping your credentials safe and for the
          activity in your workspace. If you suspect unauthorized access, write
          to <a href="mailto:security@nebula.app">security@nebula.app</a> right
          away.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Don't use Nebula to do harm. Concretely, you may not:
        </p>
        <ul>
          <li>Process data you don't have rights to</li>
          <li>Reverse engineer the service to build a competitor</li>
          <li>Interfere with security controls or other customers</li>
          <li>Use it for any illegal purpose under applicable law</li>
        </ul>

        <h2>Payment</h2>
        <p>
          Paid plans are billed monthly or annually in advance. You can cancel
          at any time — your plan remains active until the end of the paid
          period. Refunds are pro-rata for annual plans cancelled in the first
          30 days.
        </p>

        <h2 id="dpa">Data processing</h2>
        <p>
          For customers in the EU, UK, and other regulated jurisdictions, we
          offer a standard Data Processing Agreement (DPA) that incorporates
          the EU Standard Contractual Clauses. Email{" "}
          <a href="mailto:legal@nebula.app">legal@nebula.app</a> to receive a
          countersigned copy.
        </p>

        <h2>Service availability</h2>
        <p>
          Team plans target 99.9% monthly uptime. Enterprise plans target
          99.99%. SLA credits, if applicable, are described in your order form.
        </p>

        <h2>Termination</h2>
        <p>
          You can cancel at any time from your workspace settings. We can
          terminate accounts that violate these terms, with notice and a
          reasonable cure period for most violations.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, our total liability under
          these terms is capped at the fees you paid in the twelve months
          preceding the claim. We're not liable for indirect or consequential
          damages.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Delaware, USA, without regard
          to conflict-of-law principles. Any dispute will be resolved in the
          courts of Wilmington, Delaware.
        </p>

        <h2>Changes</h2>
        <p>
          We'll notify you of material changes by email at least 30 days before
          they take effect. Continued use after that constitutes acceptance.
        </p>
      </Prose>
    </article>
  );
}
