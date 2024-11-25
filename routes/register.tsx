import { GoogleLoginButton } from "../components/GoogleLoginButton.tsx";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { redirect, redirectWithError } from "../helpers/redirect.ts";
import { Button } from "../components/Button.tsx";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();

    const email = form.get("email")?.toString().trim();
    const password = form.get("password")?.toString();
    const confirmPassword = form.get("confirmPassword")?.toString();

    // Check for empty fields individually
    if (!email) {
      return redirectWithError("Email is required");
    }
    if (!password) {
      return redirectWithError("Password is required", { email });
    }
    if (!confirmPassword) {
      return redirectWithError("Please confirm your password", { email });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return redirectWithError("Please enter a valid email address", { email });
    }

    if (password.length < 8) {
      return redirectWithError("Password must be at least 8 characters", {
        email,
      });
    }

    if (password !== confirmPassword) {
      return redirectWithError("Passwords do not match", { email });
    }

    return redirect(`/login?email=${encodeURIComponent(email)}`, 302);
  },
};

export default function Register(props: PageProps) {
  const email = useSignal(props.url.searchParams.get("email") || "");
  const password = useSignal("");
  const confirmPassword = useSignal("");
  const error = useSignal<string | null>(props.url.searchParams.get("error"));

  return (
    <div class="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-text-primary">
          Create your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-card py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" method="POST">
            {error && <div class="text-error text-sm text-center">{error}</div>}

            <div>
              <label
                htmlFor="email"
                class="block text-sm font-medium text-text-secondary"
              >
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                class="block text-sm font-medium text-text-secondary"
              >
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                class="block text-sm font-medium text-text-secondary"
              >
                Confirm Password
              </label>
              <div class="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <Button class="w-full" variant="primary">Register</Button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-border" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-card text-text-secondary">
                  Or continue with
                </span>
              </div>
            </div>

            <div class="mt-6">
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
