import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Нужно ли высшее образование, чтобы стать инженером по автоматизации?",
    answer:
      "Не обязательно. Можно начать с колледжа или пройти профильные курсы. Однако высшее образование открывает двери в более крупные компании и даёт глубокую теоретическую базу для карьерного роста.",
  },
  {
    question: "Какой язык программирования нужно учить в первую очередь?",
    answer:
      "Для ПЛК — это языки стандарта IEC 61131-3: Ladder Diagram (LD) и Structured Text (ST). Из классических языков: Python для автоматизации задач и C++ для встраиваемых систем. Начните с Ladder — он самый распространённый в производстве.",
  },
  {
    question: "Сколько времени нужно, чтобы выйти на зарплату 100 000+ рублей?",
    answer:
      "Обычно 3–5 лет практического опыта. При наличии высшего образования и активном саморазвитии (сертификаты Siemens, SCADA-системы) — возможно быстрее.",
  },
  {
    question: "Можно ли работать удалённо инженером по автоматизации?",
    answer:
      "Частично. Проектирование, программирование ПЛК и разработка документации можно делать удалённо. Но наладка, запуск и техническое обслуживание оборудования требуют физического присутствия на объекте.",
  },
  {
    question: "Какие сертификаты повышают стоимость специалиста?",
    answer:
      "Siemens SIMATIC, Schneider Electric, ABB Robotics, Rockwell Automation, сертификаты по SCADA-системам (WinCC, Wonderware). Международные сертификаты особенно ценятся при работе на зарубежных проектах.",
  },
  {
    question: "В чём разница между инженером КИПиА и инженером по автоматизации?",
    answer:
      "КИПиА (контрольно-измерительные приборы и автоматика) — более узкая специализация, фокус на измерительных приборах и регуляторах. Инженер по автоматизации — шире: включает проектирование систем управления, программирование, робототехнику и интеграцию систем.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы и ответы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Частые вопросы о профессии
          </h1>
          <p className="text-muted-foreground">
            Собрали самые популярные вопросы от тех, кто хочет войти в профессию
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
