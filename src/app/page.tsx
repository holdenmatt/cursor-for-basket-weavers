import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";

function Features() {
  const features = [
    {
      title: "Pattern Autocomplete",
      description: "AI suggests the next weave based on your current pattern, preventing mistakes before they happen"
    },
    {
      title: "Material Inspector", 
      description: "Hover over any reed or fiber to get detailed information about flexibility, color matching, and optimal weaving techniques"
    },
    {
      title: "Basket Debugger",
      description: "When your basket starts looking wonky, our AI identifies exactly where things went sideways and suggests fixes (with a gentle reminder that \"every basket tells a story, even the lopsided ones\")"
    }
  ];

  return (
    <section className="w-full py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built for Creative Artisans</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter Weaver",
      price: "Free",
      features: [
        "Basic pattern library",
        "Community support", 
        "3 projects"
      ]
    },
    {
      name: "Master Craftsperson",
      price: "$29/month",
      features: [
        "Advanced AI assistance",
        "Premium patterns",
        "Unlimited projects",
        "Material recommendations"
      ]
    },
    {
      name: "Artisan Guild", 
      price: "$99/month",
      features: [
        "Everything in Master",
        "Custom pattern generation",
        "Priority support",
        "Commercial licensing"
      ]
    }
  ];

  return (
    <section className="w-full py-16 bg-muted/50">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <div className="text-2xl font-bold mb-4">{tier.price}</div>
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-24 text-center">
        <Container>
          <h1 className="text-5xl font-bold mb-6">WeaveCraft</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Code your way to perfect baskets with AI-powered weaving assistance
          </p>
          <Button size="lg">Get Started</Button>
        </Container>  
      </section>

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <section className="w-full py-16 text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Ready to build?</h2>
          <Button size="lg">Start Free Trial</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t">
        <Container>
          <div className="text-center text-muted-foreground">
            © 2024 WeaveCraft
          </div>
        </Container>
      </footer>
    </div>
  );
}