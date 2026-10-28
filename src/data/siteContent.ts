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
  { label: 'Nhu cầu sức khỏe', href: '#health-topics' },
  { label: '4 dòng vòng', href: '#products' },
  { label: 'Công nghệ', href: '#technology' },
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
