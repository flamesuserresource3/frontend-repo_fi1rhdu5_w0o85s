import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import BookingForm from './components/BookingForm.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BookingForm />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} DermaCare Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
