import Icon from "@/components/ui/icon"

const educationPaths = [
  {
    icon: "GraduationCap",
    title: "Высшее образование",
    duration: "5–6 лет",
    badge: "Базовый путь",
    badgeColor: "bg-primary/20 text-primary",
    description: "Классический путь через университет",
    items: [
      "Направление: Автоматизация технологических процессов",
      "Ведущие вузы: МГТУ им. Баумана, СПбПУ, УрФУ",
      "Специальность: 15.03.04 или 27.03.04",
      "Степень: бакалавр / специалист / магистр",
    ],
    highlight: false,
  },
  {
    icon: "BookOpen",
    title: "Среднее профессиональное",
    duration: "3–4 года",
    badge: "Быстрый старт",
    badgeColor: "bg-chart-4/30 text-chart-4",
    description: "Технический колледж или техникум",
    items: [
      "Специальность: Техник-электрик / КИПиА",
      "Можно поступить после 9 или 11 класса",
      "Практический уклон, меньше теории",
      "Возможность совмещать с работой",
    ],
    highlight: false,
  },
  {
    icon: "Monitor",
    title: "Онлайн-курсы",
    duration: "6–18 месяцев",
    badge: "Переквалификация",
    badgeColor: "bg-chart-1/30 text-chart-1",
    description: "Для тех, кто уже работает в смежных областях",
    items: [
      "Stepik, Coursera, Skillbox — курсы по ПЛК",
      "Сертификаты Siemens, ABB, Schneider",
      "Подходит инженерам смежных специальностей",
      "Практические проекты и стажировки",
    ],
    highlight: true,
  },
]

const workPlaces = [
  { icon: "Factory", title: "Промышленные предприятия", desc: "Металлургия, нефтегаз, пищевая, фармацевтика" },
  { icon: "Zap", title: "Энергетика", desc: "Электростанции, подстанции, ЖКХ" },
  { icon: "Building2", title: "Интеграторы АСУ ТП", desc: "Компании, внедряющие автоматику" },
  { icon: "Car", title: "Автомобилестроение", desc: "Автозаводы, роботизированные линии" },
  { icon: "Cpu", title: "IT и технологии", desc: "IoT, умные фабрики, Industry 4.0" },
  { icon: "Rocket", title: "Аэрокосмическая отрасль", desc: "Оборонка, авиация, машиностроение" },
]

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="education-title">
      <div className="container mx-auto px-6 flex flex-col gap-16">

        {/* Where to study */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto text-center">
            <p className="text-base font-semibold text-muted-foreground">Образование</p>
            <h2 id="education-title" className="text-3xl md:text-4xl font-bold text-foreground">
              Где учиться
            </h2>
            <p className="text-base text-muted-foreground">Три пути в профессию — выбери свой</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto w-full">
            {educationPaths.map((path, index) => (
              <div
                key={path.title}
                className={`flex-1 rounded-2xl p-8 flex flex-col gap-6 border ${
                  path.highlight ? "bg-foreground text-background" : "bg-background"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${path.highlight ? "bg-background/20" : "bg-primary/10"}`}>
                      <Icon name={path.icon} size={24} className={path.highlight ? "text-background" : "text-primary"} />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${path.highlight ? "bg-background/20 text-background" : path.badgeColor}`}>
                      {path.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{path.title}</h3>
                    <p className={`text-sm mt-1 ${path.highlight ? "opacity-70" : "text-muted-foreground"}`}>{path.description}</p>
                  </div>
                  <div className={`text-3xl font-bold ${path.highlight ? "" : "text-primary"}`}>{path.duration}</div>
                </div>

                <div className="flex flex-col gap-3">
                  {path.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={16}
                        className={`mt-0.5 shrink-0 ${path.highlight ? "opacity-70" : "text-primary"}`}
                      />
                      <span className={`text-sm ${path.highlight ? "opacity-80" : "text-muted-foreground"}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where to work */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto text-center">
            <p className="text-base font-semibold text-muted-foreground">Карьера</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Где работать</h2>
            <p className="text-base text-muted-foreground">Инженеры по автоматизации востребованы во многих отраслях</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto w-full">
            {workPlaces.map((place, i) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-xl bg-background/10 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon name={place.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{place.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
