import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Brain, Code, Sparkles } from "lucide-react";
import bonnyLogo from "@/assets/bonny-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={bonnyLogo} alt="BONNY" className="h-8 w-8" />
            <span className="font-bold text-xl bg-gradient-neural bg-clip-text text-transparent">
              BONNY
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#agents" className="text-muted-foreground hover:text-foreground transition-colors">
              AI Agents
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="neural" className="animate-pulse-neural">
              <Sparkles className="mr-2 h-4 w-4" />
              Start Building
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#agents"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              AI Agents
            </a>
            <a
              href="#demo"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
            <a
              href="#docs"
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button variant="neural" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Start Building
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;