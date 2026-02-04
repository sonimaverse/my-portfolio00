import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/* ========================================
   Custom Toaster Component
   - Supports dark/light mode
   - Styled toast messages
   - Fully reusable
======================================== */
const Toaster: React.FC<ToasterProps> = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `
            group toast
            group-[.toaster]:bg-background 
            group-[.toaster]:text-foreground 
            group-[.toaster]:border 
            group-[.toaster]:border-border 
            group-[.toaster]:shadow-lg
            rounded-md px-4 py-2
            transition-all duration-200
          `,
          description: "group-[.toast]:text-muted-foreground",
          actionButton: `
            group-[.toast]:bg-primary 
            group-[.toast]:text-primary-foreground 
            rounded px-2 py-1
          `,
          cancelButton: `
            group-[.toast]:bg-muted 
            group-[.toast]:text-muted-foreground 
            rounded px-2 py-1
          `,
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
