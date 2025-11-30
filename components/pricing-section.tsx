import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Asosiy funksiyalar",
    features: [
      "Xarajatlarni kuzatish",
      "Asosiy tahlillar",
      "3 ta jamg'arma maqsadi",
      "To'lov eslatmalari",
    ],
    buttonText: "Bepul boshlash",
    popular: false,
  },
  {
    name: "Premium",
    price: "49,000",
    description: "Kengaytirilgan AI tahlillar",
    features: [
      "Barcha Free imkoniyatlar",
      "AI prognozlari",
      "Cheksiz jamg'arma maqsadlari",
      "Anomaliya aniqlash",
      "Shaxsiy tavsiyalar",
      "Priority support",
    ],
    buttonText: "Premium olish",
    popular: true,
  },
  {
    name: "Business",
    price: "199,000",
    description: "SmartBill to'liq paketi",
    features: [
      "Barcha Premium imkoniyatlar",
      "SmartBill moduli",
      "Faktura va shartnomalar",
      "Soliq hisob-kitobi",
      "Xodimlar maoshi",
      "API kirish",
      "Dedicated support",
    ],
    buttonText: "Demo so'rash",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="narxlar" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Biznes modeli
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O'zingizga mos tarifni tanlang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative bg-card border-border ${
                plan.popular ? "border-primary shadow-xl scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-linear-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MASHHUR
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "0" && (
                    <span className="text-muted-foreground ml-1">so'm/oy</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-linear-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
