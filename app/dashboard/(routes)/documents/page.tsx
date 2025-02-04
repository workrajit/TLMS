"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload } from "lucide-react";

export default function DocumentsPage() {
  // const viewDocument = (documentName) => {
  //   console.log(`Viewing document: ${documentName}`);
  //   // Add your document viewing logic here
  // };

  const handleUpload = () => {
    console.log("Uploading document");
    // Add your upload logic here
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
            <p className="text-muted-foreground">
              Access and manage your rental documents and agreements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lease Agreement
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm">Current lease agreement and terms</div>
                <Button
                  variant="link"
                  className="mt-2 h-auto p-0"
                  // onClick={() => viewDocument("Lease Agreement")}
                >
                  View Document
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  House Rules
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm">Building policies and guidelines</div>
                <Button
                  variant="link"
                  className="mt-2 h-auto p-0"
                  onClick={() => viewDocument("House Rules")}
                >
                  View Document
                </Button>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1 md:col-span-2 lg:col-start-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Insurance</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  Renter&apos;s insurance documentation
                </div>
                <Button
                  variant="link"
                  className="mt-2 h-auto p-0"
                  onClick={() => viewDocument("Insurance")}
                >
                  View Document
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Lease_Agreement_2023.pdf",
                    type: "PDF",
                    date: "Oct 15, 2023",
                    size: "2.4 MB",
                  },
                  {
                    name: "Maintenance_Request_Form.pdf",
                    type: "PDF",
                    date: "Oct 10, 2023",
                    size: "1.2 MB",
                  },
                  {
                    name: "Insurance_Certificate.pdf",
                    type: "PDF",
                    date: "Oct 1, 2023",
                    size: "856 KB",
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {doc.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {doc.type} • {doc.size}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        {doc.date}
                      </div>
                      <Button
                        variant="link"
                        className="h-auto p-0"
                        onClick={() => viewDocument(doc.name)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Upload Document</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full sm:w-auto" onClick={handleUpload}>
                <Upload className="mr-2 h-4 w-4" />
                Upload New Document
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
