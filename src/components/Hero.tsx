import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Zap, Code, Sparkles, ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse-neural" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-neural" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-neural" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Powered by Neural Builder Core</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              BONNY
            </span>
            <br />
            <span className="text-foreground">
              Next-Generation
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl">
              AI-Powered Builder
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The most intelligent, lovable, and disruptive builder app ever created. 
            Build web applications with natural language and AI agents.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="neural" size="lg" className="text-lg px-8 py-6">
            <Sparkles className="mr-2 h-5 w-5" />
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="ai" size="lg" className="text-lg px-8 py-6">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <Brain className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Neural Builder Core</h3>
            <p className="text-muted-foreground">Advanced AI that learns and adapts to your development style</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Instant Generation</h3>
            <p className="text-muted-foreground">&lt; 100ms response times for all AI operations</p>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <Code className="w-8 h-8 text-secondary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Perfect Code</h3>
            <p className="text-muted-foreground">Production-ready React components with best practices</p>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">10x</div>
            <div className="text-sm text-muted-foreground">Faster Development</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">95%</div>
            <div className="text-sm text-muted-foreground">AI Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-secondary">50+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary-glow">100ms</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;