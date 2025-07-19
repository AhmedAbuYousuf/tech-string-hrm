import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  GraduationCap, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  BookOpen, 
  Gift, 
  FileText, 
  User, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  CheckSquare,
  Clock,
  Monitor,
  Eye,
  MousePointer,
  Map,
  Activity,
  Settings,
  ChevronRight,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  collapsed: boolean;
}

const mainModules = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Users, label: "Employee Database", path: "/employees" },
  { icon: UserPlus, label: "Recruitment", path: "/recruitment" },
  { icon: GraduationCap, label: "Onboarding", path: "/onboarding" },
  { icon: Calendar, label: "Attendance & Leave", path: "/attendance" },
  { icon: DollarSign, label: "Payroll", path: "/payroll" },
  { icon: TrendingUp, label: "Performance", path: "/performance" },
  { icon: BookOpen, label: "Training", path: "/training" },
  { icon: Gift, label: "Benefits", path: "/benefits" },
  { icon: FileText, label: "Documents", path: "/documents" },
  { icon: User, label: "Self-Service", path: "/self-service" },
  { icon: Shield, label: "Access Control", path: "/access" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: AlertTriangle, label: "Disciplinary", path: "/disciplinary" },
  { icon: CheckSquare, label: "Policy Tracking", path: "/policies" },
];

const trackingModules = [
  { icon: Clock, label: "Time Tracking", path: "/tracking/time" },
  { icon: Monitor, label: "App Monitoring", path: "/tracking/apps" },
  { icon: Eye, label: "Screen Capture", path: "/tracking/screens" },
  { icon: MousePointer, label: "Activity Stats", path: "/tracking/activity" },
  { icon: TrendingUp, label: "Productivity", path: "/tracking/productivity" },
  { icon: Map, label: "Geolocation", path: "/tracking/location" },
  { icon: Activity, label: "Live Dashboard", path: "/tracking/dashboard" },
  { icon: Settings, label: "Monitoring Rules", path: "/tracking/rules" },
];

export function Sidebar({ collapsed }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    hrm: true,
    tracking: false
  });

  const toggleSection = (section: 'hrm' | 'tracking') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const NavItem = ({ icon: Icon, label, path }: { icon: any, label: string, path: string }) => (
    <Button
      variant="ghost"
      className={`w-full justify-start h-10 px-3 ${
        collapsed ? 'px-2' : ''
      } text-muted-foreground hover:text-foreground hover:bg-muted transition-colors`}
      onClick={() => window.location.href = path}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      {!collapsed && <span className="ml-3 text-sm">{label}</span>}
    </Button>
  );

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <ScrollArea className="h-full py-4">
        <div className="space-y-2">
          {/* HRM Section */}
          <div>
            {!collapsed && (
              <Button
                variant="ghost"
                onClick={() => toggleSection('hrm')}
                className="w-full justify-between px-3 py-2 h-8 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <span>CORE HRM</span>
                <ChevronRight className={`h-3 w-3 transition-transform ${
                  expandedSections.hrm ? 'rotate-90' : ''
                }`} />
              </Button>
            )}
            
            {(expandedSections.hrm || collapsed) && (
              <div className="space-y-1 px-2">
                {mainModules.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            )}
          </div>

          {/* Employee Tracking Section */}
          <div className="pt-4">
            {!collapsed && (
              <Button
                variant="ghost"
                onClick={() => toggleSection('tracking')}
                className="w-full justify-between px-3 py-2 h-8 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <span>EMPLOYEE TRACKING</span>
                <ChevronRight className={`h-3 w-3 transition-transform ${
                  expandedSections.tracking ? 'rotate-90' : ''
                }`} />
              </Button>
            )}
            
            {expandedSections.tracking && (
              <div className="space-y-1 px-2">
                {trackingModules.map((item, index) => (
                  <NavItem key={index} {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}