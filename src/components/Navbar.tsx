"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    // 首页需要监听滚动来固定背景
    if (isHomePage) {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    } else {
      setScrolled(false)
    }
  }, [isHomePage])

  const navItems = [
    { href: "/", label: "首页", icon: "🏠" },
    { href: "/explore", label: "出路探索", icon: "🧭" },
    { href: "/skills", label: "技能学习", icon: "💻" },
    { href: "/psychology", label: "心理与关系", icon: "🧠" },
    { href: "/family", label: "家庭教育", icon: "👨‍👩‍👧‍👦" },
    { href: "/topics", label: "深度话题", icon: "💬" },
  ]

  // 动态样式逻辑
  const getNavStyles = () => {
    if (isHomePage) {
      // 首页：使用背景图片，滚动时固定背景
      return {
        nav: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`,
        backgroundImage: scrolled ? "bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed" : "",
        logo: "text-xl font-bold text-white transition-colors",
        navLink: "px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-white/10 hover:scale-105 text-white/90 hover:text-white",
        searchButton: "p-2 rounded-full transition-all hover:bg-white/10 text-white/90 hover:text-white",
        loginButton: "px-4 py-2 rounded-full font-medium transition-all hover:scale-105 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm",
        mobileButton: "p-2 rounded-md transition-colors text-white hover:text-white/80",
        mobileMenu: "px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-b-lg shadow-lg",
        mobileLink: "flex items-center w-full px-3 py-2 text-left text-white hover:bg-white/10 hover:text-blue-300 rounded-md transition-colors",
        mobileSearchButton: "p-2 text-white hover:text-blue-300",
        mobileLoginButton: "px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
      }
    } else {
      // 其他页面：始终白底 + 投影 + 深色文字
      return {
        nav: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg",
        backgroundImage: "",
        logo: "text-xl font-bold text-gray-900 transition-colors",
        navLink: "px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-100 hover:scale-105 text-gray-700 hover:text-blue-600",
        searchButton: "p-2 rounded-full transition-all hover:bg-gray-100 text-gray-700 hover:text-blue-600",
        loginButton: "px-4 py-2 rounded-full font-medium transition-all hover:scale-105 bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
        mobileButton: "p-2 rounded-md transition-colors text-gray-700 hover:text-blue-600",
        mobileMenu: "px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg",
        mobileLink: "flex items-center w-full px-3 py-2 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors",
        mobileSearchButton: "p-2 text-gray-700 hover:text-blue-600",
        mobileLoginButton: "px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
      }
    }
  }

  const styles = getNavStyles()

  return (
    <nav className={`${styles.nav} ${styles.backgroundImage}`}>
      {/* 首页滚动时的背景图片覆盖层 */}
      {isHomePage && scrolled && (
        <div 
          className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed"
          style={{
            backgroundPosition: 'center top'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                LA
              </div>
              <span className={styles.logo}>
                自由学社
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search and Login */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <button className={styles.searchButton}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Login Button */}
            <button className={styles.loginButton}>
              登录
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileButton}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={styles.mobileMenu}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={styles.mobileLink}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className={styles.mobileSearchButton}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className={styles.mobileLoginButton}>
                  登录
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 