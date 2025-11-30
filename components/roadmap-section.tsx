import { CheckCircle2, Circle, Rocket } from "lucide-react"

const stages = [
  {
    title: "G'oya",
    description: "Muammoni aniqlash va yechim konsepsiyasi",
    status: "current",
  },
  {
    title: "Prototip",
    description: "Dastlabki dizayn va arxitektura",
    status: "upcoming",
  },
  {
    title: "MVP",
    description: "Asosiy funksiyalar va AI model integratsiyasi",
    status: "upcoming",
  },
  {
    title: "Integratsiyalar",
    description: "To'lov tizimlari va soliq API ulanishlari",
    status: "upcoming",
  },
  {
    title: "AI Assistant 2.0",
    description: "Kengaytirilgan AI imkoniyatlari",
    status: "upcoming",
  },
  {
    title: "Mobil ilova",
    description: "iOS va Android ilovalar",
    status: "upcoming",
  },
]

export function RoadmapSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Yo'l xaritasi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pulim AI rivojlanish bosqichlari — hozir MVP bosqichidamiz
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-border" />
          <div
            className="hidden lg:block absolute top-8 left-0 h-1 bg-linear-to-r from-primary to-secondary"
            style={{ width: "12.66%" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {stages.map((stage, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Node */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 ${
                    stage.status === "completed"
                      ? "bg-primary text-primary-foreground"
                      : stage.status === "current"
                        ? "bg-linear-to-br from-primary to-secondary text-primary-foreground ring-4 ring-primary/30"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {stage.status === "completed" ? (
                    <CheckCircle2 className="w-7 h-7" />
                  ) : stage.status === "current" ? (
                    <Rocket className="w-7 h-7" />
                  ) : (
                    <Circle className="w-7 h-7" />
                  )}
                </div>

                <h3 className={`font-bold mb-2 ${stage.status === "current" ? "text-primary" : "text-foreground"}`}>
                  {stage.title}
                </h3>
                <p className="text-xs text-muted-foreground">{stage.description}</p>

                {stage.status === "current" && (
                  <span className="mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Hozirgi bosqich
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
