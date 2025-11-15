'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Featured from '@/components/featured-work'
import Services from '@/components/services'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Featured />
      <Services />
      <CTA />
      <Footer />
    </div>
  )
}
