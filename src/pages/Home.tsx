import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import VideoSection from '../components/VideoSection';

const WHATSAPP_NUMBER = '237692319459';
const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

type PriceLine = { amount: string; label: string };

type Offer = {
  id: string;
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
    id: 'unite',
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
    id: 'pack-4',
    title: 'Pack 4 séances',
    tagline: 'Le régulier',
    note: 'Wifi gratuit · Eau, jus & serviette offerts',
    rhythm: '1 séance par semaine',
    validity: 'Valable 30 jours',
    prices: [{ amount: '20 000 FCFA', label: '5 000 F / séance' }],
    whatsappMsg: 'Bonjour Aura Moon, je souhaite réserver le Pack 4 Séances (20 000 FCFA).',
    highlighted: true,
  },
];

const pillars = [
  {
    title: 'Renforce le corps',
    desc: 'Développez une musculature profonde, tonique et équilibrée sans traumatisme articulaire.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M6 7v10M18 7v10M3 9v6M21 9v6M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Améliore la posture',
    desc: 'Alignez votre colonne vertébrale, libérez les tensions dorsales et gagnez en stature.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 7.5v8.5M9 10l3 2 3-2M9 20l3-4 3 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Réduit le stress',
    desc: 'Harmonisez le souffle et le mouvement pour chasser la fatigue mentale et vous ressourcer.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 21c-4-4-7-7-7-11a7 7 0 0 1 14 0c0 4-3 7-7 11z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    ),
  },
  {
    title: "Booste l'énergie",
    desc: 'Stimulez votre métabolisme et rayonnez d’une vitalité saine et durable jour après jour.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Bien-être global',
    desc: 'Une reconnexion profonde et bienveillante avec votre corps dans un havre de paix.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="4" r="2" />
        <path d="M12 7v5M5 11l7 1 7-1M7 21l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-12 max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-3">{eyebrow}</p>
      <h2 className="serif text-3xl md:text-4xl text-[#2D1B17] font-normal leading-tight">{title}</h2>
      {description && <p className="text-sm text-[#6E5A53] leading-relaxed mt-4">{description}</p>}
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <main className="-mt-[56px] sm:-mt-[64px] md:-mt-[72px]">
      {/* Hero : photo nette, sans filtre lourd ni conteneur */}
      <section className="hero flex items-center justify-center text-center px-4 relative pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-18 md:pb-22">
        <div className="text-white max-w-3xl">
          <h1 className="brand-font text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-[0.16em] leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Aura Moon
          </h1>
          <p className="serif text-xl sm:text-3xl md:text-4xl italic text-white mt-2 sm:mt-3 mb-2 sm:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Plus qu'un sport, une énergie durable
          </p>

          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/90 font-medium mb-7 sm:mb-9 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Équilibre · Force · Bien-être
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <a
              href="#grille-tarifs"
              className="bg-[#5C2C20] hover:bg-[#794939] text-white px-7 sm:px-8 py-3 sm:py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              Voir la grille des prix
            </a>
            <a
              href={whatsappLink('Bonjour Aura Moon, je souhaite réserver une séance.')}
              target="_blank"
              rel="noreferrer"
              className="bg-black/30 hover:bg-white text-white hover:text-[#2D1B17] border border-white/70 px-7 sm:px-8 py-3 sm:py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Bienfaits avec cartes délimitées & fond doux */}
      <section className="bg-[#FAF6F2] py-16 md:py-24">
        <div className="section-wrap reveal">
          <SectionHeading
            eyebrow="Bienfaits & énergie"
            title="Pourquoi choisir Aura Moon ?"
            description="Une méthode holistique pour revitaliser votre corps et apaiser votre esprit."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#F5ECE4]/80 hover:bg-white p-5 sm:p-6 rounded-xl border border-[#2D1B17]/10 transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#5C2C20]/10 text-[#5C2C20] flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="serif text-lg md:text-xl text-[#2D1B17] leading-snug mb-2 font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-[13px] text-[#6E5A53] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Vidéos Interactives */}
      <VideoSection />

      {/* Présentation du studio */}
      <section className="section-wrap py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal">
          <div>
            <img
              src="/assets/model.jpg"
              alt="Aura Moon Pilates Studio"
              className="w-full h-[360px] md:h-[500px] object-cover rounded-xl shadow-sm"
            />
            <div className="mt-3 inline-block bg-[#F5ECE4] px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-[#6E5A53] font-medium border border-[#2D1B17]/10">
              📍 Yaoundé · Pharmacie du soleil, Immeuble CCA
            </div>
          </div>

          <div>
            <div className="w-12 h-12 bg-[#5C2C20] rounded-xl flex items-center justify-center mb-5 shadow-sm">
              <img src="/assets/logo.png" alt="Logo Aura Moon" className="w-9 h-9 object-contain" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-2">
              Votre sanctuaire bien-être
            </p>
            <h2 className="serif text-3xl md:text-4xl leading-tight text-[#2D1B17] mb-4">
              Un studio d'exception au cœur de Yaoundé.
            </h2>
            <p className="text-sm leading-relaxed text-[#6E5A53] mb-6">
              Chez <strong className="font-semibold text-[#2D1B17]">Aura Moon Pilates Studio</strong>, nous concevons
              le mouvement conscient comme une source d'énergie durable. Dans un espace calme, bienveillant et raffiné,
              réalignez votre posture et découvrez une nouvelle sensation de liberté corporelle.
            </p>

            <dl className="text-sm space-y-2.5">
              <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">Adresse</dt>
                <dd className="font-medium text-right text-[#2D1B17]">Pharmacie du soleil, Immeuble CCA</dd>
              </div>
              <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">Horaires</dt>
                <dd className="font-medium text-right text-[#2D1B17]">7h30 – 18h30, sur réservation</dd>
              </div>
              <div className="bg-[#F5ECE4]/75 p-3.5 sm:p-4 rounded-xl border border-[#2D1B17]/10 flex justify-between items-center">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[#794939]">WhatsApp</dt>
                <dd className="font-medium text-right text-[#5C2C20] font-semibold">+237 6 92 31 94 59</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Tarifs : les deux formules d'entrée sous forme de cartes délimitées */}
      <section id="grille-tarifs" className="section-wrap pb-16 md:pb-24 scroll-mt-20 reveal">
        <SectionHeading
          eyebrow="Aura Moon Pilates Studio"
          title="Nos premières formules"
          description="Découvrez nos tarifs d'entrée et démarrez votre pratique en douceur."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((offer) => {
            const featured = offer.highlighted;
            return (
              <article
                key={offer.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  featured
                    ? 'bg-[#5C2C20] text-white shadow-md border border-[#461F17]'
                    : 'bg-white text-[#2D1B17] border border-[#2D1B17]/12 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
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
                      className={`text-xs ${
                        featured ? 'text-white/80' : 'text-[#794939]'
                      } font-medium`}
                    >
                      {offer.validity}
                    </span>
                  </div>

                  <h3 className="serif text-2xl sm:text-3xl leading-tight mb-2">
                    {offer.title}
                  </h3>

                  <p
                    className={`text-xs mb-6 ${
                      featured ? 'text-white/80' : 'text-[#6E5A53]'
                    }`}
                  >
                    {offer.note}
                  </p>

                  <div
                    className={`p-4 rounded-lg mb-6 ${
                      featured ? 'bg-black/20 border border-white/10' : 'bg-[#FAF6F2] border border-[#2D1B17]/10'
                    }`}
                  >
                    <p className={`text-[11px] uppercase tracking-wider font-semibold mb-2 ${featured ? 'text-[#D9C3B4]' : 'text-[#794939]'}`}>
                      Rythme : {offer.rhythm}
                    </p>
                    <div className="space-y-1.5">
                      {offer.prices.map((p) => (
                        <div key={p.label} className="flex items-baseline justify-between">
                          <span className="serif text-2xl font-medium">{p.amount}</span>
                          <span className={`text-xs ${featured ? 'text-white/70' : 'text-[#6E5A53]'}`}>{p.label}</span>
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

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#F5ECE4]/70 p-5 rounded-xl border border-[#2D1B17]/10">
          <p className="text-xs text-[#6E5A53]">
            ✨ Serviette, eau et jus offerts à chaque séance. Réservation directe par WhatsApp.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-[#5C2C20] text-white hover:bg-[#794939] px-6 py-2.5 rounded-lg text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors shrink-0"
          >
            <span>Voir tous les tarifs &amp; planning</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section
        className="relative py-20 md:py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=1900&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* voile protecteur pour la lisibilité */}
        <div className="absolute inset-0 bg-[#2D1B17]/55" aria-hidden="true" />

        <div className="section-wrap relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10 text-white reveal">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#D9C3B4] font-semibold mb-4">
              Communauté Aura Moon
            </p>
            <p className="serif text-4xl md:text-5xl leading-tight text-white">
              Suivez nos <span className="italic text-[#FAF6F2]">réseaux Pilates.</span>
            </p>
            <p className="text-sm text-[#D9C3B4] mt-4 leading-relaxed">
              Retrouvez nos conseils posture, coulisses du studio et actualités à Yaoundé.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#2D1B17] px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#F5ECE4] transition-colors rounded-lg shadow-sm"
            >
              <img src="/assets/instagram.png" alt="Instagram" className="w-5 h-5 object-contain shrink-0" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/70 text-white px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-[#2D1B17] transition-colors rounded-lg shadow-sm"
            >
              <img src="/assets/tiktok.png" alt="TikTok" className="w-5 h-5 object-contain shrink-0" />
              <span>TikTok</span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/70 text-white px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-[#2D1B17] transition-colors rounded-lg shadow-sm"
            >
              <img src="/assets/facebook.png" alt="Facebook" className="w-5 h-5 object-contain shrink-0" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
