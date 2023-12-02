'use client';
import Navbar from "./components/Navbar"
import Calendar from "./components/Calendar"
import Questions from "./components/Questions";
import Footer from "./components/Footer"
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
}

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className="min-h-screen">
      <Navbar />
      <hr />
      <div className="container mx-auto px-4 sm:px-48">
        <p className="text-2xl text-yellow-200 mt-16">Calendario de aDEViento 2023</p>
        <p className="mt-4">¡Bienvenido al Calendario de Adviento! En mi primer año organizando este evento, te invito a enfrentar nuevos retos de programación cada día. El verdadero regalo es la oportunidad de aprender y crecer como desarrollador. Participa diariamente, descubre los desafíos y celebremos juntos esta temporada de adviento, donde cada día es una oportunidad para aprender algo nuevo y emocionante.</p>
        <Calendar />
        <Questions />
      </div>
      <Footer />
    </motion.main>
  )
}
