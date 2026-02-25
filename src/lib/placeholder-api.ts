/**
 * Example: fetch from JSONPlaceholder API (https://jsonplaceholder.typicode.com).
 * Replace with your WP-BE API base URL when ready, e.g. process.env.NEXT_PUBLIC_API_URL.
 */

const PLACEHOLDER_BASE = 'https://jsonplaceholder.typicode.com';

export interface PlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

/** Fetch a single post by id from JSONPlaceholder */
export async function fetchPlaceholderPost(id: number): Promise<PlaceholderPost> {
  const res = await fetch(`${PLACEHOLDER_BASE}/posts/${id}`, {
    next: { revalidate: 60 }, // cache for 60s when using Next.js fetch
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

/** Fetch posts list from JSONPlaceholder */
export async function fetchPlaceholderPosts(): Promise<PlaceholderPost[]> {
  const res = await fetch(`${PLACEHOLDER_BASE}/posts?_limit=5`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
