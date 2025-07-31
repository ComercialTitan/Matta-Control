import React from 'react';
import Contact from './Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Atendimento no mesmo dia",
      description: "Urgência? Atendemos no mesmo dia para resolver seu problema rapidamente"
    },
    {
      icon: "💳",
      title: "Parcelamento facilitado",
      description: "Parcelamos em até 10x no cartão para facilitar seu pagamento"
    },
    {
      icon: "🐕",
      title: "Seguro para pets e crianças",
      description: "Produtos seguros e técnicas que protegem sua família e animais"
    },
    {
      icon: "👨‍🔧",
      title: "Técnicos treinados",
      description: "Profissionais cuidadosos, especialistas e com experiência comprovada"
    },
    {
      icon: "🛡️",
      title: "Garantia estendida",
      description: "Oferecemos garantia estendida e assistência técnica pós-serviço"
    },
    {
      icon: "📋",
      title: "Autorização Anvisa",
      description: "Empresa licenciada e com autorização da Anvisa em dia"
    }
  ];

  return (
    <>
      {/* Seção de Prova Social */}
      <section id="clientes" className="py-12 md:py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Mais de 9.000 clientes atendidos
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-2">
              <span className="text-xl md:text-2xl font-semibold">
                15 anos de experiência na área
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>
            </div>
          </div>

          {/* Seção de Estatísticas de Atendimento */}
          <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <svg className="w-8 h-8 text-[#f0550e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Residências</h3>
              <p className="text-gray-600 mb-1">Soluções seguras e eficazes para lares</p>
              <p className="text-[#f0550e] font-bold text-xl">5.000+</p>
              <p className="text-sm text-gray-500">casas atendidas</p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 20V10h6v10M4 10h16l-8-8-8 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Empresas</h3>
              <p className="text-gray-600 mb-1">Ambientes comerciais livres de pragas</p>
              <p className="text-blue-600 font-bold text-xl">2.000+</p>
              <p className="text-sm text-gray-500">empresas atendidas</p>
            </div>

            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v4H4zm0 6h16v10H4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Indústrias</h3>
              <p className="text-gray-600 mb-1">Soluções especializadas para grandes complexos</p>
              <p className="text-purple-600 font-bold text-xl">1.000+</p>
              <p className="text-sm text-gray-500">indústrias atendidas</p>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Experiências reais de quem já confiou em nosso trabalho.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "Finalmente consegui dormir tranquila. O atendimento foi rápido e o resultado apareceu no mesmo dia!",
                rating: 5
              },
              {
                text: "Tentamos várias soluções antes, mas só aqui conseguimos resolver o problema de verdade. Profissionais de confiança.",
                rating: 5
              },
              {
                text: "Estava com medo por causa dos meus pets, mas o serviço foi seguro, eficiente e feito com muito cuidado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex mb-4 justify-center sm:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 bg-[#F0620E]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/img/logo.png" alt="Matta Control Logo" className="h-32 md:h-48 w-auto" />
            </div>
            {/* Texto institucional */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre a Matta Control</h2>
              <p className="text-lg leading-relaxed text-white max-w-3xl mb-4">
                A Matta Control nasceu com um propósito claro: proteger famílias, com segurança e eficiência no controle de pragas urbanas.
              </p>
              <p className="text-lg leading-relaxed text-white max-w-3xl mb-4">
                <i className="fas fa-user-tie text-white text-2xl mr-2"></i>
                Por trás da nossa marca está um fundador com mais de 15 anos de experiência no setor, que já atendeu centenas de clientes em Belo Horizonte e região. Essa bagagem se traduz em atendimento de excelência, soluções eficazes e resultado garantido.
              </p>
              <p className="text-lg leading-relaxed text-white max-w-3xl mb-4">
                <i className="fas fa-check-circle text-white text-2xl mr-2"></i>
                Escorpiões, cupins, baratas, formigas, roedores… Seja qual for o problema, estamos prontos para resolver com agilidade e responsabilidade.
              </p>
              <p className="text-lg leading-relaxed text-white max-w-3xl">
                <i className="fas fa-map-marker-alt text-white text-2xl mr-2"></i>
                Atendemos residências, comércios, empresas e condomínios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Por que escolher */}
      <section id="porque-escolher" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher a Matta Control?</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
              Atuamos com excelência no controle de pragas urbanas, oferecendo segurança, tecnologia e garantia de resultado. Profissionais qualificados e atendimento personalizado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Nossos Destaques */}
      <section id="destaques" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <i className="fas fa-star text-xl"></i>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Nossos Destaques</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
              Conheça os números e conquistas que fazem da Matta Control uma referência em controle de pragas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <i className="fas fa-users text-[#F0620E] text-2xl"></i>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Clientes Atendidos</h4>
              <p className="text-[#F0620E] font-bold text-2xl">9.000+</p>
              <p className="text-sm text-gray-500">residências e empresas</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <i className="fas fa-calendar-alt text-blue-600 text-2xl"></i>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Anos de Experiência</h4>
              <p className="text-blue-600 font-bold text-2xl">15</p>
              <p className="text-sm text-gray-500">de dedicação ao setor</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <i className="fas fa-check-circle text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Serviços Realizados</h4>
              <p className="text-purple-600 font-bold text-2xl">8.000+</p>
              <p className="text-sm text-gray-500">procedimentos com sucesso</p>
            </div>
          </div>
        </div>
      </section>

      <section><Contact /></section>
    </>
  );
};

export default About;