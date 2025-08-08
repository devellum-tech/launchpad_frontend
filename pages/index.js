import Head from 'next/head';
import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import HomeTop from '@/components/HomeTop';
import HomePointSection from '@/components/HomePointSection';
import PricingSection from '@/components/PricingSection';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Devellum</title>
        <meta name="description" content="Devellum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 style={{ textAlign: 'center', fontSize: '70px' }}>Welcome to Devellum</h1>

        <HomeTop />

        <HomePointSection />

        <PricingSection />
      </div>
    </>
  );
}

