
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CVVirtual() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white overflow-x-auto whitespace-nowrap">
      <div className="flex h-screen items-center">

        {/* INICIO */}
        <section className="w-screen flex-shrink-0 flex flex-col justify-center items-center px-8">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}>
            KTR3SS
          </motion.h1>
          <motion.p 
            className="text-lg text-zinc-400 max-w-xl text-center"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}>
            Desarrollo soluciones web, automatizaciones inteligentes y despliegues en servidores VPS.
          </motion.p>
        </section>

        {/* SKILLS */}
        <section className="w-screen flex-shrink-0 flex flex-col items-center justify-center px-8">
          <motion.h2 className="text-3xl font-semibold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Skills</motion.h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {['React', 'Node.js', 'PHP', 'n8n', 'Linux', 'Docker', 'Pterodactyl', 'Email Marketing', 'Automatización IA'].map(skill => (
              <motion.div key={skill} className="bg-zinc-800 px-4 py-2 rounded-full text-sm" whileHover={{ scale: 1.1 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section className="w-screen flex-shrink-0 flex flex-col items-center justify-center px-8">
          <motion.h2 className="text-3xl font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Experiencia</motion.h2>
          <div className="text-left max-w-2xl space-y-4">
            <div>
              <h3 className="text-xl font-bold">CDO Solutions</h3>
              <p className="text-sm text-zinc-400">2025 – Actualidad</p>
              <p className="text-zinc-300">Desarrollo web, automatizaciones IA, VPS, servidores de videojuegos.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Plabs 3D</h3>
              <p className="text-sm text-zinc-400">2021 – 2023</p>
              <p className="text-zinc-300">Técnico informático, programación Python, WordPress y soporte cliente.</p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="w-screen flex-shrink-0 flex flex-col items-center justify-center px-8">
          <motion.h2 className="text-3xl font-semibold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Contacto</motion.h2>
          <motion.p className="text-zinc-400 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Escríbeme directamente o revisa mis proyectos en GitHub.
          </motion.p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ktr3ss"
              target="_blank"
              className="bg-zinc-800 px-4 py-2 rounded text-white hover:bg-zinc-700 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:info@ktr3.es"
              className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition flex items-center"
            >
              Contáctame <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
