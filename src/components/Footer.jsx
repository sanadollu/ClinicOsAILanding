import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="bg-[#0F172A] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-lg flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">ClinicOS AI</span>
                        </div>
                        <p className="text-sm text-gray-400">{t.footer.tagline}</p>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">{t.footer.product}</span>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                                {t.nav.home}
                            </Link>
                            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                                {t.nav.demo}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">{t.footer.company}</span>
                        <div className="flex flex-col gap-2">
                            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                                {t.nav.about}
                            </Link>
                            <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                                {t.nav.contact}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">{t.footer.legal}</span>
                        <div className="flex flex-col gap-2">
                            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <p className="text-sm text-gray-400 text-center">{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;