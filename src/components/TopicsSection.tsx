"use client"

import { useState } from "react"

export default function TopicsSection() {
  const [selectedTopic, setSelectedTopic] = useState(0)

  const discussions = [
    {
      id: 1,
      title: "你怎么看待高考？",
      category: "教育制度",
      icon: "🎓",
      viewpoints: [
        {
          stance: "支持者观点",
          content: "高考提供了一个相对公平的竞争平台，让不同背景的学生都有机会通过努力改变命运。",
          arguments: [
            "统一标准，相对公平",
            "激励学生努力学习",
            "为社会选拔人才",
            "保持教育的严肃性"
          ]
        },
        {
          stance: "质疑者观点",
          content: "高考过分强调标准化测试，忽视了学生的个性发展和多元智能。",
          arguments: [
            "一考定终身太残酷",
            "忽视创造力和实践能力",
            "加剧教育内卷",
            "不利于全面发展"
          ]
        },
        {
          stance: "改革者观点",
          content: "高考需要改革，但不应该完全废除，而是要向更多元化的评价体系发展。",
          arguments: [
            "增加综合素质评价",
            "多次考试机会",
            "更多选择权",
            "注重过程评价"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "学历到底意味着什么？",
      category: "社会认知",
      icon: "📚",
      viewpoints: [
        {
          stance: "传统观点",
          content: "学历是个人能力和知识水平的重要证明，在就业和社会认知中起到重要作用。",
          arguments: [
            "知识积累的证明",
            "学习能力的体现",
            "社会筛选机制",
            "职业发展的门槛"
          ]
        },
        {
          stance: "实用主义观点",
          content: "学历只是一张纸，真正的能力和价值在于实际的技能和经验。",
          arguments: [
            "实践能力更重要",
            "创新创业不看学历",
            "技能胜过文凭",
            "时代变化太快"
          ]
        },
        {
          stance: "平衡观点",
          content: "学历有其价值，但不应该成为评判人的唯一标准，能力和品格同样重要。",
          arguments: [
            "学历是基础，能力是关键",
            "不同行业要求不同",
            "终身学习更重要",
            "多元化评价标准"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "什么是有意义的生活？",
      category: "人生哲学",
      icon: "🌟",
      viewpoints: [
        {
          stance: "成就导向",
          content: "有意义的生活应该是不断追求目标、实现成就，为社会创造价值。",
          arguments: [
            "目标驱动的人生",
            "社会贡献的价值",
            "个人成长的意义",
            "留下积极影响"
          ]
        },
        {
          stance: "体验导向",
          content: "有意义的生活在于享受当下，体验生活的美好，建立深度的人际关系。",
          arguments: [
            "活在当下的智慧",
            "人际关系的重要性",
            "内心平静的价值",
            "生活质量胜过成就"
          ]
        },
        {
          stance: "自我实现",
          content: "有意义的生活是发现并实现自己的独特价值，成为最好的自己。",
          arguments: [
            "发现内在天赋",
            "追求个人使命",
            "自我接纳与成长",
            "独特价值的实现"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "传统文化与现代教育如何结合？",
      category: "文化传承",
      icon: "🏛️",
      viewpoints: [
        {
          stance: "传统优先",
          content: "传统文化是教育的根本，现代教育应该建立在传统文化的基础上。",
          arguments: [
            "文化根基的重要性",
            "价值观的传承",
            "民族认同感",
            "经典智慧的价值"
          ]
        },
        {
          stance: "现代优先",
          content: "现代教育应该适应时代发展，传统文化需要与时俱进，取其精华。",
          arguments: [
            "时代适应性",
            "科学理性思维",
            "全球化视野",
            "创新能力培养"
          ]
        },
        {
          stance: "融合发展",
          content: "传统文化与现代教育应该相互融合，在继承中发展，在发展中创新。",
          arguments: [
            "文化自信与开放",
            "继承与创新并重",
            "中西合璧",
            "培养文化素养"
          ]
        }
      ]
    }
  ]

  const currentDiscussion = discussions[selectedTopic]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            💬 深度话题
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探讨教育和人生的深层问题，开启思维的对话
          </p>
        </div>

        {/* Topic Navigation */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discussions.map((topic, index) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  selectedTopic === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="text-3xl mb-4">{topic.icon}</div>
                <div className="mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedTopic === index
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {topic.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Current Discussion */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{currentDiscussion.icon}</div>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {currentDiscussion.category}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentDiscussion.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentDiscussion.viewpoints.map((viewpoint, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {viewpoint.stance}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {viewpoint.content}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">主要论点：</h5>
                    <ul className="space-y-2">
                      {viewpoint.arguments.map((argument, argIndex) => (
                        <li key={argIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                          <span className="text-gray-700 text-sm">{argument}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Discussion Guidelines */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">讨论指南</h3>
              <p className="text-xl opacity-90">
                让我们以开放和尊重的心态进行深度对话
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🧠
                </div>
                <h4 className="text-lg font-bold mb-2">开放思维</h4>
                <p className="text-white/90 text-sm">
                  保持开放的心态，接纳不同的观点
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h4 className="text-lg font-bold mb-2">相互尊重</h4>
                <p className="text-white/90 text-sm">
                  尊重每个人的观点和经历
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💡
                </div>
                <h4 className="text-lg font-bold mb-2">深度思考</h4>
                <p className="text-white/90 text-sm">
                  避免浅层讨论，追求思维的深度
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🌱
                </div>
                <h4 className="text-lg font-bold mb-2">共同成长</h4>
                <p className="text-white/90 text-sm">
                  通过对话促进彼此的成长
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                💬
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">加入讨论</h4>
              <p className="text-gray-600">
                分享你的观点，与其他人进行深度对话
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all">
                参与当前话题讨论
              </button>
              <button className="w-full border-2 border-purple-500 text-purple-500 py-3 rounded-full font-medium hover:bg-purple-50 transition-all">
                提出新的话题
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📚
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">阅读推荐</h4>
              <p className="text-gray-600">
                深度阅读，拓展思维边界
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-gray-900">《教育的目的》</h5>
                <p className="text-sm text-gray-600">怀特海 - 探讨教育的本质</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-gray-900">《人生的意义》</h5>
                <p className="text-sm text-gray-600">弗兰克 - 寻找生命的意义</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h5 className="font-medium text-gray-900">《乌合之众》</h5>
                <p className="text-sm text-gray-600">勒庞 - 群体心理学经典</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 