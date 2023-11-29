"use client";
import styles from './MoonpayWidget.module.css'
import { useState } from 'react'
import dynamic from 'next/dynamic';

const MoonPayBuyWidget = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayBuyWidget),
  { ssr: false },
);

export default function MoonpayWidget() {
  const [widgetVisible, setWidgetVisible] = useState(false)

  const toggleWidget = () => {
    setWidgetVisible(!widgetVisible)
  }

  return (
    <main className={styles.main}>
      <h1>MoonPay Widget Sandbox</h1>

      <MoonPayBuyWidget
        variant="embedded"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        currencyCode='usdc_polygon'
        defaultCurrencyCode='usdc_polygon'
        visible={widgetVisible} 
        onTransactionCompleted={async (e: any) => {
          console.log('transaction completed')
          console.log(await e)
        }}
      />

      <button onClick={toggleWidget} className={styles.widgetStartButton}>Start Widget</button>
    </main>
  )
}
