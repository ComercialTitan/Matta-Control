import React from 'react';

const services = [
  {
    title: 'Dedetização de Baratas',
    image: '/img/DEDETIZACAO-1.png',
  },
  {
    title: 'Controle de Cupins',
    image: '/img/DEDETIZACAO-7.png',
  },
  {
    title: 'Limpeza de Caixa d’água',
    image: '/img/Caixa-dagua.png',
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Nossos Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
