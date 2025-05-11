import CallAction from '@/components/layout/call-action'
import Faq from '@/components/layout/faq'
import Features from '@/components/layout/features'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import HeroSection from '@/components/layout/hero-section'
import HowItWorks from '@/components/layout/how-it-works'
import React from 'react'


export default function LandingPage() {
    return (
        <div className="">
            <Header/>
            <main className="flex-1 mx-auto">
                <HeroSection/>
                <Features/>
                <HowItWorks/>
                <Faq/>
                <CallAction/>
            </main>
            <Footer/>
        </div>
    )
}