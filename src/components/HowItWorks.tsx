const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Download & Set Up",
      description: "Get the app, create your profile, and add your services in minutes.",
    },
    {
      number: "02",
      title: "Accept Bookings",
      description: "Clients book classes directly. You get notified instantly.",
    },
    {
      number: "03",
      title: "Get Paid Instantly",
      description: "Automatic payouts after each class. No waiting, no hassle.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-foreground text-background text-4xl font-bold rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
