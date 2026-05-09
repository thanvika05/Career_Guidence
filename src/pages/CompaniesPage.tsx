import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const companies = [
  { name: "TCS", type: "Service", focus: ["Aptitude", "Coding", "HR"], tips: "Strong in aptitude tests. Practice TCS NQT pattern.", avg: "₹3.5-7 LPA" },
  { name: "Infosys", type: "Service", focus: ["Coding", "Pseudo Code", "HR"], tips: "Focus on InfyTQ platform. Practice pseudo code.", avg: "₹3.5-6 LPA" },
  { name: "Zoho", type: "Product", focus: ["C Programming", "Advanced Coding", "HR"], tips: "Strong C fundamentals required. 5-round process.", avg: "₹6-12 LPA" },
  { name: "Amazon", type: "Product", focus: ["DSA", "System Design", "Leadership Principles"], tips: "Master DSA. Practice behavioral questions (STAR method).", avg: "₹15-30 LPA" },
  { name: "Google", type: "Product", focus: ["DSA", "System Design", "Googleyness"], tips: "LeetCode medium-hard. Focus on optimization.", avg: "₹20-40 LPA" },
  { name: "Wipro", type: "Service", focus: ["Aptitude", "English", "Coding"], tips: "Clear aptitude cutoff. Basic coding required.", avg: "₹3.5-5 LPA" },
];

const CompaniesPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">🏢 Company Preparation</h1>
      <p className="text-muted-foreground">Prepare strategically for top companies</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {companies.map((c) => (
        <Card key={c.name} className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2"><Building2 className="h-4 w-4" /> {c.name}</CardTitle>
              <Badge variant={c.type === "Product" ? "default" : "secondary"}>{c.type}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm font-medium text-green-600">{c.avg}</p>
            <div className="flex flex-wrap gap-1">
              {c.focus.map((f) => <Badge key={f} variant="outline" className="text-xs">{f}</Badge>)}
            </div>
            <p className="text-sm bg-muted/50 rounded-lg p-2">💡 {c.tips}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default CompaniesPage;
