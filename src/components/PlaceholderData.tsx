'use client';

import { useEffect, useState } from 'react';
import { fetchPlaceholderPosts, type PlaceholderPost } from '@/lib/placeholder-api';
import { Button } from '@/components/ui/button';

/**
 * Example component that fetches from the placeholder API.
 * Demonstrates client-side data fetching; replace with WP-BE when ready.
 */
export function PlaceholderData() {
  const [posts, setPosts] = useState<PlaceholderPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPlaceholderPosts();
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-4 text-card-foreground">
        <p className="text-muted-foreground">Loading placeholder data…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-card p-4">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" className="mt-2" onClick={load}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4 text-left">
      <h2 className="text-lg font-semibold mb-2">Example: Placeholder API (JSONPlaceholder)</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Replace this with calls to WP-BE (e.g. /api/users) when the backend is running.
      </p>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="text-sm border-b border-border pb-2 last:border-0">
            <span className="font-medium">{post.title}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" size="sm" className="mt-4" onClick={load}>
        Refresh
      </Button>
    </div>
  );
}
