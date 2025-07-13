"use client"

import { useState } from "react"

export default function FamilySection() {
  const [activeTab, setActiveTab] = useState("homeschool")

  const topics = [
    {
      id: "homeschool",
      title: "家庭教育",
      icon: "🏠",
      description: "探索家庭教育的理念和实践方法",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "relationship",
      title: "亲子关系",
      icon: "👨‍👩‍👧‍👦",
      description: "建立健康的亲子关系，增进家庭和谐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "education",
      title: "教育反思",
      icon: "🤔",
      description: "重新思考传统教育模式的利弊",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "growth",
      title: "共同成长",
      icon: "🌱",
      description: "家长和孩子一起学习和成长",
      color: "from-orange-500 to-red-500"
    }
  ]

  const parentStories = [
    {
      name: "张妈妈",
      background: "原本是典型的虎妈，后来转变教育理念",
      story: "曾经我是那种严格要求孩子考试成绩的家长，直到看到孩子越来越抑郁。后来我开始反思，学会了倾听和理解孩子，现在我们的关系比以前好太多了。",
      insight: "孩子需要的是理解和支持，而不是无休止的要求。",
      approach: "从关注成绩转向关注孩子的内心世界"
    },
    {
      name: "李爸爸",
      background: "工程师，原本认为只要努力就能成功",
      story: "我一直告诉孩子只要努力学习就能有好未来，但孩子告诉我他对学习没有兴趣。我开始思考，也许我应该帮助他找到真正的兴趣所在。",
      insight: "每个孩子都有自己的天赋和兴趣，强迫不如引导。",
      approach: "支持孩子探索不同的可能性"
    },
    {
      name: "王妈妈",
      background: "全职妈妈，选择了家庭教育",
      story: "5年前我决定让孩子在家接受教育，很多人不理解。现在孩子不仅学习成绩好，更重要的是他很快乐，有自己的想法。",
      insight: "教育不是一刀切，每个家庭可以选择适合自己的方式。",
      approach: "个性化的学习计划和丰富的实践活动"
    }
  ]

  const homeschoolResources = [
    {
      category: "学习资源",
      items: [
        { name: "Khan Academy", description: "免费的在线学习平台", type: "网站" },
        { name: "Coursera", description: "世界顶级大学课程", type: "平台" },
        { name: "TED-Ed", description: "教育类短视频", type: "视频" },
        { name: "国家图书馆", description: "丰富的数字资源", type: "资源" }
      ]
    },
    {
      category: "实践活动",
      items: [
        { name: "科学实验", description: "在家进行简单的科学实验", type: "活动" },
        { name: "博物馆参观", description: "定期参观各类博物馆", type: "外出" },
        { name: "自然观察", description: "户外自然观察和记录", type: "户外" },
        { name: "手工制作", description: "培养动手能力的手工项目", type: "制作" }
      ]
    },
    {
      category: "社交机会",
      items: [
        { name: "家庭教育群体", description: "与其他家教家庭交流", type: "社群" },
        { name: "兴趣小组", description: "参加各种兴趣小组活动", type: "活动" },
        { name: "志愿服务", description: "参与社区志愿服务", type: "服务" },
        { name: "项目合作", description: "与其他孩子合作完成项目", type: "合作" }
      ]
    }
  ]

  const currentTopic = topics.find(topic => topic.id === activeTab)

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            👨‍👩‍👧‍👦 家庭教育
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            重新定义家庭教育，让爱与理解成为孩子成长的力量
          </p>
        </div>

        {/* Topic Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === topic.id
                    ? `bg-gradient-to-r ${topic.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                <span className="mr-2">{topic.icon}</span>
                {topic.title}
              </button>
            ))}
          </div>

          {/* Topic Description */}
          {currentTopic && (
            <div className="text-center mb-12">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentTopic.color} flex items-center justify-center text-3xl mx-auto mb-6`}>
                {currentTopic.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{currentTopic.title}</h3>
              <p className="text-xl text-gray-600">{currentTopic.description}</p>
            </div>
          )}
        </div>

        {/* Parent Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            家长转变故事
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parentStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.background}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{story.story}&rdquo;
                  </p>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">核心感悟：</h5>
                  <p className="text-blue-600 font-medium">{story.insight}</p>
                </div>
                
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">转变方式：</h5>
                  <p className="text-gray-700">{story.approach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homeschool Resources */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            家庭教育资源
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeschoolResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {resource.category}
                </h4>
                <div className="space-y-4">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="text-lg font-semibold text-gray-900">{item.name}</h5>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Community */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">家长支持社区</h3>
            <p className="text-xl opacity-90">
              与志同道合的家长一起交流，共同成长
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-3">家长交流群</h4>
              <p className="text-white/90 mb-4">
                加入我们的家长交流群，分享经验和困惑
              </p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                加入群聊
              </button>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-4">📅</div>
              <h4 className="text-xl font-semibold mb-3">定期聚会</h4>
              <p className="text-white/90 mb-4">
                线下聚会，让家长和孩子都能找到同伴
              </p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                查看活动
              </button>
            </div>
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">我们的教育理念</h3>
            <p className="text-xl text-gray-600">
              每个孩子都是独特的，教育应该因材施教
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">个性化</h4>
              <p className="text-gray-600 text-sm">
                尊重每个孩子的个性和兴趣
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🤝
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">平等</h4>
              <p className="text-gray-600 text-sm">
                与孩子建立平等的交流关系
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🌱
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">成长</h4>
              <p className="text-gray-600 text-sm">
                关注孩子的全面发展
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ❤️
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">关爱</h4>
              <p className="text-gray-600 text-sm">
                用爱和理解陪伴孩子
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
