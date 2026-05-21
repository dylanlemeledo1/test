import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/sections/AuthLayout";
import { AuthForm } from "@/components/sections/AuthForm";

export const metadata: Metadata = {
  title: "Get started",
  description: "Create your free Nebula workspace. No credit card required.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Start free in 30 seconds."
      subtitle="No credit card. 5 seats free forever."
      panelEyebrow="What you get on day one"
      panelTitle="A working workspace, pre-wired to your stack."
      panelQuote="Onboarding took an hour. By Friday, our PMs were writing their own workflows. The ROI conversation was over in week one."
      panelAuthor="Theo Lindqvist"
      panelRole="Director of Product · Orbital"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-zinc-200 underline-offset-2 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
