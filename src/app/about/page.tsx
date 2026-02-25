import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">About WillowPrints</h1>
      <p className="text-muted-foreground mb-6 max-w-md text-center">
        Example route to demonstrate Next.js App Router structure.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Home</Link>
      </Button>
    </main>
  );
}
