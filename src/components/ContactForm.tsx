import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    address: '',
    service: '',
  });

  const services = [
    "Controle de Pragas Urbanas",
    "Controle de Cupins",
    "Manejo de Pombos e Morcegos",
    "Limpeza de Caixas d'água",
    "Outros serviços"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento.\nNome: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nEndereço: ${formData.address}\nServiço: ${formData.service}`;
    
    const whatsappUrl = `https://wa.me/5531991173130?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Seção do Formulário */}
      <section id="contato" className="py-16 bg-gradient-to-b from-[#F0620E] to-[#F5F5F5]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Solicite seu Orçamento
          </h2>
          
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="(31) 99999-9999"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                  Endereço (opcional)
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Seu endereço completo"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Tipo de serviço desejado *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-lg uppercase transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Seção do Mapa */}
      <section className="py-16 bg-gradient-to-b from-white to-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0550e] text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-xl"></i>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossa Área de Atendimento</h2>
          </div>
          
          <div className="bg-white/90 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Matta Control</h3>
              <p className="text-gray-700"> Belo Horizonte - Região Metropolitana</p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 w-full mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120034.30697930006!2d-43.94494616632399!3d-19.921366600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1754066801904!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Belo+Horizonte+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;