import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RRoofing | Trusted Roofing Services',
  description: 'Local, Trusted and Reliable Roofing Services covering Buckinghamshire, Oxfordshire, and Outer London.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
