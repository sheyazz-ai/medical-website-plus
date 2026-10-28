import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import doctor from "@/assets/doctor.jpg";

const PHONE_DISPLAY = "8 (999) 333-24-52";
const PHONE_TEL = "tel:+79993332452";
const WHATSAPP = "https://wa.me/79993332452";
const MAX = "https://max.ru/";
const ADDRESS = "ул. Краснофлотская, 9А";

const TITLE = "Стоматология «Дента Плюс» — лечение зубов без боли | Краснофлотская, 9А";
const DESC =
  "Стоматология «Дента Плюс» на Краснофлотской, 9А: лечение кариеса, имплантация, протезирование, отбеливание и детская стоматология. Запись по телефону 8 (999) 333-24-52, WhatsApp и Макс.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "стоматология, лечение зубов, имплантация, протезирование, отбеливание зубов, детский стоматолог, Краснофлотская 9а" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Стоматология «Дента Плюс»",
          telephone: "+79993332452",
          address: { "@type": "PostalAddress", streetAddress: ADDRESS, addressCountry: "RU" },
          openingHours: "Mo-Sa 09:00-21:00",
          priceRange: "₽₽",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Лечение кариеса", d: "Современные пломбы, микроскоп и щадящая анестезия.", p: "от 3 500 ₽" },
  { t: "Имплантация", d: "Импланты ведущих брендов с гарантией до 10 лет.", p: "от 35 000 ₽" },
  { t: "Протезирование", d: "Коронки, виниры и мосты из керамики и циркония.", p: "от 15 000 ₽" },
  { t: "Профгигиена", d: "Ультразвук, Air Flow, полировка и фторирование.", p: "от 4 000 ₽" },
  { t: "Отбеливание", d: "Безопасное отбеливание на 6–8 тонов за один визит.", p: "от 12 000 ₽" },
  { t: "Детская стоматология", d: "Бережный подход и лечение без страха.", p: "от 2 500 ₽" },
];

const reasons = [
  ["12+ лет", "опыта врачей"],
  ["8 000+", "довольных пациентов"],
  ["0 боли", "современная анестезия"],
  ["Гарантия", "на все виды работ"],
];

function ContactButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <a href={PHONE_TEL} className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft transition hover:opacity-90">
        Позвонить
      </a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-whatsapp px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90">
        WhatsApp
      </a>
      <a href={MAX} target="_blank" rel="noopener noreferrer" className="rounded-full bg-deep px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90">
        Макс
      </a>
    </div>
  );
}

function Index() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-lg font-bold text-deep">Дента<span className="text-primary">Плюс</span></a>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="Разделы">
            <a href="#services" className="hover:text-primary">Услуги</a>
            <a href="#about" className="hover:text-primary">О клинике</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a href={PHONE_TEL} className="font-bold text-deep hover:text-primary">{PHONE_DISPLAY}</a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium text-deep">Стоматология на Краснофлотской, 9А</p>
            <h1 className="text-3xl font-bold leading-tight text-deep md:text-5xl">Здоровая улыбка без боли и страха</h1>
            <p className="mt-5 text-lg text-muted-foreground">Лечим, восстанавливаем и отбеливаем зубы с помощью современного оборудования. Бесплатная консультация при записи по телефону или в мессенджере.</p>
            <div className="mt-8"><ContactButtons /></div>
          </div>
          <img src={hero} alt="Современный стоматологический кабинет клиники «Дента Плюс»" width={1280} height={960} fetchPriority="high" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
        </section>

        <section className="bg-deep">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
            {reasons.map(([a, b]) => (
              <li key={a} className="text-center">
                <p className="font-display text-2xl font-bold text-secondary md:text-3xl">{a}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{b}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 md:py-24">
          <h2 className="text-2xl font-bold text-deep md:text-4xl">Услуги и цены</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Полный спектр стоматологической помощи для взрослых и детей в одной клинике.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.t} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <h3 className="text-lg font-bold text-deep">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                <p className="mt-4 font-bold text-primary">{s.p}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-muted scroll-mt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <img src={doctor} alt="Стоматолог консультирует пациентку" width={960} height={1120} loading="lazy" className="w-full rounded-3xl object-cover shadow-soft" />
            <div>
              <h2 className="text-2xl font-bold text-deep md:text-4xl">Заботимся о каждом пациенте</h2>
              <p className="mt-5 text-muted-foreground">Наши врачи регулярно проходят обучение и применяют проверенные методики. Перед лечением мы подробно объясняем план и стоимость — без скрытых доплат.</p>
              <ul className="mt-6 space-y-3 text-foreground">
                <li>✓ Цифровая диагностика и 3D-снимки</li>
                <li>✓ Стерильность по медицинским стандартам</li>
                <li>✓ Рассрочка и удобная оплата</li>
                <li>✓ Приём без выходных</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contacts" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-16 text-center md:py-24">
          <h2 className="text-2xl font-bold text-deep md:text-4xl">Запишитесь на приём</h2>
          <p className="mt-4 text-muted-foreground">{ADDRESS} · Пн–Сб 9:00–21:00</p>
          <a href={PHONE_TEL} className="mt-6 inline-block font-display text-3xl font-bold text-primary md:text-5xl">{PHONE_DISPLAY}</a>
          <div className="mt-8"><ContactButtons center /></div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Стоматология «Дента Плюс». {ADDRESS}</p>
        <p className="mt-1">Имеются противопоказания. Необходима консультация специалиста.</p>
      </footer>
    </>
  );
}
