'use client';

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const menuMainItems = [
  {
    title: "Theo dõi BHXH",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const menuQLItems = [
  {
    title: "Quản lý CBNV",
    url: "/quan-ly-cbnv",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="gap-0">
        <h4 className="text-xl font-semibold tracking-tight text-center">SBA - BHXH</h4>
        <p className="text-muted-foreground text-sm text-center">
          Phần mềm quản lý BHXH tại SBA
        </p>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Menu Chính</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuMainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mb-5">
          <SidebarGroupLabel>Menu Quản lý</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuQLItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
