import './globals.css';
import { Noto_Sans_KR, Black_Han_Sans } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: '서정현 이력서',
  description: '설명 부분',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body className={`${notoSansKr.className} ${blackHanSans.className}`}>{children}</body>
    </html>
  );
}
