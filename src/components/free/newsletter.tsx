"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "family", label: "Family" },
  { id: "stakeholder", label: "StakeHolder" },
  { id: "youth-services", label: "Youth Services" },
];

export function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>(["family"]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "You're subscribed!",
      description: "Thanks for joining the FREE community newsletter.",
    });
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark py-16 text-white md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(217, 115, 51, 0.4), transparent 45%), radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.15), transparent 50%)",
        }}
      />
      <div className="container-wide relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-coral">
            <Mail className="size-3.5" />
            Stay in the loop
          </span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold leading-tight sm:text-4xl">
            Subscribe to our newsletter.
          </h2>
          <p className="mt-3 max-w-lg text-base text-white/85">
            Receive the latest stories, events, advocacy alerts, and
            opportunities to get involved — delivered straight to your inbox.
            Choose the topics that matter most to you.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-coral text-white shadow-lg">
                <CheckCircle2 className="size-7" />
              </span>
              <h3 className="text-xl font-bold">Welcome aboard!</h3>
              <p className="max-w-sm text-sm text-white/85">
                You're now subscribed to the FREE newsletter. Look out for our
                next issue landing in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="newsletter-email"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-white/70"
                >
                  Email Address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-white/70">
                  Select Newsletter Categories
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((c) => (
                    <label
                      key={c.id}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
                    >
                      <Checkbox
                        checked={selected.includes(c.id)}
                        onCheckedChange={() => toggle(c.id)}
                        className="border-white/40 data-[state=checked]:bg-coral data-[state=checked]:border-coral"
                      />
                      {c.label}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="btn-coral w-full justify-center !bg-coral"
              >
                Subscribe
                <Send className="size-4" />
              </button>
              <p className="text-center text-[11px] text-white/60">
                Leave this field empty if you're human: we respect your inbox.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
