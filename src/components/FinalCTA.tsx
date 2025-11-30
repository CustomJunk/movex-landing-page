import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Ready to simplify your business?
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Join hundreds of trainers and studios already growing with MoveX
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
            Download MoveX
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-background text-background hover:bg-background hover:text-foreground">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
