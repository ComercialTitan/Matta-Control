import React from 'react';
import "./style-components/contact.modules.css";

interface ContactFeature {
  icon: string;
  title: string;
  description: string;
}

const Contact: React.FC = () => {
  const contactFeatures: ContactFeature[] = [
    {
      icon: "⏰",
      title: "Resposta Rápida",
      description: "Atendimento em até 2 horas"
    },
    {
      icon: "📞",
      title: "Atendimento 24h",
      description: "Emergência a qualquer hora"
    },
    {
      icon: "💬",
      title: "WhatsApp Direto",
      description: "Fale conosco pelo WhatsApp"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531991173130?text=Olá! Gostaria de falar com um especialista', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+5531991173130', '_self');
  };

  return (
    <section id="contato" className="py-16 bg-gradient-to-r from-red-500 to-orange-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Não adie, resolva hoje mesmo
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Entre em contato agora e receba um atendimento rápido e personalizado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white text-opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
            <span className="text-xl">💬</span>
            Fale com um especialista agora
        </button>

        <button
            onClick={handlePhoneClick}
            className="bg-white hover:bg-gray-100 text-red-500 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
            <span className="text-xl">📞</span>
            (31) 99117-3130
        </button>

        <a
            href="https://www.instagram.com/mattacontrol/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
        >
            <span className="text-xl">📸</span>
            Instagram
        </a>
        </div>

        {/* Warning Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full px-6 py-3">
            <span className="text-yellow-300 text-xl">⚠️</span>
            <p className="text-white font-medium">
              Atenção: Quanto mais tempo você espera, mais as pragas se multiplicam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

