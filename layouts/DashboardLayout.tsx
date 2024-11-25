import { ComponentChildren } from "preact";
import { Header } from "../islands/Header.tsx";

interface DashboardLayoutProps {
  children: ComponentChildren;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div class="min-h-screen bg-background text-text">
      <Header />

      <main class="max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
