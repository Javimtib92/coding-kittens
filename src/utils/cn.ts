import { type ClassValue, clsx as lite } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return lite(inputs);
}
