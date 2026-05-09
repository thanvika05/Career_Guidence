import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const dailyTasks = [
  { id: "1", task: "Learn Arrays & Strings — 30 mins", category: "Learning", done: false },
  { id: "2", task: "Solve 2 LeetCode Easy problems", category: "Practice", done: false },
  { id: "3", task: "Apply to 1 internship", category: "Career", done: false },
  { id: "4", task: "Read about System Design basics — 20 mins", category: "Learning", done: false },
  { id: "5", task: "Update LinkedIn profile", category: "Career", done: false },
];

const DailyTasksPage = () => {
  const [tasks, setTasks] = useState(dailyTasks);

  const toggle = (id: string) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completed = tasks.filter((t) => t.done).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">📋 Daily Tasks</h1>
        <p className="text-muted-foreground">{completed}/{tasks.length} completed today • Build habits, build careers!</p>
      </div>
      <Card className="border-border/50">
        <CardContent className="p-6 space-y-3">
          {tasks.map((t) => (
            <div key={t.id} className={`flex items-center gap-3 rounded-lg p-3 transition-all ${t.done ? "bg-green-50 line-through text-muted-foreground" : "bg-muted/50"}`}>
              <Checkbox checked={t.done} onCheckedChange={() => toggle(t.id)} />
              <span className="text-sm flex-1">{t.task}</span>
              <span className="text-xs text-muted-foreground">{t.category}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyTasksPage;
