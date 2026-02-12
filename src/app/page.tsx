import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopLinks from '@/components/ShopLinks';
import ForWhom from '@/components/ForWhom';
import Testimonials from '@/components/Testimonials';
import ChapterOverview from '@/components/ChapterOverview';
import AboutAuthor from '@/components/AboutAuthor';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ShopLinks />
      <ForWhom />
      <Testimonials />
      <ChapterOverview />
      <AboutAuthor />
      <FAQ />
      <Footer />
    </main>
  );
}
