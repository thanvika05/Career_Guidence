import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, User, BookOpen, Target, Briefcase } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
];

const INTERESTS = [
  "Artificial Intelligence","Web Development","Data Science","Cybersecurity","Cloud Computing",
  "Mobile Development","Machine Learning","Blockchain","IoT","Robotics","Game Development",
  "UI/UX Design","DevOps","Embedded Systems","Networking",
];

const SKILLS = [
  "Python","Java","JavaScript","C++","SQL","React","Node.js","HTML/CSS",
  "Git","Linux","Docker","AWS","TensorFlow","Excel","Communication",
  "Problem Solving","Teamwork","Leadership","Critical Thinking",
];

const steps = [
  { icon: User, label: "Personal Info" },
  { icon: BookOpen, label: "Academics" },
  { icon: GraduationCap, label: "Interests & Skills" },
  { icon: Target, label: "Career Goals" },
  { icon: Briefcase, label: "Preferences" },
];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user, profile, refreshProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: profile?.full_name || "",
    district: "",
    state: "",
    cutoff_marks: "",
    cgpa: "",
    year: "",
    college_name: "",
    board: "",
    degree: "",
    interests: [] as string[],
    skills: [] as string[],
    salary_expectation: [500000],
    relocation: "",
    career_goal: "",
    work_style: "",
  });

  const update = (key: string, value: any) => setFormData((p) => ({ ...p, [key]: value }));

  const toggleChip = (key: "interests" | "skills", value: string) => {
    const arr = formData[key];
    update(key, arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const handleFinish = async () => {
    if (!user) return;
    setLoading(true);
    try {
      await supabase.from("profiles").update({
        full_name: formData.full_name,
        district: formData.district,
        state: formData.state,
        wizard_completed: true,
      }).eq("id", user.id);

      await supabase.from("user_academic_details").upsert({
        user_id: user.id,
        cutoff_marks: formData.cutoff_marks ? parseFloat(formData.cutoff_marks) : null,
        cgpa: formData.cgpa ? parseFloat(formData.cgpa) : null,
        year: formData.year ? parseInt(formData.year) : null,
        college_name: formData.college_name || null,
        board: formData.board || null,
        degree: formData.degree || null,
      });

      for (const interest of formData.interests) {
        await supabase.from("user_interests").upsert({ user_id: user.id, interest_name: interest });
      }
      for (const skill of formData.skills) {
        await supabase.from("user_skills").upsert({ user_id: user.id, skill_name: skill });
      }
      await supabase.from("user_goals").upsert({
        user_id: user.id,
        salary_expectation: formData.salary_expectation[0],
        relocation_preference: formData.relocation || null,
        career_goal_text: formData.career_goal || null,
        work_style: formData.work_style || null,
      });

      await refreshProfile();
      toast({ title: "Profile setup complete! 🎉" });
      navigate("/dashboard");
    } catch (err: any) {
      toast({ title: "Error saving profile", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            <div><Label>Full Name</Label><Input value={formData.full_name} onChange={(e) => update("full_name", e.target.value)} placeholder="Your full name" /></div>
            <div><Label>District / Village</Label><Input value={formData.district} onChange={(e) => update("district", e.target.value)} placeholder="Your district or village" /></div>
            <div>
              <Label>State</Label>
              <Select value={formData.state} onValueChange={(v) => update("state", v)}>
                <SelectTrigger><SelectValue placeholder="Select state" /></SelectTrigger>
                <SelectContent>{INDIAN_STATES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            {profile?.user_type === "12th_student" ? (
              <>
                <div><Label>Cutoff Marks (out of 200)</Label><Input type="number" value={formData.cutoff_marks} onChange={(e) => update("cutoff_marks", e.target.value)} placeholder="e.g., 185" /></div>
                <div><Label>Board</Label><Input value={formData.board} onChange={(e) => update("board", e.target.value)} placeholder="e.g., State Board, CBSE" /></div>
              </>
            ) : (
              <>
                <div><Label>CGPA</Label><Input type="number" step="0.01" value={formData.cgpa} onChange={(e) => update("cgpa", e.target.value)} placeholder="e.g., 8.5" /></div>
                <div><Label>Year of Study</Label>
                  <Select value={formData.year} onValueChange={(v) => update("year", v)}>
                    <SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger>
                    <SelectContent>{["1","2","3","4"].map((y) => <SelectItem key={y} value={y}>Year {y}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>College Name</Label><Input value={formData.college_name} onChange={(e) => update("college_name", e.target.value)} placeholder="Your college" /></div>
                <div><Label>Degree</Label><Input value={formData.degree} onChange={(e) => update("degree", e.target.value)} placeholder="e.g., B.Tech CSE" /></div>
              </>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block">Areas of Interest (select multiple)</Label>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((i) => (
                  <button key={i} type="button" onClick={() => toggleChip("interests", i)}
                    className={`rounded-full px-3 py-1.5 text-sm transition-all ${formData.interests.includes(i) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                    {i}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Skills (select what you know)</Label>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <button key={s} type="button" onClick={() => toggleChip("skills", s)}
                    className={`rounded-full px-3 py-1.5 text-sm transition-all ${formData.skills.includes(s) ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <Label>Expected Annual Salary (₹)</Label>
              <div className="mt-4 px-2">
                <Slider value={formData.salary_expectation} onValueChange={(v) => update("salary_expectation", v)} min={200000} max={5000000} step={100000} />
                <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                  <span>₹2L</span>
                  <span className="font-bold text-foreground">₹{(formData.salary_expectation[0] / 100000).toFixed(1)}L</span>
                  <span>₹50L</span>
                </div>
              </div>
            </div>
            <div>
              <Label>Relocation Preference</Label>
              <Select value={formData.relocation} onValueChange={(v) => update("relocation", v)}>
                <SelectTrigger><SelectValue placeholder="Select preference" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open to relocate anywhere</SelectItem>
                  <SelectItem value="same_state">Same state only</SelectItem>
                  <SelectItem value="nearby">Nearby cities</SelectItem>
                  <SelectItem value="no">Prefer not to relocate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><Label>Career Goal</Label><Textarea value={formData.career_goal} onChange={(e) => update("career_goal", e.target.value)} placeholder="Describe your dream career..." /></div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <Label>Preferred Work Style</Label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {["Remote", "Hybrid", "Office"].map((ws) => (
                  <button key={ws} type="button" onClick={() => update("work_style", ws.toLowerCase())}
                    className={`rounded-lg border-2 p-3 text-center text-sm transition-all ${formData.work_style === ws.toLowerCase() ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}>
                    {ws}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg animate-fade-in">
        <div className="mb-6">
          <Progress value={((step + 1) / steps.length) * 100} className="h-2" />
          <div className="mt-4 flex justify-between">
            {steps.map((s, i) => (
              <div key={i} className={`flex flex-col items-center gap-1 ${i <= step ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs ${i <= step ? "bg-primary/20" : "bg-muted"}`}>
                  <s.icon className="h-4 w-4" />
                </div>
                <span className="hidden text-xs sm:block">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {(() => { const Icon = steps[step].icon; return <Icon className="h-5 w-5 text-primary" />; })()}
              {steps[step].label}
            </CardTitle>
            <CardDescription>Step {step + 1} of {steps.length}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
            <div className="mt-6 flex justify-between">
              <Button variant="outline" onClick={() => setStep((s) => s - 1)} disabled={step === 0}>Back</Button>
              {step < steps.length - 1 ? (
                <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
              ) : (
                <Button onClick={handleFinish} disabled={loading}>
                  {loading ? "Saving..." : "Complete Setup 🚀"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
