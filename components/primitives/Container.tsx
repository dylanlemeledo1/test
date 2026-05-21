import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof React.JSX.IntrinsicElements;
  size?: "default" | "narrow" | "wide";
};

export function Container({
  className,
  as: Tag = "div",
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  const Component = Tag as React.ElementType;

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
