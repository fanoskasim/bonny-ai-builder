import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Zap, 
  Shield, 
  Search, 
  Rocket, 
  Bug, 
  Users,
  Brain
} from "lucide-react";

const agents = [
  {
    name: "CodeMaster",
    icon: Code,
    personality: "Methodical and precise",
    description: "Perfect code generation, code review, refactoring, debugging",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    name: "DesignGenius", 
    icon: Palette,
    personality: "Creative and aesthetic",
    description: "Beautiful UI creation, theme generation, design systems",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    name: "PerformanceGuru",
    icon: Zap,
    personality: "Analytical and optimization-focused", 
    description: "Performance analysis, bundle optimization, monitoring",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    name: "SecurityGuard",
    icon: Shield,
    personality: "Vigilant and protective",
    description: "Security audits, vulnerability scanning, compliance",
    color: "text-primary-glow",
    bgColor: "bg-primary/10"
  },
  {
    name: "SEOExpert",
    icon: Search,
    personality: "Strategic and visibility-focused",
    description: "SEO analysis, meta optimization, content analysis", 
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    name: "DeploymentNinja",
    icon: Rocket,
    personality: "Efficient and reliable",
    description: "One-click deployment, hosting setup, CI/CD",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    name: "BugHunter",
    icon: Bug,
    personality: "Detective and thorough",
    description: "Bug detection, error fixing, testing",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    name: "UserExperience",
    icon: Users,
    personality: "Empathetic and user-focused",
    description: "UX analysis, accessibility, usability testing",
    color: "text-primary-glow",
    bgColor: "bg-primary/10"
  }
];

const AIAgents = () => {
  return (
    <section id="agents" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">AI Agent Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your
            <span className="bg-gradient-neural bg-clip-text text-transparent"> AI Team</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI agents with unique personalities and capabilities, 
            working together to build your perfect application.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <Card 
                key={agent.name}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full ${agent.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${agent.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{agent.name}</h3>
                
                <Badge variant="secondary" className="mb-3 text-xs">
                  {agent.personality}
                </Badge>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="mt-4 flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse-neural" />
                  Active & Learning
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All agents work together seamlessly to deliver the perfect development experience
          </p>
          <div className="inline-flex items-center text-sm text-primary">
            <div className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse-neural" />
            Neural Network Active
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;