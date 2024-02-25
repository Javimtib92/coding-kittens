import { type ClassValue, clsx as lite } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(lite(inputs));
}
