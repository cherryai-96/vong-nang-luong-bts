import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts YouTube Video ID from standard, short, or share URLs
 */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

/**
 * Returns privacy-enhanced embed URL with Vietnamese subtitles forced
 */
export function getYouTubeEmbedUrl(url: string, autoplay = true): string {
  const videoId = getYouTubeId(url);
  if (!videoId) return '';
  // cc_load_policy=1: force show closed captions
  // hl=vi: interface language Vietnamese
  // cc_lang_pref=vi: preferred subtitle language Vietnamese
  // enablejsapi=1: allow JavaScript control for captions auto-translation
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1&cc_load_policy=1&hl=vi&cc_lang_pref=vi${
    autoplay ? '&autoplay=1' : ''
  }`;
}

/**
 * Returns high-resolution YouTube thumbnail fallback
 */
export function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeId(url);
  if (!videoId) return '/images/hero-rings-showcase.jpg';
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
