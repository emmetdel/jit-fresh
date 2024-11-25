import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

interface HeaderProps {
  title?: string;
}

export function Header({ title = "Dashboard" }: HeaderProps): JSX.Element {
  const isDark = useSignal(true);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    // find <html data-theme="synthwave">
    // and replace with data-theme="light" or data-theme="dark"
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("data-theme", isDark.value ? "synthwave" : "cupcake");
    }
  };

  return (
    <header class="bg-card shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold text-text-primary">
            {title}
          </h1>

          <div class="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              disabled={!IS_BROWSER}
              class="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark.value
                ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )
                : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
            </button>
            <button
              disabled={!IS_BROWSER}
              class="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              Settings
            </button>
            <button
              disabled={!IS_BROWSER}
              class="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
