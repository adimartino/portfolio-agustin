import React from 'react';
import { motion } from 'framer-motion';
const Button = ({ children }) => (
  <button className="px-4 py-2 rounded-lg bg-white text-black text-sm hover:opacity-80 transition">
    {children}
  </button>
);
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <motion.h1
          className="text-[clamp(2.5rem,7vw,6rem)] leading-none font-semibold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AGUSTÍN DI MARTINO
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,3vw,1.5rem)] max-w-xl text-[#AAAAAA]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Diseñador UX/UI y gráfico especializado en crear experiencias digitales modernas, limpias y funcionales.
        </motion.p>

        <motion.div
          className="absolute bottom-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
          <div className="w-[2px] h-10 bg-white animate-bounce"></div>
        </motion.div>
      </section>

      {/* Circular Name Section */}
      <section className="h-[80vh] flex justify-center items-center relative overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border border-[#292929] flex items-center justify-center animate-spin-slow"
          style={{ animationDuration: '20s' }}
        >
          <Image
            src="/circle-text.svg"
            alt="Nombre giratorio"
            width={500}
            height={500}
            className="rotate-180"
          />
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-semibold z-10">¿Qué hago?</h2>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <h3 className="text-2xl md:text-4xl font-semibold mb-10 text-center">Proyectos Destacados</h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-[#1A1A1A] p-6 rounded-2xl hover:scale-[1.02] transition-transform cursor-pointer">
            <h4 className="text-xl font-semibold mb-2">Farmacity App</h4>
            <p className="text-[#AAAAAA]">Rediseño completo del flujo de compra mobile y mejoras UX end to end.</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-2xl hover:scale-[1.02] transition-transform cursor-pointer">
            <h4 className="text-xl font-semibold mb-2">Shippū</h4>
            <p className="text-[#AAAAAA]">Identidad visual y diseño web con foco en efectos modernos y diseño diferencial.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#161616] text-center">
        <h3 className="text-2xl md:text-4xl font-semibold mb-6">¿Trabajamos juntos?</h3>
        <p className="text-[#AAAAAA] mb-10 max-w-xl mx-auto">
          Podés escribirme directamente por mail o contactarme a través de mis redes sociales.
        </p>
        <Button className="text-lg">Contactame</Button>
      </section>
    </main>
  );
}
