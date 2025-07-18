import { 
  Users, 
  UserCheck, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  CheckCircle 
} from "lucide-react";
import { MetricCard } from "./MetricCard";

export function DashboardGrid() {
  const metrics = [
    {
      title: "Total Employees",
      value: "1,247",
      change: "+12 this month",
      changeType: "positive" as const,
      icon: Users,
      iconColor: "text-primary"
    },
    {
      title: "Active Today",
      value: "1,189",
      change: "95.3% attendance",
      changeType: "positive" as const,
      icon: UserCheck,
      iconColor: "text-success"
    },
    {
      title: "Avg. Work Hours",
      value: "7.8h",
      change: "+0.3h from last week",
      changeType: "positive" as const,
      icon: Clock,
      iconColor: "text-accent"
    },
    {
      title: "Payroll This Month",
      value: "$487K",
      change: "+2.1% from last month",
      changeType: "neutral" as const,
      icon: DollarSign,
      iconColor: "text-warning"
    },
    {
      title: "Productivity Score",
      value: "87%",
      change: "+5% this week",
      changeType: "positive" as const,
      icon: TrendingUp,
      iconColor: "text-success"
    },
    {
      title: "Leave Requests",
      value: "23",
      change: "Pending approval",
      changeType: "neutral" as const,
      icon: Calendar,
      iconColor: "text-primary"
    },
    {
      title: "Issues Open",
      value: "7",
      change: "-3 resolved today",
      changeType: "positive" as const,
      icon: AlertTriangle,
      iconColor: "text-destructive"
    },
    {
      title: "Training Completed",
      value: "156",
      change: "+23 this week",
      changeType: "positive" as const,
      icon: CheckCircle,
      iconColor: "text-success"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <MetricCard {...metric} />
        </div>
      ))}
    </div>
  );
}