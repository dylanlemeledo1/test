import { cn } from "@/lib/utils";

export function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "prose-nebula max-w-none text-pretty text-[15px] leading-relaxed text-zinc-300",
        "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white",
        "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-white",
        "[&_p]:mb-4",
        "[&_a]:text-violet-300 [&_a:hover]:text-violet-200 [&_a]:underline [&_a]:underline-offset-2",
        "[&_ul]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:text-zinc-300",
        "[&_ol]:mb-4 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-1.5",
        "[&_strong]:font-semibold [&_strong]:text-white",
        "[&_code]:rounded-md [&_code]:bg-white/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:text-violet-200",
        className,
      )}
    >
      {children}
    </div>
  );
}
