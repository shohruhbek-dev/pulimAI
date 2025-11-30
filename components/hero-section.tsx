import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight mb-6">
          Moliyangizni{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            aqlli boshqaring
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          Pulim AI — shaxsiy va biznes moliyangizni AI yordamida boshqaruvchi
          zamonaviy ekotizim. Daromad-xarajatlarni tahlil qiling, budjet
          rejalashtiring, soliq va to'lovlarni avtomatlashtiring.
        </p>


        
      </div>
    </section>
  );
}
