import { Button } from '@/components/ui/button';
import { PlaceholderData } from '@/components/PlaceholderData';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-muted/30">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          WillowPrints
        </h1>
        <p className="text-muted-foreground">
          Next.js + TypeScript + Tailwind + Shadcn UI
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button>Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
        {/* Example: fetch from placeholder API */}
        <PlaceholderData />
      </div>
    </main>
  );
}
