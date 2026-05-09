import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const internships = [
  { title: "Software Dev Intern", company: "Microsoft", location: "Bangalore", type: "Paid", duration: "6 months", stipend: "₹60,000/mo", domain: "Web Dev" },
  { title: "Data Science Intern", company: "Amazon", location: "Hyderabad", type: "Paid", duration: "3 months", stipend: "₹50,000/mo", domain: "Data Science" },
  { title: "ML Research Intern", company: "Google", location: "Remote", type: "Paid", duration: "3 months", stipend: "₹80,000/mo", domain: "AI/ML" },
  { title: "Frontend Dev Intern", company: "Flipkart", location: "Bangalore", type: "Paid", duration: "2 months", stipend: "₹25,000/mo", domain: "Web Dev" },
  { title: "Cybersecurity Intern", company: "Zoho", location: "Chennai", type: "Paid", duration: "3 months", stipend: "₹20,000/mo", domain: "Cybersecurity" },
  { title: "Open Source Contributor", company: "Various", location: "Remote", type: "Unpaid", duration: "Flexible", stipend: "Experience", domain: "Any" },
];

const InternshipsPage = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold">💼 Internships</h1>
      <p className="text-muted-foreground">Curated internship opportunities for you</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {internships.map((i, idx) => (
        <Card key={idx} className="border-border/50 hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-sm">{i.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{i.company}</p>
              </div>
              <Badge variant={i.type === "Paid" ? "default" : "secondary"}>{i.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {i.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {i.duration}</span>
              <Badge variant="outline" className="text-xs">{i.domain}</Badge>
            </div>
            <p className="mt-2 text-sm font-medium text-green-600">{i.stipend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default InternshipsPage;
