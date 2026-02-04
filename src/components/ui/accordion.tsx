import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ========================================
   Accordion Root
======================================== */
const Accordion = AccordionPrimitive.Root;

/* ========================================
   Accordion Item
======================================== */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b last:border-b-0 bg-white dark:bg-gray-900",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/* ========================================
   Accordion Trigger
   Variants: default, minimal, highlight
======================================== */
interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  variant?: "default" | "minimal" | "highlight";
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "py-4 font-medium hover:underline",
    minimal: "py-2 text-sm font-medium text-gray-700 dark:text-gray-300",
    highlight:
      "py-4 font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 rounded-md px-2",
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between transition-all duration-200 [&[data-state=open]>svg]:rotate-180",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

/* ========================================
   Accordion Content
   Smooth animation & responsive padding
======================================== */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, re
