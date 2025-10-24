import Header from './components/Header';
import Hero from './components/Hero';
import Properties from './components/Properties';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Properties />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
