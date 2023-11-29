"use client";
import MoonpayWidget from '@/components/MoonpayWidget/MoonpayWidget';
import dynamic from 'next/dynamic';

const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false },
);

export default function Home() {
  return (
    <MoonPayProvider 
        apiKey={process.env.NEXT_PUBLIC_MOONPAY_API_KEY ?? ''}
        debug
    >
      <MoonpayWidget />
    </MoonPayProvider>
  )
}
