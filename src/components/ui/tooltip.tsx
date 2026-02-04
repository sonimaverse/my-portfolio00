import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

/* ========================================
   Tooltip Provider
======================================== */
const TooltipProvider = TooltipPrimitive.Provider;

/* ========================================
   Tooltip Root
======================================== */
const Tooltip = TooltipPrimitive.Root;

/* ========================================
   Tooltip Trigger
======================================== */
const TooltipTrigger = TooltipPrimitive.Trigger;

/* ========================================
   Tooltip Content
   Variants: default, info, error
   Smooth animation & dark/light mode ready
======================================== */
interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  sideOffset?: number;
  variant?: "default" | "info" | "error";
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-popover text-popover-foreground border",
    info: "bg-blue-600 text-white border-blue-700",
    error: "bg-red-600 text-white border-red-700",
  };

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 transition-all duration-200 ease-in-out data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
