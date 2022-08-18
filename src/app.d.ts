/// <reference types="@sveltejs/kit" />
import type { ILazyLoadInstance } from 'vanilla-lazyload';

export declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}
}

// types for vite-imagetools imports
export declare global {
	export module '*.jpg?w=200';
	export module '*.jpg?w=400;200&format=webp&srcset';
	export module '*.jpg?w=400;200&srcset';
}
