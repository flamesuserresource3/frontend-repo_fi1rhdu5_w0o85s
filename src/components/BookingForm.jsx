import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

const timeSlots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00'];
const serviceOptions = [
  'Skin Check & Mole Mapping',
  'Acne & Rosacea Care',
  'Tele‑Dermatology',
  'Cosmetic Dermatology'
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0],
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="booking" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Book an appointment
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid md:grid-cols-2 gap-6 rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Preferred date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select a slot</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="h-full flex items-end">
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-lg hover:brightness-110"
              >
                Confirm booking
              </motion.button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
              >
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm">Your request has been received. Well email you a confirmation shortly.</p>
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
