"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Story {
  id: string
  title: string
  author: string
  role: string
  excerpt: string
  avatar: string
}

const stories: Story[] = [
  {
    id: "1",
    title: "我不想再假装喜欢考试了",
    author: "李明",
    role: "17岁 Gap Year 学生",
    avatar: "👨‍🎓",
    excerpt: "我曾以为辍学是失败的标签，后来才明白，那是我人生真正的开始。现在我通过自学编程，找到了自己真正热爱的事情，每天都过得很充实。"
  },
  {
    id: "2", 
    title: "从控制到理解，我和孩子的双向成长",
    author: "王女士",
    role: "ADHD 孩子的妈妈",
    avatar: "👩‍💼",
    excerpt: "他说我从没听过他说话。那天我哭了一整晚。后来我们开始尝试非暴力沟通，一切都慢慢改变了。现在我们成为了最好的朋友。"
  },
  {
    id: "3",
    title: "不是孩子学不会，是我们教错了方向", 
    author: "张老师",
    role: "自由教育实践者",
    avatar: "👨‍🏫",
    excerpt: "自由学习不是放养，是信任 + 引导 + 自主选择。每个孩子都有自己的学习节奏和方式，我们要做的是陪伴而不是推拉。"
  },
  {
    id: "4",
    title: "离开体制后，我找到了真正的自己",
    author: "陈小雨",
    role: "25岁前公司员工",
    avatar: "👩‍💻", 
    excerpt: "朝九晚五的生活让我感到窒息，现在我是一名自由撰稿人，虽然收入不稳定，但我从未如此快乐。自由的代价是值得的。"
  },
  {
    id: "5",
    title: "在家教育三年，孩子的变化让我震惊",
    author: "刘妈妈",
    role: "Homeschool 妈妈",
    avatar: "👩‍👧",
    excerpt: "从最初的焦虑到现在的从容，我们一起探索世界，一起学习成长。孩子的创造力完全被释放了，学习变成了最自然的事情。"
  },
  {
    id: "6",
    title: "自学两年，从零基础到全栈开发",
    author: "小码农",
    role: "非科班程序员", 
    avatar: "👨‍💻",
    excerpt: "没有计算机学位，但我有好奇心和毅力。现在我在一家创业公司担任技术负责人。学历从来不是限制，学习能力才是。"
  },
  {
    id: "7",
    title: "从焦虑妈妈到淡定家长的转变",
    author: "晓敏",
    role: "二胎妈妈",
    avatar: "👩‍👦‍👦",
    excerpt: "以前总是担心孩子输在起跑线上，现在明白每个孩子都有自己的时区。慢慢来，比较快。"
  },
  {
    id: "8",
    title: "高中辍学，大学自考的逆袭之路",
    author: "阿力",
    role: "自考本科生",
    avatar: "👨‍🎓",
    excerpt: "传统的高中生活不适合我，但这不意味着我没有学习能力。自考让我找到了适合自己的学习方式。"
  }
]

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, stories.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // 分为上下两行，每行显示3个
  const topRowStories = stories.slice(currentIndex, currentIndex + itemsPerView)
  const bottomRowStories = stories.slice((currentIndex + itemsPerView) % stories.length, (currentIndex + itemsPerView) % stories.length + itemsPerView)

  return (
    <section id="stories" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 顶部标题区域 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            我们不是掉队的人
            <span className="block text-blue-600 mt-2">我们在走自己的路</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            来自青少年、家长、教育者的真实经历。这些故事没有标准答案，但它们有勇气、转变、和正在发生的改变。
          </p>
          <p className="text-lg text-gray-500 mt-4">
            无论你正在经历迷茫、冲突还是转型，你不是一个人。
          </p>
        </motion.div>

        {/* 轮播容器 */}
        <div className="relative">
          {/* 左右导航按钮 */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            style={{ marginLeft: '-24px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            style={{ marginRight: '-24px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 双层卡片布局 */}
          <div className="space-y-6">
            {/* 第一行 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              key={`top-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {topRowStories.map((story, index) => (
                <motion.div
                  key={`${story.id}-top`}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* 用户信息 */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center text-2xl mr-4">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{story.author}</h4>
                      <p className="text-sm text-gray-500">{story.role}</p>
                    </div>
                  </div>

                  {/* 故事内容 */}
                  <p className="text-gray-700 leading-relaxed text-sm mb-4 line-clamp-4">
                    {story.excerpt}
                  </p>

                  {/* 阅读更多 */}
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    <span>阅读更多</span>
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 第二行 */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              key={`bottom-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {bottomRowStories.map((story, index) => (
                <motion.div
                  key={`${story.id}-bottom`}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {/* 用户信息 */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center text-2xl mr-4">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{story.author}</h4>
                      <p className="text-sm text-gray-500">{story.role}</p>
                    </div>
                  </div>

                  {/* 故事内容 */}
                  <p className="text-gray-700 leading-relaxed text-sm mb-4 line-clamp-4">
                    {story.excerpt}
                  </p>

                  {/* 阅读更多 */}
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                    <span>阅读更多</span>
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 指示器 */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 底部行动号召 */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            你的故事呢？
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            每一个选择自由学习的人都有自己的故事。分享你的经历，让更多人知道，我们并不孤单。
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            分享我的故事
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 