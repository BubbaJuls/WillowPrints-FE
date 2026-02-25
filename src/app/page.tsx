import { redirect } from 'next/navigation';

/**
 * Root path redirects to Home for consistent navigation.
 */
export default function RootPage() {
  redirect('/home');
}
