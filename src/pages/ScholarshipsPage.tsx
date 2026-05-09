import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, DollarSign } from "lucide-react";

const scholarships = [
  { name: "National Merit Scholarship", provider: "Govt of India", amount: "₹12,000/year", deadline: "Oct 2026", eligibility: "Top 20% in board exams", category: "Merit" },
  { name: "Post Matric Scholarship (SC/ST)", provider: "Social Welfare Dept", amount: "Full tuition", deadline: "Dec 2026", eligibility: "SC/ST students, income < ₹2.5L", category: "Government" },
  { name: "AICTE Pragati Scheme", provider: "AICTE", amount: "₹50,000/year", deadline: "Nov 2026", eligibility: "Girl students in AICTE colleges", category: "Government" },
  { name: "First Graduate Scholarship", provider: "State Govt", amount: "₹10,000-25,000", deadline: "Sep 2026", eligibility: "First in family to attend college", category: "First Graduate" },
  { name: "Sitaram Jindal Foundation", provider: "Jindal Foundation", amount: "₹1,000-10,000/mo", deadline: "Rolling", eligibility: "Economically weaker students", category: "Private" },
  { name: "INSPIRE Scholarship", provider: "DST, Govt of India", amount: "₹80,000/year", deadline: "Nov 2026", eligibility: "Top 1% in board exams pursuing science", category: "Merit" },
];

const ScholarshipsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">🎓 Scholarships</h1>
      <p className="text-muted-foreground">Financial aid opportunities for your education</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {scholarships.map((s) => (
        <Card key={s.name} className="border-border/50">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-sm">{s.name}</CardTitle>
              <Badge variant="outline">{s.category}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{s.provider}</p>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1"><DollarSign className="h-3 w-3 text-green-500" /> {s.amount}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {s.deadline}</span>
            </div>
            <p className="text-xs text-muted-foreground">Eligibility: {s.eligibility}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ScholarshipsPage;
