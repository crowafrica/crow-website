import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Simple logo placeholder */}
          <div className="w-8 h-8 bg-[#F60] rounded-lg flex items-center justify-center font-bold text-white text-xl">
            C
          </div>
          <span className="font-bold text-xl tracking-tight">Crow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#brands" className="hover:text-white transition">For Brands</Link>
          <Link href="#creators" className="hover:text-white transition">For Creators</Link>
          <Link href="mailto:hello@crowafrica.com" className="hover:text-white transition">Contact</Link>
        </div>
        <div>
          <Link href="#waitlist" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center md:pt-32 md:pb-40">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-orange-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Now accepting early access requests
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
          Authentic UGC for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Brands in Africa
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The premier platform connecting forward-thinking brands with top-tier User Generated Content creators across the continent.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="waitlist">
          <Link href="https://forms.gle/crowafrica" className="w-full sm:w-auto px-8 py-4 bg-[#F60] hover:bg-[#FF7722] text-white rounded-full font-bold text-lg transition-transform hover:scale-105">
            I&apos;m a Brand
          </Link>
          <Link href="https://forms.gle/crowcreators" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-bold text-lg transition-transform hover:scale-105">
            I&apos;m a Creator
          </Link>
        </div>
      </main>

      {/* Value Props */}
      <section className="border-t border-white/10 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          
          <div id="brands">
            <h2 className="text-3xl font-bold mb-6">For Brands</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find the Perfect Match</h3>
                  <p className="text-gray-400 leading-relaxed">Discover talented creators based on niche, platform, and audience demographics to perfectly align with your campaign goals.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0 border border-orange-500/30">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Streamlined Workflow</h3>
                  <p className="text-gray-400 leading-relaxed">Manage contracts, communicate directly, review deliverables, and handle payouts—all in one secure platform.</p>
                </div>
              </li>
            </ul>
          </div>

          <div id="creators">
            <h2 className="text-3xl font-bold mb-6">For Creators</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Paid for Your Creativity</h3>
                  <p className="text-gray-400 leading-relaxed">Connect with top brands actively looking for authentic content. Secure milestone-based payments guarantee you get paid for your work.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Portfolio</h3>
                  <p className="text-gray-400 leading-relaxed">Showcase your past work, define your rates, and grow your reputation as a top-tier UGC creator.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#F60] rounded flex items-center justify-center font-bold text-white text-xs">C</div>
            <span className="font-bold tracking-tight">Crow</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Crow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
