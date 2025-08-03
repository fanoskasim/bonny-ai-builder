import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Palette, 
  Code2, 
  BarChart3, 
  Eye, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Natural Language Programming",
    description: "Build apps by simply describing what you want in plain English",
    example: '"Create a modern navigation bar with a logo and responsive menu"',
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Palette,
    title: "Visual Builder",
    description: "Drag & drop interface with real-time preview and component management",
    features: ["9+ Component Types", "Real-time Preview", "Code Export"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Code2,
    title: "AI Code Generator", 
    description: "Intelligent code analysis with performance scoring and smart suggestions",
    features: ["Smart Suggestions", "Quality Detection", "Best Practices"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: BarChart3,
    title: "Performance Monitor",
    description: "Real-time metrics monitoring with AI-powered optimization recommendations",
    features: ["Load Time", "Bundle Size", "Memory Usage"],
    color: "text-primary-glow",
    bgColor: "bg-primary/10"
  },
  {
    icon: Eye,
    title: "Adaptive Interface",
    description: "Personalized dashboard that learns your workflow and adapts over time",
    features: ["Mood Themes", "Context Tools", "Smart Suggestions"],
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Zap,
    title: "Real-time Intelligence",
    description: "Live learning AI that improves with every interaction and anticipates needs",
    features: ["Instant Feedback", "Predictive Actions", "Cross-Project Learning"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Revolutionary Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build the
            <span className="bg-gradient-neural bg-clip-text text-transparent"> Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of development tools with AI-powered features
            that make building web applications intuitive, fast, and enjoyable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {feature.example && (
                  <div className="bg-muted/30 border border-border rounded-lg p-3 mb-4">
                    <p className="text-sm font-mono text-accent">
                      {feature.example}
                    </p>
                  </div>
                )}

                {feature.features && (
                  <div className="space-y-2 mb-4">
                    {feature.features.map((item) => (
                      <div key={item} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 group-hover:bg-primary/10 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-card border-primary/20">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to experience the future of development?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of developers already building with BONNY's AI-powered platform.
            </p>
            <Button variant="neural" size="lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;