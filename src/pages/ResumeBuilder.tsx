import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const ResumeBuilder = () => {
  const { profile } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">📄 Resume Builder</h1>
        <p className="text-muted-foreground">Auto-generate and optimize your resume</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Resume Preview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-border bg-background p-6 space-y-4">
              <div className="text-center border-b border-border pb-3">
                <h2 className="text-xl font-bold">{profile?.full_name || "Your Name"}</h2>
                <p className="text-sm text-muted-foreground">{profile?.state || "Location"} • email@example.com</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase text-primary mb-1">Education</h3>
                <p className="text-sm">B.Tech in Computer Science</p>
                <p className="text-xs text-muted-foreground">College Name • 2022-2026</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase text-primary mb-1">Skills</h3>
                <p className="text-sm text-muted-foreground">Based on your profile skills</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase text-primary mb-1">Projects</h3>
                <p className="text-sm text-muted-foreground">Add projects to your profile</p>
              </div>
            </div>
            <Button className="w-full"><Download className="mr-2 h-4 w-4" /> Download Resume</Button>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">💡 ATS Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Use standard section headings (Education, Experience, Skills)",
              "Include relevant keywords from job descriptions",
              "Quantify achievements with numbers and metrics",
              "Keep formatting simple — avoid tables and graphics",
              "Use action verbs (Built, Developed, Implemented)",
              "Tailor your resume for each application",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-primary font-bold">{i+1}.</span>
                {tip}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeBuilder;
