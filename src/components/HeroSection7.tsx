import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
          <Badge className="text-sm px-4 py-1.5 rounded-full bg-primary/20 text-primary border-primary/30">
            Профессия будущего
          </Badge>
          <h1 id="hero-heading" className="text-foreground text-4xl lg:text-6xl font-bold leading-tight">
            Инженер по{" "}
            <span className="text-primary">автоматизации</span>
          </h1>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
            Специалист, который автоматизирует производственные процессы, внедряет роботов и умные системы управления.
            Одна из самых востребованных и высокооплачиваемых профессий в промышленности.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {[
            { value: "120 000 ₽", label: "Средняя зарплата", icon: "TrendingUp" },
            { value: "↑ 34%", label: "Рост спроса за 3 года", icon: "BarChart2" },
            { value: "5–7 лет", label: "Срок обучения", icon: "GraduationCap" },
            { value: "10 000+", label: "Вакансий в России", icon: "Briefcase" },
          ].map((stat, i) => (
            <div key={i} className="bg-background/10 border border-border rounded-xl p-5 flex flex-col gap-3 items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon name={stat.icon} size={20} className="text-primary" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
