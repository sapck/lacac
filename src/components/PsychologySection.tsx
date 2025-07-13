"use client"

import { useState } from "react"

export default function PsychologySection() {
  const [activeCategory, setActiveCategory] = useState("mental-health")

  const categories = [
    {
      id: "mental-health",
      title: "心理健康",
      icon: "🧠",
      description: "关注内心世界，建立健康心态",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "relationships",
      title: "人际关系",
      icon: "👥",
      description: "改善人际交往，建立深度连接",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "family",
      title: "家庭关系",
      icon: "👨‍👩‍👧‍👦",
      description: "处理家庭矛盾，增进亲情理解",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "growth",
      title: "自我成长",
      icon: "🌱",
      description: "认识自我，持续成长进步",
      color: "from-orange-500 to-red-500"
    }
  ]

  const topics = {
    "mental-health": [
      {
        title: "抑郁与焦虑",
        description: "理解抑郁和焦虑的成因，学会自我调节的方法",
        symptoms: ["情绪低落", "失眠多梦", "注意力不集中", "对事物失去兴趣"],
        solutions: ["建立规律作息", "适量运动", "寻求专业帮助", "与朋友交流"]
      },
      {
        title: "拖延症",
        description: "认识拖延的根本原因，培养高效的行动力",
        symptoms: ["总是推迟任务", "完美主义倾向", "害怕失败", "时间管理困难"],
        solutions: ["分解大任务", "设定小目标", "奖励机制", "专注技巧"]
      },
      {
        title: "社交障碍",
        description: "克服社交恐惧，建立自信的社交能力",
        symptoms: ["害怕与人交往", "在人群中紧张", "避免社交场合", "担心被评判"],
        solutions: ["逐步暴露", "练习社交技巧", "建立自信", "寻找志同道合的人"]
      }
    ],
    "relationships": [
      {
        title: "友谊建立",
        description: "学会建立和维护真挚的友谊关系",
        symptoms: ["朋友很少", "感到孤独", "不知道如何交友", "友谊难以维持"],
        solutions: ["主动出击", "参加兴趣活动", "真诚待人", "保持联系"]
      },
      {
        title: "恋爱关系",
        description: "建立健康的恋爱关系，处理感情中的问题",
        symptoms: ["恋爱焦虑", "沟通障碍", "依赖性强", "感情不稳定"],
        solutions: ["学会沟通", "保持独立", "建立边界", "互相支持"]
      }
    ],
    "family": [
      {
        title: "与父母的关系",
        description: "改善与父母的关系，建立成年人的平等交流",
        symptoms: ["经常争吵", "价值观冲突", "缺乏理解", "沟通困难"],
        solutions: ["理解代沟", "表达感受", "寻求共同点", "设定边界"]
      },
      {
        title: "原生家庭影响",
        description: "认识原生家庭的影响，走出负面模式",
        symptoms: ["重复家庭模式", "自卑敏感", "情绪管理困难", "人际关系问题"],
        solutions: ["自我觉察", "寻求帮助", "建立新模式", "修复内在创伤"]
      }
    ],
    "growth": [
      {
        title: "自我认知",
        description: "深入了解自己，发现内在潜力",
        symptoms: ["不了解自己", "缺乏目标", "迷茫困惑", "自我价值感低"],
        solutions: ["自我反思", "价值观探索", "兴趣发掘", "接纳自己"]
      },
      {
        title: "情绪管理",
        description: "学会管理情绪，保持内心平衡",
        symptoms: ["情绪波动大", "易怒易哭", "压力过大", "情绪表达困难"],
        solutions: ["情绪识别", "深呼吸", "运动释放", "寻找支持"]
      }
    ]
  }

  const currentCategory = categories.find(cat => cat.id === activeCategory)
  const currentTopics = topics[activeCategory as keyof typeof topics] || []

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🧠 心理与关系
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            关注内心世界，建立健康的心理状态和人际关系
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Category Description */}
          {currentCategory && (
            <div className="text-center mb-12">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentCategory.color} flex items-center justify-center text-3xl mx-auto mb-6`}>
                {currentCategory.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentCategory.title}</h3>
              <p className="text-xl text-gray-600">{currentCategory.description}</p>
            </div>
          )}
        </div>

        {/* Topics */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{topic.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      常见表现
                    </h5>
                    <ul className="space-y-2">
                      {topic.symptoms.map((symptom, sympIndex) => (
                        <li key={sympIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      解决方案
                    </h5>
                    <ul className="space-y-2">
                      {topic.solutions.map((solution, solIndex) => (
                        <li key={solIndex} className="text-gray-700 text-sm flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">专业支持服务</h3>
            <p className="text-xl opacity-90">
              我们提供专业的心理支持和陪伴服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h4 className="text-xl font-semibold mb-3">在线咨询</h4>
              <p className="text-white/90 mb-4">
                与专业心理咨询师一对一交流
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                立即预约
              </button>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-3">支持小组</h4>
              <p className="text-white/90 mb-4">
                加入同伴支持小组，互相鼓励
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                加入小组
              </button>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📚</div>
              <h4 className="text-xl font-semibold mb-3">自助资源</h4>
              <p className="text-white/90 mb-4">
                丰富的心理健康学习资料
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                查看资源
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">紧急情况支持</h3>
          <p className="text-red-700 mb-6">
            如果你正在经历严重的心理困扰或有自我伤害的想法，请立即寻求专业帮助
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:400-161-9995" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
              心理危机热线: 400-161-9995
            </a>
            <a href="tel:120" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors">
              医疗急救: 120
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 