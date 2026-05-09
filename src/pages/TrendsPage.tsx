import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowUp } from "lucide-react";

const trends = [
  { field: "Artificial Intelligence", growth: "+45%", demand: "Very High", skills: ["Python", "TensorFlow", "NLP"], outlook: "AI roles growing rapidly across all industries" },
  { field: "Cloud Computing", growth: "+38%", demand: "High", skills: ["AWS", "Azure", "Docker"], outlook: "Cloud adoption accelerating in Indian enterprises" },
  { field: "Cybersecurity", growth: "+35%", demand: "High", skills: ["Network Security", "Ethical Hacking", "SIEM"], outlook: "Critical shortage of cybersecurity professionals" },
  { field: "Data Science", growth: "+33%", demand: "High", skills: ["Python", "SQL", "Statistics"], outlook: "Data-driven decision making is mainstream" },
  { field: "Full Stack Development", growth: "+28%", demand: "High", skills: ["React", "Node.js", "TypeScript"], outlook: "Startup ecosystem driving huge demand" },
  { field: "DevOps", growth: "+25%", demand: "Medium-High", skills: ["CI/CD", "Kubernetes", "Linux"], outlook: "Every company needs DevOps engineers" },
];

const TrendsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">📈 Industry Trends</h1>
      <p className="text-muted-foreground">Fastest growing fields in India (2025-2030)</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {trends.map((t) => (
        <Card key={t.field} className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">{t.field}</CardTitle>
              <Badge className="bg-green-100 text-green-700 flex items-center gap-1">
                <ArrowUp className="h-3 w-3" /> {t.growth}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-xs text-muted-foreground">{t.outlook}</p>
            <div className="flex flex-wrap gap-1">
              {t.skills.map((s) => <Badge key={s} variant="outline" className="text-xs">{s}</Badge>)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TrendsPage;
