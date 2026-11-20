import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-[#FAF6F2] border-t border-black/5 z-[100] md:hidden shadow-[0_-2px_12px_rgba(44,33,29,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="flex justify-around items-center h-16">
        {/* Accueil */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-[#5C2C20] font-bold' : 'text-[#6E5A53]'
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Accueil</span>
        </NavLink>

        {/* Tarifs & Planning */}
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-[#5C2C20] font-bold' : 'text-[#6E5A53]'
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Tarifs</span>
        </NavLink>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/237692319459?text=Bonjour%20Aura%20Moon%2C%20je%20souhaite%20r%C3%A9server."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-[#5C2C20] transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-[#5C2C20] text-white flex items-center justify-center -mt-3 shadow-lg hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <span className="text-[10px] tracking-wider uppercase font-bold text-[#5C2C20]">Réserver</span>
        </a>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-[#5C2C20] font-bold' : 'text-[#6E5A53]'
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-[10px] tracking-wider uppercase">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
