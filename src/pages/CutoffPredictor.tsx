import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp } from "lucide-react";

const CutoffPredictor = () => {
  const { profile } = useAuth();
  const [marks, setMarks] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);

  const predict = async () => {
    const m = parseFloat(marks);
    if (isNaN(m)) return;
    const { data } = await supabase.from("colleges").select("*").order("rating", { ascending: false });
    if (!data) return;

    const categorized = data.map((c) => {
      let category: "safe" | "moderate" | "reach" = "reach";
      if (m >= c.cutoff_max) category = "safe";
      else if (m >= c.cutoff_min) category = "moderate";
      return { ...c, category };
    }).filter((c) => c.category !== "reach" || m >= c.cutoff_min - 20);

    setResults(categorized.slice(0, 50));
    setSearched(true);
  };

  const colorMap = { safe: "bg-green-100 text-green-700", moderate: "bg-yellow-100 text-yellow-700", reach: "bg-red-100 text-red-700" };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">🎯 Cutoff Predictor</h1>
        <p className="text-muted-foreground">Enter your marks to find matching colleges</p>
      </div>

      <Card className="border-border/50">
        <CardContent className="flex gap-4 items-end p-6">
          <div className="flex-1">
            <label className="text-sm font-medium mb-1 block">Your Cutoff Marks (out of 200)</label>
            <Input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} placeholder="e.g., 185" />
          </div>
          <Button onClick={predict} disabled={!marks}><Target className="mr-2 h-4 w-4" /> Predict</Button>
        </CardContent>
      </Card>

      {searched && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">{results.length} colleges found</p>
          {["safe", "moderate", "reach"].map((cat) => {
            const items = results.filter((r) => r.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <h3 className="mb-2 text-sm font-semibold capitalize flex items-center gap-2">
                  <span className={`inline-block h-3 w-3 rounded-full ${cat === "safe" ? "bg-green-500" : cat === "moderate" ? "bg-yellow-500" : "bg-red-500"}`} />
                  {cat === "safe" ? "Safe Colleges" : cat === "moderate" ? "Moderate Chance" : "Reach Colleges"} ({items.length})
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {items.map((c) => (
                    <Card key={c.id} className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-sm">{c.college_name}</p>
                            <p className="text-xs text-muted-foreground">{c.city}, {c.state} • {c.branch}</p>
                          </div>
                          <Badge className={colorMap[c.category as keyof typeof colorMap]}>{c.category}</Badge>
                        </div>
                        <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
                          <span>Cutoff: {c.cutoff_min}-{c.cutoff_max}</span>
                          <span>₹{(c.fees_per_year/1000).toFixed(0)}K/yr</span>
                          <span>{c.placement_rate}% placed</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CutoffPredictor;
