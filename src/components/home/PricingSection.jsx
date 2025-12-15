import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        {t.pricing.title}
                    </h2>
                    <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                        {t.pricing.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {t.pricing.tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`bg-white rounded-2xl p-8 ${tier.popular
                                    ? 'border-2 border-[#0EA5E9] shadow-2xl relative'
                                    : 'border border-gray-200 shadow-lg'
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-[#64748B] text-sm">
                                    {tier.description}
                                </p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <p className="text-sm text-[#0F172A]">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <Button
                                asChild
                                className={`w-full ${tier.popular
                                        ? 'bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] hover:opacity-90 text-white'
                                        : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-gray-100'
                                    }`}
                            >
                                <Link to="/contact">
                                    {language === 'en' ? 'Get Started' : 'Başlayın'}
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;