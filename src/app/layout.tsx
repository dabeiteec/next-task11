import type { Metadata } from "next";
import './style/global.css';
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  subsets: ['latin'], 
  weight: ['200', '300'], 
  display: 'swap', // Настройка загрузки (рекомендуется 'swap')
});

export const metadata: Metadata = {
  title: "Cool Engineers",
  description: "Engineers services in Kazakhstan and Uzbekistan",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ru" className={mulish.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
