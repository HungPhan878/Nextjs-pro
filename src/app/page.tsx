import Image from "next/image";

// + Component image của next sẽ tự giảm size của image khi đặt weight và height để nextjs nhận biết
//  size mong muốn của ta là gì để giảm dung lượng tải.
// + Bắt buộc phải đặt w and h
// + Có thể dụng link ảnh bên ngoài nhưng như thế thì phải cần khai báo bằng config nextjs nha.

export default function Home() {
  return (
    <main className="flex justify-center items-center text-red-500">
      <Image
        src="/images/cong-nghe-4.0.jpg"
        alt="industry 4.0"
        width={400}
        height={400}
        quality={100}
      />
    </main>
  );
}
