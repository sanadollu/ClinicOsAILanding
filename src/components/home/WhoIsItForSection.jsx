import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Check } from 'lucide-react';

const WhoIsItForSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

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
                        {t.whoIsItFor.title}
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        {t.whoIsItFor.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {t.whoIsItFor.types.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="bg-[#F8FAFC] p-6 rounded-xl hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-[#0F172A] font-medium leading-relaxed">
                                    {type}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIsItForSection;