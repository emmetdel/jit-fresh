export default function Home() {
  return (
    <div class="min-h-screen bg-background text-foreground">
      <div class="max-w-screen-xl mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <h1 class="text-6xl font-bold mb-4 text-primary">
            Jiu Jitsu Journal
          </h1>
          <p class="text-xl text-muted-foreground">
            Track your progress. Master your art.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="bg-card p-6 rounded-lg shadow-lg border border-border">
            <h2 class="text-2xl font-bold mb-4 text-primary">
              Track Techniques
            </h2>
            <p class="text-muted-foreground">
              Record and organize your learned techniques, submissions, and
              positions.
            </p>
          </div>

          <div class="bg-card p-6 rounded-lg shadow-lg border border-border">
            <h2 class="text-2xl font-bold mb-4 text-primary">Log Sessions</h2>
            <p class="text-muted-foreground">
              Keep detailed notes of your training sessions, sparring rounds,
              and competitions.
            </p>
          </div>

          <div class="bg-card p-6 rounded-lg shadow-lg border border-border">
            <h2 class="text-2xl font-bold mb-4 text-primary">
              Monitor Growth
            </h2>
            <p class="text-muted-foreground">
              Visualize your progress and identify areas for improvement.
            </p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="/login"
            class="inline-block bg-primary hover:bg-primary/90 text-text-primary font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
