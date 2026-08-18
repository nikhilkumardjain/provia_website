import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      {children}
    </button>
  );
}