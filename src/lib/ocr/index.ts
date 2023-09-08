import Tesseract from 'tesseract.js';

export const processImage = (imageFile: File): Promise<string> => {
	return Tesseract.recognize(imageFile, 'eng', {}).then((r) => {
		const { data } = r;
		const { text } = data;

		return text;
	});
};
