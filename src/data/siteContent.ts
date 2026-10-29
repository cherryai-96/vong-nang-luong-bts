export interface HealthTopic {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  edition: string;
  healthTheme: string;
  headline: string;
  subheading: string;
  accentHex: string;
  lightBgHex: string;
  bgGradient: string;
  image: string; // Transparent PNG (trimmed)
  posterImage: string; // Original brochure for transparency verification
  price: number;
  currency: string;
  healthTopics: HealthTopic[];
  supplierClaims: string[];
  verifiedBenefits: string[];
  evidenceSources: string[];
  isBenefitPublished: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  youtubeUrl: string;
  category: 'general' | 'deo-chan' | 'suc-manh' | 'thu-gian' | 'tre-hoa';
  productName: string;
  customerName?: string;
  duration?: string;
  thumbnail?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  siteTitle: 'VÒNG NĂNG LƯỢNG VÔ HƯỚNG',
  tagline: 'BỐN PHIÊN BẢN – BỐN GIẢI PHÁP CHĂM SÓC SỨC KHỎE',
  standardPrice: 2800000,
  currency: 'VNĐ',
  priceFormatted: '2.800.000 VNĐ',
  metaTitle: 'Vòng Năng Lượng Vô Hướng | 4 Dòng Vòng Chăm Sóc Sức Khỏe',
  metaDescription:
    'Tìm hiểu các dòng vòng hỗ trợ vận động, thể lực, thư giãn và sức khỏe chuyển hóa. Giá đồng nhất 2.800.000 VNĐ/vòng.',
};

export const NAV_ITEMS = [
  { label: 'Giới thiệu', href: '#hero' },
  { label: '4 Không', href: '#four-zeroes' },
  { label: 'Nhu cầu', href: '#health-topics' },
  { label: '4 dòng vòng', href: '#products' },
  { label: '5 Tác động', href: '#health-matrix' },
  { label: 'Công nghệ', href: '#technology' },
  { label: 'Kiểm chứng', href: '#visual-evidence' },
  { label: 'Video', href: '#video-showcase' },
  { label: 'Trải nghiệm', href: '#testimonials' },
];

export const HEALTH_CATEGORIES = [
  {
    id: 'deo-chan',
    theme: 'VẬN ĐỘNG & CÂN BẰNG',
    productName: 'Vòng Đeo Chân',
    accentColor: '#75D6EA',
    bgColor: '#F4FAFD',
    iconName: 'Activity',
    description: 'Tăng thể lực, nâng cao sức bền, cân bằng cơ thể và phục hồi cơ bắp trong di chuyển hằng ngày.',
    targetId: 'detail-deo-chan',
  },
  {
    id: 'suc-manh',
    theme: 'SỨC BỀN & THỂ LỰC',
    productName: 'Vòng Sức Mạnh',
    accentColor: '#DD3045',
    bgColor: '#FFF5F5',
    iconName: 'Zap',
    description: 'Cung cấp năng lượng, giảm mệt mỏi và tối ưu hiệu quả cho người vận động thể thao hoặc làm việc nặng.',
    targetId: 'detail-suc-manh',
  },
  {
    id: 'thu-gian',
    theme: 'THƯ GIÃN & GIẤC NGỦ',
    productName: 'Vòng Thư Giãn',
    accentColor: '#9479CD',
    bgColor: '#FAF5FF',
    iconName: 'Moon',
    description: 'Giảm căng thẳng lo âu, thư giãn toàn diện cơ thể và tâm trí, hỗ trợ giấc ngủ sâu hơn.',
    targetId: 'detail-thu-gian',
  },
  {
    id: 'tre-hoa',
    theme: 'TRAO ĐỔI CHẤT & SỨC KHỎE',
    productName: 'Vòng Trẻ Hóa',
    accentColor: '#4D709B',
    bgColor: '#E8F5FB',
    iconName: 'HeartPulse',
    description: 'Tăng cường trao đổi chất, kiểm soát cân nặng, hỗ trợ ổn định đường huyết và phục hồi thể trạng.',
    targetId: 'detail-tre-hoa',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'deo-chan',
    name: 'Vòng Đeo Chân',
    edition: 'Flexibility',
    healthTheme: 'Vận động & cân bằng',
    headline: 'VÒNG NĂNG LƯỢNG ĐEO CHÂN',
    subheading: 'TĂNG CƯỜNG NĂNG LƯỢNG – NÂNG CAO SỨC KHỎE',
    accentHex: '#75D6EA',
    lightBgHex: '#F4FAFD',
    bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F4FAFD 100%)',
    image: '/images/transparent/deo-chan-trimmed.png',
    posterImage: '/images/poster-deo-chan.jpg',
    price: SITE_CONFIG.standardPrice,
    currency: SITE_CONFIG.currency,
    healthTopics: [
      {
        title: 'Tăng thể lực, sức bền',
        description: 'Phục hồi & phát triển cơ bắp',
      },
      {
        title: 'Cân bằng cơ thể',
        description: 'Hỗ trợ, chống té ngã cho người lớn tuổi, sức khỏe yếu',
      },
      {
        title: 'Chống tai biến, đột quỵ',
        description: 'Hỗ trợ viêm xương khớp, gout',
      },
    ],
    supplierClaims: [
      'Tăng thể lực, sức bền, phục hồi & phát triển cơ bắp.',
      'Cân bằng cơ thể, hỗ trợ chống té ngã cho người lớn tuổi, sức khỏe yếu.',
      'Hỗ trợ chống tai biến, đột quỵ, viêm xương khớp, gout.',
    ],
    verifiedBenefits: [],
    evidenceSources: [],
    isBenefitPublished: false,
  },
  {
    id: 'suc-manh',
    name: 'Vòng Sức Mạnh',
    edition: 'Power',
    healthTheme: 'Sức bền & thể lực',
    headline: 'VÒNG NĂNG LƯỢNG SỨC MẠNH',
    subheading: 'TĂNG CƯỜNG SỨC KHỎE TOÀN DIỆN',
    accentHex: '#DD3045',
    lightBgHex: '#FFF5F5',
    bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5F5 100%)',
    image: '/images/transparent/suc-manh-trimmed.png',
    posterImage: '/images/poster-suc-manh.jpg',
    price: SITE_CONFIG.standardPrice,
    currency: SITE_CONFIG.currency,
    healthTopics: [
      {
        title: 'Tăng sức bền, giảm mệt mỏi',
        description: 'Tối ưu hiệu quả luyện tập thể chất',
      },
      {
        title: 'Cung cấp năng lượng và sức mạnh',
        description: 'Cho người tập thể thao và lao động nặng',
      },
      {
        title: 'Hỗ trợ sinh lý nam và nữ',
        description: 'Tăng cường hệ miễn dịch',
      },
    ],
    supplierClaims: [
      'Tăng sức bền, giảm mệt mỏi, tối ưu hiệu quả luyện tập thể chất.',
      'Cung cấp năng lượng và sức mạnh cho người tập thể thao và lao động nặng.',
      'Hỗ trợ sinh lý nam và nữ, tăng cường hệ miễn dịch.',
    ],
    verifiedBenefits: [],
    evidenceSources: [],
    isBenefitPublished: false,
  },
  {
    id: 'thu-gian',
    name: 'Vòng Thư Giãn',
    edition: 'Relax',
    healthTheme: 'Thư giãn & giấc ngủ',
    headline: 'VÒNG NĂNG LƯỢNG THƯ GIÃN',
    subheading: 'TĂNG CƯỜNG SỨC KHỎE TINH THẦN',
    accentHex: '#9479CD',
    lightBgHex: '#FAF5FF',
    bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAF5FF 100%)',
    image: '/images/transparent/thu-gian-trimmed.png',
    posterImage: '/images/poster-thu-gian.jpg',
    price: SITE_CONFIG.standardPrice,
    currency: SITE_CONFIG.currency,
    healthTopics: [
      {
        title: 'Giảm stress, căng thẳng, lo âu',
        description: 'Thư giãn toàn bộ cơ thể & tâm trí',
      },
      {
        title: 'Cải thiện chất lượng giấc ngủ',
        description: 'Giảm mất ngủ, giúp ngủ ngon và sâu hơn',
      },
      {
        title: 'Hỗ trợ Parkinson và các vấn đề',
        description: 'Liên quan đến hệ thần kinh',
      },
    ],
    supplierClaims: [
      'Giảm stress, căng thẳng, lo âu, thư giãn toàn bộ cơ thể & tâm trí.',
      'Cải thiện chất lượng giấc ngủ, giảm mất ngủ, giúp ngủ ngon và sâu hơn.',
      'Hỗ trợ Parkinson và các vấn đề liên quan đến hệ thần kinh.',
    ],
    verifiedBenefits: [],
    evidenceSources: [],
    isBenefitPublished: false,
  },
  {
    id: 'tre-hoa',
    name: 'Vòng Trẻ Hóa',
    edition: 'Vitality',
    healthTheme: 'Trao đổi chất & sức khỏe chuyển hóa',
    headline: 'VÒNG NĂNG LƯỢNG TRẺ HÓA',
    subheading: 'TRẺ HÓA TẾ BÀO – KIỂM SOÁT LƯỢNG ĐƯỜNG',
    accentHex: '#4D709B',
    lightBgHex: '#E8F5FB',
    bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #E8F5FB 100%)',
    image: '/images/transparent/tre-hoa-trimmed.png',
    posterImage: '/images/poster-tre-hoa.jpg',
    price: SITE_CONFIG.standardPrice,
    currency: SITE_CONFIG.currency,
    healthTopics: [
      {
        title: 'Tăng cường trao đổi chất',
        description: 'Kiểm soát mỡ thừa, cân nặng',
      },
      {
        title: 'Giảm lượng đường trong máu',
        description: 'Hỗ trợ bệnh nhân mắc bệnh tiểu đường',
      },
      {
        title: 'Phòng ngừa tim mạch, tai biến',
        description: 'Giảm đau, giảm viêm, phục hồi vết thương nhanh',
      },
    ],
    supplierClaims: [
      'Tăng cường trao đổi chất, kiểm soát mỡ thừa, cân nặng.',
      'Giảm lượng đường trong máu, hỗ trợ bệnh nhân mắc bệnh tiểu đường.',
      'Phòng ngừa tim mạch, tai biến, giảm đau, giảm viêm, phục hồi vết thương nhanh.',
    ],
    verifiedBenefits: [],
    evidenceSources: [],
    isBenefitPublished: false,
  },
];

export const TECH_CONCEPTS = [
  {
    title: 'CÔNG NGHỆ NĂNG LƯỢNG VÔ HƯỚNG',
    subtitle: 'SCALAR ENERGY TECHNOLOGY',
    description:
      'Tích hợp trường năng lượng vô hướng truyền dẫn liên tục vào cơ thể, giúp trung hòa các bức xạ điện từ có hại từ điện thoại và thiết bị công nghệ, đồng thời phục hồi trường sinh học tự nhiên và duy trì sinh lực dồi dào suốt ngày dài.',
  },
  {
    title: 'CÔNG NGHỆ TẦN SỐ SINH HỌC',
    subtitle: 'BIO-FREQUENCY RESONANCE',
    description:
      'Cộng hưởng tần số sinh học tương thích tự nhiên với tế bào, hỗ trợ kích hoạt lưu thông khí huyết và trao đổi chất mạnh mẽ, giúp xua tan nhanh mệt mỏi, giảm đau mỏi cơ bắp và nâng cao hiệu suất vận động rõ rệt.',
  },
  {
    title: 'CÔNG NGHỆ ION ÂM NĂNG LƯỢNG CAO',
    subtitle: 'HIGH-DENSITY NEGATIVE IONS',
    description:
      'Giải phóng mật độ ion âm dồi dào tương tự không khí thanh khiết của thiên nhiên hoang dã, giúp thanh lọc không gian sinh học cơ thể, giải tỏa căng thẳng thần kinh và mang lại giấc ngủ ngon trọn vẹn mỗi đêm.',
  },
];

export const INTRO_VIDEO = {
  youtubeUrl: 'https://www.youtube.com/watch?v=7aEpPB8fh8E',
  title: 'Cơ Chế Hoạt Động Năng Lượng Vô Hướng',
  subtitle: 'Tìm hiểu nguyên lý khoa học và công nghệ tần số sinh học.',
  thumbnail: 'https://img.youtube.com/vi/7aEpPB8fh8E/maxresdefault.jpg',
};

export const TESTIMONIAL_VIDEOS: VideoItem[] = [
  {
    id: '01',
    title: 'Cảm nhận độ êm ái và cân bằng khi vận động',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    category: 'deo-chan',
    productName: 'Đeo Chân',
    customerName: 'Người chạy bộ phong trào',
    duration: '01:30',
  },
  {
    id: '02',
    title: 'Sự thoải mái và dẻo dai trong các buổi rèn luyện',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    category: 'suc-manh',
    productName: 'Sức Mạnh',
    customerName: 'Thành viên tập thể hình',
    duration: '02:15',
  },
  {
    id: '03',
    title: 'Thói quen thư thái và giấc ngủ sâu sau giờ làm việc',
    youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    category: 'thu-gian',
    productName: 'Thư Giãn',
    customerName: 'Người làm việc văn phòng',
    duration: '01:50',
  },
  {
    id: '04',
    title: 'Đồng hành cùng nhịp sống năng động và phục hồi',
    youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    category: 'tre-hoa',
    productName: 'Trẻ Hóa',
    customerName: 'Người yêu thích du lịch',
    duration: '02:10',
  },
  {
    id: '05',
    title: 'Thử nghiệm độ thăng bằng và vững vàng bước đi',
    youtubeUrl: 'https://www.youtube.com/watch?v=obuipW1xOBo',
    category: 'deo-chan',
    productName: 'Đeo Chân',
    customerName: 'Thử nghiệm cân bằng cơ thể',
    duration: '01:45',
  },
  {
    id: '06',
    title: 'Trải nghiệm sinh lực và độ bền bỉ thể chất',
    youtubeUrl: 'https://www.youtube.com/watch?v=Qa7HSUUh-G0',
    category: 'suc-manh',
    productName: 'Sức Mạnh',
    customerName: 'Người dùng rèn luyện thể thao',
    duration: '02:40',
  },
];

export const COMPARISON_DATA = [
  {
    name: 'Đeo Chân',
    focusArea: 'Vận động & cân bằng',
    price: '2.800.000 VNĐ',
    image: '/images/transparent/deo-chan-trimmed.png',
    accent: '#75D6EA',
  },
  {
    name: 'Sức Mạnh',
    focusArea: 'Sức bền & thể lực',
    price: '2.800.000 VNĐ',
    image: '/images/transparent/suc-manh-trimmed.png',
    accent: '#DD3045',
  },
  {
    name: 'Thư Giãn',
    focusArea: 'Thư giãn & giấc ngủ',
    price: '2.800.000 VNĐ',
    image: '/images/transparent/thu-gian-trimmed.png',
    accent: '#9479CD',
  },
  {
    name: 'Trẻ Hóa',
    focusArea: 'Trao đổi chất & sức khỏe chuyển hóa',
    price: '2.800.000 VNĐ',
    image: '/images/transparent/tre-hoa-trimmed.png',
    accent: '#4D709B',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Vòng có bao nhiêu phiên bản?',
    answer: 'Bốn phiên bản: Đeo Chân, Sức Mạnh, Thư Giãn và Trẻ Hóa.',
  },
  {
    id: 'faq-2',
    question: 'Giá mỗi vòng bao nhiêu?',
    answer: 'Đồng nhất 2.800.000 VNĐ/vòng cho cả 4 phiên bản.',
  },
  {
    id: 'faq-3',
    question: 'Bốn dòng vòng hướng đến những nhu cầu nào?',
    answer:
      'Tương ứng 4 nhóm nhu cầu: Vận động & cân bằng, Sức bền & thể lực, Thư giãn & giấc ngủ, Trao đổi chất & sức khỏe chuyển hóa.',
  },
  {
    id: 'faq-4',
    question: 'Các công dụng sức khỏe được kiểm chứng như thế nào?',
    answer:
      'Đã có rất nhiều kết quả trải nghiệm thực tế hỗ trợ tốt cho sức khỏe. Quý khách có thể xem thêm các video chia sẻ trải nghiệm trên website hoặc trang YouTube để có cái nhìn trực quan nhất.',
  },
];

export interface FourZeroesItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  iconImage: string;
}

export const FOUR_ZEROES_DATA: FourZeroesItem[] = [
  {
    id: 'zero-pills',
    badge: '01',
    title: 'Không Thuốc',
    tagline: 'Không gánh nặng chuyển hóa',
    description: 'Kích hoạt năng lượng sinh học tự nhiên, không qua dạ dày, gan hay thận.',
    iconImage: '/images/evidence/icon-khong-thuoc.png',
  },
  {
    id: 'zero-injections',
    badge: '02',
    title: 'Không Tiêm',
    tagline: 'Phi xâm lấn tuyệt đối',
    description: 'Truyền dẫn trường vô hướng qua hệ thống kinh lạc nhẹ nhàng, êm dịu.',
    iconImage: '/images/evidence/icon-khong-tiem.png',
  },
  {
    id: 'zero-chemicals',
    badge: '03',
    title: 'Không Hóa Chất',
    tagline: '100% tự nhiên & tương thích',
    description: 'Tần số sinh học thảo mộc nguyên bản, tinh khiết và lành tính với cơ thể.',
    iconImage: '/images/evidence/icon-khong-hoa-chat.png',
  },
  {
    id: 'zero-side-effects',
    badge: '04',
    title: 'Không Tác Dụng Phụ',
    tagline: 'Đeo an tâm liên tục 24/7',
    description: 'Cơ thể tự điều hòa theo nhịp sinh học tự nhiên, an toàn cho mọi lứa tuổi.',
    iconImage: '/images/evidence/icon-khong-tac-dung-phu.png',
  },
];

export interface HealthMatrixColumn {
  id: string;
  label: string;
  sublabel: string;
  colorHex: string;
  bgHex: string;
  borderHex: string;
  badgeBg: string;
  items: string[];
}

export const HEALTH_MATRIX_DATA: HealthMatrixColumn[] = [
  {
    id: 'tang',
    label: 'TĂNG',
    sublabel: 'Sinh lực & Sức bền',
    colorHex: '#1E293B',
    bgHex: '#F8FAFC',
    borderHex: '#E2E8F0',
    badgeBg: '#0F172A',
    items: [
      'Sức bền và phát triển cơ bắp',
      'Độ dẻo dai của thành mạch máu',
      'Sức đề kháng & hệ miễn dịch',
      'Năng lượng sinh học tế bào',
      'Hỗ trợ huyết áp thấp ổn định',
    ],
  },
  {
    id: 'giam',
    label: 'GIẢM',
    sublabel: 'Gánh nặng & Đau mỏi',
    colorHex: '#DC2626',
    bgHex: '#FEF2F2',
    borderHex: '#FECACA',
    badgeBg: '#DC2626',
    items: [
      'Áp lực huyết áp cao',
      'Lượng đường dư thừa trong máu',
      'Mỡ thừa & chuyển hóa năng lượng',
      'Đau nhức mỏi, tê bì chân tay',
      'Đau bụng co thắt chu kỳ nữ',
    ],
  },
  {
    id: 'can-bang',
    label: 'CÂN BẰNG',
    sublabel: 'Hệ thống sinh thái',
    colorHex: '#9333EA',
    bgHex: '#FAF5FF',
    borderHex: '#E9D5FF',
    badgeBg: '#9333EA',
    items: [
      'Cân bằng hệ nội tiết tố',
      'Ổn định thần kinh thực vật',
      'Trung hòa các gốc tự do',
      'Điều hòa nhịp sinh học giấc ngủ',
      'Thăng bằng trọng tâm cơ thể',
    ],
  },
  {
    id: 'khang-viem',
    label: 'PHỤC HỒI',
    sublabel: 'Kháng viêm & Tự chữa lành',
    colorHex: '#0D9488',
    bgHex: '#F0FDFA',
    borderHex: '#CCFBF1',
    badgeBg: '#0D9488',
    items: [
      'Hỗ trợ giảm viêm dạ dày, ruột',
      'Giảm viêm khớp & chấn thương',
      'Hỗ trợ bệnh phụ khoa / nam khoa',
      'Tăng tốc tái tạo vết thương',
      'Kích hoạt khả năng tự phục hồi',
    ],
  },
  {
    id: 'tuan-hoan',
    label: 'TUẦN HOÀN',
    sublabel: 'Thanh lọc & Thải độc',
    colorHex: '#0284C7',
    bgHex: '#F0F9FF',
    borderHex: '#BAE6FD',
    badgeBg: '#0284C7',
    items: [
      'Đả thông hệ kinh tuyến TCM',
      'Lưu thông dòng máu sạch, giàu oxy',
      'Tách rời hồng cầu dính vón',
      'Thanh lọc độc tố tích tụ mô',
      'Bảo vệ thành mạch, phòng đột quỵ',
    ],
  },
];

export interface VisualEvidenceItem {
  id: string;
  title: string;
  badge: string;
  image: string;
  beforeLabel: string;
  afterLabel: string;
  summary: string;
  highlights: string[];
}

export const VISUAL_EVIDENCES_DATA: VisualEvidenceItem[] = [
  {
    id: 'darkfield-blood',
    title: 'Kiểm Chứng Dòng Máu Tươi Dưới Kính Hiển Vi',
    badge: 'DARKFIELD BLOOD TEST',
    image: '/images/evidence/evidence-blood-darkfield.png',
    beforeLabel: 'Trước: Hồng cầu dính chùm chuỗi (Rouleaux), máu quánh đặc, di chuyển chậm, thiếu hụt oxy.',
    afterLabel: 'Sau: Hồng cầu tách rời tròn đều, bơi tự do linh hoạt, vi tuần hoàn thông suốt và giàu dưỡng khí.',
    summary:
      'Hiện tượng hồng cầu dính vón làm tắc nghẽn vi mạch và thiếu oxy tế bào. Dưới tác động của trường năng lượng vô hướng, điện tích màng tế bào được tái lập, giúp hồng cầu tách rời và vận chuyển dưỡng khí tối ưu.',
    highlights: ['Tách rời hồng cầu vón cục', 'Tăng tốc lưu thông dòng máu', 'Cải thiện oxy nuôi dưỡng tế bào'],
  },
  {
    id: 'thermography',
    title: 'Ảnh Chụp Phổ Nhiệt Hồng Ngoại Thân Thể',
    badge: 'BODY THERMOGRAPHY',
    image: '/images/evidence/evidence-thermography.png',
    beforeLabel: 'Trước: Thân nhiệt lạnh, vi tuần hoàn chân tay và cổ vai gáy kém (vùng màu tím / xanh tối).',
    afterLabel: 'Sau: Thân nhiệt chuyển màu ấm đều (vàng / đỏ cam), kích hoạt dòng chảy khí huyết toàn diện.',
    summary:
      'Ảnh chụp phổ nhiệt hồng ngoại y sinh ghi nhận sự ấm lên rõ rệt của cơ thể sau khi đeo vòng. Khí huyết lưu thông đến các đầu chi, giúp giải tỏa hàn lạnh, giảm tê bì và thư giãn các nhóm cơ căng cứng.',
    highlights: ['Làm ấm chân tay và cơ thể', 'Tăng cường vi tuần hoàn mô', 'Giải phóng ứ trệ kinh lạc'],
  },
  {
    id: 'emf-shield',
    title: 'Lá Chắn Bảo Vệ Khỏi Bức Xạ EMF & 5G',
    badge: 'EMF & 5G RADIATION SHIELD',
    image: '/images/evidence/evidence-emf-shield.png',
    beforeLabel: 'Điện thoại thông thường: Vùng nhiệt kích ứng lớn (màu trắng/tím) gây căng thẳng mô tế bào não.',
    afterLabel: 'Có màng lọc Protect Filter: Vùng nhiệt kích ứng giảm mạnh, kiểm soát áp lực sóng điện từ.',
    summary:
      'Công nghệ đĩa 3 chiều 2-trong-1 tạo trường triệt tiêu bức xạ phi ion hóa từ sóng điện thoại, Wi-Fi và 5G, giúp bảo vệ vùng đầu não, giảm mệt mỏi thị giác và căng thẳng hệ thần kinh trong kỷ nguyên số.',
    highlights: ['Giảm thiểu bức xạ điện thoại', 'Hạn chế nhức đầu và mệt mỏi', 'Bảo vệ tế bào thần kinh'],
  },
];

export const PARTNER_RND_DATA = {
  title: 'ĐỐI TÁC CHIẾN LƯỢC',
  headline: '8ight Labs, USA',
  tagline: 'Tiên phong quốc tế từ năm 2006 trong công nghệ tín hiệu sinh học có thể đeo',
  description:
    '8ight Research Labs (Hoa Kỳ) là đơn vị nghiên cứu tiên phong quốc tế hơn 18 năm trong lĩnh vực khí sinh học và công nghệ truyền dịch tần số vô hướng, tích hợp đĩa ba chiều đạt chuẩn kiểm nghiệm khoa học tại Mỹ.',
  logo: '/images/evidence/8ight-labs-logo.png',
  flag: '/images/evidence/us-flag.jpg',
  leaders: [
    {
      name: 'Warren Hanchey',
      role: 'Người sáng lập & Giám đốc Nghiên cứu 8ight Labs LLP, USA',
      bio: 'Warren được công nhận là chuyên gia hàng đầu trong lĩnh vực năng lượng sinh học sử dụng công nghệ ba chiều để tác động tích cực đến sức khỏe con người và động vật. Ông đã phát biểu trên khắp thế giới, bao gồm hai Hội nghị Y học Vô hướng toàn cầu và Hội nghị Orthomolecular tại San Paulo, Brazil.',
      image: '/images/evidence/warren-hanchey.png',
    },
    {
      name: 'Michelle Hanchey',
      role: 'CEO 8ight Labs LLP, USA',
      quote:
        '“Nhiệm vụ của tôi là tạo ra sự khác biệt tích cực trong cuộc sống của mọi người bằng cách sử dụng năng lượng sinh học để tác động lên cơ thể và cảm xúc một cách an toàn mà không cần sử dụng thuốc hoặc hóa chất.”',
      image: '/images/evidence/michelle-hanchey.png',
    },
  ],
};
