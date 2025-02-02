import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Clock, MessageSquare } from "lucide-react";

export default function IssuesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Maintenance Issues
        </h1>
        <p className="text-muted-foreground">
          Track and manage maintenance requests and issues.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 urgent</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Kitchen sink leaking",
                status: "Urgent",
                date: "Today",
                description: "Water leaking under the sink",
              },
              {
                title: "Heating system maintenance",
                status: "Scheduled",
                date: "Tomorrow",
                description: "Annual heating system check",
              },
              {
                title: "Window repair",
                status: "In Progress",
                date: "Oct 25",
                description: "Fixing draft from living room window",
              },
            ].map((issue, index) => (
              <div key={index} className="flex items-center">
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium leading-none">
                    {issue.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {issue.description}
                  </p>
                </div>
                <div className="ml-4 space-y-1 text-right">
                  <p className="text-sm font-medium leading-none">
                    {issue.status}
                  </p>
                  <p className="text-sm text-muted-foreground">{issue.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Report New Issue</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full sm:w-auto">
            <MessageSquare className="mr-2 h-4 w-4" />
            Create New Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
