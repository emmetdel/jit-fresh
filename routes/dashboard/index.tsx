import { PageProps } from "$fresh/server.ts";
import { Button } from "../../components/Button.tsx";
import DashboardLayout from "../../layouts/DashboardLayout.tsx";

export default function Dashboard(props: PageProps) {
  return (
    <DashboardLayout>
      <div class="p-6">
        {/* Quick Actions */}
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
          <div class="flex gap-4">
            <Button variant="primary">
              New Entry
            </Button>
            <Button variant="secondary">
              View All Entries
            </Button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div class="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 class="text-lg font-semibold mb-2">Total Entries</h2>
            <p class="text-3xl font-bold text-primary">42</p>
          </div>

          <div class="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 class="text-lg font-semibold mb-2">Streak</h2>
            <p class="text-3xl font-bold text-primary">7 days</p>
          </div>

          <div class="bg-card p-6 rounded-lg shadow-sm border border-border">
            <h2 class="text-lg font-semibold mb-2">This Month</h2>
            <p class="text-3xl font-bold text-primary">12 entries</p>
          </div>
        </div>

        {/* Recent Entries */}
        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-4">Recent Entries</h2>
          <div class="bg-card rounded-lg shadow-sm border border-border">
            <div class="divide-y divide-border">
              {[1, 2, 3].map((entry) => (
                <div class="p-4 hover:bg-secondary">
                  <div class="flex justify-between items-center">
                    <div>
                      <h3 class="font-medium">Journal Entry #{entry}</h3>
                      <p class="text-sm text-muted">2 days ago</p>
                    </div>
                    <button class="text-primary hover:text-primary-hover">
                      Read more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
