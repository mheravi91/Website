import { Icon } from "@iconify/react";
import { useRef, useEffect, useState } from "react";

export function CopyCodeButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const preRef = useRef<HTMLPreElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Find the parent pre element
    if (buttonRef.current && !preRef.current) {
      preRef.current = buttonRef.current.closest("pre");
    }
  }, []);

  const handleClick = () => {
    if (preRef.current && typeof navigator !== 'undefined' && navigator?.clipboard) {
      // Clone the pre element to work with
      const preClone = preRef.current.cloneNode(true) as HTMLPreElement;

      // Remove the copy button from the clone
      const buttonToRemove = preClone.querySelector("button");
      buttonToRemove?.remove();

      // Get the cleaned text content
      const content = preClone.textContent?.trim() || "";

      navigator.clipboard
        .writeText(content)
        .then(() => {
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 2000); // Reset after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text:", err));
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      type="button"
      aria-live="polite"
      aria-label={showSuccess ? "Code copied" : "Copy code"}
      title={showSuccess ? "Copied!" : "Copy code"}
      className="absolute top-3 right-3 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 group-hover:transition-none focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-1 bg-white/70 dark:bg-zinc-700/70 hover:bg-white dark:hover:bg-zinc-600"
    >
      <Icon
        icon={showSuccess ? "ri:check-line" : "ri:file-copy-line"}
        width={24}
        height={24}
      />
    </button>
  );
}
