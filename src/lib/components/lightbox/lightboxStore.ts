// src/lib/stores/lightbox.ts
import { writable } from 'svelte/store';

export const lightboxMedia = writable<Media | null>(null);