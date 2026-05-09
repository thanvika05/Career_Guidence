import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { GraduationCap, Brain, Target, Briefcase, ArrowRight } from "lucide-react";

const Index = () => {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && session) navigate("/dashboard");
  }, [session, loading]);

  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground">CareerGuide AI</span>
        </div>
        <Button onClick={() => navigate("/auth")} className="bg-primary hover:bg-primary/90">
          Get Started <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
          Your AI-Powered <br />
          <span className="text-primary">Career Companion</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          From 12th grade to engineering — get personalized college recommendations, career guidance,
          skill roadmaps, and AI-powered mentoring.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" onClick={() => navigate("/auth")} className="bg-primary hover:bg-primary/90">
            Start Your Journey
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
            Learn More
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Brain, title: "AI Advisor", desc: "Get personalized career advice from our intelligent AI chatbot" },
            { icon: Target, title: "Smart Predictions", desc: "College admission chances & job readiness scores powered by AI" },
            { icon: Briefcase, title: "Complete Toolkit", desc: "Resume builder, skill roadmap, internships, and daily micro-tasks" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
