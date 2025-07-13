"use client"

import { useState } from "react"

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState("ai-tools")

  const skillCategories = [
    {
      id: "ai-tools",
      title: "AI工具应用",
      icon: "🤖",
      description: "掌握AI工具，提高工作效率",
      color: "from-violet-500 to-purple-600",
      skills: [
        { name: "ChatGPT应用", level: "入门", duration: "1周" },
        { name: "Midjourney绘画", level: "进阶", duration: "2周" },
        { name: "Claude对话", level: "入门", duration: "3天" },
        { name: "AI写作助手", level: "进阶", duration: "1周" }
      ]
    },
    {
      id: "programming",
      title: "编程开发",
      icon: "💻",
      description: "学会编程，开启技术之路",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: "入门", duration: "2周" },
        { name: "JavaScript", level: "进阶", duration: "4周" },
        { name: "React框架", level: "高级", duration: "6周" },
        { name: "Python基础", level: "入门", duration: "3周" }
      ]
    },
    {
      id: "content",
      title: "内容创作",
      icon: "✍️",
      description: "成为优秀的内容创作者",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "文案写作", level: "入门", duration: "2周" },
        { name: "视频剪辑", level: "进阶", duration: "3周" },
        { name: "摄影技巧", level: "进阶", duration: "4周" },
        { name: "社交媒体运营", level: "进阶", duration: "3周" }
      ]
    },
    {
      id: "design",
      title: "设计美学",
      icon: "🎨",
      description: "培养设计思维和审美能力",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Photoshop", level: "进阶", duration: "4周" },
        { name: "UI/UX设计", level: "高级", duration: "8周" },
        { name: "品牌设计", level: "进阶", duration: "6周" },
        { name: "插画绘制", level: "进阶", duration: "5周" }
      ]
    }
  ]

  const learningPaths = [
    {
      title: "零基础到自由职业者",
      duration: "3-6个月",
      steps: [
        "选择感兴趣的技能领域",
        "完成基础技能学习",
        "实践项目巩固技能",
        "建立个人作品集",
        "开始接单或求职"
      ]
    },
    {
      title: "技能提升与转型",
      duration: "2-4个月",
      steps: [
        "评估当前技能水平",
        "制定学习计划",
        "学习新技能或深化现有技能",
        "与行业专家交流",
        "应用到实际工作中"
      ]
    }
  ]

  const currentSkill = skillCategories.find(cat => cat.id === selectedSkill)

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            💻 技能学习
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            在这个快速变化的时代，掌握实用技能是自由生活的基础
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedSkill(category.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  selectedSkill === category.id
                    ? "bg-white shadow-xl scale-105 ring-4 ring-blue-200"
                    : "bg-white shadow-lg hover:shadow-xl hover:scale-102"
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </button>
            ))}
          </div>

          {/* Selected Skill Details */}
          {currentSkill && (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${currentSkill.color} flex items-center justify-center text-2xl mr-6`}>
                  {currentSkill.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentSkill.title}</h3>
                  <p className="text-gray-600 text-lg">{currentSkill.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSkill.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        skill.level === "入门" ? "bg-green-100 text-green-700" :
                        skill.level === "进阶" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">{skill.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className={`px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${currentSkill.color} hover:shadow-lg transition-all`}>
                  开始学习 {currentSkill.title}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            学习路径规划
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">{path.title}</h4>
                    <p className="text-gray-600">预计时间：{path.duration}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {path.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-1">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">学习资源与工具</h3>
            <p className="text-xl opacity-90">
              我们为你精选了最优质的学习资源，让学习更高效
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">📚</div>
              <h4 className="text-xl font-semibold mb-3">在线课程</h4>
              <p className="text-white/90">
                精选的在线课程平台，包括免费和付费资源
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="text-xl font-semibold mb-3">实用工具</h4>
              <p className="text-white/90">
                提高学习效率的工具和软件推荐
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-3">学习社区</h4>
              <p className="text-white/90">
                与同伴一起学习，互相鼓励和支持
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 