import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Inbox, Sparkles, Target, Calendar, Globe, Zap } from 'lucide-react';

const SolutionSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Extended icon list and added fallback to prevent crashes if translations exceed icons
    const icons = [Inbox, Sparkles, Target, Calendar, Globe];

    return (
        <section className="py-20 bg-gradient-to-br from-[#0EA5E9]/5 via-[#14B8A6]/5 to-transparent">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        {t.solution?.title || "Our Solution"}
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        {t.solution?.subtitle || "Comprehensive tools for modern clinics"}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {t.solution?.features?.map((feature, index) => {
                        // Use fallback icon if index exceeds available icons
                        const Icon = icons[index] || Zap;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#64748B] leading-relaxed">
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

export default SolutionSection;