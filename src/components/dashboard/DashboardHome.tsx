import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Target, BookOpen, TrendingUp, Lightbulb, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { profile } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    { title: "AI Advisor", desc: "Chat with your AI mentor", icon: Brain, path: "/dashboard/chatbot", color: "bg-primary/10 text-primary" },
    { title: "Careers", desc: "Explore career paths", icon: Target, path: "/dashboard/careers", color: "bg-secondary/30 text-accent-foreground" },
    { title: profile?.user_type === "12th_student" ? "Colleges" : "Internships", desc: profile?.user_type === "12th_student" ? "Find best colleges" : "Find internships", icon: GraduationCap, path: profile?.user_type === "12th_student" ? "/dashboard/colleges" : "/dashboard/internships", color: "bg-primary/10 text-primary" },
    { title: "Resume", desc: "Build your resume", icon: BookOpen, path: "/dashboard/resume", color: "bg-secondary/30 text-accent-foreground" },
    { title: "Skills", desc: "Skill gap analysis", icon: TrendingUp, path: "/dashboard/skills", color: "bg-primary/10 text-primary" },
    { title: "Trends", desc: "Industry insights", icon: Lightbulb, path: "/dashboard/trends", color: "bg-secondary/30 text-accent-foreground" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Welcome back, {profile?.full_name || "Student"}! 👋
        </h1>
        <p className="text-muted-foreground mt-1">Here's your career readiness overview</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Career Readiness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <svg className="h-16 w-16 -rotate-90" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="72, 100" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">72%</span>
              </div>
              <div>
                <p className="text-2xl font-bold">Good</p>
                <p className="text-xs text-muted-foreground">Keep improving!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Strength</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span className="font-bold">85%</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs text-muted-foreground">Add skills to improve</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">3/5</p>
              <p className="text-xs text-muted-foreground">tasks completed this week</p>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold">Quick Access</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <Card
              key={action.title}
              className="cursor-pointer border-border/50 transition-all hover:shadow-md hover:-translate-y-0.5"
              onClick={() => navigate(action.path)}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}>
                  <action.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{action.title}</p>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg">📋 This Week's Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              "Complete your skills assessment",
              "Explore top 3 career matches",
              "Chat with AI advisor about your goals",
              "Review recommended colleges/internships",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {i + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
