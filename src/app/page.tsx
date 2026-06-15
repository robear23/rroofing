import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceAreaTicker from '@/components/ServiceAreaTicker';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-brand-500/30 selection:text-brand-100">
      <Navbar />
      <Hero />
      <ServiceAreaTicker />
      <ServicesGrid />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
