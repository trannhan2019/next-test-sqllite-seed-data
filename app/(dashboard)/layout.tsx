import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

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
        <main className="w-full bg-background p-3 flex-1">
          <div className="border p-3 bg-background border-gray-200 rounded-md shadow-md h-full">
            {children}
          </div>
        </main>
      </section>
    </SidebarProvider>
  );
}
