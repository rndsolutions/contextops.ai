import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
        <div>
          <h3 className="font-semibold mb-4 text-white text-base">
            {t('footer.rnds')}
          </h3>
          <p className="text-neutral-400 mb-4">
            {t('footer.rndsText')}
          </p>
          <p className="text-neutral-500 text-xs">
            ISO 27001 Ready • GDPR Compliant • AWS Powered
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white text-base">Explore</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                {t('footer.home')}
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => smoothScrollTo("why")}
                className="hover:text-white"
              >
                {t('footer.why')}
              </a>
            </li>
            <li>
              <a href="#aiBenefits" className="hover:text-white">
                {t('footer.aiBenefits')}
              </a>
            </li>
            <li>

            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white text-base"> {t('footer.support')}</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a
                href="mailto:support@rnd-solutions.net"
                className="hover:text-white"
              >
                {t('footer.emailUs')}
              </a>
            </li>
            <li>
              <a
                href="https://blog.contextops.ai"
                className="hover:text-white"
              >
                {t('footer.blog')}
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/RNa7nds8"
                className="hover:text-white flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.365 18.365 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.069.069 0 00-.032.027C2.99 9.045 2.213 13.579 2.513 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.19 13.19 0 01-1.872-.885.077.077 0 01-.008-.13c.126-.094.252-.192.373-.291a.075.075 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 01.078.009c.121.099.247.197.373.291a.077.077 0 01-.007.13 12.64 12.64 0 01-1.873.884.076.076 0 00-.04.106c.36.698.772 1.362 1.226 1.993a.076.076 0 00.084.028 19.876 19.876 0 005.994-3.03.082.082 0 00.031-.056c.334-4.479-.444-9.012-3.742-13.661a.06.06 0 00-.032-.027zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-white text-base">{t('footer.legal')}</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a
                href="/privacy/"
                className="hover:text-white"
              >
                {t('footer.privacy')}
              </a>
            </li>
            <li>
              <a
                href="/terms/"
                className="hover:text-white"
              >
                {t('footer.terms')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>


  );
}
