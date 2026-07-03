import HomeHeroSection from '../components/sections/HomeHeroSection';
import MetricsSection from '../components/sections/MetricsSection';
import FeatureSplitSection from '../components/sections/FeatureSplitSection';
import ImageGridSection from '../components/sections/ImageGridSection';
import FeatureCardsSection from '../components/sections/FeatureCardsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AdvantageSection from '../components/sections/AdvantageSection';
import BlogSection from '../components/sections/BlogSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <div className="flex flex-col flex-1 bg-background overflow-hidden">
      <HomeHeroSection />
      <MetricsSection />
      <FeatureSplitSection />
      <ImageGridSection />
      <FeatureCardsSection />
      <ProjectsSection />
      <AdvantageSection />
      <BlogSection />
      <CTASection />
    </div>
  );
};

export default Home;