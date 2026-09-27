import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ofertas Mágicas de Natal | Achadinhos Shopee',
  description: 'Seleção especial com as melhores decorações e presentes de Natal com desconto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen relative flex flex-col">
        {children}
      </body>
    </html>
  );
}
