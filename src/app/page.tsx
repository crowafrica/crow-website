import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A] font-sans selection:bg-[#F60] selection:text-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#ECECEC] sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F60] rounded-lg flex items-center justify-center font-bold text-white text-xl">
              C
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1A1A1A]">Crow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#464646]">
            <Link href="#brands" className="hover:text-[#1A1A1A] transition">For Brands</Link>
            <Link href="#creators" className="hover:text-[#1A1A1A] transition">For Creators</Link>
            <Link href="mailto:hello@crowafrica.com" className="hover:text-[#1A1A1A] transition">Contact</Link>
          </div>
          <div>
            <Link href="#waitlist" className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#292929] transition">
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center md:pt-32 md:pb-40">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs font-medium text-[#F60] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F60] animate-pulse"></span>
          Now accepting early access requests
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-[#1A1A1A]">
          Authentic UGC for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F60] to-yellow-500">
            Brands in Africa
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#464646] max-w-2xl mx-auto mb-10 leading-relaxed">
          The premier platform connecting forward-thinking brands with top-tier User Generated Content creators across the continent.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="waitlist">
          <Link href="https://forms.gle/crowafrica" className="w-full sm:w-auto px-8 py-4 bg-[#F60] hover:bg-[#FF7722] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-md shadow-orange-500/20">
            I&apos;m a Brand
          </Link>
          <Link href="https://forms.gle/crowcreators" className="w-full sm:w-auto px-8 py-4 bg-white border border-[#D9D9D9] hover:bg-[#F5F5F5] text-[#1A1A1A] rounded-full font-bold text-lg transition-transform hover:scale-105">
            I&apos;m a Creator
          </Link>
        </div>
      </main>

      {/* Value Props */}
      <section className="bg-white border-t border-[#ECECEC]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          
          <div id="brands" className="bg-[#F8F8F8] rounded-[24px] p-8 border border-[#ECECEC]">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">For Brands</h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Find the Perfect Match</h3>
                  <p className="text-[#464646] leading-relaxed">Discover talented creators based on niche, platform, and audience demographics to perfectly align with your campaign goals.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Streamlined Workflow</h3>
                  <p className="text-[#464646] leading-relaxed">Manage contracts, communicate directly, review deliverables, and handle payouts—all in one secure platform.</p>
                </div>
              </li>
            </ul>
          </div>

          <div id="creators" className="bg-[#F8F8F8] rounded-[24px] p-8 border border-[#ECECEC]">
            <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">For Creators</h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#ECECEC]">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Get Paid for Your Creativity</h3>
                  <p className="text-[#464646] leading-relaxed">Connect with top brands actively looking for authentic content. Secure milestone-based payments guarantee you get paid for your work.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#ECECEC]">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1A1A1A]">Build Your Portfolio</h3>
                  <p className="text-[#464646] leading-relaxed">Showcase your past work, define your rates, and grow your reputation as a top-tier UGC creator.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ECECEC] py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#F60] rounded flex items-center justify-center font-bold text-white text-xs">C</div>
            <span className="font-bold tracking-tight text-[#1A1A1A]">Crow</span>
          </div>
          <p className="text-[#9F9F9F] text-sm font-medium">© {new Date().getFullYear()} Crow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
