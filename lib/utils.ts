import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import slugify from 'slugify'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSlug(home: string, away: string, date: string) {
  return slugify(`${home}-${away}-${date}`, { lower: true, strict: true })
}
