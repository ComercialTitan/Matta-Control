import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Controle de Pragas Urbanas',
    image: '/img/DEDETIZACAO-2.png',
    description: [
      'Eliminação eficaz de baratas, formigas, escorpiões e roedores.',
      'Aplicação de produtos seguros e certificados.',
      'Atendimento residencial e comercial.',
      'Garantia de 90 dias.'
    ],
    ctaText: 'Solicitar atendimento',
    ctaLink: 'https://wa.me/5531991173130?text=Quero controle de pragas urbanas'
  },
  {
    title: 'Manejo de Pombos e Morcegos',
    image: '/img/tela-proteção.jpg',
    description: [
      'Controle humanitário e eficiente de pombos e morcegos.',
      'Instalação de barreiras físicas (telas e redes).',
      'Serviço com foco em prevenção e segurança sanitária.',
      'Limpeza e desinfecção das áreas afetadas.'
    ],
    ctaText: 'Quero esse serviço',
    ctaLink: 'https://wa.me/5531991173130?text=Quero manejo de pombos e morcegos'
  },
  {
    title: 'Controle de Cupins',
    image: '/img/DEDETIZACAO-7.png',
    description: [
      'Eliminação de cupins de madeira seca.',
      'Tratamento preventivo e curativo.',
      'Proteção estrutural de móveis e imóveis.',
      'Serviço técnico especializado.'
    ],
    ctaText: 'Quero esse serviço',
    ctaLink: 'https://wa.me/5531991173130?text=Quero controle de cupins'
  },
  {
    title: 'Limpeza de Caixa d\'água',
    image: '/img/Limpeza-de-agua.jpg',
    description: [
      'Higienização completa do reservatório.',
      'Desinfecção com produtos certificados.',
      'Atendimento residencial, comercial e industrial.',
      'Recomendada a cada 6 meses.'
    ],
    ctaText: 'Quero esse serviço',
    ctaLink: 'https://wa.me/5531991173130?text=Quero limpeza de caixa d\'água'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                //className={`w-full object-cover ${service.imageStyle || 'h-56'}`}
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#f0550e] mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-5">
                  <a
                    href={service.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
                  >
                    {service.ctaText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
