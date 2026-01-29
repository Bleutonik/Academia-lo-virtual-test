import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { SprintReviewProvider } from "@/contexts/SprintReviewContext";
import Index from "./pages/Index";
import CoursePage from "./pages/CoursePage";
import ModulePage from "./pages/ModulePage";
import CertificatePage from "./pages/CertificatePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SprintReviewProvider>
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/estudiante" element={<StudentDashboard />} />
                <Route path="/curso/:slug" element={<CoursePage />} />
                <Route path="/curso/:slug/modulo/:moduleId" element={<ModulePage />} />
                <Route path="/curso/:slug/certificado" element={<CertificatePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ProgressProvider>
      </SprintReviewProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
