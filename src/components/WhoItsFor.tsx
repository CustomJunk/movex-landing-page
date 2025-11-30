import { Dumbbell, Music, Smile, Building2, Home } from "lucide-react";

const WhoItsFor = () => {
  const audiences = [
    { icon: Dumbbell, label: "Personal Trainers" },
    { icon: Music, label: "Dance Instructors" },
    { icon: Smile, label: "Yoga Teachers" },
    { icon: Building2, label: "Studios" },
    { icon: Home, label: "Gyms" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who It's For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            MoveX is built for fitness professionals and wellness businesses of all sizes
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-5 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card border-2 border-border rounded-2xl p-6 text-center hover:border-foreground transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-foreground text-background rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-6 h-6" />
              </div>
              <p className="font-semibold">{audience.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
