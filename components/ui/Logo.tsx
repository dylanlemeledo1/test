import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  size?: "sm" | "md";
};

export function Logo({ className, size = "md", ...props }: LogoProps) {
  const dim = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  return (
    <Link
      href="/"
      aria-label="Nebula home"
      className={cn(
        "group inline-flex items-center gap-2.5 text-white",
        className,
      )}
      {...props}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(dim, "transition-transform duration-300 group-hover:rotate-[10deg]")}
        aria-hidden
      >
        <defs>
          <linearGradient id="nebula-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="60%" stopColor="#7C5CFA" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16S8.544 29.5 16 29.5 29.5 23.456 29.5 16 23.456 2.5 16 2.5Zm0 4.2c5.137 0 9.3 4.163 9.3 9.3a9.27 9.27 0 0 1-1.99 5.748L10.952 8.69A9.262 9.262 0 0 1 16 6.7Zm-9.3 9.3c0-1.945.598-3.75 1.62-5.245l12.225 12.224A9.262 9.262 0 0 1 16 25.3c-5.137 0-9.3-4.163-9.3-9.3Z"
          fill="url(#nebula-grad)"
        />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight">
        Nebula
      </span>
    </Link>
  );
}
