import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-200/40 via-white to-transparent pointer-events-none" />

      {/* Animated blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-teal-300/30 blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-emerald-300/30 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Healthy skin, booked in minutes
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
            >
              Instantly reserve an appointment with top-rated dermatologists. Clearer skin and confident you — with a few taps.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg hover:brightness-110 active:scale-[.98] transition"
              >
                <Sparkles className="w-4 h-4" /> Book your visit
              </a>
              <a href="#services" className="px-5 py-3 rounded-full border border-gray-300/70 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                Explore services
              </a>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300"
            >
              {["Board-certified doctors", "Same-week availability", "Insurance accepted", "Tele-derm options"].map((item) => (
                <motion.li
                  key={item}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-2"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" /> {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden"
            >
              {/* Decorative gloss */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />
              {/* Placeholder illustration */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <div className="text-6xl">🧴</div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Modern, soothing care for every skin type.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
