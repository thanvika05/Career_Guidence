import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HigherEdPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">📚 Higher Education</h1>
      <p className="text-muted-foreground">Explore postgraduate and research opportunities</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {[
        { exam: "GATE", purpose: "M.Tech in IITs/NITs + PSU jobs", prep: "12-18 months", when: "February" },
        { exam: "GRE", purpose: "MS in USA/Europe/Australia", prep: "3-6 months", when: "Year-round" },
        { exam: "CAT", purpose: "MBA in IIMs", prep: "6-12 months", when: "November" },
        { exam: "IELTS/TOEFL", purpose: "English proficiency for abroad", prep: "1-3 months", when: "Year-round" },
      ].map((e) => (
        <Card key={e.exam} className="border-border/50">
          <CardHeader className="pb-2">
            <CardTitle>{e.exam}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p>{e.purpose}</p>
            <p className="text-muted-foreground">Prep: {e.prep} • {e.when}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default HigherEdPage;
