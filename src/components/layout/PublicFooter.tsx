import { APP_NAME } from "@/lib/constants";

const PublicFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
