import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Gauge, 
  Zap, 
  Clock, 
  HardDrive, 
  Cpu, 
  Shield,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const metrics = [
  {
    label: "Performance Score",
    value: 97,
    icon: Gauge,
    color: "text-accent",
    description: "Overall system performance"
  },
  {
    label: "Response Time", 
    value: 95,
    icon: Clock,
    color: "text-primary",
    description: "< 100ms AI operations"
  },
  {
    label: "Bundle Size",
    value: 88,
    icon: HardDrive,
    color: "text-secondary", 
    description: "Optimized for fast loading"
  },
  {
    label: "CPU Efficiency",
    value: 93,
    icon: Cpu,
    color: "text-primary-glow",
    description: "Intelligent resource usage"
  }
];

const features = [
  "Real-time Performance Monitoring",
  "AI-Powered Optimization",
  "Predictive Scaling",
  "Zero-Downtime Deployments",
  "Global CDN Distribution",
  "Automatic Security Scanning"
];

const PerformanceMetrics = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-muted-foreground">Performance Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for
            <span className="bg-gradient-neural bg-clip-text text-transparent"> Speed</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BONNY is engineered for exceptional performance with real-time metrics,
            AI-powered optimizations, and enterprise-grade reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Metrics Dashboard */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Live Performance Dashboard</h3>
                <Badge variant="outline" className="border-accent text-accent">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse-neural" />
                  Live
                </Badge>
              </div>
              
              <div className="space-y-6">
                {metrics.map((metric) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className={`w-5 h-5 ${metric.color}`} />
                          <span className="font-medium">{metric.label}</span>
                        </div>
                        <span className="text-2xl font-bold">{metric.value}%</span>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Real-time Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-card border-primary/20 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground">Faster Development</div>
              </Card>
              
              <Card className="p-4 bg-gradient-card border-primary/20 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Secure by Default</div>
              </Card>
            </div>
          </div>

          {/* Features List */}
          <div>
            <Card className="p-8 bg-gradient-card border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Enterprise Features</h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent">&lt; 50ms</div>
                    <div className="text-xs text-muted-foreground">Latency</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary">Global</div>
                    <div className="text-xs text-muted-foreground">CDN</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;