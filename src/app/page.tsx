import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ShopLinks from '@/components/ShopLinks';
import ForWhom from '@/components/ForWhom';
import Testimonials from '@/components/Testimonials';
import ChapterOverview from '@/components/ChapterOverview';
import Newsletter from '@/components/Newsletter';
import AboutAuthor from '@/components/AboutAuthor';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ShopLinks />
      <SectionDivider />
      <ForWhom />
      <SectionDivider variant="dark" />
      <Testimonials />
      <SectionDivider variant="dark" />
      <ChapterOverview />
      <SectionDivider />
      <Newsletter />
      <SectionDivider />
      <AboutAuthor />
      <SectionDivider />
      <FAQ />
      <Footer />
    </main>
  );
}
