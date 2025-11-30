import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    "Smart booking system with real-time availability",
    "Integrated calendar sync across all devices",
    "Instant payouts after every class",
    "Automated client reminders and notifications",
    "Secure payment processing",
    "Comprehensive business dashboard and analytics",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run your business smoothly
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
