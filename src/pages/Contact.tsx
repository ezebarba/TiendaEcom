const Contact = () => (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nombre" className="p-2 border rounded" required />
        <input type="email" placeholder="Email" className="p-2 border rounded" required />
        <textarea placeholder="Mensaje" rows={5} className="p-2 border rounded" required />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Enviar
        </button>
      </form>
    </div>
  );
  
  export default Contact;
  