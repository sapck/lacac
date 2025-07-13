"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const quotes = [
    "花明玉关雪，叶暖金窗烟。",
    "山重水复疑无路，柳暗花明又一村。",
    "落红不是无情物，化作春泥更护花。",
    "海纳百川，有容乃大。",
    "学而时习之，不亦说乎。",
    "知之者不如好之者，好之者不如乐之者。"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
          生活倒影
        </h1>
        
        <div className="h-24 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-light transition-all duration-1000 transform opacity-100">
            {quotes[currentQuote]}
          </p>
        </div>

        <div className="mt-16">
          <button 
            onClick={() => {
              document.getElementById('stories')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
            className="inline-block w-8 h-8 mx-auto text-white hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
          >
            <svg 
              className="w-8 h-8"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* 装饰性粒子效果 */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  )
} 