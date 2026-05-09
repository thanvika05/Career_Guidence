import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import DashboardHome from "@/components/dashboard/DashboardHome";

const Dashboard = () => {
  const { profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (profile && !profile.wizard_completed) {
    return <Navigate to="/onboarding" replace />;
  }

  const isExactDashboard = location.pathname === "/dashboard";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4">
            <SidebarTrigger className="mr-4" />
            <h2 className="text-lg font-semibold text-foreground">CareerGuide AI</h2>
          </header>
          <main className="flex-1 overflow-auto p-6">
            {isExactDashboard ? <DashboardHome /> : <Outlet />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
