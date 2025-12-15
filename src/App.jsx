import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Toaster />
            </Router>
        </LanguageProvider>
    );
}

export default App;