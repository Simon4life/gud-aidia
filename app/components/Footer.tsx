import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-6">
        {/* Top Section */}
        <div className="md:flex justify-between border-b border-white/30 pb-12">
          {/* Logo */}
          <div className="mb-10 md:mb-0">
            <Image src="/logo.png" alt="Gʊd Aɪ’diə logo" width={160} height={80} />
          </div>

          {/* Links Group 1 */}
          <div className="mb-10 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
              <li><Link href="/about#mvp" className="hover:text-yellow-300">Our MVP</Link></li>
              <li><Link href="/work" className="hover:text-yellow-300">Workshop</Link></li>
              <li><Link href="#" className="hover:text-yellow-300">Book Club</Link></li>
            </ul>
          </div>

          {/* Links Group 2 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-yellow-300">Register</Link></li>
              <li><Link href="#" className="hover:text-yellow-300">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
              <li><Link href="#" className="hover:text-yellow-300">The Gʊd Aɪ’diə Campaign</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-sm text-center text-white/60">
          &copy; {new Date().getFullYear()} The Gʊd Aɪ’diə Company · All rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
