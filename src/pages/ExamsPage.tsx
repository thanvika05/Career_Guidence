import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BarChart3 } from "lucide-react";

const exams = [
  { name: "JEE Main", eligibility: "12th pass with PCM", difficulty: "Hard", prepTime: "6-12 months", dates: "Jan & Apr 2026", tips: "Focus on NCERT, practice previous papers, time management" },
  { name: "TNEA", eligibility: "Tamil Nadu 12th students", difficulty: "Medium", prepTime: "Based on 12th marks", dates: "May-Jun 2026", tips: "Score well in 12th boards, especially Maths" },
  { name: "GATE", eligibility: "Final year / Graduated B.Tech", difficulty: "Very Hard", prepTime: "12-18 months", dates: "Feb 2026", tips: "Start with standard textbooks, solve previous years" },
  { name: "GRE", eligibility: "Any graduate", difficulty: "Hard", prepTime: "3-6 months", dates: "Year-round", tips: "Build vocabulary, practice quantitative reasoning" },
  { name: "VITEEE", eligibility: "12th with PCM/PCB", difficulty: "Medium", prepTime: "3-6 months", dates: "Apr 2026", tips: "Focus on 11th & 12th concepts, practice mock tests" },
];

const ExamsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">📝 Entrance Exams</h1>
      <p className="text-muted-foreground">Key exams with eligibility and preparation tips</p>
    </div>
    <div className="grid gap-4">
      {exams.map((e) => (
        <Card key={e.name} className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{e.name}</CardTitle>
              <Badge variant={e.difficulty === "Very Hard" ? "destructive" : e.difficulty === "Hard" ? "secondary" : "outline"}>{e.difficulty}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm"><span className="font-medium">Eligibility:</span> {e.eligibility}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {e.prepTime}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.dates}</span>
            </div>
            <p className="text-sm bg-muted/50 rounded-lg p-2">💡 {e.tips}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ExamsPage;
