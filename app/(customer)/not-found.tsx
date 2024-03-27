"use client"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "@/features/auth/SigninButton";
import { Layout, LogIn } from "lucide-react";


export default function RouteError() {
  
  return (
    <Layout>
    <Card>
      <CardHeader>
        <CardTitle>Product not found.
        </CardTitle>
      <CardDescription>
        The product may deleted or you don't have permission to view it 

      </CardDescription>
      </CardHeader>
      <CardFooter>
       
        <SignInButton/>
      </CardFooter>
    </Card>
    </Layout>
  );
}