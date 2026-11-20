import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const WHATSAPP_NUMBER = '237692319459';

const rates = [
  { name: "À l'unité", rhythm: 'Séance unique', price: '5 000 FCFA', sub: '6 000 FCFA le week-end' },
  { name: 'Pack 4 séances', rhythm: '1 séance / semaine (30j)', price: '20 000 FCFA' },
  { name: 'Pack 8 séances', rhythm: '2 séances / semaine (30j)', price: '40 000 FCFA', featured: true },
  { name: 'Pack 12 séances', rhythm: '3 séances / semaine (30j)', price: '60 000 FCFA' },
  { name: 'Pack 16 séances', rhythm: '4 séances / semaine (30j)', price: '80 000 FCFA' },
];

const labelClass = 'block text-[11px] uppercase tracking-[0.2em] font-semibold text-[#794939] mb-2';
const fieldClass =
  'w-full bg-[#FAF6F2] border border-[#2D1B17]/15 rounded-lg px-4 py-3 text-[14px] text-[#2D1B17] placeholder:text-[#6E5A53]/60 focus:outline-none focus:border-[#5C2C20] focus:ring-1 focus:ring-[#5C2C20] transition-colors';

export default function Contact() {
  useReveal();
  const [name, setName] = useState('');
  const [selectedPack, setSelectedPack] = useState('Pack 8 Séances (40 000 FCFA)');
  const [message, setMessage] = useState('');

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const prefilledMessage = [
      'Bonjour Aura Moon Pilates Studio,',
      '',
      'Je souhaite réserver une séance / un pack de Pilates.',
      '• Nom : ' + name,
      '• Formule choisie : ' + selectedPack,
      message ? '• Message / Précisions : ' + message : '',
      '',
      "Merci d'avance pour votre retour !",
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(prefilledMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="section-wrap py-10 md:py-16 space-y-16 md:space-y-24 text-[#2D1B17]">
      {/* En-tête, coordonnées & formulaire */}
      <section className="reveal">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-3">Prendre contact</p>
          <h1 className="serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-4">Contactez Aura Moon</h1>
          <p className="text-[#6E5A53] text-[15px] leading-relaxed">
            Une question sur nos cours de Pilates ou envie de réserver votre premier créneau ? Nous sommes à votre
            écoute par WhatsApp ou directement au studio à Yaoundé.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Coordonnées */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-2">Studio Yaoundé</p>
              <h2 className="serif text-3xl mb-6 leading-tight">Aura Moon Pilates Studio</h2>

              <dl className="space-y-3 text-sm">
                <div className="bg-[#F5ECE4]/75 p-4 rounded-xl border border-[#2D1B17]/10">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[#794939] font-semibold mb-1">Adresse</dt>
                  <dd className="font-medium text-[#2D1B17]">
                    Pharmacie du soleil, Immeuble CCA
                    <br />
                    Yaoundé, Cameroun
                  </dd>
                </div>

                <div className="bg-[#F5ECE4]/75 p-4 rounded-xl border border-[#2D1B17]/10">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[#794939] font-semibold mb-1">
                    Téléphone &amp; WhatsApp
                  </dt>
                  <dd>
                    <a
                      href="tel:+237692319459"
                      className="font-medium text-[#5C2C20] hover:underline"
                    >
                      +237 6 92 31 94 59
                    </a>
                  </dd>
                </div>

                <div className="bg-[#F5ECE4]/75 p-4 rounded-xl border border-[#2D1B17]/10">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[#794939] font-semibold mb-1">
                    Horaires d'ouverture
                  </dt>
                  <dd className="font-medium text-[#2D1B17]">
                    7h30 – 18h30, tous les jours
                    <span className="block text-xs text-[#794939] font-normal mt-0.5">Sur réservation préalable</span>
                  </dd>
                </div>

                <div className="bg-[#F5ECE4]/75 p-4 rounded-xl border border-[#2D1B17]/10">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-[#794939] font-semibold mb-2">
                    Réseaux sociaux
                  </dt>
                  <dd className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-transform"
                      title="Instagram Aura Moon"
                    >
                      <img src="/assets/instagram.png" alt="Instagram" className="w-6 h-6 object-contain" />
                    </a>
                    <a
                      href="https://www.tiktok.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-transform"
                      title="TikTok Aura Moon"
                    >
                      <img src="/assets/tiktok.png" alt="TikTok" className="w-6 h-6 object-contain" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-transform"
                      title="Facebook Aura Moon"
                    >
                      <img src="/assets/facebook.png" alt="Facebook" className="w-6 h-6 object-contain" />
                    </a>
                    <span className="text-xs text-[#6E5A53]">@AuraMoonStudio</span>
                  </dd>
                </div>
              </dl>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Aura Moon, je souhaite des renseignements.')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-[#5C2C20] hover:bg-[#794939] text-white px-8 py-3.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors rounded-lg shadow-sm"
            >
              💬 Ouvrir WhatsApp directement
            </a>
          </div>

          {/* Formulaire dans une carte délimitée */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#2D1B17]/12 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-2">
              Réservation rapide
            </p>
            <h2 className="serif text-2xl sm:text-3xl mb-6 leading-tight">Envoyer votre demande</h2>

            <form onSubmit={submitWhatsApp} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Votre nom complet *
                </label>
                <input
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                  type="text"
                  placeholder="Ex : Sophie Ngo"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-pack" className={labelClass}>
                  Formule souhaitée
                </label>
                <select
                  id="contact-pack"
                  value={selectedPack}
                  onChange={(e) => setSelectedPack(e.target.value)}
                  className={fieldClass}
                >
                  <option value="Séance à l'unité (5 000 FCFA sem / 6 000 FCFA w-end)">
                    Séance à l'unité (5 000 F sem / 6 000 F w-end)
                  </option>
                  <option value="Pack 4 Séances (20 000 FCFA)">Pack 4 Séances — 20 000 FCFA</option>
                  <option value="Pack 8 Séances (40 000 FCFA) - Le Plus Populaire">
                    Pack 8 Séances — 40 000 FCFA (Le plus populaire)
                  </option>
                  <option value="Pack 12 Séances (60 000 FCFA)">Pack 12 Séances — 60 000 FCFA</option>
                  <option value="Pack 16 Séances (80 000 FCFA)">Pack 16 Séances — 80 000 FCFA</option>
                  <option value="Autre demande / Renseignements">Autre demande / Renseignements</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Votre message ou créneau préféré
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClass} h-24 resize-none`}
                  placeholder="Précisez votre jour ou horaire souhaité, ou toute question spécifique…"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#5C2C20] hover:bg-[#794939] text-white px-8 py-4 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors rounded-lg shadow-sm"
              >
                <span>Envoyer via WhatsApp</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Rappel des tarifs : cartes délimitées */}
      <section className="reveal">
        <div className="mb-8 md:mb-10 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#794939] font-semibold mb-2">Transparence</p>
          <h2 className="serif text-3xl md:text-4xl font-normal leading-tight">Tarifs officiels Aura Moon</h2>
        </div>

        <div className="space-y-3">
          {rates.map((rate) => (
            <div
              key={rate.name}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 p-4 sm:p-5 rounded-xl border transition-all ${
                rate.featured
                  ? 'bg-[#5C2C20] text-white border-[#461F17] shadow-md'
                  : 'bg-white text-[#2D1B17] border-[#2D1B17]/10 shadow-xs'
              }`}
            >
              <div className="sm:w-1/3">
                <span className={`text-[10px] uppercase tracking-wider font-semibold block mb-0.5 ${rate.featured ? 'text-[#D9C3B4]' : 'text-[#794939]'}`}>
                  {rate.featured ? '★ Plus populaire' : 'Formule'}
                </span>
                <p className="serif text-xl font-medium">{rate.name}</p>
              </div>
              <p className={`text-xs sm:text-sm sm:flex-1 ${rate.featured ? 'text-white/80' : 'text-[#6E5A53]'}`}>
                {rate.rhythm}
              </p>
              <div className="sm:text-right">
                <span className="serif text-xl font-medium">{rate.price}</span>
                {rate.sub && (
                  <span className={`block text-xs ${rate.featured ? 'text-white/70' : 'text-[#6E5A53]'}`}>
                    {rate.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6E5A53] bg-[#F5ECE4]/70 p-4 rounded-xl border border-[#2D1B17]/10">
          <p>Tous les packs sont valables 30 jours et incluent Wifi gratuit, eau et serviette.</p>
          <Link
            to="/services"
            className="text-[#5C2C20] font-semibold underline underline-offset-4 shrink-0"
          >
            Voir le détail complet des formules →
          </Link>
        </div>
      </section>

      {/* Visite du studio */}
      <section className="reveal bg-[#F5ECE4]/60 p-6 sm:p-10 rounded-2xl border border-[#2D1B17]/10 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div>
          <h2 className="serif text-2xl sm:text-3xl font-normal leading-tight mb-4">Visiter le studio Aura Moon</h2>
          <div className="space-y-3 text-sm text-[#6E5A53] leading-relaxed">
            <p>
              Situé à Yaoundé (Pharmacie du soleil, Immeuble CCA),{' '}
              <strong className="font-semibold text-[#2D1B17]">Aura Moon Pilates Studio</strong> offre un cadre
              apaisant, lumineux et parfaitement équipé pour vous ressourcer.
            </p>
            <p>
              Parking et accès sécurisé sur place. Nous vous invitons à réserver votre créneau au préalable pour vous
              garantir une place.
            </p>
          </div>
        </div>

        <div className="md:border-l md:border-[#2D1B17]/15 md:pl-10 flex flex-col justify-center items-start">
          <p className="serif text-xl leading-snug mb-2 font-medium">Besoin d'aide pour choisir votre formule ?</p>
          <p className="text-sm text-[#6E5A53] leading-relaxed mb-5">
            Échangez directement avec nous pour une orientation personnalisée.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Aura Moon, je souhaite un conseil pour choisir ma formule.')}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#5C2C20] hover:bg-[#794939] text-white px-7 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors rounded-lg shadow-sm"
          >
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
