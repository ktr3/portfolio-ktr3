import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* HEADER */}
      <section className="h-screen flex flex-col justify-center items-center p-8 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenido a mi mundo digital 🌍
        </motion.h1>
        <motion.p
          className="text-xl max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Soy KTR3SS, desarrollador web y creador de automatizaciones IA.
        </motion.p>
      </section>

      {/* TIMELINE / MAPA */}
      <section className="relative py-20 px-4 md:px-16 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-white pl-6">
            {["Inicio en desarrollo", "Proyectos personales", "Automatizaciones", "Producción musical", "Servicios para empresas"].map(
              (step, idx) => (
                <motion.div
                  key={idx}
                  className="mb-10 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <div className="absolute -left-7 top-0 w-4 h-4 bg-white rounded-full"></div>
                  <h3 className="text-2xl font-semibold">{step}</h3>
                  <p className="text-gray-400 mt-2">
                    {`Descripción breve sobre ${step.toLowerCase()}.`}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-6">
        <p className="text-gray-500">© {new Date().getFullYear()} KTR3SS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}