import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  Users,
  MessageCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "Xarajat prognozi",

    description: "Kelajakdagi xarajatlarni oldindan bashorat qilish",
  },
  {
    icon: Shield,
    title: "Anomaliya aniqlash",

    description: "Tranzaksiyalarni avtomatik aniqlash",
  },
  {
    icon: Users,
    title: "Segmentatsiya",

    description: "Foydalanuvchilarni xulq-atvor bo'yicha guruhlash",
  },
  {
    icon: MessageCircle,
    title: "O'zbek tilidagi AI",

    description: "Mahalliy tilda tabiiy muloqot qiluvchi yordamchi",
  },
  {
    icon: Lightbulb,
    title: "Tavsiya tizimi",

    description: "Shaxsiylashtirilgan moliyaviy maslahatlar",
  },
  {
    icon: BarChart3,
    title: "Trend analizi",

    description: "Daromad-xarajat tendentsiyalarini kuzatish",
  },
];

export function AICapabilitiesSection() {
  return (
    <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            AI Imkoniyatlari
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zamonaviy sun'iy intellekt texnologiyalari bilan moliyaviy tahlil
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, i) => (
            <Card
              key={i}
              className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
