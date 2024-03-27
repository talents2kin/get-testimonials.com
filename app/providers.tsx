"use client"

import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { PropsWithChildren } from "react"
import { Toaster } from "@/components/ui/sonner";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider, Query } from "@tanstack/react-query";
const queryClient = new QueryClient();
export type ProvidersProps = PropsWithChildren; 
export const Providers= (props: ProvidersProps) => {
  return  <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  <QueryClientProvider client={queryClient}>
  <Toaster></Toaster>
  {props.children}
  </QueryClientProvider>
</ThemeProvider>
}