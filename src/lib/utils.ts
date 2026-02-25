import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx; used by Shadcn components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
