import {
  AlertTriangle,
  TrendingDown,
  BarChart3,
  FileWarning,
  Banknote,
  Wallet,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function ProblemSolutionSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: "Moliya savodxonligi past",
      stat: "67%",
      description:
        "Aholining katta qismi asosiy moliyaviy tushunchalarni bilmaydi",
      impact: "Noto'g'ri moliyaviy qarorlar",
    },
    {
      icon: Banknote,
      title: "Jamg'arma madaniyati sust",
      stat: "34%",
      description: "Oilalar muntazam jamg'arma qilish odatiga ega emas",
      impact: "Kutilmagan xarajatlarga tayyor emas",
    },
    {
      icon: FileWarning,
      title: "Biznes jarayonlari murakkab",
      stat: "60%",
      description: "Kichik bizneslar soliq va hujjatlarni qo'lda yuritadi",
      impact: "Vaqt va resurs yo'qotish",
    },
    {
      icon: BarChart3,
      title: "Daromad-xarajat nazoratsiz",
      stat: "51%",
      description: "Oylik xarajatlar nazorat qilinmaydi",
      impact: "Budjet ortiqcha sarflanadi",
    },
  ];

  const solutions = [
    "AI asosida xarajat tahlili",
    "Avtomatik budjet rejalashtirish",
    "Soliq va to'lov avtomatlashtirish",
    "Real-time moliyaviy monitoring",
  ];

  return (
    <section
      id="muammo"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Muammo va Yechim
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            O'zbekistonda moliyaviy <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              savodxonlik inqilobi
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT: Problem Side */}
            <div className="flex flex-col">
              {/* Problem header card */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-linear-to-r from-red-500/10 to-transparent rounded-2xl blur-xl" />
                <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-linear-to-r from-red-500/10 via-red-500/5 to-transparent border border-red-500/20">
                  <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                    <AlertTriangle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
                      Hozirgi vaziyat
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      O'zbekistondagi muammolar
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-5 rounded-2xl bg-card border border-border hover:border-red-500/40 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
                          <item.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-2xl font-bold text-red-500">
                            {item.stat}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-red-500/60 font-medium">
                            aholi
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-foreground text-base mb-2">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-red-500/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-xs text-red-500/80 font-medium">
                            {item.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Solution Side */}
            <div className="flex flex-col">
              {/* Solution header card */}
              <div className="flex items-center gap-4 mb-6 p-5 rounded-2xl bg-linear-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">
                    Bizning yechim
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">
                    Pulim AI
                  </h3>
                </div>
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {/* Main solution card */}
                <div className="relative p-6 rounded-2xl bg-linear-to-br from-primary/5 via-background to-secondary/5 border border-primary/10 overflow-hidden flex-1">
                  {/* Decorative circles */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-secondary/10 blur-2xl" />

                  <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                    Shaxsiy va biznes moliyasini boshqarishni soddalashtiruvchi{" "}
                    <strong className="text-foreground">aqlli ekotizim</strong>.
                    AI texnologiyalari yordamida moliyaviy erkinlikka erishing.
                  </p>

                  {/* Solution checklist */}
                  <div className="space-y-3 relative z-10">
                    {solutions.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two module cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Wallet className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[10px] text-primary font-semibold uppercase tracking-widest">
                        Shaxsiy
                      </span>
                      <h4 className="text-lg font-bold text-foreground">
                        FinHelp
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Xarajat, jamg'arma, budjet
                      </p>
                    </div>
                  </div>

                  <div className="group relative p-5 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="text-[10px] text-secondary font-semibold uppercase tracking-widest">
                        Biznes
                      </span>
                      <h4 className="text-lg font-bold text-foreground">
                        SmartBill
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Faktura, soliq, hujjatlar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
