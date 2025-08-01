import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // 👈 importando o ícone do Instagram

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Informações da Empresa */}
          <div>
            <img src="/img/logo.png" alt="Matta Control" className="h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Matta Control</h3>
            <p className="text-gray-400">
              Especialistas em controle de pragas com atendimento rápido e garantia estendida.
            </p>
          </div>
          
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">WhatsApp:</span>{' '}
                <a href="https://wa.me/5531991173130" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  (31) 99117-3130
                </a>
              </p>
              <p>
                <span className="font-semibold">Telefone:</span>{' '}
                <a href="tel:+5531991173130" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  (31) 99117-3130
                </a>
              </p>
              <p>
                <span className="font-semibold">E-mail:</span>{' '}
                <a href="mailto:comercialmattacontrol@gmail.com" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                  comercialmattacontrol@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Instagram:</span>{' '}
                <a
                  href="https://www.instagram.com/mattacontrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <FaInstagram className="mr-2" /> @mattacontrol
                </a>
              </p>
            </div>
          </div>
          
          {/* Endereço */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Área de atuação</h3>
            <p className="text-gray-400">
              Belo Horizonte - Região Metropolitana
            </p>
          </div>
        </div>
        
        {/* Links Rápidos e Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/politica-privacidade" className="text-gray-400 hover:text-white mr-6 transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
            <div className="text-gray-400">
              © 2025 Matta Control. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
