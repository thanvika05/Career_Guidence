import {
  LayoutDashboard, GraduationCap, Briefcase, FileText, Brain, BookOpen,
  TrendingUp, Award, Target, Calendar, MessageSquare, User, LogOut,
  Building2, Lightbulb, Route, Wrench, Bell, ClipboardList
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "AI Advisor", url: "/dashboard/chatbot", icon: MessageSquare },
  { title: "Careers", url: "/dashboard/careers", icon: Briefcase },
  { title: "Roadmap", url: "/dashboard/roadmap", icon: Route },
  { title: "Skills", url: "/dashboard/skills", icon: Wrench },
];

const studentItems12th = [
  { title: "Colleges", url: "/dashboard/colleges", icon: Building2 },
  { title: "Cutoff Predictor", url: "/dashboard/cutoff", icon: Target },
  { title: "Entrance Exams", url: "/dashboard/exams", icon: Calendar },
  { title: "Scholarships", url: "/dashboard/scholarships", icon: Award },
];

const ugItems = [
  { title: "Internships", url: "/dashboard/internships", icon: Briefcase },
  { title: "Projects", url: "/dashboard/projects", icon: Lightbulb },
  { title: "Companies", url: "/dashboard/companies", icon: Building2 },
  { title: "Higher Education", url: "/dashboard/higher-ed", icon: BookOpen },
];

const toolItems = [
  { title: "Resume Builder", url: "/dashboard/resume", icon: FileText },
  { title: "Trends", url: "/dashboard/trends", icon: TrendingUp },
  { title: "Daily Tasks", url: "/dashboard/tasks", icon: ClipboardList },
  { title: "Alerts", url: "/dashboard/alerts", icon: Bell },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { profile, signOut } = useAuth();
  const isActive = (path: string) => location.pathname === path;

  const studentSpecific = profile?.user_type === "ug_student" ? ugItems : studentItems12th;
  const groupLabel = profile?.user_type === "ug_student" ? "UG Modules" : "12th Modules";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {!collapsed && (
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">CareerGuide AI</p>
              <p className="text-xs text-muted-foreground">{profile?.user_type === "ug_student" ? "UG Student" : "12th Student"}</p>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studentSpecific.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {toolItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/dashboard/profile" className="hover:bg-muted/50" activeClassName="bg-primary/10 text-primary">
                <User className="mr-2 h-4 w-4" />
                {!collapsed && <span>Profile</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={signOut} className="hover:bg-destructive/10 text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              {!collapsed && <span>Sign Out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
