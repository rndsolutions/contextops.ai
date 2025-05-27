import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contacts" className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t('contacUs.title')}</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    {t('contacUs.description')}
                </p>
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <p>{t('contacUs.emailUs')}</p>
                    <p><a href="mailto:sales@rnd-solutions.net" className="text-primary-700 dark:text-primary-500">{t('contacUs.salesEmail')}</a>{t('contacUs.salesInquiries')}</p>
                    <p><a href="mailto:support@rnd-solutions.net" className="text-primary-700 dark:text-primary-500">{t('contacUs.supportEmail')}</a>{t('contacUs.supportInquiries')}</p>
                    <p>{t('contacUs.phoneLabel')}<a href="tel:+359885222365" className="text-primary-700 dark:text-primary-500">+359 885 222 365</a></p>
                    <p>{t('contacUs.availability')}</p>
                    <p>{t('contacUs.address')}</p>
                </div>
            </div>
        </section>

    );
}
