import { motion } from 'framer-motion';
import { ShieldCheck, Camera, Droplets, Sparkles } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Skin Check & Mole Mapping',
    desc: 'Thorough evaluations with dermoscopy to screen for skin cancer and track changes over time.'
  },
  {
    icon: Droplets,
    title: 'Acne & Rosacea Care',
    desc: 'Personalized treatment plans combining topicals, orals, and in-office therapies.'
  },
  {
    icon: Camera,
    title: 'Tele‑Dermatology',
    desc: 'Secure virtual visits for quick follow‑ups and prescription refills.'
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dermatology',
    desc: 'Botox, fillers, peels and lasers tailored to your goals for healthy, glowing skin.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Expert care for every concern
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white grid place-items-center shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
