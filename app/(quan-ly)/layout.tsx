import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <section className="w-full flex flex-col h-screen">
        <AppHeader />
        <main className="w-full bg-background p-5 flex-1">
          {children}
        </main>
      </section>
    </SidebarProvider>
  );
}
