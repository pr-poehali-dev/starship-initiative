import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать работу над интерьером?",
    answer:
      "Начните с бесплатной консультации — расскажите нам о своём пространстве, пожеланиях и бюджете. Мы зададим несколько вопросов, чтобы лучше понять вас, и предложим первые идеи. После этого составим техническое задание и приступим к разработке концепции.",
  },
  {
    question: "Сколько времени занимает разработка дизайн-проекта?",
    answer:
      "Концепция интерьера для квартиры обычно готова за 2–3 недели. Полный проект с рабочей документацией — от 4 до 8 недель в зависимости от площади и сложности. Мы заранее согласовываем сроки и придерживаемся их.",
  },
  {
    question: "Вы работаете только в Москве?",
    answer:
      "Наше бюро базируется в Москве, но мы работаем с клиентами по всей России. Для иногородних проектов мы организуем выезды на объект в ключевые моменты, а остальная работа ведётся онлайн — это удобно и никак не влияет на качество.",
  },
  {
    question: "Помогаете ли вы с выбором подрядчиков?",
    answer:
      "Да, у нас есть проверенные бригады и подрядчики, с которыми мы сотрудничаем годами. Мы можем порекомендовать специалистов или помочь вам выбрать из ваших вариантов. Также предоставляем авторский надзор, чтобы ремонт шёл строго по проекту.",
  },
  {
    question: "Что входит в дизайн-проект?",
    answer:
      "В полный дизайн-проект входят: концептуальное решение, планировочные решения, 3D-визуализации, рабочие чертежи для строителей, спецификации материалов и мебели. Также предлагаем комплектацию — подбираем и заказываем всю мебель и декор под ключ.",
  },
  {
    question: "Можно ли изменить проект в процессе работы?",
    answer:
      "Конечно. Мы работаем итерационно: после каждого этапа обсуждаем результат и при необходимости корректируем решения. Ваш комфорт важнее формальностей — мы гибко реагируем на изменения.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}