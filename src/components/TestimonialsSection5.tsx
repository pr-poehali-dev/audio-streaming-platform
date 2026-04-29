import Icon from "@/components/ui/icon"

const salaryData = [
  { level: "Стажёр", salary: "40 000", years: "0–1 год", color: "bg-chart-2" },
  { level: "Младший инженер", salary: "70 000", years: "1–3 года", color: "bg-chart-4" },
  { level: "Инженер", salary: "120 000", years: "3–6 лет", color: "bg-primary" },
  { level: "Старший инженер", salary: "180 000", years: "6–10 лет", color: "bg-chart-1" },
  { level: "Ведущий / Главный", salary: "250 000+", years: "10+ лет", color: "bg-chart-3" },
]

const maxSalary = 250

const advantages = [
  { icon: "TrendingUp", title: "Высокий спрос", desc: "Рынок нуждается в специалистах больше, чем их выпускают вузы" },
  { icon: "Globe", title: "Работа по всему миру", desc: "Востребован в России, Европе, ОАЭ, Азии" },
  { icon: "Shield", title: "Стабильность", desc: "Промышленность всегда нуждается в автоматизации" },
  { icon: "Rocket", title: "Карьерный рост", desc: "Быстрый рост от младшего до руководителя проектов" },
]

export function TestimonialsSection5() {
  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="salary-title">
      <div className="container mx-auto px-6 flex flex-col gap-16">

        {/* Salary chart */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Карьерный рост</p>
            <h2 id="salary-title" className="text-3xl md:text-4xl font-bold text-foreground">
              Зарплата по уровням опыта
            </h2>
            <p className="text-muted-foreground text-base">Данные по российскому рынку, 2024–2025 г.</p>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
            {salaryData.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-foreground text-base">{item.level}</span>
                    <span className="text-muted-foreground text-sm ml-3">{item.years}</span>
                  </div>
                  <span className="font-bold text-foreground text-lg">{item.salary} ₽</span>
                </div>
                <div className="w-full h-8 bg-foreground/10 rounded-lg overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-lg flex items-center px-3 transition-all`}
                    style={{ width: `${(parseInt(item.salary.replace(/\s/g, "").replace("+", "")) / maxSalary / 1000) * 100}%` }}
                  >
                    <span className="text-xs font-bold text-background">{item.salary} ₽</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Почему эта профессия</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Преимущества профессии</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
              <div key={i} className="flex flex-col gap-4 items-center text-center p-6 rounded-xl border bg-card">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={adv.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
