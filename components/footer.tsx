import { Wallet, Send, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Pulim AI</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://t.me/pulimai"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Send className="w-4 h-4" />
              @pulimai
            </a>
            <a
              href="mailto:info@pulim.ai"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@pulim.ai
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Pulim AI © 2025 — AI500 Hackathon uchun{" "}
            <Heart className="w-4 h-4 text-destructive inline" /> bilan
            yaratildi
          </p>
        </div>
      </div>
    </footer>
  );
}
