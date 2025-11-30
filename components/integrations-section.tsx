const integrations = [
  { name: "Click", logo: "/click.svg" },
  { name: "Payme", logo: "/payme.svg" },
  { name: "Uzum Bank", logo: "/uzum.png" },
  { name: "Soliq API", logo: "/soliq.png" },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Integratsiyalar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'zbekistonning yetakchi to'lov tizimlari va xizmatlari bilan integratsiya
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-32 h-16 "
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Click • Payme • Uzum Bank • Soliq API</p>
        </div>
      </div>
    </section>
  )
}
