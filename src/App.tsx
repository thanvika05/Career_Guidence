import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import AIChatbot from "@/components/AIChatbot";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import ChatbotPage from "./pages/ChatbotPage";
import CollegesPage from "./pages/CollegesPage";
import CutoffPredictor from "./pages/CutoffPredictor";
import CareersPage from "./pages/CareersPage";
import RoadmapPage from "./pages/RoadmapPage";
import SkillsPage from "./pages/SkillsPage";
import ExamsPage from "./pages/ExamsPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import InternshipsPage from "./pages/InternshipsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CompaniesPage from "./pages/CompaniesPage";
import HigherEdPage from "./pages/HigherEdPage";
import ResumeBuilder from "./pages/ResumeBuilder";
import TrendsPage from "./pages/TrendsPage";
import DailyTasksPage from "./pages/DailyTasksPage";
import AlertsPage from "./pages/AlertsPage";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route path="chatbot" element={<ChatbotPage />} />
              <Route path="colleges" element={<CollegesPage />} />
              <Route path="cutoff" element={<CutoffPredictor />} />
              <Route path="careers" element={<CareersPage />} />
              <Route path="roadmap" element={<RoadmapPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="exams" element={<ExamsPage />} />
              <Route path="scholarships" element={<ScholarshipsPage />} />
              <Route path="internships" element={<InternshipsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="companies" element={<CompaniesPage />} />
              <Route path="higher-ed" element={<HigherEdPage />} />
              <Route path="resume" element={<ResumeBuilder />} />
              <Route path="trends" element={<TrendsPage />} />
              <Route path="tasks" element={<DailyTasksPage />} />
              <Route path="alerts" element={<AlertsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Routes>
            <Route path="/dashboard/*" element={<AIChatbot floating />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
