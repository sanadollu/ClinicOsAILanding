import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 via-[#14B8A6]/5 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
                            {t.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-[#64748B] mb-8 leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white group"
                            >
                                <Link to="/contact">
                                    {t.hero.cta1}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                            >
                                <Link to="/contact">
                                    {t.hero.cta2}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <img
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            alt="ClinicOS AI Dashboard"
                            src="https://images.unsplash.com/photo-1682706841297-5524ba1faa9c" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-2xl opacity-20 blur-2xl"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#14B8A6] to-[#0EA5E9] rounded-2xl opacity-20 blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;