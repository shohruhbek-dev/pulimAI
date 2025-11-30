import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wallet,
  PiggyBank,
  Bell,
  Sparkles,
  FileText,
  Calculator,
  Package,
  Users,
  FileCheck,
  Briefcase,
  User,
} from "lucide-react";

const finHelpFeatures = [
  {
    icon: PiggyBank,
    title: "Xarajatlarni avtomatik tahlil",
    description: "AI kategoriyalash va trend analiz",
  },
  {
    icon: Wallet,
    title: "Jamg'arma rejalashtiruvchi",
    description: "Maqsadli jamg'arma va progress tracking",
  },
  {
    icon: Bell,
    title: "To'lov eslatmalari",
    description: "Muntazam to'lovlar va deadline bildirgi",
  },
  {
    icon: Sparkles,
    title: "AI tavsiyalari",
    description: "Shaxsiylashtirilgan moliyaviy maslahatlar",
  },
];

const smartBillFeatures = [
  {
    icon: FileText,
    title: "Faktura va shartnomalar",
    description: "Avtomatik hujjat generatsiyasi",
  },
  {
    icon: Calculator,
    title: "Soliq hisob-kitobi",
    description: "QQS, daromad solig'i kalkulyatsiya",
  },
  {
    icon: Package,
    title: "Inventar boshqaruvi",
    description: "Mahsulot va zaxira hisobi",
  },
  {
    icon: Users,
    title: "Xodimlar maoshi",
    description: "Avtomatik oylik hisoblash",
  },
  {
    icon: FileCheck,
    title: "Hujjat avtomatlashtirish",
    description: "Shablonlar va batch processing",
  },
];

export function ModulesSection() {
  return (
    <section id="modullar" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pulim AI Modullari
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shaxsiy va biznes moliya boshqaruvi uchun ikki kuchli modul
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FinHelp */}
          <Card className="bg-linear-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-primary/20 text-primary mb-2">
                    Shaxsiy
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">
                    FinHelp
                  </CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground mt-2">
                Shaxsiy moliya yordamchisi
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {finHelpFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-card/50 hover:bg-card transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SmartBill */}
          <Card className="bg-linear-to-br from-secondary/5 to-secondary/10 border-secondary/20 overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <Badge className="bg-secondary/20 text-secondary mb-2">
                    Biznes
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">
                    SmartBill
                  </CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground mt-2">
                Biznes moliya boshqaruvi
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {smartBillFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-card/50 hover:bg-card transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
