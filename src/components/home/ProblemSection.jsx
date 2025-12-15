import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { AlertCircle, Clock, TrendingDown, Zap } from 'lucide-react';

const ProblemSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const icons = [AlertCircle, Clock, TrendingDown, Zap];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        {t.problem.title}
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        {t.problem.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.problem.challenges.map((challenge, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#F8FAFC] p-6 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                                    {challenge.title}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">
                                    {challenge.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;