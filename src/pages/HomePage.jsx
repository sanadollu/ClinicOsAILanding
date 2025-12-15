import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import SolutionSection from '@/components/home/SolutionSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhoIsItForSection from '@/components/home/WhoIsItForSection';
import PricingSection from '@/components/home/PricingSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

const HomePage = () => {
    const { language } = useLanguage();

    return (
        <>
            <Helmet>
                <title>ClinicOS AI - Transform Your Clinic Communication with AI</title>
                <meta
                    name="description"
                    content="ClinicOS AI revolutionizes patient communication with intelligent automation, seamless omnichannel management, and AI-powered responses for modern clinics."
                />
            </Helmet>
            <div className="min-h-screen bg-[#F8FAFC]">
                <Header />
                <main className="pt-20">
                    <HeroSection />
                    <ProblemSection />
                    <SolutionSection />
                    <FeaturesSection />
                    <HowItWorksSection />
                    <WhoIsItForSection />
                    <PricingSection />
                    <FinalCtaSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;