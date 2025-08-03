import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AIAgents from "@/components/AIAgents";
import PerformanceMetrics from "@/components/PerformanceMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <AIAgents />
      <PerformanceMetrics />
    </div>
  );
};

export default Index;
