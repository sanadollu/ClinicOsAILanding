import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Eye } from 'lucide-react';
const AboutPage = () => {
    const {
        language
    } = useLanguage();
    const t = translations[language];
    return <>
        <Helmet>
            <title>{t.about.title} | ClinicOS AI</title>
            <meta name="description" content={t.about.subtitle} />
        </Helmet>
        <div className="min-h-screen bg-[#F8FAFC]">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} animate={{
                        opacity: 1,
                        y: 0
                    }} transition={{
                        duration: 0.6
                    }} className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                                {t.about.title}
                            </h1>
                            <p className="text-xl text-[#64748B]">
                                {t.about.subtitle}
                            </p>
                        </div>

                        <div className="mb-16">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img className="w-full h-[400px] object-cover" alt="Medical professionals in a modern clinic setting" src="https://horizons-cdn.hostinger.com/da93a656-ed34-4083-af50-9411467dea6c/gemini_generated_image_kukw8wkukw8wkukw-dhrVb.png" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <p className="font-medium text-lg">
                                            {language === 'tr' ? 'Yeni nesil teknoloji ile tıp uzmanlarını güçlendiriyoruz' : 'Empowering medical professionals with next-gen technology'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 mb-16">
                            {t.about.content.map((paragraph, index) => <motion.p key={index} initial={{
                                opacity: 0,
                                y: 10
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6,
                                delay: index * 0.1
                            }} className="text-lg text-[#64748B] leading-relaxed">
                                {paragraph}
                            </motion.p>)}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div initial={{
                                opacity: 0,
                                x: -20
                            }} whileInView={{
                                opacity: 1,
                                x: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6
                            }} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] rounded-lg flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                                    {t.about.mission.title}
                                </h2>
                                <p className="text-[#64748B] leading-relaxed">
                                    {t.about.mission.description}
                                </p>
                            </motion.div>

                            <motion.div initial={{
                                opacity: 0,
                                x: 20
                            }} whileInView={{
                                opacity: 1,
                                x: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                duration: 0.6,
                                delay: 0.2
                            }} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#14B8A6] to-[#0EA5E9] rounded-lg flex items-center justify-center mb-4">
                                    <Eye className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#0F172A] mb-3">
                                    {t.about.vision.title}
                                </h2>
                                <p className="text-[#64748B] leading-relaxed">
                                    {t.about.vision.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    </>;
};
export default AboutPage;
