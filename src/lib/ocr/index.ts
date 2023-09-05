import Tesseract from 'tesseract.js';

export const processImage = (imageFile: File): Promise<string> => {
	return Tesseract.recognize(imageFile, 'eng', {
		logger: (message) => {
			console.debug(message);
		}
	}).then((r) => {
		const { data } = r;
		const { text } = data;

		return text;
	});
};
