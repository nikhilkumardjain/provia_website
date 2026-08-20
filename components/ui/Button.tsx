import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#C8A04A] text-white hover:bg-[#B89337] shadow-lg hover:shadow-xl hover:-translate-y-0.5",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-[#C8A04A]",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#C8A04A]/40",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}