# VÒNG NĂNG LƯỢNG VÔ HƯỚNG – BTS GLOBAL

Landing page giới thiệu bộ sưu tập cao cấp (Product Showcase) 4 dòng vòng năng lượng BTS Global: Dẻo Chân, Sức Mạnh, Thư Giãn và Trẻ Hóa.

Thiết kế lấy cảm hứng từ chuẩn mực quốc tế của **BLUNT Umbrellas**:
- Editorial typography tương phản mạnh.
- Hình ảnh sản phẩm chân thực trên bệ trưng bày studio.
- Bố cục xen kẽ hình ảnh – câu chuyện sản phẩm, khoảng trắng rộng thoáng.
- Phân biệt minh bạch giữa thông số kỹ thuật thực tế và tuyên bố từ tài liệu tiếp thị của nhà sản xuất.
- Giá niêm yết chuẩn mực: **2.800.000 VNĐ / vòng**.
- **Không có tính năng thương mại điện tử**: Không giỏ hàng, không thanh toán, không form thu thập dữ liệu cá nhân.

---

## Cấu trúc 11 Section

1. **Header Navigation**: Thanh điều hướng sticky, hiệu ứng kính mờ (backdrop-blur), nhận diện active section, menu drawer trên thiết bị di động.
2. **Hero Showcase**: Bố cục 45/55, ảnh 4 mẫu vòng đứng cạnh nhau sắc nét, mức giá nổi bật và hai nút điều hướng.
3. **Giới thiệu tổng quan**: 3 thẻ thông tin cốt lõi (Bốn phiên bản, Thiết kế đặc trưng, Giới thiệu trực quan).
4. **Bộ sưu tập 4 dòng vòng**: Trưng bày 4 thẻ sản phẩm với màu sắc chủ đạo, slogan và nút xem chi tiết.
5. **Chi tiết từng dòng vòng**: 4 chiến dịch sản phẩm độc lập (A, B, C, D) với layout xen kẽ, chuyển đổi xem ảnh 3D và tài liệu tiếp thị gốc, phân loại claim y khoa minh bạch.
6. **Bảng so sánh 4 dòng**: Ma trận đối chiếu đặc điểm thiết kế, màu sắc, phong cách sống (responsive sang dạng card vuốt trên mobile).
7. **Công nghệ & Câu chuyện sản phẩm**: Giải nghĩa khách quan về Scalar Energy, Ion âm, Biofrequency và hồ sơ tài liệu nhà sản xuất.
8. **Video giới thiệu sản phẩm**: Trình phát video YouTube chuẩn 16:9 hỗ trợ privacy-enhanced embed (`youtube-nocookie.com`).
9. **Video Testimonial**: Thư viện video chia sẻ trải nghiệm thực tế với bộ lọc danh mục và lightbox modal.
10. **Câu hỏi thường gặp (FAQ)**: 10 câu hỏi & trả lời theo hình thức accordion hiện đại.
11. **Final Showcase & Footer**: Bệ trưng bày kết thúc với mức giá thống nhất và footer màu navy kèm cảnh báo y tế chuẩn mực.

---

## Hướng dẫn cập nhật dữ liệu (`src/data/siteContent.ts`)

Mọi thông tin về giá, mô tả sản phẩm, video YouTube và FAQ đều được tập trung tại:
`src/data/siteContent.ts`

- **Đổi giá**: Thay đổi `standardPrice` và `priceFormatted`.
- **Thêm/sửa video YouTube**: Cập nhật `youtubeUrl` (hỗ trợ cả link thường, short link `youtu.be` hoặc `shorts`). Hệ thống tự động trích xuất ID và tạo embed bảo mật.
- **Thêm video Testimonial**: Thêm vào mảng `TESTIMONIAL_VIDEOS`.

---

## Khởi chạy dự án

```bash
# Cài đặt thư viện
npm install

# Chạy môi trường phát triển (Development)
npm run dev

# Build sản phẩm tối ưu (Production)
npm run build
npm run start
```
