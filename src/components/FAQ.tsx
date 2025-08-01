import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Preciso sair do local após o serviço?",
      answer: "Para a maioria dos serviços, não é necessário sair de casa. Recomendamos apenas evitar o ambiente tratado por 2-4 horas após a aplicação. Nossos técnicos orientarão sobre os cuidados específicos."
    },
    {
      question: "É seguro para meus pets e filhos?",
      answer: "Sim, utilizamos produtos registrados e seguros para crianças e animais domésticos. Nossos técnicos são treinados para aplicar os produtos de forma segura, seguindo todos os protocolos de segurança."
    },
    {
      question: "Qual o prazo de garantia?",
      answer: "Nossa garantia é total e sem burocracia. Se o problema reaparecer dentro do prazo, retornamos gratuitamente. Basta entrar em contato que agendamos o retorno no mesmo dia ou no próximo dia útil."
    },
    {
      question: "Qual o prazo para fazer efeito?",
      answer: "O efeito varia conforme o tipo de praga e produto utilizado. Geralmente, você verá resultados nas primeiras 24 a 48 horas. Para cupins, o processo pode levar algumas semanas para eliminação completa da colônia."
    },
    {
      question: "Quanto tempo dura o tratamento",
      answer: "A duração varia por serviço: pragas rasteiras (90 dias), cupins (6 meses a 1 ano), e limpeza de caixa d'água (6 meses). Todos os serviços incluem garantia e retorno gratuito se necessário."
    },
    {
      question: "Quais formas de pagamento aceitam?",
      answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito (parcelamos em até 10x sem juros)."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full bg-gray-50 hover:bg-gray-100 p-4 text-left font-semibold transition-all duration-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <span className="text-2xl font-bold text-gray-600">
                  {openFAQIndex === index ? '−' : '+'}
                </span>
              </button>
              {openFAQIndex === index && (
                <div className="bg-white p-4 border-t border-gray-200 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;