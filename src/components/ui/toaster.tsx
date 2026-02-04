import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any; // For extra props like type, duration, etc.
}

export const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }: ToastProps) => (
        <Toast key={id} {...props} className="group">
          <div className="grid gap-1">
            {title && <ToastTitle className="font-semibold">{title}</ToastTitle>}
            {description && (
              <ToastDescription className="text-sm text-muted-foreground">
                {description}
              </ToastDescription>
            )}
          </div>
          {action && <div className="mt-2">{action}</div>}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className="fixed bottom-4 right-4 z-50 flex flex-col gap-2" />
    </ToastProvider>
  );
};
