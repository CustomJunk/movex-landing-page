import { Zap, Calendar, Users } from "lucide-react";

const ValueProps = () => {
  const props = [
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Get paid immediately after each class. No waiting, no delays.",
    },
    {
      icon: Calendar,
      title: "Effortless Booking",
      description: "Streamlined scheduling that works for you and your clients.",
    },
    {
      icon: Users,
      title: "Built for Sport, Dance & Wellness",
      description: "Designed specifically for fitness professionals and studios.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {props.map((prop, index) => (
            <div 
              key={index} 
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-foreground text-background rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                <prop.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{prop.title}</h3>
              <p className="text-muted-foreground text-lg">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
