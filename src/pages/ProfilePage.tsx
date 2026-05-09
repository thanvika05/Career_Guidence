import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin, GraduationCap } from "lucide-react";

const ProfilePage = () => {
  const { profile, user } = useAuth();

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h1 className="text-2xl font-bold">👤 Profile</h1>
      <Card className="border-border/50">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{profile?.full_name || "Student"}</h2>
              <p className="text-sm text-muted-foreground capitalize">{profile?.user_type?.replace("_", " ")}</p>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-muted-foreground" /> {user?.email}</div>
            {profile?.state && <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /> {profile.district}, {profile.state}</div>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
