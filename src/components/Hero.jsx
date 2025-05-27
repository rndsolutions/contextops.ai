import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';
import { useTranslation } from "react-i18next";

function useTypewriterEffect(text, speed) {
    const [displayedText, setDisplayedText] = useState(''); // Ensure it starts empty

    useEffect(() => {
        let index = 0;
          setDisplayedText(''); // ✅ Reset text when input changes
        const interval = setInterval(() => {
            if (index < text.length) {
                const nextChar = text.charAt(index);
                setDisplayedText((prev) => {
                    const newText = prev + nextChar;
                    return newText;
                });
                index++;
            } else {
                console.log('Completed typing effect');
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
}

export default function Hero({ videoUrl }) {
    const { t, i18n } = useTranslation();
    const displayedText = useTypewriterEffect(t('hero.title'), 100); // Ensure the full text is used
    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        {displayedText}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">   {t('hero.description')}</p>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                        <button onClick={() => smoothScrollTo("contacts")} className="inline-flex items-center justify-center px-4 py-1 text-base font-medium text-center text-white border border-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 mx-2">
                            {t('buttons.requestDemo')}
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-5 flex justify-center w-full h-full max-h-[450px]">
                  <div className="w-full aspect-video max-w-lg lg:max-w-full flex justify-center items-center min-w-[200px]">
                        {i18n.language  === 'bg' ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.loom.com/embed/0f13d82c44e34692acb3bb94f5d1aa69?sid=112a03b8-72b0-4ce7-8d29-9f881506fc6b"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Video BG"
                                frameborder="0"
                                webkitallowfullscreen mozallowfullscreen allowfullscreen
                            ></iframe>


                        ) : (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.loom.com/embed/30012d67d8534cf88c7e974bca82f199?sid=333acb5d-678d-4c4c-81c7-dbe1634e08b6"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Video EN"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

