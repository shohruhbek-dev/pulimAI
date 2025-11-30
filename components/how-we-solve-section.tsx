"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Database, Code2, Bot, Layers, Workflow, CheckCircle2, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    step: "01",
    title: "Ma'lumotlarni yig'ish",
    description: "Foydalanuvchi tranzaksiyalari, xarajatlari va daromadlarini real-time yig'ish va tizimlashtirish",
    icon: Database,
  },
  {
    step: "02",
    title: "AI tahlil va qayta ishlash",
    description: "Sun'iy intellekt yordamida ma'lumotlarni tahlil qilish, patternlarni aniqlash",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Shaxsiy tavsiyalar",
    description: "Har bir foydalanuvchi uchun moslashtirilgan moliyaviy maslahatlar va prognozlar",
    icon: Bot,
  },
]

const technologies = [
  {
    category: "Frontend",
    items: ["React Native", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "OpenAI"],
  },
  {
    category: "Infra",
    items: ["AWS", "Docker", "Kubernetes"],
  },
]

const aiFeatures = [
  {
    title: "NLP - Tabiiy til qayta ishlash",
    description: "O'zbek tilida so'rovlarni tushunish va javob berish",
    icon: Bot,
  },
  {
    title: "Predictive Analytics",
    description: "Xarajat va daromadlarni oldindan bashorat qilish",
    icon: Workflow,
  },
  {
    title: "Anomaly Detection",
    description: "G'ayrioddiy tranzaksiyalarni avtomatik aniqlash",
    icon: Layers,
  },
]

export function HowWesolveSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            Texnik yondashuv
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Muammoni qanday hal qilamiz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Zamonaviy texnologiyalar va AI yechimlar bilan moliyaviy boshqaruvni yangi darajaga olib chiqamiz
          </p>
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Steps / Roadmap */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Asosiy qadamlar</h3>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-6">
                {steps.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeStep === index

                  return (
                    <div
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        "relative pl-16 cursor-pointer transition-all duration-300",
                        isActive ? "opacity-100" : "opacity-70 hover:opacity-90",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute left-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                            : "bg-card border-2 border-border text-muted-foreground",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <Card
                        className={cn(
                          "transition-all duration-300",
                          isActive ? "border-primary bg-card shadow-md" : "border-border bg-card/50",
                        )}
                      >
                        <CardContent className="p-5">
                          <span
                            className={cn("text-xs font-bold", isActive ? "text-primary" : "text-muted-foreground")}
                          >
                            QADAM {item.step}
                          </span>
                          <h4 className="font-bold text-foreground mt-1 mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Texnologiyalar</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-md group"
                >
                  <CardContent className="p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{tech.category}</span>
                    <div className="mt-3 space-y-2">
                      {tech.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-4 border-border bg-card">
              <CardContent className="p-5 text-center">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    REST API
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Microservices
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Cloud Native
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 3: AI Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">AI texnologiyalar</h3>
            </div>

            <div className="space-y-4">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <Card
                    key={index}
                    className="border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-md group overflow-hidden relative"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Card>
                )
              })}
            </div>

            <Card className="mt-4 border-primary/30 bg-primary/5">
              <CardContent className="p-5">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-muted-foreground mt-1">Aniqlik darajasi</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">0.5s</div>
                    <div className="text-xs text-muted-foreground mt-1">Javob tezligi</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}
