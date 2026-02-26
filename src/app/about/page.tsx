import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="willow-route flex min-h-screen flex-col bg-pastel-cream">
      <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-pastel-ink mb-6">About Willow.Prints</h1>

        <div className="space-y-6 text-pastel-ink/90 leading-relaxed">
          <p>
            Willow.Prints is a small Arts & Crafts shop focused on personalized and handcrafted items. We make totes, mugs, keychains, and more—each piece designed to be both useful and meaningful. Whether you are looking for a gift with a name on it, a sturdy bag for everyday use, or something special for an occasion, we aim to deliver quality and a touch of care in every order.
          </p>
          <p>
            We believe in keeping things simple and personal: clear designs, durable materials, and attention to detail. Our products are made in small batches so we can keep standards high and stay close to what our customers love. Thank you for supporting a small shop—we are glad you are here.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="bg-pastel-sage text-pastel-ink hover:bg-pastel-sage/90">
            <Link href="/home">Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-pastel-border text-pastel-ink hover:bg-pastel-mist">
            <Link href="/products">View products</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
