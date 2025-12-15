import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const HowItWorksSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-20 bg-gradient-to-br from-[#0F172A] to-[#1e293b] text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.howItWorks.title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        {t.howItWorks.subtitle}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {t.howItWorks.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-6 mb-12 last:mb-0"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-full flex items-center justify-center text-xl font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;