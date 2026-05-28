import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        "fixed bottom-7 right-7 z-50",
        "h-11 w-11 rounded-full",
        "bg-foreground text-background",
        "inline-flex items-center justify-center",
        "shadow-[0_4px_24px_rgba(0,0,0,0.18)]",
        "hover:scale-110 hover:shadow-[0_6px_32px_rgba(0,0,0,0.26)]",
        "active:scale-95",
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 17a.75.75 0 0 1-.75-.75V5.56L5.53 9.28a.75.75 0 0 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06L10.75 5.56v10.69A.75.75 0 0 1 10 17Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
