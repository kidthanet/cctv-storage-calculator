import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// 1. แยกส่วน Viewport ออกมาตามมาตรฐานใหม่
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003366', // ใส่สีธีม AITS ไว้ที่นี่ได้เลยครับ
};

// 2. Metadata หลัก (เอา viewport ออกจากส่วนนี้)
export const metadata = {
  title: 'CCTV Storage Calculator - คำนวณพื้นที่กล้องวงจรปิด | AITS Expert',
  description: 'โปรแกรมคำนวณพื้นที่จัดเก็บข้อมูลกล้องวงจรปิด (HDD Storage) มาตรฐาน H.264/H.265 แม่นยำ โดย Pongphit (Ae)',
  keywords: ['คำนวณ CCTV', 'CCTV Storage Calculator', 'คำนวณฮาร์ดดิสก์กล้องวงจรปิด'],
  authors: [{ name: 'Pongphit (Ae)' }],
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}