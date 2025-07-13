import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Liberate Academy",
  description: "一个充满互动的学习平台",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
