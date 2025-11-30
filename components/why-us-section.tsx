"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Rocket, Target, BarChart3, MessageSquare, FileText, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react"

const strengths = [
  {
    icon: Brain,
    title: "AI & Fintech mutaxassisligi",
    description: "Machine Learning, NLP va moliyaviy tahlil bo'yicha chuqur bilim",
    tags: ["Machine Learning", "NLP", "Data Science"],
  },
  {
    icon: Zap,
    title: "Avtomatlashtirish tajribasi",
    description: "Biznes jarayonlarini optimallashtirish va avtomatlashtirish bo'yicha amaliy tajriba",
    tags: ["Workflow", "RPA", "Integration"],
  },
  {
    icon: Target,
    title: "Mahalliy bozor tushunchasi",
    description: "O'zbekiston moliya tizimi va foydalanuvchi ehtiyojlarini chuqur tushunamiz",
    tags: ["Local Market", "UX Research", "Fintech"],
  },
]

const previousProjects = [
  {
    icon: BarChart3,
    title: "Data Analytics platforma",
    description: "Korxonalar uchun real-time tahlil va hisobot tizimi",
    result: "40% samaradorlik oshdi",
  },
  {
    icon: FileText,
    title: "Hujjat avtomatlashtirish",
    description: "AI yordamida shartnoma va fakturalarni avtomatik yaratish",
    result: "5x tezroq ishlov",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot tizimi",
    description: "O'zbek tilida mijozlarga xizmat ko'rsatuvchi bot",
    result: "10,000+ foydalanuvchi",
  },
]

const differentiators = [
  {
    icon: FileText,
    title: "Texnik arxitektura tayyor",
    description: "Pulim AI uchun to'liq texnik hujjatlar va arxitektura rejalashtirilgan",
  },
  {
    icon: Brain,
    title: "AI modellari ishlab chiqish",
    description: "Xarajat tahlili va prognozlash uchun dastlabki modellar sinovdan o'tkazish rejalashtirilgan",
  },
  {
    icon: Rocket,
    title: "MVP prototip tayyorlash",
    description: "Ishlayotgan prototip asosida tezkor rivojlantirish imkoniyati",
  },
  {
    icon: Target,
    title: "Aniq maqsad va missiya",
    description: "O'zbekistonda moliyaviy intizomni oshirish — bizning asosiy maqsadimiz",
  },
]

const motivationPoints = [
  "Millionlab odamlar moliyaviy savodxonlik yetishmasligidan aziyat chekmoqda",
  "Kichik bizneslar murakkab buxgalteriya tufayli rivojlanmayapti",
  "Zamonaviy texnologiyalar bu muammolarni hal qilish imkonini beradi",
]

export function WhyUsSection() {
  const [activeTab, setActiveTab] = useState<"strengths" | "projects" | "diff">("strengths")

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Bizning afzalliklar
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nega aynan bizning jamoa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kuchli texnik tajriba, mahalliy bozor tushunchasi va aniq maqsad — muvaffaqiyatimiz kaliti
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted p-1 rounded-xl gap-1">
            <button
              onClick={() => setActiveTab("strengths")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "strengths"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Kuchli tomonlar
            </button>
           
            <button
              onClick={() => setActiveTab("diff")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === "diff"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Farqli jihatlar
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {/* Strengths Tab */}
          {activeTab === "strengths" && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              {strengths.map((item, i) => (
                <Card
                  key={i}
                  className="bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          

          {/* Differentiators Tab */}
          {activeTab === "diff" && (
            <div className="animate-in fade-in duration-300">
              {/* Differentiators Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {differentiators.map((item, i) => (
                  <Card
                    key={i}
                    className="bg-card border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Motivation Section */}
              <Card className="bg-card border-border overflow-hidden py-0">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left - Motivation */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/10 mb-4">
                        Bizning motivatsiya
                      </Badge>
                      <h3 className="font-bold text-foreground text-2xl mb-6">
                        Nima uchun bu muammoni hal qilmoqchimiz?
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {motivationPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-3 pt-6 border-t border-border">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Bizning maqsad</p>
                          <p className="font-bold text-foreground">1 million foydalanuvchi</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary ml-auto" />
                      </div>
                    </div>

                    {/* Right - Stats */}
                    <div className="lg:col-span-2 bg-primary p-8  lg:p-10 flex flex-col justify-center">
                      <h4 className="font-bold text-primary-foreground text-xl mb-8">Raqamlarda biz</h4>
                      <div className="space-y-6">
                        <div className="flex items-center justify-between pb-4 border-b border-primary-foreground/20">
                          <span className="text-primary-foreground/80">Yillik tajriba</span>
                          <span className="text-3xl font-bold text-primary-foreground">3+</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-primary-foreground/20">
                          <span className="text-primary-foreground/80">Tugallangan loyihalar</span>
                          <span className="text-3xl font-bold text-primary-foreground">10+</span>
                        </div>
                        <div className="flex items-center justify-between pb-4 border-b border-primary-foreground/20">
                          <span className="text-primary-foreground/80">Jamoa a'zolari</span>
                          <span className="text-3xl font-bold text-primary-foreground">4</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
