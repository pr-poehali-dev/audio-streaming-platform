import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"

export function Footer2() {
  return (
    <footer className="bg-muted py-12 lg:py-16" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-8">
          <div className="flex flex-col items-center lg:flex-row gap-8">
            <a href="/" aria-label="На главную">
              <Logo />
            </a>
            <nav
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center"
              aria-label="Навигация в подвале"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Обязанности</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Навыки</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Зарплата</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Обучение</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </nav>
          </div>
        </div>

        <Separator role="presentation" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center">
          <p className="text-muted-foreground">
            2025 АвтоИнженер. Инфографика о профессии.
          </p>
          <p className="text-muted-foreground text-sm">
            Данные актуальны на 2024–2025 год
          </p>
        </div>
      </div>
    </footer>
  )
}
