import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        clinicName: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast({
            title: "🚧 Feature Coming Soon!",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsApp = () => {
        toast({
            title: "🚧 Feature Coming Soon!",
            description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <>
            <Helmet>
                <title>Contact ClinicOS AI - Request a Demo</title>
                <meta
                    name="description"
                    content="Get in touch with ClinicOS AI. Request a personalized demo and see how we can transform your clinic communication."
                />
            </Helmet>
            <div className="min-h-screen bg-[#F8FAFC]">
                <Header />
                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
                                    {t.contact.title}
                                </h1>
                                <p className="text-xl text-[#64748B]">
                                    {t.contact.subtitle}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg"
                                >
                                    <h2 className="text-2xl font-bold text-[#0F172A] mb-2">
                                        {t.contact.demo.title}
                                    </h2>
                                    <p className="text-[#64748B] mb-6">
                                        {t.contact.demo.description}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                                                {t.contact.form.name}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                                                {t.contact.form.email}
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                                                {t.contact.form.phone}
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                                                {t.contact.form.clinicName}
                                            </label>
                                            <input
                                                type="text"
                                                name="clinicName"
                                                value={formData.clinicName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-[#0F172A] mb-2">
                                                {t.contact.form.message}
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-6"
                                        >
                                            {t.contact.form.submit}
                                        </Button>
                                    </form>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-gradient-to-br from-[#0EA5E9] to-[#14B8A6] p-8 rounded-2xl text-white">
                                        <MessageCircle className="w-12 h-12 mb-4" />
                                        <h2 className="text-2xl font-bold mb-2">
                                            {t.contact.whatsapp}
                                        </h2>
                                        <p className="mb-6 opacity-90">
                                            Get instant answers to your questions
                                        </p>
                                        <Button
                                            onClick={handleWhatsApp}
                                            className="w-full bg-white text-[#0EA5E9] hover:bg-white/90"
                                        >
                                            {t.contact.whatsapp}
                                        </Button>
                                    </div>

                                    <img
                                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                                        alt="Contact us"
                                        src="https://images.unsplash.com/photo-1678790118729-631da1a112ef" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default ContactPage;