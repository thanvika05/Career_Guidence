import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Calendar, Award, Briefcase } from "lucide-react";

const alerts = [
  { icon: Calendar, title: "JEE Main 2026", desc: "Registration deadline approaching", date: "Jan 15, 2026", type: "Exam" },
  { icon: Award, title: "AICTE Pragati Scholarship", desc: "Application window open", date: "Nov 30, 2026", type: "Scholarship" },
  { icon: Briefcase, title: "Microsoft Internship", desc: "Applications closing soon", date: "Dec 20, 2025", type: "Internship" },
  { icon: Calendar, title: "GATE 2026", desc: "Registration starts", date: "Sep 1, 2025", type: "Exam" },
];

const AlertsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">🔔 Alerts & Notifications</h1>
      <p className="text-muted-foreground">Important deadlines and updates</p>
    </div>
    <div className="space-y-3">
      {alerts.map((a, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-sm">{a.title}</p>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium">{a.date}</p>
              <p className="text-xs text-muted-foreground">{a.type}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default AlertsPage;
