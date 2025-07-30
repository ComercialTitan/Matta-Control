const ContactForm = () => (
  <section className="p-10 text-center">
    <h2 className="text-2xl font-bold mb-4">Solicite seu orçamento</h2>
    <form
      action="https://formsubmit.co/SEUEMAIL@email.com"
      method="POST"
      className="flex flex-col max-w-md mx-auto gap-4 text-left"
    >
      <input type="text" name="nome" placeholder="Nome" required className="p-2 border rounded" />
      <input type="text" name="whatsapp" placeholder="WhatsApp" required className="p-2 border rounded" />
      <input type="text" name="endereco" placeholder="Endereço (opcional)" className="p-2 border rounded" />
      <input type="text" name="servico" placeholder="Tipo de serviço desejado" className="p-2 border rounded" />
      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">SOLICITAR ORÇAMENTO</button>
    </form>
  </section>
);

export default ContactForm;