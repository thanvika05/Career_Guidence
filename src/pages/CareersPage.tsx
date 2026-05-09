import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { Briefcase, TrendingUp, Building2, DollarSign } from "lucide-react";

const careers = [
  { title: "Software Engineer", match: 92, salary: "₹6-25 LPA", why: "Strong coding skills and CS interest align perfectly", companies: ["TCS", "Infosys", "Wipro", "Google"], growth: "High" },
  { title: "Data Scientist", match: 85, salary: "₹8-30 LPA", why: "Math aptitude and analytical interests match well", companies: ["Amazon", "Flipkart", "Microsoft", "IBM"], growth: "Very High" },
  { title: "Full Stack Developer", match: 80, salary: "₹5-20 LPA", why: "Web development interest and programming skills fit", companies: ["Zoho", "Freshworks", "Razorpay", "Swiggy"], growth: "High" },
  { title: "AI/ML Engineer", match: 78, salary: "₹10-35 LPA", why: "AI interest and Python skills are a strong foundation", companies: ["Google", "DeepMind", "OpenAI", "NVIDIA"], growth: "Very High" },
];

const CareersPage = () => {
  const { profile } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">💼 Career Paths</h1>
        <p className="text-muted-foreground">AI-personalized career recommendations for you</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {careers.map((c, i) => (
          <Card key={i} className="border-border/50 hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{c.title}</CardTitle>
                <Badge className="bg-primary/10 text-primary">{c.match}% match</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{c.why}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1"><DollarSign className="h-4 w-4 text-green-500" /> {c.salary}</div>
                <div className="flex items-center gap-1"><TrendingUp className="h-4 w-4 text-primary" /> {c.growth} growth</div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Top Companies</p>
                <div className="flex flex-wrap gap-1">
                  {c.companies.map((co) => <Badge key={co} variant="outline" className="text-xs">{co}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;
