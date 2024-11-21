// Helper functions
export function redirectWithError(
  error: string,
  params: Record<string, string> = {},
): Response {
  const searchParams = new URLSearchParams({
    error: error,
    ...params,
  });
  return redirect(`/register?${searchParams.toString()}`);
}

export function redirect(path: string, status: number = 303): Response {
  return new Response(null, {
    status,
    headers: { location: path },
  });
}
