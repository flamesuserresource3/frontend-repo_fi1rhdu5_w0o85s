import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/40 border-b border-white/10 bg-white/60 dark:bg-black/40"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-semibold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent">DermaCare</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('services')} className="text-gray-700/80 hover:text-gray-900 dark:text-gray-200/80 dark:hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollTo('booking')} className="text-gray-700/80 hover:text-gray-900 dark:text-gray-200/80 dark:hover:text-white transition-colors">Book</button>
        </div>
        <div className="flex items-center">
          <button onClick={() => scrollTo('booking')} className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-sm hover:shadow-lg hover:brightness-105 active:scale-[.99] transition-all">
            Book now
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
