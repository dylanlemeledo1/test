"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Mode = "login" | "signup";

export function AuthForm({ mode }: { mode: Mode }) {
  const [show, setShow] = useState(false);
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <OAuthButton provider="Google" />
        <OAuthButton provider="GitHub" />
      </div>
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span className="text-[11px] uppercase tracking-wider text-zinc-500">
          or with email
        </span>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {mode === "signup" ? (
        <Field
          label="Full name"
          name="name"
          type="text"
          placeholder="Jane Cooper"
          icon={User2}
        />
      ) : null}
      <Field label="Email" name="email" type="email" placeholder="you@company.com" icon={Mail} />

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
            Password
          </label>
          {mode === "login" ? (
            <a
              href="/login"
              className="text-xs text-zinc-400 underline-offset-2 hover:text-zinc-200 hover:underline"
            >
              Forgot?
            </a>
          ) : null}
        </div>
        <div className="relative mt-2">
          <Lock
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            aria-hidden
          />
          <input
            name="password"
            type={show ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-10 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-zinc-200"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mode === "signup" ? (
        <p className="text-xs text-zinc-500">
          By creating an account you agree to our{" "}
          <a href="/legal/terms" className="text-zinc-300 underline-offset-2 hover:underline">
            terms
          </a>{" "}
          and{" "}
          <a href="/legal/privacy" className="text-zinc-300 underline-offset-2 hover:underline">
            privacy policy
          </a>
          .
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
        {mode === "login" ? "Sign in" : "Create account"}
      </Button>
    </form>
  );
}

function OAuthButton({ provider }: { provider: "Google" | "GitHub" }) {
  return (
    <button
      type="button"
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/[0.16] hover:bg-white/[0.06]"
    >
      <ProviderIcon provider={provider} />
      <span>Continue with {provider}</span>
    </button>
  );
}

function ProviderIcon({ provider }: { provider: "Google" | "GitHub" }) {
  if (provider === "Google") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path
          fill="#fff"
          d="M21.6 12.227c0-.682-.057-1.357-.17-2.022H12v3.826h5.418a4.633 4.633 0 0 1-2.01 3.038v2.514h3.245c1.898-1.748 2.947-4.32 2.947-7.356Z"
        />
        <path
          fill="#fff"
          d="M12 22c2.717 0 4.998-.9 6.654-2.417l-3.246-2.514c-.9.609-2.053.967-3.408.967-2.625 0-4.847-1.77-5.638-4.157H3.013v2.6A10 10 0 0 0 12 22Z"
          opacity=".8"
        />
        <path
          fill="#fff"
          d="M6.362 13.879A6.01 6.01 0 0 1 6.044 12c0-.652.116-1.286.318-1.879V7.521H3.013A10 10 0 0 0 2 12c0 1.6.383 3.108 1.013 4.479l3.349-2.6Z"
          opacity=".6"
        />
        <path
          fill="#fff"
          d="M12 5.964c1.484 0 2.808.51 3.857 1.516l2.866-2.866C16.992 3 14.71 2 12 2A10 10 0 0 0 3.013 7.521l3.349 2.6C7.153 7.734 9.375 5.964 12 5.964Z"
          opacity=".4"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.481A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  icon: Icon,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon: typeof Mail;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <Icon
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          aria-hidden
        />
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none"
        />
      </div>
    </div>
  );
}
