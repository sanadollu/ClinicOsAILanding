import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { MessageSquare, Brain, TrendingUp, CalendarCheck, HeartPulse, Languages } from 'lucide-react';

const FeaturesSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const icons = [MessageSquare, Brain, TrendingUp, CalendarCheck, HeartPulse, Languages];

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
                        {t.features.title}
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        {t.features.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.features.list.map((feature, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-[#F8FAFC] to-white p-8 rounded-2xl border border-gray-100 hover:border-[#0EA5E9]/30 hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#64748B] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
