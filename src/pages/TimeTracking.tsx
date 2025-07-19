import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Clock, 
  Play, 
  Pause, 
  Square, 
  Monitor, 
  MousePointer, 
  Keyboard, 
  MapPin, 
  Activity,
  Eye,
  BarChart3,
  Calendar,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

export default function TimeTracking() {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTime, setCurrentTime] = useState("02:34:17");

  const employeeStats = [
    { name: "Sarah Chen", department: "Engineering", status: "Active", time: "7h 23m", productivity: 92, avatar: "/placeholder.svg" },
    { name: "Mike Johnson", department: "Design", status: "Idle", time: "6h 45m", productivity: 78, avatar: "/placeholder.svg" },
    { name: "Emma Davis", department: "Marketing", status: "Active", time: "8h 12m", productivity: 95, avatar: "/placeholder.svg" },
    { name: "Alex Wilson", department: "Sales", status: "Break", time: "5h 30m", productivity: 84, avatar: "/placeholder.svg" },
  ];

  const activityData = [
    { app: "VS Code", time: "3h 45m", percentage: 45, color: "bg-primary" },
    { app: "Chrome", time: "2h 20m", percentage: 28, color: "bg-accent" },
    { app: "Slack", time: "1h 30m", percentage: 18, color: "bg-success" },
    { app: "Figma", time: "45m", percentage: 9, color: "bg-warning" },
  ];

  const todayMetrics = [
    { label: "Total Time", value: "8h 15m", icon: Clock, change: "+12%" },
    { label: "Active Time", value: "6h 42m", icon: Activity, change: "+8%" },
    { label: "Productivity Score", value: "87%", icon: TrendingUp, change: "+5%" },
    { label: "Apps Used", value: "12", icon: Monitor, change: "+3%" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Time Tracking</h1>
            <p className="text-muted-foreground mt-2">
              Monitor employee productivity and time usage in real-time
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Today's Session</p>
              <p className="text-2xl font-mono font-bold text-foreground">{currentTime}</p>
            </div>
            <Button
              size="lg"
              onClick={() => setIsTracking(!isTracking)}
              className={isTracking ? "bg-destructive hover:bg-destructive/90" : ""}
            >
              {isTracking ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Today's Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todayMetrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <p className="text-xs text-success flex items-center mt-1">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {metric.change} from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="apps">Apps & Usage</TabsTrigger>
            <TabsTrigger value="activity">Activity Logs</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Real-time Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Real-time Activity
                  </CardTitle>
                  <CardDescription>
                    Live monitoring of employee activity across the organization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {employeeStats.slice(0, 3).map((employee, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{employee.name}</p>
                          <p className="text-xs text-muted-foreground">{employee.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={employee.status === 'Active' ? 'default' : employee.status === 'Idle' ? 'secondary' : 'outline'}
                          className="mb-1"
                        >
                          {employee.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{employee.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* App Usage Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    App Usage Today
                  </CardTitle>
                  <CardDescription>
                    Most used applications and time distribution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activityData.map((app, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{app.app}</span>
                        <span className="text-muted-foreground">{app.time}</span>
                      </div>
                      <Progress value={app.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Productivity Score */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Productivity Analysis
                  </CardTitle>
                  <CardDescription>
                    Daily productivity metrics and trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">87%</div>
                      <p className="text-sm text-muted-foreground">Overall Score</p>
                      <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span>Focused: 65%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-warning rounded-full"></div>
                          <span>Neutral: 22%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-destructive rounded-full"></div>
                          <span>Idle: 13%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Common monitoring and management tasks
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="mr-2 h-4 w-4" />
                    Take Screenshot
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    View Locations
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MousePointer className="mr-2 h-4 w-4" />
                    Activity Heatmap
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="employees" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Employee Time Tracking
                </CardTitle>
                <CardDescription>
                  Detailed view of all employee tracking data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employeeStats.map((employee, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={employee.avatar} />
                          <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">{employee.time}</p>
                          <p className="text-xs text-muted-foreground">Time worked</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{employee.productivity}%</p>
                          <p className="text-xs text-muted-foreground">Productivity</p>
                        </div>
                        <Badge 
                          variant={employee.status === 'Active' ? 'default' : employee.status === 'Idle' ? 'secondary' : 'outline'}
                        >
                          {employee.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apps" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Application Monitoring
                </CardTitle>
                <CardDescription>
                  Track application usage and website activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {activityData.map((app, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{app.app}</h4>
                          <p className="text-sm text-muted-foreground">Development Tool</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{app.time}</p>
                          <p className="text-sm text-muted-foreground">{app.percentage}% of day</p>
                        </div>
                      </div>
                      <Progress value={app.percentage} className="h-2" />
                      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                        <span>• 15 sessions today</span>
                        <span>• Last used: 5 min ago</span>
                        <span>• Category: Productive</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5" />
                  Activity Logs
                </CardTitle>
                <CardDescription>
                  Detailed keystroke, mouse activity, and idle time tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <Keyboard className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">2,847</p>
                      <p className="text-sm text-muted-foreground">Keystrokes today</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <MousePointer className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <p className="text-2xl font-bold">1,432</p>
                      <p className="text-sm text-muted-foreground">Mouse clicks</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <Clock className="h-8 w-8 mx-auto mb-2 text-warning" />
                      <p className="text-2xl font-bold">23m</p>
                      <p className="text-sm text-muted-foreground">Idle time</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { time: "14:30", activity: "High keyboard activity detected", type: "productive", duration: "15 min" },
                      { time: "14:15", activity: "Screen capture taken", type: "monitoring", duration: "1 sec" },
                      { time: "14:00", activity: "Idle period detected", type: "idle", duration: "8 min" },
                      { time: "13:45", activity: "Application switch: Chrome → VS Code", type: "neutral", duration: "2 sec" },
                      { time: "13:30", activity: "Location check: Office premises", type: "location", duration: "1 sec" },
                    ].map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            log.type === 'productive' ? 'bg-success' :
                            log.type === 'idle' ? 'bg-warning' :
                            log.type === 'monitoring' ? 'bg-primary' :
                            log.type === 'location' ? 'bg-accent' : 'bg-muted'
                          }`}></div>
                          <div>
                            <p className="text-sm font-medium">{log.activity}</p>
                            <p className="text-xs text-muted-foreground">Duration: {log.duration}</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Monitoring Reports
                </CardTitle>
                <CardDescription>
                  Generate comprehensive productivity and monitoring reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Quick Reports</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="mr-2 h-4 w-4" />
                        Daily Summary Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Weekly Productivity Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Monitor className="mr-2 h-4 w-4" />
                        Application Usage Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MapPin className="mr-2 h-4 w-4" />
                        Location Tracking Report
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Custom Reports</h4>
                    <p className="text-sm text-muted-foreground">
                      Create detailed reports with custom date ranges, specific employees, 
                      and selected metrics for comprehensive analysis.
                    </p>
                    <Button className="w-full">
                      Create Custom Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}