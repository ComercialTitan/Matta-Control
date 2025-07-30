import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="Logo InovControl" className="h-10 w-auto" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#servicos" className="hover:text-green-600 transition">Serviços</a>
          <a href="#garantia" className="hover:text-green-600 transition">Garantia</a>
          <a href="#clientes" className="hover:text-green-600 transition">Clientes</a>
          <a href="#sobre" className="hover:text-green-600 transition">Sobre</a>
          <a href="#contato" className="hover:text-green-600 transition">Contato</a>
        </nav>

        {/* Contato */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:block text-sm text-gray-700">
            📞 (19) 99692-5836
          </span>
          <a
            href="https://wa.me/5519996925836"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition font-semibold"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
