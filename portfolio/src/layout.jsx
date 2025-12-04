import "../src/index.css";

export const metadata = {
  title: "Портфолио - Веб-разработчик",
  description:
    "Современное портфолио веб-разработчика с примерами проектов и навыков",
};

export const viewport = {
  themeColor: "#06b6d4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
