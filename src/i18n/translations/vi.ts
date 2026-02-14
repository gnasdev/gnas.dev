import type { UITranslations } from '../types';

export const vi = {
	meta: {
		title: 'NS Labs',
		description:
			'Một vài sản phẩm số mình tự xây dựng — từ mua sắm, quản lý tài chính đến công cụ cho developer.',
		ogDescription:
			'Các sản phẩm số tự xây dựng — mua sắm, tài chính cá nhân, học từ vựng, công cụ developer.',
	},
	nav: {
		about: 'Giới Thiệu',
		products: 'Sản Phẩm',
		contact: 'Liên Hệ',
	},
	hero: {
		subtitle: 'TP. Hồ Chí Minh',
		description:
			'Mình xây dựng {highlight} phục vụ nhu cầu hàng ngày — mua sắm, quản lý tài chính, học từ vựng và hỗ trợ phát triển phần mềm.',
		descriptionHighlight: 'các sản phẩm số',
		viewProducts: 'Xem Sản Phẩm',
	},
	about: {
		heading: 'Giới Thiệu',
		paragraphs: [
			'NS Labs là nơi mình tập hợp các sản phẩm cá nhân — từ ý tưởng, thiết kế đến code và vận hành đều tự làm.',
			'Mỗi sản phẩm xuất phát từ nhu cầu thực tế, ưu tiên đơn giản và dễ dùng.',
		],
	},
	contact: {
		heading: 'Liên Hệ',
		description:
			'Muốn góp ý, trao đổi hay đơn giản là nói chuyện? Cứ gửi mail cho mình.',
		emailLabel: 'Email',
		blogLabel: 'Blog',
	},
	modal: {
		close: 'Đóng',
		visitPrefix: 'Truy cập ',
	},
} satisfies UITranslations;
