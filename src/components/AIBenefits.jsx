import { useTranslation } from "react-i18next";


export default function AIBenefits() {
    const { t } = useTranslation();
    return (
        <section className="bg-white">
            <div className="py-12 px-4 mx-auto max-w-7xl">
                <div className="max-w-2xl mb-12">
                    <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900">{t('aiBenefits.title')}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">{t('aiBenefits.description')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h3 className="mb-2 text-xl font-extrabold text-gray-900">{t('aiBenefits.item1Title')}</h3>
                        <p className="mb-6 font-light text-gray-500">{t('aiBenefits.item1Description')}</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-extrabold text-gray-900">{t('aiBenefits.item2Title')}</h3>
                        <p className="mb-6 font-light text-gray-500">{t('aiBenefits.item2Description')}</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-extrabold text-gray-900">{t('aiBenefits.item3Title')}</h3>
                        <p className="mb-6 font-light text-gray-500">{t('aiBenefits.item3Description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );

}
