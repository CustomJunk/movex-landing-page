import { Shield, Lock, CheckCircle2 } from "lucide-react";

const Security = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-foreground text-background rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Security & Trust</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Your data and payments are protected by industry-leading security measures
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card rounded-2xl p-6">
              <Lock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Bank-Level Encryption</h3>
              <p className="text-muted-foreground">All data is encrypted end-to-end</p>
            </div>
            <div className="bg-card rounded-2xl p-6">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">PCI Compliant</h3>
              <p className="text-muted-foreground">Secure payment processing certified</p>
            </div>
            <div className="bg-card rounded-2xl p-6">
              <Shield className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">GDPR Ready</h3>
              <p className="text-muted-foreground">Full data privacy compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
