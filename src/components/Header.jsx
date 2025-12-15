import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];
    const location = useLocation();

    const navLinks = [
        { path: '/', label: t.nav.home },
        { path: '/about', label: t.nav.about },
        { path: '/contact', label: t.nav.contact }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-lg flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-[#0F172A]">ClinicOS AI</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-[#0EA5E9] ${location.pathname === link.path ? 'text-[#0EA5E9]' : 'text-[#64748B]'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
                            aria-label="Toggle language"
                        >
                            <Globe className="w-4 h-4 text-[#64748B]" />
                            <span className="text-sm font-medium text-[#64748B]">
                                {language === 'en' ? 'EN' : 'TR'}
                            </span>
                        </button>
                        <Button
                            asChild
                            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
                        >
                            <Link to="/contact">{t.nav.demo}</Link>
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-[#0F172A]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#0F172A]" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-sm font-medium transition-colors hover:text-[#0EA5E9] ${location.pathname === link.path ? 'text-[#0EA5E9]' : 'text-[#64748B]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F8FAFC] transition-colors w-fit"
                            >
                                <Globe className="w-4 h-4 text-[#64748B]" />
                                <span className="text-sm font-medium text-[#64748B]">
                                    {language === 'en' ? 'EN' : 'TR'}
                                </span>
                            </button>
                            <Button
                                asChild
                                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white w-full"
                            >
                                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                    {t.nav.demo}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
};

export default Header;