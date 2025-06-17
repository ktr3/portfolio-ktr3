import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="w-[500vw] h-screen flex bg-gradient-to-r from-sky-900 to-blue-950 overflow-x-auto">
      
      {/* SECCIÓN 1 — Intro con animación del pingüino */}
      <section className="w-screen h-full flex flex-col justify-center items-center relative bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
        <motion.img
          src="/character.png" // Asegúrate de que este archivo esté en /public
          alt="Pingüino Gánster"
          className="w-32 h-32 md:w-40 md:h-40 absolute bottom-10 left-[-100px]"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.h1
          className="text-5xl font-bold z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          👋 Hola, soy KTR3SS
        </motion.h1>
        <motion.p
          className="text-lg text-center mt-4 max-w-xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Este soy yo, un pingüino con estilo... y código. 🐧💼
        </motion.p>
      </section>

      {/* SECCIÓN 2 */}
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl text-white">⚙️ Desarrollo Web</h2>
      </section>

      {/* SECCIÓN 3 */}
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl text-white">🤖 Automatizaciones con IA</h2>
      </section>

      {/* SECCIÓN 4 */}
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl text-white">🎵 Producción musical</h2>
      </section>

      {/* SECCIÓN 5 */}
      <section className="w-screen h-full flex items-center justify-center">
        <h2 className="text-4xl text-white">📞 Contacto</h2>
      </section>

    </div>
  );
}
