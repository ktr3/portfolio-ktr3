import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="w-[500vw] h-screen flex bg-gradient-to-r from-sky-900 to-blue-950 overflow-x-auto">
      <section className="w-screen h-full flex items-center justify-center">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-bold">
          👋 Hola, soy KTR3SS
        </motion.h1>
      </section>
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl">⚙️ Desarrollo Web</h2>
      </section>
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl">🤖 Automatizaciones con IA</h2>
      </section>
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl">🎵 Producción musical</h2>
      </section>
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl">📞 Contacto</h2>
      </section>
    </div>
  );
}