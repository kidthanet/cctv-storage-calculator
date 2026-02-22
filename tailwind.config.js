/** @type {import('tailwindcss').Config} */
module.exports = {
  // ระบุตำแหน่งไฟล์ที่ใช้ Tailwind Class ให้ครบถ้วน
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // เผื่อไว้กรณีใช้งานในอนาคต
  ],
  theme: {
    extend: {
      // เพิ่มค่าสีเฉพาะเพื่อให้เข้ากับธีม AITS CCTV
      colors: {
        'aits-navy': '#003366',
        'aits-deep': '#002d57',
        'aits-blue': '#0055aa',
      },
      // เพิ่มการตั้งค่า Font หรือ Shadow อื่นๆ ได้ที่นี่
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}