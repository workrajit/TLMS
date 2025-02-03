"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Notifications() {
  const [show, setShow] = useState(true);

  // Auto-hide after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm">
      <Card>
        <CardHeader className="flex flex-row items-center space-x-4">
          <div className="flex-1">
            <CardTitle>New Maintenance Request</CardTitle>
            <CardDescription>Kitchen sink needs attention</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setShow(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Status: Pending Review
              </p>
              <p className="text-sm text-muted-foreground">
                Submitted 5 minutes ago
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
