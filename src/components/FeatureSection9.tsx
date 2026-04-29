import Icon from "@/components/ui/icon"

const duties = [
  {
    icon: "Settings",
    title: "Проектирование систем",
    description: "Разрабатывает системы автоматического управления технологическими процессами на производстве.",
  },
  {
    icon: "Cpu",
    title: "Программирование ПЛК",
    description: "Пишет программы для промышленных контроллеров: Siemens, ABB, Schneider Electric.",
  },
  {
    icon: "Activity",
    title: "Наладка и запуск",
    description: "Настраивает, испытывает и запускает автоматизированные линии и робототехнические комплексы.",
  },
  {
    icon: "ShieldCheck",
    title: "Техническое обслуживание",
    description: "Следит за работой оборудования, устраняет неисправности, проводит плановое ТО.",
  },
  {
    icon: "FileText",
    title: "Документация",
    description: "Составляет техническую документацию, схемы, инструкции для операторов.",
  },
  {
    icon: "Users",
    title: "Управление проектами",
    description: "Координирует работу команды при внедрении новых автоматизированных решений.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Что делает специалист</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Основные обязанности</h2>
          <p className="text-base text-muted-foreground">
            Инженер по автоматизации решает задачи от проектирования до сервисного обслуживания
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {duties.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 rounded-xl border bg-card">
              <div className="flex justify-center items-center w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20">
                <Icon name={item.icon} size={22} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
