import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const phases = [
  { title: "Foundation", months: "Month 1-3", color: "bg-blue-500", items: ["Complete core subject fundamentals", "Learn programming basics (Python/Java)", "Build strong problem-solving habits", "Join coding platforms (LeetCode, HackerRank)"] },
  { title: "Skill Building", months: "Month 4-6", color: "bg-green-500", items: ["Deep dive into chosen domain", "Complete 2-3 online certifications", "Start building portfolio projects", "Contribute to open source"] },
  { title: "Experience", months: "Month 7-9", color: "bg-yellow-500", items: ["Apply for internships", "Build 2-3 strong projects", "Network with professionals", "Attend workshops and hackathons"] },
  { title: "Career Launch", months: "Month 10-12", color: "bg-purple-500", items: ["Polish resume and LinkedIn", "Practice mock interviews", "Apply to target companies", "Prepare for technical rounds"] },
];

const RoadmapPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">🗺️ Career Roadmap</h1>
      <p className="text-muted-foreground">Your personalized 12-month action plan</p>
    </div>

    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
      {phases.map((phase, i) => (
        <div key={i} className={`relative mb-8 md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
            <div className={`h-5 w-5 rounded-full ${phase.color} ring-4 ring-background`} />
          </div>
          <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Badge className={`${phase.color} text-white`}>{phase.months}</Badge>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RoadmapPage;
