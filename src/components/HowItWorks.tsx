import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: "📱",
      title: "Você solicita pelo WhatsApp",
      description: "Entre em contato conosco pelo WhatsApp e conte sobre seu problema"
    },
    {
      icon: "📅",
      title: "Agendamos a visita",
      description: "Marcamos a visita no melhor horário para você, inclusive no mesmo dia"
    },
    {
      icon: "🛡️",
      title: "Realizamos o controle",
      description: "Nossos técnicos fazem o serviço com segurança e produtos de qualidade"
    },
    {
      icon: "✅",
      title: "Garantia estendida",
      description: "Você volta ao local sem pragas e com nossa garantia de assistência"
    }
  ];

  return (
    <section id="garantia" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título e Texto Principal */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-[#F0620E] text-white rounded-full w-12 h-12 flex items-center justify-center">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Garantia Matta Control</h2>
          <p className="text-lg text-gray-600 mb-4">Se a praga voltar, nós também!</p>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Garantia total e sem burocracia. Se reaparecer, retornamos sem custo adicional.
          </p>
        </div>

        {/* Cards de Garantia */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <i className="fas fa-sync-alt text-[#F0620E] text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Retorno Gratuito</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Se o problema reaparecer dentro do prazo de garantia, voltamos sem custo adicional. 100% Grátis
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <i className="fas fa-shield-alt text-blue-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sem Burocracia</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Processo simples e rápido. Basta entrar em contato que agendamos o retorno. Fácil & Rápido
            </p>
          </div>
        </div>

        {/* Depoimento */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-12 max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "Ao acionar a garantia, sempre estaremos prontos para te atender."
          </p>
          <p className="text-[#f0550e] font-semibold mt-2">Prezamos excelência e qualidade</p>
        </div>

        {/* Botão CTA */}
        <div className="text-center mb-12">
          <a
            href="https://wa.me/5531991173130?text=Gostaria de solicitar um orçamento com garantia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F0620E] hover:bg-[#f0550e] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Orçamento com garantia →
          </a>
        </div>

        {/* Passos de Como Funciona */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simples, rápido e sem dor de cabeça
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Botão Solicitar Orçamento */}
        <div className="text-center">
          <a
            href="https://wa.me/5531991173130?text=Gostaria de solicitar um orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;