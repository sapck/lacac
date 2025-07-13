import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                LA
              </div>
              <span className="ml-3 text-2xl font-bold">自由学社</span>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              让每个人都能找到属于自己的学习方式，在自由中成长，在成长中自由。
            </p>
            <div className="text-gray-300 text-sm">
              <p className="mb-2">
                <span className="font-semibold">创始人：</span>
                <span className="text-white">龚一妹</span>
              </p>
              <p>
                <span className="font-semibold">联系邮箱：</span>
                <a href="mailto:spacknight@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  spacknight@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">关注我们</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://xiaohongshu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="mr-3 text-red-400">📱</span>
                  <span className="group-hover:translate-x-1 transition-transform">小红书</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://xiaohongshu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="mr-3 text-pink-400">🎵</span>
                  <span className="group-hover:translate-x-1 transition-transform">抖音</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://xiaohongshu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="mr-3 text-green-400">📢</span>
                  <span className="group-hover:translate-x-1 transition-transform">公众号</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Friend Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">友情链接</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://xiaohongshu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="mr-3 text-blue-400">🎓</span>
                  <span className="group-hover:translate-x-1 transition-transform">至极学院</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://xiaohongshu.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <span className="mr-3 text-purple-400">🏝️</span>
                  <span className="group-hover:translate-x-1 transition-transform">群岛客</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact with WeChat QR */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我</h4>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image 
                  src="/qrcode.jpg" 
                  alt="微信二维码 - 阿苏勒" 
                  width={160} 
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-300 text-sm text-center">扫一扫上面的二维码图案，加我为朋友。</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
                         <p className="text-gray-400 text-sm">
               © 2024 自由学社. 所有权利保留.
             </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                使用条款
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 