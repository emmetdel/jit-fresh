import { GoogleLoginButton } from "../components/GoogleLoginButton.tsx";
import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { redirect, redirectWithError } from "../helpers/redirect.ts";

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
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" method="POST">
            {error && (
              <div class="text-red-600 text-sm text-center">{error}</div>
            )}

            <div>
              <label
                htmlFor="email"
                class="block text-sm font-medium text-gray-700"
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
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                class="block text-sm font-medium text-gray-700"
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
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                class="block text-sm font-medium text-gray-700"
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
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
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
