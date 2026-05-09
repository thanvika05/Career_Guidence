import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  { title: "AI-Powered Resume Analyzer", domain: "AI/ML", difficulty: "Hard", desc: "Build a system that analyzes resumes, scores them, and provides improvement suggestions using NLP.", tags: ["Python", "NLP", "Flask"] },
  { title: "Smart Attendance System", domain: "IoT/AI", difficulty: "Medium", desc: "Face recognition-based attendance system using OpenCV and deep learning.", tags: ["Python", "OpenCV", "TensorFlow"] },
  { title: "E-Commerce Platform", domain: "Web Dev", difficulty: "Medium", desc: "Full-stack e-commerce with payment integration, cart, and admin dashboard.", tags: ["React", "Node.js", "MongoDB"] },
  { title: "Crop Disease Detector", domain: "AI/ML", difficulty: "Hard", desc: "Mobile app that identifies crop diseases from leaf images using CNN.", tags: ["Python", "TensorFlow", "Flutter"] },
  { title: "Blockchain Voting System", domain: "Blockchain", difficulty: "Hard", desc: "Decentralized voting platform ensuring transparency and security.", tags: ["Solidity", "React", "Web3"] },
  { title: "Chat Application", domain: "Web Dev", difficulty: "Easy", desc: "Real-time chat app with rooms, file sharing, and notifications.", tags: ["React", "Socket.io", "Node.js"] },
];

const ProjectsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">💡 Project Ideas</h1>
      <p className="text-muted-foreground">Unique project ideas to boost your portfolio</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p, i) => (
        <Card key={i} className="border-border/50 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle className="text-sm">{p.title}</CardTitle>
              <Badge variant={p.difficulty === "Hard" ? "destructive" : p.difficulty === "Medium" ? "secondary" : "outline"}>{p.difficulty}</Badge>
            </div>
            <Badge variant="outline" className="w-fit text-xs">{p.domain}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-1">
              {p.tags.map((t) => <Badge key={t} variant="outline" className="text-xs">{t}</Badge>)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default ProjectsPage;
