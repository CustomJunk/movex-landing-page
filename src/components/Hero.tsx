import { Button } from "@/components/ui/button";
import mockupImage from "@/assets/mobile-mockup.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Book sport, dance & wellness classes.{" "}
              <span className="block mt-2">Get paid instantly.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              MoveX simplifies bookings, automates payments, and helps trainers grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Download MoveX
              </Button>
              <a href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                Learn More
              </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src={mockupImage} 
                alt="MoveX Mobile App Interface" 
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
