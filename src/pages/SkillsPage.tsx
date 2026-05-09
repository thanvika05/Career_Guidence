import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const mustHave = [
  { name: "Data Structures & Algorithms", level: 60, status: "learning" },
  { name: "Python Programming", level: 80, status: "strong" },
  { name: "Database (SQL)", level: 40, status: "needs work" },
  { name: "System Design Basics", level: 20, status: "needs work" },
];

const niceToHave = [
  { name: "Cloud Computing (AWS)", level: 10 },
  { name: "Docker & DevOps", level: 15 },
  { name: "Machine Learning", level: 30 },
];

const certifications = [
  { name: "AWS Cloud Practitioner", provider: "Amazon", difficulty: "Beginner", cost: "Free prep" },
  { name: "Google Data Analytics", provider: "Google/Coursera", difficulty: "Beginner", cost: "₹3,500/mo" },
  { name: "Meta Frontend Developer", provider: "Meta/Coursera", difficulty: "Intermediate", cost: "₹3,500/mo" },
];

const SkillsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">🔧 Skill Analysis</h1>
      <p className="text-muted-foreground">Your skill gap analysis and learning resources</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-border/50">
        <CardHeader><CardTitle className="text-lg">Must-Have Skills</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {mustHave.map((s) => (
            <div key={s.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <Badge variant={s.status === "strong" ? "default" : "secondary"} className="text-xs">{s.level}%</Badge>
              </div>
              <Progress value={s.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border/50">
        <CardHeader><CardTitle className="text-lg">Nice-to-Have Skills</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {niceToHave.map((s) => (
            <div key={s.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <Progress value={s.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>

    <Card className="border-border/50">
      <CardHeader><CardTitle className="text-lg">📜 Recommended Certifications</CardTitle></CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.name} className="rounded-lg border border-border p-4 space-y-1">
              <p className="font-medium text-sm">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.provider}</p>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">{c.difficulty}</Badge>
                <Badge variant="outline" className="text-xs">{c.cost}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default SkillsPage;
