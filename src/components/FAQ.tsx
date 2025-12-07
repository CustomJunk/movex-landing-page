import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do instant payouts work?",
      answer: "Payments are automatically processed and transferred to your account immediately after each completed class. No waiting periods or manual transfers required.",
    },
    {
      question: "What fees does MoveX charge?",
      answer: "We charge a small transaction fee of 2.5% + $0.30 per booking, which covers payment processing. No hidden fees or setup costs.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your billing period.",
    },
    {
      question: "Do my clients need to download the app?",
      answer: "No, clients can book through a simple web interface or optional app. They receive booking confirmations and reminders via email or SMS.",
    },
    {
      question: "What types of classes are supported?",
      answer: "MoveX supports all sport, dance, and wellness categories including yoga, pilates, HIIT, boxing, dance, meditation, personal training, and more.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MoveX
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-2 border-border data-[state=open]:border-foreground transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
