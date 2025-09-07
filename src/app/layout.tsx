import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Hemanth Ponugothi - DevSecOps & Cloud Engineer",
  description: "Passionate DevSecOps & Cloud Engineer specializing in secure cloud infrastructure, automated CI/CD pipelines, and multi-cloud security solutions. Expert in AWS, Docker, Kubernetes, Terraform, and security automation.",
  keywords: [
    "DevSecOps Engineer",
    "Cloud Engineer", 
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Jenkins",
    "Python",
    "Linux",
    "Infrastructure as Code",
    "Cloud Security",
    "Hemanth Ponugothi"
  ],
  authors: [{ name: "Hemanth Ponugothi" }],
  creator: "Hemanth Ponugothi",
  publisher: "Hemanth Ponugothi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hemanthponugothi.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hemanth Ponugothi - DevSecOps & Cloud Engineer",
    description: "Passionate DevSecOps & Cloud Engineer specializing in secure cloud infrastructure, automated CI/CD pipelines, and multi-cloud security solutions.",
    url: "https://hemanthponugothi.dev",
    siteName: "Hemanth Ponugothi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hemanth Ponugothi - DevSecOps & Cloud Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Ponugothi - DevSecOps & Cloud Engineer",
    description: "Passionate DevSecOps & Cloud Engineer specializing in secure cloud infrastructure and automated CI/CD pipelines.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}