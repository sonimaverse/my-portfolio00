import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/* ========================================
   Switch Variants
   - Supports size and color variants
======================================== */
const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        default: "h-6 w-11",
        lg: "h-7 w-14",
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        accent: "data-[state=checked]:bg-accent data-[state=unchecked]:bg-muted",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

/* ========================================
   Switch Component
======================================== */
interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size, variant, ...props }, ref) => (
    <SwitchPrimitives.Root
      ref={ref}
      className={cn(switchVariants({ size, variant, className }))}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-in-out",
          size === "sm"
            ? "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            : size === "lg"
            ? "h-6 w-6 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0"
            : "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
);

Switch.displayName = "Switch";

export { Switch, switchVariants };
