// Email provider adapter (BRIEF §8). The provider is not chosen yet
// (CONTENT-TODO #25: MailerLite or Brevo). Swap the body of `subscribe`
// for the provider's hosted form endpoint; no backend of our own.

export type SubscribeInput = { email: string; source: string };

export async function subscribe(input: SubscribeInput): Promise<void> {
  const endpoint = import.meta.env.VITE_EMAIL_SIGNUP_URL as string | undefined;
  if (!endpoint) throw new Error("Email provider not configured (VITE_EMAIL_SIGNUP_URL)");

  const body = new URLSearchParams({ email: input.email, source: input.source });
  const res = await fetch(endpoint, { method: "POST", body });
  if (!res.ok) throw new Error(`Signup failed: ${res.status}`);
}
