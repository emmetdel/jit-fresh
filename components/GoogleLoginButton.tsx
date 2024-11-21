export function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    // Add your Google OAuth logic here
    // Typically, this would redirect to your OAuth endpoint
    window.location.href = "/api/auth/google";
  };

  return (
    <button
      onClick={handleGoogleLogin}
      class="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google logo"
        class="w-5 h-5"
      />
      Continue with Google
    </button>
  );
}
