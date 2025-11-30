import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitPopupShown")) {
        setIsVisible(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-card rounded-3xl p-8 max-w-md w-full relative shadow-[var(--shadow-large)] animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-3xl font-bold mb-4">Wait! Special Offer 🎉</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Join MoveX as an early adopter and get <strong>1 month free</strong> on any plan!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-full text-lg py-6"
          />
          <Button type="submit" className="w-full rounded-full text-lg py-6">
            Claim My Free Month
          </Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default ExitPopup;
