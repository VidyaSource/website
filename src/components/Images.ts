import type {ImageMetadata} from "astro";

export const images = import.meta.glob<{ default: ImageMetadata }>('/src/img/**/*.{jpeg,jpg,png,gif,webp,svg}')
