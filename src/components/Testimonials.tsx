import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      content: "MoveX transformed how I run my business. The instant payouts are a game-changer!",
      rating: 5,
    },
    {
      name: "Marcus Thompson",
      role: "Dance Studio Owner",
      content: "Managing 15 instructors used to be chaos. Now everything runs smoothly with MoveX.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Personal Trainer",
      content: "My clients love how easy it is to book. I love getting paid instantly. Win-win!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of trainers and studios already using MoveX
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
