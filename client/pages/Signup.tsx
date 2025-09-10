import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import CleanLogo from "@/components/site/CleanLogo";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const valid = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);

  return (
    <div className="min-h-[70vh] w-full grid place-items-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg text-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 w-6">
            <CleanLogo
              src="https://cdn.builder.io/api/v1/image/assets%2F6fc548d35f304469a280fa5ba55607c7%2F48dc2d1e1a294e36ac04e854e5342cfb?format=webp&width=128"
              alt="AiOne logo"
              className="h-6 w-6 object-contain"
              threshold={252}
            />
          </div>
          <span className="font-semibold">AiOne</span>
        </div>

        <h1 className="text-2xl font-bold mb-4">Let's get started!</h1>

        <Button className="w-full h-11 bg-black text-white hover:bg-black/90 mb-4">Continue with Google</Button>

        <div className="relative my-4">
          <Separator className="bg-white/10" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-white/60">OR</span>
        </div>

        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email to continue..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 bg-white/5 border-white/15 placeholder:text-white/50"
          />
          <Button disabled={!valid} className="w-full h-11 disabled:opacity-50 disabled:cursor-not-allowed">
            Continue →
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-white/60 px-2">
          By clicking "Create account" or "Continue with Google", you agree to the AiOne's <Link to="/privacy" className="underline hover:no-underline">Terms & Conditions</Link> and <Link to="/privacy" className="underline hover:no-underline">Privacy Policy</Link>.
        </p>
        <p className="mt-3 text-center text-sm text-white/70">
          Already a member? <Link to="/login" className="text-[hsl(var(--brand-end))] hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
