"use client"

import { useState } from "react"

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("freelance")

  const careerPaths = [
    {
      id: "freelance",
      title: "自由职业",
      icon: "🎯",
      description: "脱离传统雇佣关系，成为自己的老板",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "digital",
      title: "数字游民",
      icon: "🌍",
      description: "用技术实现地点自由，边旅行边工作",
      color: "from-green-500 to-teal-500"
    },
    {
      id: "gapyear",
      title: "Gap Year",
      icon: "✈️",
      description: "暂停学业，探索世界和自我",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "startup",
      title: "创业之路",
      icon: "🚀",
      description: "从零开始，创造属于自己的事业",
      color: "from-orange-500 to-red-500"
    }
  ]

  const successStories = [
    {
      name: "小李",
      age: 19,
      path: "从辍学到程序员",
      story: "高中退学后，通过在线学习编程，现在是一名全栈开发者，月收入过万。",
      skills: ["JavaScript", "React", "Node.js"],
      timeline: "6个月学习 → 实习 → 转正"
    },
    {
      name: "小王",
      age: 22,
      path: "内容创作者",
      story: "放弃公务员工作，专注短视频创作，现在有100万粉丝，实现财务自由。",
      skills: ["视频剪辑", "文案写作", "社交媒体"],
      timeline: "业余创作 → 全职 → 商业化"
    },
    {
      name: "小张",
      age: 25,
      path: "数字游民",
      story: "学会平面设计后，为海外客户提供设计服务，现在在东南亚边工作边旅行。",
      skills: ["Photoshop", "Illustrator", "英语"],
      timeline: "技能学习 → 接单 → 搬到国外"
    }
  ]

  const currentPath = careerPaths.find(path => path.id === activeTab)

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🧭 出路探索
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            没有标准答案的人生，每个人都可以找到属于自己的道路
          </p>
        </div>

        {/* Career Path Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {careerPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setActiveTab(path.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === path.id
                    ? `bg-gradient-to-r ${path.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                <span className="mr-2">{path.icon}</span>
                {path.title}
              </button>
            ))}
          </div>

          {/* Active Path Details */}
          {currentPath && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentPath.color} flex items-center justify-center text-2xl mr-6`}>
                  {currentPath.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentPath.title}</h3>
                  <p className="text-gray-600 text-lg">{currentPath.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">核心优势</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      时间自由，自主安排工作节奏
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      收入天花板更高，多元化收入来源
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      技能快速成长，实战经验丰富
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      不依赖学历，看重实际能力
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">需要准备</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      扎实的专业技能基础
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      良好的自我管理能力
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      持续学习的心态
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      一定的风险承受能力
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            真实案例分享
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {story.name[1]}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{story.name}</h4>
                      <p className="text-gray-600 text-sm">{story.age}岁 · {story.path}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">核心技能：</p>
                    <div className="flex flex-wrap gap-2">
                      {story.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 border-t pt-4">
                    <strong>成长路径：</strong> {story.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">开始探索你的道路</h3>
          <p className="text-xl mb-8 opacity-90">
            每个人都有独特的天赋和兴趣，让我们帮你找到最适合的方向
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              免费咨询
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              查看更多案例
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 