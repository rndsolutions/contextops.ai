import "@fontsource/inter";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AIBenefits from "./components/AIBenefits";
import Menu from "./components/Menu";
import CookiesConsent from "./components/CookiesConsent";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";

export default function MainPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <Menu />

      {/* Hero Section */}
      <Hero
        videoUrl="https://www.youtube.com/embed/CDiVq3mPZc8?si=ARQb7RaqMQHSveb0"
        className="w-full h-auto"
      />

      <div className="h-1 bg-gray-200"></div>
      <section className="py-12 px-6 bg-white" id="aiBenefits">
        {/* AI Benefits */}
        <AIBenefits />
        <div className="h-1 bg-gray-200"></div>
        {/* AI Benefits end */}

        <Features
          orientation="right"
          imageSrc="/public/knowledge_ai.png"
          title={t('features.feature1Title')}
          description={t('features.feature1Description')}
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="left"
          imageSrc="/public/smarter_team.png"
          title={t('features.feature2Title')}
          description={t('features.feature2Description')}
        />
        <div className="h-1 bg-gray-200"></div>
        <Features
          orientation="right"
          imageSrc="/public/security.png"
          title={t('features.feature3Title')}
          description={t('features.feature3Description')}
        />
        <div className="h-1 bg-gray-200"></div>
        {/* New Section end */}

        {/* Why Section*/}
        <section id="why" className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12 tracking-tight">
            {t('whySection.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-medium mb-3">
                {t('whySection.item1Title')}
              </h3>
              <p className="text-neutral-600">
                {t('whySection.item1Description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                {t('whySection.item2Title')}
              </h3>
              <p className="text-neutral-600">
                {t('whySection.item2Description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                {t('whySection.item3Title')}
              </h3>
              <p className="text-neutral-600">
                {t('whySection.item3Description')}
              </p>
            </div>
          </div>
        </section>
        <div className="h-1 bg-gray-200"></div>

        {/* Pricing */}
        {/* <section id="pricing" className="py-24 px-6 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold mb-12">Pricing Tiers</h2>
            <PricingTable />
          </div>
        </section> */}
        {/* Pricing end */}
      </section>
      {/* <div className="h-1 bg-gray-200"></div> */}

      {/* Contacts */}
      <Contact />

      {/* Footer */}


      <Footer />
      {/* Footer end */}

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <CookiesConsent />
    </div>
  );
}
