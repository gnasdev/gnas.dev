import type { UITranslations } from '../types';

export const en = {
	meta: {
		title: 'NS Labs',
		description:
			'A few digital products I built — from shopping and personal finance to developer tools.',
		ogDescription:
			'Digital products I built — shopping, personal finance, vocabulary learning, developer tools.',
	},
	nav: {
		about: 'About',
		products: 'Products',
		contact: 'Contact',
	},
	hero: {
		subtitle: 'Ho Chi Minh City',
		description:
			'I build {highlight} for everyday needs — shopping, personal finance, vocabulary learning, and software development.',
		descriptionHighlight: 'digital products',
		viewProducts: 'View Products',
	},
	about: {
		heading: 'About',
		paragraphs: [
			'NS Labs is where I put together my personal projects — from idea, design, code, to operations, all done by myself.',
			'Each product comes from a real need, prioritizing simplicity and usability.',
		],
	},
	contact: {
		heading: 'Contact',
		description:
			'Got feedback, questions, or just want to chat? Drop me an email.',
		emailLabel: 'Email',
		blogLabel: 'Blog',
	},
	modal: {
		close: 'Close',
		visitPrefix: 'Visit ',
	},
} satisfies UITranslations;
