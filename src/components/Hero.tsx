import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/img/DEDETIZACAO-4.png")' }}
    >
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Livre-se das pragas com rapidez e garantia
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Atendimento no mesmo dia | Parcelamos em até 10x | Serviço autorizado pela Anvisa
        </p>
        <a
          href="https://wa.me/5531991173130?text=Olá! Quero me livrar das pragas agora!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 md:py-5 md:px-10 rounded-full text-base md:text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          QUERO ME LIVRAR DAS PRAGAS AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;

