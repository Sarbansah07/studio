import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2 text-lg font-bold", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary p-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M22 7L12 12"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M17 4.5L7 9.5"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-headline text-foreground">{APP_NAME}</span>
    </div>
  );
};

export default Logo;
