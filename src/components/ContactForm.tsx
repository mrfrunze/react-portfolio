import { useEffect, useRef, useState } from "react";

const ACCESS_KEY = "1758eb5d-27be-46c1-9c7c-74dcd8288fc0"; // вставь свой ключ
const MIN_DELAY = 1200; // anti-bot: минимальное время до сабмита (мс)

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [readyAt, setReadyAt] = useState(0);

    useEffect(() => {
    // anti-bot timing window
    setReadyAt(Date.now() + MIN_DELAY);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOk(null);
    setErr(null);

    const form = formRef.current!;
    const data = new FormData(form);

    // honeypot: bots often fill hidden field
    if ((data.get("website") as string)?.trim()) {
      setErr("Blocked by honeypot.");
      return;
    }

    // anti-timing
    if (Date.now() < readyAt) {
      setErr("Form submitted too fast.");
      return;
    }

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    // required fields: name (>=3), email
    if (!name || name.length < 3) {
      setErr("Name must be at least 3 characters.");
      return;
    }
    if (!email || !isEmail(email)) {
      setErr("Please enter a valid email.");
      return;
    }

    // payload for Web3Forms
    const payload: Record<string, any> = {
      access_key: ACCESS_KEY,
      name,
      email,
      message, // optional
      subject: "New message from portfolio",
      from_name: "Portfolio Contact Form",
    };

    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Submit failed");

      setOk("Your message has been sent. Thank you!");
      form.reset();
      setReadyAt(Date.now() + MIN_DELAY); // reset timing window
    } catch (e: any) {
      setErr(e?.message || "Something went wrong. Please try again later.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full max-w-xl space-y-4">
      {/* honeypot (hidden) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="block text-sm mb-1">Your Name *</label>
        <input
          name="name"
          required
          minLength={3}
          className="w-full px-3 py-1.5 text-base leading-6 text-[#495057] bg-white border border-[#ced4da] rounded transition-colors duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:ring-2 focus:ring-[#80bdff]/50"
          placeholder="Your Name"
          autoComplete="name"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Your Email *</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-3 py-1.5 text-base leading-6 text-[#495057] bg-white border border-[#ced4da] rounded transition-colors duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:ring-2 focus:ring-[#80bdff]/50"
          placeholder="name@example.com"
          autoComplete="email"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          className="resize-none w-full border rounded px-3 py-1.5 text-base leading-6 text-[#495057] bg-white border-[#ced4da] transition-colors duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:ring-2 focus:ring-[#80bdff]/50"
          placeholder="Your message (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={busy}
        className="my-3 mx-auto block bg-[#0078ff] text-white border border-[#cde1f8] rounded-full px-9 py-3 text-lg shadow-none transition-all duration-500 hover:bg-[#0062d3] hover:text-white hover:shadow-[0_0_0_4px_#cde1f8] cursor-pointer"
      >
        {busy ? "Sending..." : "Send Message"}
      </button>

      {ok && <p className="text-green-600 text-sm">{ok}</p>}
      {err && <p className="text-red-600 text-sm">{err}</p>}
    </form>
  );

}
