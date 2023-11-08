import { writable } from 'svelte/store';

type OcrStore = {
	imageDataBase64: string;
	rawText: string;
	status: string | null;
};

export const ocrStore = writable<OcrStore>({ imageDataBase64: '', rawText: '', status: null });
