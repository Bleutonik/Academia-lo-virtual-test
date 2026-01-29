import { Link } from "react-router-dom";
import { LogIn, User, GraduationCap, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated, isAdmin, currentUser } = useAuth();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold text-lg hidden sm:block">
            Academia LoVirtual
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-white/80 text-sm hidden md:block">
                {currentUser?.fullName}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                asChild
              >
                <Link to={isAdmin ? "/admin" : "/estudiante"}>
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  {isAdmin ? "Panel Admin" : "Mi Panel"}
                </Link>
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 border border-white/30"
              asChild
            >
              <Link to="/login">
                <LogIn className="w-4 h-4 mr-2" />
                Iniciar Sesión
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
