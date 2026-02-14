import type { ProjectTranslation } from '../types';

export const projectsVi: ProjectTranslation[] = [
	{
		title: 'NS Shop',
		description:
			'Trang thời trang online — tìm sản phẩm, đặt hàng, theo dõi đơn.',
		tagline: 'Mua sắm thời trang online.',
		highlights: ['Tìm kiếm sản phẩm', 'Đặt hàng & theo dõi'],
		featureGroups: [
			{
				heading: 'Mua sắm',
				features: [
					{
						title: 'Tìm kiếm & lọc',
						description:
							'Lọc theo danh mục, kích cỡ, màu sắc, thương hiệu — hoặc tìm bằng từ khóa.',
					},
					{
						title: 'Biến thể sản phẩm',
						description:
							'Đầy đủ size và màu cho mỗi sản phẩm, giá và tồn kho cập nhật realtime.',
					},
					{
						title: 'Đánh giá',
						description:
							'Xem review từ người mua hoặc tự viết đánh giá.',
					},
					{
						title: 'Yêu thích',
						description:
							'Lưu sản phẩm quan tâm để xem lại sau.',
					},
				],
			},
			{
				heading: 'Giỏ hàng & thanh toán',
				features: [
					{
						title: 'Không cần tài khoản',
						description:
							'Thêm vào giỏ hàng ngay, đăng ký sau cũng được.',
					},
					{
						title: 'Thanh toán',
						description:
							'COD hoặc chuyển khoản.',
					},
					{
						title: 'Địa chỉ giao hàng',
						description:
							'Lưu nhiều địa chỉ, đặt mặc định cho lần sau.',
					},
					{
						title: 'Theo dõi đơn',
						description:
							'Cập nhật trạng thái đơn hàng qua email tự động.',
					},
				],
			},
		],
	},
	{
		title: 'NS Money',
		description:
			'Quản lý thu chi cá nhân — nhập bằng ngôn ngữ tự nhiên qua AI, ghi chép nhanh qua Telegram bot, xem thống kê trực quan.',
		tagline: 'Quản lý tài chính cá nhân.',
		highlights: ['AI nhập liệu', 'Telegram bot', 'Thống kê'],
		featureGroups: [
			{
				heading: 'Quản lý thu chi',
				features: [
					{
						title: 'Nhiều ví',
						description:
							'Tách riêng tiết kiệm, chi tiêu hàng ngày, kinh doanh — mỗi ví một mục đích.',
					},
					{
						title: 'Phân loại giao dịch',
						description:
							'Danh mục tùy chỉnh và ghi chú cho mỗi giao dịch.',
					},
					{
						title: 'Lịch sử',
						description:
							'Tra cứu giao dịch theo ngày, số tiền hoặc ví.',
					},
					{
						title: 'Đa tiền tệ',
						description:
							'Hỗ trợ VND, USD và các đơn vị tiền tệ khác.',
					},
				],
			},
			{
				heading: 'AI hỗ trợ',
				features: [
					{
						title: 'Quét hóa đơn',
						description:
							'Chụp ảnh hóa đơn, AI tự đọc số tiền và chi tiết.',
					},
					{
						title: 'Nhập bằng ngôn ngữ tự nhiên',
						description:
							'Gõ "cà phê 50k" hay "lương 15 triệu" — AI hiểu và tạo giao dịch.',
					},
					{
						title: 'Xử lý linh hoạt',
						description:
							'Viết tắt, nhiều giao dịch trong một câu, định dạng tiền tệ khác nhau — đều xử lý được.',
					},
					{
						title: 'Tự động phân loại',
						description:
							'Mô tả chi tiêu bằng ngôn ngữ thường ngày, AI tự phân loại.',
					},
				],
			},
			{
				heading: 'Telegram bot',
				features: [
					{
						title: 'Ghi chép nhanh',
						description:
							'Gửi tin nhắn cho bot để ghi chi tiêu — tiện khi đang di chuyển.',
					},
					{
						title: 'Tra cứu',
						description:
							'Kiểm tra số dư, giao dịch gần đây, thống kê chi tiêu qua tin nhắn.',
					},
					{
						title: 'Báo cáo',
						description:
							'Tổng kết theo ngày, tuần, tháng hoặc năm ngay trong Telegram.',
					},
					{
						title: 'Bảo mật',
						description:
							'Liên kết tài khoản bằng mã dùng một lần.',
					},
				],
			},
			{
				heading: 'Thống kê',
				features: [
					{
						title: 'Biểu đồ thu chi',
						description:
							'Thu nhập và chi tiêu hiển thị qua biểu đồ, so sánh theo khoảng thời gian.',
					},
					{
						title: 'Chi tiêu theo danh mục',
						description:
							'Xem chi tiết tiền đi đâu theo từng danh mục.',
					},
					{
						title: 'Bản đồ nhiệt',
						description:
							'Nhận ra quy luật chi tiêu qua heatmap.',
					},
					{
						title: 'Số dư tích lũy',
						description:
							'Theo dõi số dư và tỷ lệ tiết kiệm theo thời gian.',
					},
				],
			},
		],
	},
	{
		title: 'Vocab',
		description:
			'App học từ vựng tiếng Anh — spaced repetition, bài tập do AI tạo, bảng xếp hạng.',
		tagline: 'Học từ vựng tiếng Anh.',
		highlights: ['Spaced repetition', 'AI tạo bài tập', 'Bảng xếp hạng'],
		featureGroups: [
			{
				heading: 'Ôn tập',
				features: [
					{
						title: 'Spaced repetition',
						description:
							'Thuật toán tính thời điểm ôn tập tối ưu để ghi nhớ lâu dài.',
					},
					{
						title: 'Độ khó tự điều chỉnh',
						description:
							'Tự động điều chỉnh theo trình độ thực tế của bạn.',
					},
					{
						title: 'Phiên ôn tập sẵn sàng',
						description:
							'Tính toán sẵn ở nền — mở app là học được ngay.',
					},
					{
						title: 'Tỷ lệ 60/40',
						description:
							'Cân bằng giữa từ mới và ôn tập theo tỷ lệ tối ưu cho ghi nhớ.',
					},
				],
			},
			{
				heading: 'Luyện tập',
				features: [
					{
						title: 'Từ vựng',
						description:
							'Học từ mới với định nghĩa, cách phát âm và ví dụ ngữ cảnh.',
					},
					{
						title: 'Ngữ pháp',
						description:
							'Bài tập phát hiện lỗi ngữ pháp — thì, hòa hợp chủ vị, cấu trúc câu.',
					},
					{
						title: 'Đọc hiểu',
						description:
							'Đoạn văn kèm câu hỏi đúng/sai và trả lời ngắn.',
					},
					{
						title: 'Trắc nghiệm AI',
						description:
							'Câu hỏi do AI tạo, nhiều cấp độ, không lặp lại.',
					},
				],
			},
			{
				heading: 'AI hỗ trợ',
				features: [
					{
						title: 'Từ điển',
						description:
							'Định nghĩa chi tiết kèm ví dụ, từ đồng nghĩa, trái nghĩa — do AI tổng hợp.',
					},
					{
						title: 'Song ngữ Anh-Việt',
						description:
							'Mỗi định nghĩa có cả tiếng Anh và tiếng Việt.',
					},
					{
						title: 'Bài tập cá nhân hóa',
						description:
							'AI tạo bài tập dựa trên từ khóa và mức độ khó bạn chọn.',
					},
					{
						title: 'Chấm điểm tự động',
						description:
							'Viết câu trả lời tự do, AI chấm và phản hồi chi tiết.',
					},
				],
			},
			{
				heading: 'Thi đua',
				features: [
					{
						title: 'Heatmap học tập',
						description:
							'Bản đồ nhiệt kiểu GitHub hiển thị từng ngày bạn học.',
					},
					{
						title: 'Xếp hạng kỹ năng',
						description:
							'Điểm MMR cho từ vựng, ngữ pháp và đọc hiểu — leo hạng từ Đồng lên Cao Thủ.',
					},
					{
						title: 'Bảng xếp hạng',
						description:
							'So sánh với người học khác, lọc theo ngôn ngữ và kỹ năng.',
					},
					{
						title: 'Thống kê cá nhân',
						description:
							'Chuỗi học tập, tỷ lệ chính xác, số từ đã chinh phục.',
					},
				],
			},
			{
				heading: 'Sắp xếp',
				features: [
					{
						title: 'Bộ sưu tập',
						description:
							'Tạo bộ sưu tập tùy chỉnh — nhóm từ, bài tập, nội dung theo chủ đề.',
					},
					{
						title: 'Lưu khi học',
						description:
							'Gặp từ mới trong lúc luyện tập? Một chạm lưu lại kèm ngữ cảnh.',
					},
					{
						title: 'Kho từ khóa',
						description:
							'Xây dựng từ điển từ khóa riêng — theo dõi từng từ xuất hiện ở đâu.',
					},
					{
						title: 'Đánh dấu',
						description:
							'Đánh dấu từ vựng, ngữ pháp, trắc nghiệm, đọc hiểu — tổ chức tại một nơi.',
					},
				],
			},
		],
	},
	{
		title: 'NS Drive',
		description:
			'Đồng bộ file giữa nhiều dịch vụ cloud — kết nối Google Drive, Dropbox, OneDrive,... vào một nơi, thiết kế workflow đồng bộ, mã hóa AES-256.',
		tagline: 'Đồng bộ nhiều cloud trong một app.',
		highlights: ['Nhiều cloud', 'Workflow đồng bộ', 'Mã hóa AES-256'],
		featureGroups: [
			{
				heading: 'Kết nối cloud',
				features: [
					{
						title: 'Nhiều dịch vụ',
						description:
							'Google Drive, Dropbox, OneDrive, iCloud và nhiều dịch vụ khác — gom vào một giao diện.',
					},
					{
						title: 'Chế độ đồng bộ',
						description:
							'Một chiều, hai chiều hoặc sao chép — xử lý xung đột tự động.',
					},
					{
						title: 'Cấu hình chi tiết',
						description:
							'60+ tùy chọn: giới hạn băng thông, bộ lọc tệp, kiểm soát an toàn.',
					},
					{
						title: 'Chạy song song',
						description:
							'Nhiều tác vụ đồng bộ cùng lúc, mỗi tác vụ có tiến độ và log riêng.',
					},
				],
			},
			{
				heading: 'Workflow',
				features: [
					{
						title: 'Canvas kéo thả',
						description:
							'Thiết kế quy trình đồng bộ nhiều bước bằng kéo và thả trên canvas.',
					},
					{
						title: 'Thực thi theo DAG',
						description:
							'Chạy theo đồ thị có hướng — tự động giải quyết phụ thuộc và phát hiện vòng lặp.',
					},
					{
						title: 'Lập lịch cron',
						description:
							'Tự động hóa workflow theo lịch cron — xem lần chạy trước và lần tiếp theo.',
					},
					{
						title: 'Chạy từ system tray',
						description:
							'Khởi động workflow từ khay hệ thống, không cần mở app.',
					},
				],
			},
			{
				heading: 'Quản lý file',
				features: [
					{
						title: 'Duyệt file',
						description:
							'Truy cập file trên bất kỳ dịch vụ nào — tạo thư mục, xóa, di chuyển từ một giao diện.',
					},
					{
						title: 'Chuyển file',
						description:
							'Di chuyển file giữa các dịch vụ hoặc máy tính với tiến độ realtime.',
					},
					{
						title: 'Dọn dẹp',
						description:
							'Phát hiện file trùng lặp, kiểm tra tính toàn vẹn, tính dung lượng đã dùng.',
					},
					{
						title: 'Lịch sử',
						description:
							'Log đầy đủ mọi thao tác đồng bộ và quản lý file.',
					},
				],
			},
			{
				heading: 'Bảo mật',
				features: [
					{
						title: 'Mã hóa AES-256',
						description:
							'Dữ liệu nhạy cảm được mã hóa AES-256-GCM — token, database đều được bảo vệ.',
					},
					{
						title: 'Master password',
						description:
							'Mật khẩu chính với Argon2id, giới hạn số lần thử mở khóa.',
					},
					{
						title: 'Sao lưu cấu hình',
						description:
							'Xuất toàn bộ cấu hình ra một file nén.',
					},
					{
						title: 'Đa nền tảng',
						description:
							'App desktop cho macOS, Linux và Windows — tích hợp system tray.',
					},
				],
			},
		],
	},
	{
		title: 'NS Tracing Extension',
		description:
			'Extension trình duyệt ghi lại phiên debug — video màn hình, console log, network request, WebSocket frame. Hỗ trợ source map để giải mã code minify.',
		tagline: 'Ghi lại phiên debug trên trình duyệt.',
		highlights: ['Ghi hình', 'Console & network', 'Source map'],
		featureGroups: [
			{
				heading: 'Thu thập',
				features: [
					{
						title: 'Ghi hình',
						description:
							'Quay video tab trình duyệt ở VP9/VP8 có âm thanh, bấm nút là chạy.',
					},
					{
						title: 'Console log',
						description:
							'Ghi lại mọi log, warning, error kèm chi tiết object.',
					},
					{
						title: 'Network',
						description:
							'Header, body, timing, status code — lưu toàn bộ network activity.',
					},
					{
						title: 'WebSocket',
						description:
							'Bắt mọi frame gửi và nhận trên kết nối WebSocket.',
					},
				],
			},
			{
				heading: 'Xuất & chia sẻ',
				features: [
					{
						title: 'Source map',
						description:
							'Stack trace từ code minify được giải mã về source gốc — đúng file, đúng dòng.',
					},
					{
						title: 'Tải ZIP',
						description:
							'Toàn bộ phiên debug — video, log, network — gói trong một file ZIP.',
					},
					{
						title: 'Upload lên server',
						description:
							'Đẩy bản ghi lên NS Tracing Server để lưu trữ và chia sẻ với team.',
					},
					{
						title: 'Link chia sẻ',
						description:
							'Tạo URL xem ngay sau khi upload — đồng nghiệp mở link là xem được.',
					},
				],
			},
		],
	},
	{
		title: 'NS Tracing Server',
		description:
			'Phát lại phiên debug — video đồng bộ với console, network và WebSocket. Timeline đánh dấu lỗi và request để nhảy thẳng đến vấn đề.',
		tagline: 'Phát lại và phân tích phiên debug.',
		highlights: ['Phát lại đồng bộ', 'Timeline', 'Phân tích'],
		featureGroups: [
			{
				heading: 'Phát lại',
				features: [
					{
						title: 'Video + log đồng bộ',
						description:
							'Video và log chạy cùng lúc — thấy chính xác điều gì xảy ra khi lỗi phát sinh.',
					},
					{
						title: 'Timeline',
						description:
							'Thanh timeline với marker tự động — nhảy đến bất kỳ thời điểm nào bằng một click.',
					},
					{
						title: 'Marker lỗi',
						description:
							'Marker đỏ đánh dấu lỗi console trên timeline.',
					},
					{
						title: 'Marker network',
						description:
							'Marker xanh cho mỗi network request — liên kết hành vi người dùng với dữ liệu truyền tải.',
					},
				],
			},
			{
				heading: 'Phân tích',
				features: [
					{
						title: 'Console chi tiết',
						description:
							'Duyệt log với timestamp, mức độ nghiêm trọng và stack trace. Source map trỏ về code gốc.',
					},
					{
						title: 'Xem request',
						description:
							'Kiểm tra từng HTTP request — header, status code, kích thước, thời gian phản hồi.',
					},
					{
						title: 'WebSocket',
						description:
							'Xem từng frame WebSocket với payload, sắp xếp theo kết nối.',
					},
					{
						title: 'Upload',
						description:
							'Nhận video lên đến 500MB kèm telemetry, lưu trữ với ID chia sẻ.',
					},
				],
			},
		],
	},
];
