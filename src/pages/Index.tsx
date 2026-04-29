import Icon from "@/components/ui/icon"

const salaryLevels = [
  { level: "Стажёр", salary: 40, label: "40 000 ₽", color: "#6B7FD7" },
  { level: "Junior", salary: 70, label: "70 000 ₽", color: "#7EC8A4" },
  { level: "Middle", salary: 120, label: "120 000 ₽", color: "#EEBBC3" },
  { level: "Senior", salary: 180, label: "180 000 ₽", color: "#F4C77B" },
  { level: "Lead", salary: 250, label: "250 000+ ₽", color: "#E88C8C" },
]

const skills = [
  { name: "ПЛК / SCADA", pct: 95 },
  { name: "Электротехника", pct: 90 },
  { name: "C++ / Python", pct: 85 },
  { name: "Промышл. сети", pct: 80 },
  { name: "Робототехника", pct: 75 },
  { name: "AutoCAD", pct: 68 },
]

const duties = [
  { icon: "Settings2", text: "Проектирование АСУ ТП" },
  { icon: "Cpu", text: "Программирование ПЛК" },
  { icon: "Wrench", text: "Наладка и запуск" },
  { icon: "ShieldCheck", text: "Техобслуживание" },
  { icon: "FileText", text: "Тех. документация" },
  { icon: "Users", text: "Управление проектами" },
]

const specs = [
  { icon: "Factory", text: "Промавтоматика" },
  { icon: "Bot", text: "Робототехника" },
  { icon: "Zap", text: "Электроавтоматика" },
  { icon: "Building2", text: "Умные здания" },
]

const workPlaces = [
  "Заводы и производство",
  "Нефтегаз / Энергетика",
  "Автомобилестроение",
  "Интеграторы АСУ",
  "Аэрокосмос",
  "IoT / Industry 4.0",
]

const studyPaths = [
  { icon: "GraduationCap", title: "Вуз", sub: "5–6 лет", color: "#EEBBC3" },
  { icon: "BookOpen", title: "Колледж", sub: "3–4 года", color: "#7EC8A4" },
  { icon: "Monitor", title: "Онлайн", sub: "6–18 мес.", color: "#F4C77B" },
]

const advantages = [
  { icon: "TrendingUp", text: "Высокий спрос" },
  { icon: "Globe", text: "Работа за рубежом" },
  { icon: "Shield", text: "Стабильность" },
  { icon: "Rocket", text: "Быстрый рост" },
]

const MAX_SALARY = 250

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(230,33%,21%)] text-white font-sans">
      {/* Header */}
      <div className="bg-[hsl(230,40%,14%)] border-b border-white/10 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#EEBBC3]/20 flex items-center justify-center">
            <Icon name="Cpu" size={22} className="text-[#EEBBC3]" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight leading-none">Инженер по автоматизации</h1>
            <p className="text-sm text-white/50 mt-0.5">Инфографика · 2025</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6">
          {[
            { v: "120 000 ₽", l: "Средняя зарплата" },
            { v: "10 000+", l: "Вакансий" },
            { v: "↑34%", l: "Рост спроса" },
          ].map((s, i) => (
            <div key={i} className="text-right">
              <p className="text-xl font-black text-[#EEBBC3] leading-none">{s.v}</p>
              <p className="text-xs text-white/50 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* === LEFT COLUMN === */}
        <div className="md:col-span-4 flex flex-col gap-4">

          {/* Description */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-3">О профессии</p>
            <p className="text-base leading-relaxed text-white/85">
              Специалист, который <span className="text-white font-bold">автоматизирует производственные процессы</span> — 
              внедряет роботов, умные системы управления и промышленные контроллеры. 
              Одна из самых <span className="text-[#EEBBC3] font-bold">востребованных профессий</span> в промышленности.
            </p>
          </div>

          {/* Duties */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-4">Обязанности</p>
            <div className="grid grid-cols-2 gap-2">
              {duties.map((d, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2.5">
                  <Icon name={d.icon} size={16} className="text-[#EEBBC3] shrink-0" />
                  <span className="text-sm font-medium text-white/85">{d.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-4">Специализации</p>
            <div className="grid grid-cols-2 gap-2">
              {specs.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-2 bg-[#EEBBC3]/10 rounded-xl p-3 text-center">
                  <Icon name={s.icon} size={22} className="text-[#EEBBC3]" />
                  <span className="text-sm font-bold text-white">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-4">Преимущества</p>
            <div className="grid grid-cols-2 gap-2">
              {advantages.map((a, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#EEBBC3]/15 flex items-center justify-center shrink-0">
                    <Icon name={a.icon} size={14} className="text-[#EEBBC3]" />
                  </div>
                  <span className="text-sm font-semibold text-white/85">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === CENTER COLUMN === */}
        <div className="md:col-span-5 flex flex-col gap-4">

          {/* Salary chart */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8 flex-1">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-5">Зарплата по опыту</p>
            <div className="flex flex-col gap-3">
              {salaryLevels.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-white">{s.level}</span>
                    <span className="text-sm font-black" style={{ color: s.color }}>{s.label}</span>
                  </div>
                  <div className="w-full h-7 bg-white/8 rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg flex items-center px-3 transition-all"
                      style={{
                        width: `${(s.salary / MAX_SALARY) * 100}%`,
                        backgroundColor: s.color,
                      }}
                    >
                      <span className="text-xs font-bold text-[#1a1f3a] whitespace-nowrap">{s.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/35 mt-4">* Россия, 2024–2025. Данные hh.ru</p>
          </div>

          {/* Skills chart */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-5">Ключевые навыки</p>
            <div className="flex flex-col gap-3">
              {skills.map((sk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white/80 w-32 shrink-0">{sk.name}</span>
                  <div className="flex-1 h-5 bg-white/8 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${sk.pct}%`,
                        background: `linear-gradient(90deg, #EEBBC3, #b08090)`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-black text-[#EEBBC3] w-8 text-right">{sk.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className="md:col-span-3 flex flex-col gap-4">

          {/* Where to study */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-4">Где учиться</p>
            <div className="flex flex-col gap-3">
              {studyPaths.map((sp, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: sp.color + "25" }}
                  >
                    <Icon name={sp.icon} size={20} style={{ color: sp.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base leading-none">{sp.title}</p>
                    <p className="text-sm mt-1" style={{ color: sp.color }}>{sp.sub}</p>
                  </div>
                </div>
              ))}
              <div className="bg-[#EEBBC3]/10 rounded-xl p-3 mt-1">
                <p className="text-xs text-white/60 leading-relaxed">
                  Лучшие вузы: <span className="text-white font-semibold">МГТУ Баумана, СПбПУ, УрФУ</span><br/>
                  Специальность: <span className="text-[#EEBBC3] font-semibold">15.03.04 / 27.03.04</span>
                </p>
              </div>
            </div>
          </div>

          {/* Where to work */}
          <div className="bg-[hsl(230,28%,25%)] rounded-2xl p-5 border border-white/8">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest mb-4">Где работать</p>
            <div className="flex flex-col gap-2">
              {workPlaces.map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EEBBC3] shrink-0" />
                  <span className="text-sm font-medium text-white/80">{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career path visual */}
          <div className="bg-gradient-to-br from-[#EEBBC3]/20 to-[#EEBBC3]/5 rounded-2xl p-5 border border-[#EEBBC3]/20 flex flex-col gap-3">
            <p className="text-xs font-bold text-[#EEBBC3] uppercase tracking-widest">Карьерный путь</p>
            {["Стажёр", "Инженер", "Старший", "Руководитель"].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#EEBBC3]/25 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-[#EEBBC3]">{i + 1}</span>
                </div>
                <span className="text-sm font-semibold text-white">{step}</span>
                {i < arr.length - 1 && (
                  <Icon name="ChevronRight" size={14} className="text-[#EEBBC3]/40 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
