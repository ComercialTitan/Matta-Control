import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/img/logo.png"
            alt="Logo Matta Control"
            className="h-20 md:h-20 w-auto rounded-full"
          />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#servicos" className="hover:text-[#F0620E] transition text-base md:text-lg">Serviços</a>
          <a href="#garantia" className="hover:text-[#F0620E] transition text-base md:text-lg">Garantia</a>
          <a href="#clientes" className="hover:text-[#F0620E] transition text-base md:text-lg">Clientes</a>
          <a href="#sobre" className="hover:text-[#F0620E] transition text-base md:text-lg">Sobre</a>
          <a href="#contato" className="hover:text-[#F0620E] transition text-base md:text-lg">Contato</a>
        </nav>

        {/* Contato */}
        <div className="flex items-center space-x-4">
          <p>
            <span className="hidden md:block text-base text-gray-700 font-semibold">
              <a href="tel:+5531991173130" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                 📞 (31) 99117-3130
              </a>
            </span>{' '}
          </p>
          <a
            href="https://wa.me/5531991173130"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F0620E] hover:bg-[#f0550e] text-white text-base px-4 py-2 rounded-full transition font-semibold"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;