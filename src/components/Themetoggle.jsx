import { useEffect, useState } from "react";

/**
 * Self-contained theme toggle.
 * Flips [data-theme="dark"] on <html>, which is what your CSS variables key off of.
 * Drop this anywhere — it doesn't need props, state lifted, or context.
 */
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      type="button"
    >
      <span className="theme-toggle__knob">{isDark ? "☾" : "☀"}</span>
    </button>
  );
}