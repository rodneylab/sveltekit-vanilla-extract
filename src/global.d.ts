/// <reference types="@sveltejs/kit" />
import type { ILazyLoadInstance } from 'vanilla-lazyload';

export declare global {
	interface Document {
		lazyloadInstance: ILazyLoadInstance;
	}
}
