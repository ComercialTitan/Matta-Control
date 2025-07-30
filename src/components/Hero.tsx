import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
      style={{ backgroundImage: 'url("/img/casa-1.jpg")' }}
    >
      {/* Overlay parcial centralizado */}
      <div className="absolute w-[92%] h-[50%] bg-orange-500 opacity-70 rounded-xl z-0" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 text-white p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Protegendo sua saúde e seu patrimônio</h1>
        <p className="mb-8">Dedetização profissional com rapidez, segurança e garantia</p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600"
        >
          Fale conosco no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
