import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/sections/AuthLayout";
import { AuthForm } from "@/components/sections/AuthForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Nebula workspace.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back."
      subtitle="Sign in to your Nebula workspace."
      panelEyebrow="Why teams love it"
      panelTitle="The operating layer the best teams already swear by."
      panelQuote="It's the closest thing to having a principal engineer on every team — except it never gets tired and remembers everything."
      panelAuthor="Maya Hollis"
      panelRole="CTO · Slate Robotics"
      footer={
        <>
          Don't have an account?{" "}
          <Link href="/signup" className="text-zinc-200 underline-offset-2 hover:underline">
            Create one
          </Link>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
