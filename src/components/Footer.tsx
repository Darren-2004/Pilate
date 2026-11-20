import { Link } from 'react-router-dom';
import AuraLogo from './AuraLogo';

export default function Footer() {
  return (
    <footer className="bg-[#2C211D] text-[#FAF7F4] py-16 mt-16 border-t border-white/10">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <AuraLogo light={true} size="md" />
            <p className="text-xs leading-relaxed text-[#D9C3B4] italic pt-1">
              « Plus qu'un sport, une énergie durable. »
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#88A795] font-semibold">
              Équilibre · Force · Bien-être
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-5 text-[#FAF7F4]">
              Explorer
            </h4>
            <ul className="text-xs space-y-3 text-[#D9C3B4] tracking-wider">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Grille des prix
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  À propos du Studio
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/237692319459?text=Bonjour%20Aura%20Moon%2C%20je%20souhaite%20r%C3%A9server."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Réserver une séance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-5 text-[#FAF7F4]">
              Studio Yaoundé
            </h4>
            <ul className="text-xs space-y-2.5 text-[#D9C3B4]">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Pharmacie du soleil, Immeuble CCA, Yaoundé</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+237692319459" className="hover:text-white font-medium">
                  +237 6 92 31 94 59
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href="https://wa.me/237692319459"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Réservation
                </a>
              </li>
              <li className="flex items-center gap-2 text-[11px] opacity-80 pt-1">
                <span>⏰</span>
                <span>7h30 - 18h30 (Tous les jours sur réservation)</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-5 text-[#FAF7F4]">
              Suivez Aura Moon
            </h4>
            <p className="text-xs text-[#D9C3B4] mb-4">
              Rejoignez notre communauté sur les réseaux sociaux :
            </p>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#D9C3B4] hover:text-white transition group"
              >
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  className="w-5 h-5 rounded-md object-contain shrink-0 group-hover:scale-110 transition-transform"
                />
                <span>Instagram (Aura Moon)</span>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#D9C3B4] hover:text-white transition group"
              >
                <img
                  src="/assets/tiktok.png"
                  alt="TikTok"
                  className="w-5 h-5 rounded-md object-contain shrink-0 group-hover:scale-110 transition-transform"
                />
                <span>TikTok (Aura Moon)</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[#D9C3B4] hover:text-white transition group"
              >
                <img
                  src="/assets/facebook.png"
                  alt="Facebook"
                  className="w-5 h-5 rounded-md object-contain shrink-0 group-hover:scale-110 transition-transform"
                />
                <span>Facebook (Aura Moon)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-wider text-[#D9C3B4]/70">
          <p>© {new Date().getFullYear()} Aura Moon Pilates Studio. Tous droits réservés.</p>
          <div className="flex gap-6 text-[#88A795]">
            <span>Équilibre</span>
            <span>·</span>
            <span>Force</span>
            <span>·</span>
            <span>Bien-être</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
