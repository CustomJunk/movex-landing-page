import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$15",
      period: "/month",
      description: "Perfect for solo trainers",
      features: ["1–5 employees", "Unlimited bookings", "Instant payouts", "Email support"],
      highlight: false,
    },
    {
      name: "Standard",
      price: "$40",
      period: "/month",
      description: "For growing studios",
      features: ["5–10 employees", "Unlimited bookings", "Instant payouts", "Priority support", "Advanced analytics"],
      highlight: true,
    },
    {
      name: "Pro",
      price: "$70",
      period: "/month",
      description: "For established businesses",
      features: ["10+ employees", "Unlimited bookings", "Instant payouts", "24/7 support", "Advanced analytics", "Custom branding"],
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.highlight 
                  ? "border-foreground shadow-[var(--shadow-large)]" 
                  : "border-border shadow-[var(--shadow-medium)]"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="bg-foreground text-background text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <Button 
                className={`w-full mb-8 rounded-full ${plan.highlight ? "" : "variant-outline"}`}
                variant={plan.highlight ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
