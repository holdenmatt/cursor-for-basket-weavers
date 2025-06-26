import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";

function Features() {
  const features = [
    {
      title: "Pattern Autocomplete",
      description:
        "AI suggests the next weave based on your current pattern, preventing mistakes before they happen",
    },
    {
      title: "Material Inspector",
      description:
        "Hover over any reed or fiber to get detailed information about flexibility, color matching, and optimal weaving techniques",
    },
    {
      title: "Basket Debugger",
      description:
        'When your basket starts looking wonky, our AI identifies exactly where things went sideways and suggests fixes (with a gentle reminder that "every basket tells a story, even the lopsided ones")',
    },
  ];

  return (
    <section className="w-full py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Built for Creative Artisans
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
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
      features: ["Basic pattern library", "Community support", "3 projects"],
    },
    {
      name: "Master Craftsperson",
      price: "$29/month",
      features: [
        "Advanced AI assistance",
        "Premium patterns",
        "Unlimited projects",
        "Material recommendations",
      ],
    },
    {
      name: "Artisan Guild",
      price: "$99/month",
      features: [
        "Everything in Master",
        "Custom pattern generation",
        "Priority support",
        "Commercial licensing",
      ],
    },
  ];

  return (
    <section className="bg-muted/50 w-full py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-card rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
              <div className="mb-4 text-2xl font-bold">{tier.price}</div>
              <ul className="space-y-2 text-sm">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full"
                variant={index === 1 ? "default" : "outline"}
              >
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
          <h1 className="mb-6 text-5xl font-bold">WeaveCraft</h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
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
          <h2 className="mb-6 text-3xl font-bold">Ready to build?</h2>
          <Button size="lg">Start Free Trial</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-8">
        <Container>
          <div className="text-muted-foreground text-center">
            © 2024 WeaveCraft
          </div>
        </Container>
      </footer>
    </div>
  );
}
