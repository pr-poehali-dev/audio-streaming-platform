import Icon from "@/components/ui/icon"

const skills = [
  { icon: "Cpu", title: "ПЛК и SCADA", level: 95 },
  { icon: "Code2", title: "Программирование (C++, Python, Ladder)", level: 85 },
  { icon: "Zap", title: "Электротехника и схемотехника", level: 90 },
  { icon: "Wifi", title: "Промышленные сети (Modbus, Profibus)", level: 80 },
  { icon: "Bot", title: "Робототехника и ЧПУ", level: 75 },
  { icon: "BarChart3", title: "AutoCAD / SolidWorks", level: 70 },
]

const specs = [
  { icon: "Factory", title: "Промышленная автоматика", desc: "Заводы, линии производства, ресурсодобыча" },
  { icon: "Bot", title: "Робототехника", desc: "Промышленные роботы, манипуляторы" },
  { icon: "Zap", title: "Электроавтоматика", desc: "Силовое оборудование, приводы" },
  { icon: "Building2", title: "Умные здания", desc: "BMS-системы, климат, безопасность" },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-16">

        {/* Skills */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Что нужно знать</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Необходимые навыки</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col gap-3 bg-background/10 rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon name={skill.icon} size={18} className="text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{skill.title}</span>
                  <span className="ml-auto text-primary font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Направления</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Специализации</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col gap-4 items-center text-center p-6 rounded-xl bg-background/10 border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon name={spec.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{spec.title}</h3>
                <p className="text-sm text-muted-foreground">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
