import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCtaSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-20 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        {t.finalCta.title}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t.finalCta.subtitle}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-white text-[#0EA5E9] hover:bg-white/90 group"
                    >
                        <Link to="/contact">
                            {t.finalCta.cta}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCtaSection;