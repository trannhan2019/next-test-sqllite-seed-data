import { SidebarTrigger } from "@/components/ui/sidebar";


export function AppHeader() {
    return (
        <header className="h-16 p-3 border-b-2 border-gray-200 shadow-md flex items-center gap-2">
            
                <SidebarTrigger />
                <h1 className="text-xl font-semibold tracking-tight">
                    SBA - BHXH
                </h1>
        </header>
    )
}