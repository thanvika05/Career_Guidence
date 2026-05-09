import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Star, IndianRupee, TrendingUp, Search } from "lucide-react";

const CollegesPage = () => {
  const { profile } = useAuth();
  const [colleges, setColleges] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("colleges").select("*").order("rating", { ascending: false });
      if (data) { setColleges(data); setFiltered(data); }
      setLoading(false);
    };
    fetch();
  }, []);

  useEffect(() => {
    let result = colleges;
    if (search) result = result.filter((c) => c.college_name.toLowerCase().includes(search.toLowerCase()));
    if (stateFilter && stateFilter !== "all") result = result.filter((c) => c.state === stateFilter);
    if (branchFilter && branchFilter !== "all") result = result.filter((c) => c.branch === branchFilter);
    setFiltered(result);
  }, [search, stateFilter, branchFilter, colleges]);

  const states = [...new Set(colleges.map((c) => c.state))].sort();
  const branches = [...new Set(colleges.map((c) => c.branch))].sort();

  if (loading) return <div className="flex items-center justify-center h-64"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">🏫 College Explorer</h1>
        <p className="text-muted-foreground">Browse {colleges.length} colleges across India</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search colleges..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={stateFilter} onValueChange={setStateFilter}>
          <SelectTrigger className="w-[180px]"><SelectValue placeholder="All States" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All States</SelectItem>
            {states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={branchFilter} onValueChange={setBranchFilter}>
          <SelectTrigger className="w-[180px]"><SelectValue placeholder="All Branches" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Branches</SelectItem>
            {branches.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      <p className="text-sm text-muted-foreground">Showing {filtered.length} colleges</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, 30).map((c) => (
          <Card key={c.id} className="border-border/50 hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm leading-tight">{c.college_name}</CardTitle>
                <Badge variant="secondary" className="shrink-0 ml-2">{c.college_type}</Badge>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {c.city}, {c.state}
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-1 text-sm">
                <Badge variant="outline">{c.branch}</Badge>
                <Badge variant="outline">{c.course_name}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" /> {c.rating}/5</div>
                <div className="flex items-center gap-1"><IndianRupee className="h-3 w-3" /> ₹{(c.fees_per_year/1000).toFixed(0)}K/yr</div>
                <div className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-green-500" /> {c.placement_rate}% placed</div>
                <div className="flex items-center gap-1"><Building2 className="h-3 w-3" /> ₹{c.average_package}L avg</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>Cutoff: {c.cutoff_min}-{c.cutoff_max}</span>
                <span>•</span>
                <span>{c.entrance_exam}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollegesPage;
