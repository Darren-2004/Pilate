import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '237692319459';
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

type PriceLine = { amount: string; label: string };

type Offer = {
  title: string;
  tagline: string;
  note: string;
  rhythm: string;
  validity: string;
  prices: PriceLine[];
  whatsappMsg: string;
  highlighted?: boolean;
};

const offers: Offer[] = [
  {
    title: "Séance à l'unité",
    tagline: 'Le bon choix',
    note: 'Eau, jus & serviette offerts',
    rhythm: 'Séance unique',
    validity: 'Sur réservation préalable',
    prices: [
      { amount: '5 000 FCFA', label: 'En semaine' },
      { amount: '6 000 FCFA', label: 'Week-end' },
    ],
    whatsappMsg: "Bonjour Aura Moon, je souhaite réserver une séance à l'unité.",
  },
  {
    title: 'Pack 4 séances',
    tagline: 'Le régulier',
    note: 'Wifi gratuit · Eau, jus & serviette offerts',
    rhythm: '1 séance par semaine',
    validity: 'Valable 30 jours',
    prices: [{ amount: '20 000 FCFA', label: '5 000 F / séance' }],
    whatsappMsg: 'Bonjour Aura Moon, je souhaite réserver le Pack 4 Séances (20 000 FCFA).',
  },
  {
    title: 'Pack 8 séances',
    tagline: 'Le plus populaire',
    note: 'Wifi gratuit · Suivi continu · Eau, jus & serviette offerts',
    rhythm: '2 séances par semaine',
    validity: 'Valable 30 jours',
    prices: [{ amount: '40 000 FCFA', label: '5 000 F / séance' }],
    whatsappMsg: 'Bonjour Aura Moon, je souhaite réserver le Pack 8 Séances (40 000 FCFA).',
    highlighted: true,
  },
  {
    title: 'Pack 12 séances',
    tagline: 'Le transformateur',
    note: 'Wifi gratuit · Renforcement profond · Eau, jus & serviette offerts',
    rhythm: '3 séances par semaine',
    validity: 'Valable 30 jours',
    prices: [{ amount: '6 0000 FCFA'.replace('6 0000', '60 000'), label: '5 000 F / séance' }],
    whatsappMsg: 'Bonjour Aura Moon, je souhaite réserver le Pack 12 Séances (60 000 FCFA).',
  },
  {
    title: 'Pack 16 séances',
    tagline: 'Le passionné',
    note: 'Wifi gratuit · Accompagnement intensif · Eau, jus & serviette offerts',
    rhythm: '4 séances par semaine',
    validity: 'Valable 30 jours',
    prices: [{ amount: '80 000 FCFA', label: '5 000 F / séance' }],
    whatsappMsg: 'Bonjour Aura Moon, je souhaite réserver le Pack 16 Séances (80 000 FCFA).',
  },
];

const disciplines = [
  {
    number: '01',
    label: 'Fondations',
    title: 'Pilates au sol & Mobilité',
    schedule: 'Lun / Mer / Ven · Matinée & soir',
    text: 'Travail au sol ciblant le centre du corps, le renforcement du dos, la respiration et la souplesse articulaire.',
  },
  {
    number: '02',
    label: 'Alignement',
    title: 'Pilates Posture & Dos',
    schedule: 'Mar / Jeu · Séances sur créneau',
    text: 'Correction posturale active, renforcement des chaînes musculaires profondes et soulagement des tensions.',
  },
  {
    number: '03',
    label: 'Vitalité',
    title: 'Énergie & Équilibre',
    schedule: 'Samedi & dimanche',
    text: "Un flux revitalisant pour recharger le corps et l'esprit, réduire le stress et aborder la semaine plein d'énergie.",
  },
];

const experience = [
  'Séances de 50 à 60 minutes avec écoute et suivi personnalisé.',
  'Petits groupes pour des corrections posturales précises et bienveillantes.',
  "Une bouteille d'eau, un jus frais et une serviette fournis sur place.",
  'Wifi haut débit gratuit à disposition des membres sur tous les packs.',
];

const steps = [
  <>
    Contactez-nous par WhatsApp au <strong className="font-semibold text-[#5C2C20]">+237 6 92 31 94 59</strong> pour choisir votre
    créneau.
  </>,
  "Rendez-vous à l'Immeuble CCA (Pharmacie du soleil, Yaoundé).",
  'Prévoyez d’arriver 10 à 15 minutes à l’avance pour un premier échange sur vos objectifs.',
  'Portez une tenue confortable et ajustée (legging, t-shirt et chaussettes adaptées).',
];

const faqs = [
  {
    q: "Ai-je besoin d'avoir déjà fait du Pilates ?",
    a: 'Non. Nos séances s’adaptent aussi bien aux débutants qu’aux personnes expérimentées.',
  },
  {
    q: 'Quelle est la durée de validité des packs ?',
    a: 'Tous nos packs (4, 8, 12 et 16 séances) sont valables 30 jours à compter de la première séance.',
  },
  {
    q: "Faut-il réserver à l'avance ?",
    a: 'Oui, toutes les séances sont sur réservation pour garantir la qualité et le calme du studio.',
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-3">{eyebrow}</p>
      <h2 className="serif text-3xl md:text-4xl text-[#2D1B17] font-normal leading-tight">{title}</h2>
    </div>
  );
}

export default function Services() {
  useReveal();

  return (
    <main className="section-wrap py-10 md:py-16 space-y-16 md:space-y-24 text-[#2D1B17]">
      {/* En-tête */}
      <section className="reveal grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-3">
            Aura Moon Pilates Studio — Yaoundé
          </p>
          <h1 className="serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4">
            Grille des prix &amp; Formules
          </h1>
          <p className="text-[#6E5A53] text-[15px] leading-relaxed max-w-xl">
            Choisissez la formule qui vous convient pour fortifier votre corps, corriger votre posture et retrouver
            une vitalité durable.
          </p>
        </div>

        <dl className="lg:col-span-5 space-y-2.5">
          <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
            <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">Horaires</dt>
            <dd className="font-medium text-right text-[#2D1B17]">7h30 – 18h30 (Tous les jours)</dd>
          </div>
          <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
            <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">Adresse</dt>
            <dd className="font-medium text-right text-[#2D1B17]">Immeuble CCA, Pharmacie du soleil</dd>
          </div>
          <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
            <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">WhatsApp</dt>
            <dd className="font-medium text-right text-[#5C2C20] font-semibold">+237 6 92 31 94 59</dd>
          </div>
        </dl>
      </section>

      {/* Disciplines : 3 cartes bien délimitées */}
      <section className="reveal">
        <SectionHeading eyebrow="Les cours" title="Trois approches, un même savoir-faire" />
        <div className="grid md:grid-cols-3 gap-5">
          {disciplines.map((d) => (
            <article
              key={d.number}
              className="bg-[#F5ECE4]/60 hover:bg-[#F5ECE4] p-6 sm:p-7 rounded-xl border border-[#2D1B17]/10 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-lg bg-[#5C2C20] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {d.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-white px-2.5 py-1 rounded-full text-[#794939] font-semibold border border-[#2D1B17]/5">
                    {d.label}
                  </span>
                </div>
                <h3 className="serif text-2xl leading-snug mb-2 font-medium">{d.title}</h3>
                <p className="text-xs text-[#794939] font-medium mb-3">🕒 {d.schedule}</p>
                <p className="text-sm text-[#6E5A53] leading-relaxed">{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tarifs : cartes libres délimitées individuellement avec couleurs de fond */}
      <section className="reveal">
        <SectionHeading eyebrow="Grille officielle" title="Toutes nos formules &amp; packs" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => {
            const featured = offer.highlighted;
            return (
              <article
                key={offer.title}
                className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  featured
                    ? 'bg-[#5C2C20] text-white shadow-lg border border-[#461F17] sm:col-span-2 lg:col-span-1'
                    : 'bg-white text-[#2D1B17] border border-[#2D1B17]/12 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full ${
                        featured
                          ? 'bg-white/20 text-white'
                          : 'bg-[#F5ECE4] text-[#5C2C20]'
                      }`}
                    >
                      {offer.tagline}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        featured ? 'text-white/80' : 'text-[#794939]'
                      }`}
                    >
                      {offer.validity}
                    </span>
                  </div>

                  <h3 className="serif text-2xl leading-tight mb-2">{offer.title}</h3>
                  <p className={`text-xs mb-5 ${featured ? 'text-white/80' : 'text-[#6E5A53]'}`}>
                    {offer.note}
                  </p>

                  <div
                    className={`p-4 rounded-xl mb-6 ${
                      featured ? 'bg-black/20 border border-white/10' : 'bg-[#FAF6F2] border border-[#2D1B17]/10'
                    }`}
                  >
                    <p className={`text-[10px] uppercase tracking-wider font-semibold mb-2 ${featured ? 'text-[#D9C3B4]' : 'text-[#794939]'}`}>
                      Rythme : {offer.rhythm}
                    </p>
                    <div className="space-y-1.5">
                      {offer.prices.map((p) => (
                        <div key={p.label} className="flex items-baseline justify-between">
                          <span className="serif text-2xl font-medium">{p.amount}</span>
                          <span className={`text-xs ${featured ? 'text-white/70' : 'text-[#6E5A53]'}`}>
                            {p.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappLink(offer.whatsappMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center py-3.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors rounded-lg ${
                    featured
                      ? 'bg-white text-[#5C2C20] hover:bg-[#F5ECE4]'
                      : 'bg-[#5C2C20] text-white hover:bg-[#794939]'
                  }`}
                >
                  Réserver sur WhatsApp
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-8 bg-[#F5ECE4]/75 p-5 rounded-xl border border-[#2D1B17]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E5A53]">
          <p>
            ✨ Inclus à chaque cours : bouteille d&apos;eau, jus frais, serviette et Wifi gratuit pour tous les packs.
          </p>
          <a
            href="https://wa.me/237692319459?text=Bonjour%20Aura%20Moon%2C%20je%20souhaite%20des%20informations%20sur%20les%20packs."
            target="_blank"
            rel="noreferrer"
            className="text-[#5C2C20] font-semibold underline underline-offset-4 shrink-0"
          >
            Poser une question sur WhatsApp →
          </a>
        </div>
      </section>

      {/* Expérience & Guide avec cartes délimitées */}
      <section className="reveal grid md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <SectionHeading eyebrow="Expérience" title="À quoi s'attendre au studio" />
          <div className="space-y-3">
            {experience.map((item) => (
              <div
                key={item}
                className="bg-white/85 p-4 rounded-xl border border-[#2D1B17]/10 flex items-start gap-3 shadow-xs"
              >
                <span className="text-[#5C2C20] font-bold text-base mt-[-2px]">✓</span>
                <p className="text-sm text-[#6E5A53] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Première séance" title="Guide du nouveau membre" />
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-[#F5ECE4]/70 p-4 rounded-xl border border-[#2D1B17]/10 flex items-start gap-4 shadow-xs"
              >
                <span className="w-7 h-7 rounded-full bg-[#5C2C20] text-white flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-[#6E5A53] leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ en cartes délimitées */}
      <section className="reveal grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="bg-white p-5 rounded-xl border border-[#2D1B17]/10 shadow-xs group"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none">
                <span className="serif text-lg sm:text-xl leading-snug font-medium">{f.q}</span>
                <span
                  aria-hidden="true"
                  className="w-7 h-7 rounded-full bg-[#F5ECE4] text-[#5C2C20] flex items-center justify-center text-lg leading-none transition-transform duration-200 group-open:rotate-45 shrink-0"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pt-3 border-t border-[#2D1B17]/10 text-sm text-[#6E5A53] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="reveal bg-[#5C2C20] text-white px-7 py-10 md:px-12 md:py-14 rounded-2xl shadow-lg grid md:grid-cols-[1fr_auto] gap-8 items-center border border-[#461F17]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#D9C3B4] font-semibold mb-3">
            Votre première séance
          </p>
          <h2 className="serif text-3xl md:text-4xl font-normal leading-tight mb-3">Prête à commencer ?</h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-lg">
            Rejoignez Aura Moon Pilates Studio et développez un corps plus fort, plus souple et une énergie durable au
            quotidien.
          </p>
        </div>
        <a
          href={whatsappLink('Bonjour Aura Moon, je souhaite réserver mon premier cours.')}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-white text-[#5C2C20] hover:bg-[#F5ECE4] px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors rounded-lg shadow-sm"
        >
          Réserver mon premier cours
        </a>
      </section>
    </main>
  );
}
