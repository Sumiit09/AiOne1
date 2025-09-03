import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="container mx-auto py-24 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-2 text-foreground/70">Oops! Page not found</p>
      <a href="/" className="mt-6 inline-block rounded-md px-5 py-2.5 bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow hover:shadow-lg transition-shadow">Return to Home</a>
    </section>
  );
};

export default NotFound;
