import React, { useEffect, useRef, useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { Shield, ShoppingCart, Briefcase, Mail, Users, ChevronDown } from 'lucide-react'

export const Layout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  // Close the dropdown when the route/hash changes
  useEffect(() => { setOpen(false) }, [location])

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  // Close on Escape
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement | HTMLDivElement>) {
    if (e.key === 'Escape') setOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-blue text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brand-gold to-brand-primary shadow" aria-hidden="true" />
            <span className="font-extrabold tracking-wide">Pallyflo</span>
          </Link>

          {/* Nav */}
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-2">
              {/* About dropdown */}
              <li className="relative" ref={menuRef}>
                <button
                  type="button"
                  className="px-2 py-1 rounded-md transition-colors text-blue-100 hover:bg-white/10 inline-flex items-center gap-1"
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  onKeyDown={onKeyDown}
                >
                  About Pallyflo <ChevronDown size={16} className="-mt-0.5" />
                </button>

                {open && (
                  <div
                    role="menu"
                    aria-label="About Pallyflo Sections"
                    tabIndex={-1}
                    onKeyDown={onKeyDown}
                    className="absolute left-0 mt-2 w-56 rounded-md bg-[#0b1a63] shadow-xl ring-1 ring-black/10 focus:outline-none"
                  >
                    <MenuLink href="/#who-we-are" label="Who We Are" onClick={() => setOpen(false)} />
                    <MenuLink href="/#what-we-do" label="What We Do" onClick={() => setOpen(false)} />
                    <MenuLink href="/#our-mission" label="Our Mission" onClick={() => setOpen(false)} />
                    <MenuLink href="/#our-vision" label="Our Vision" onClick={() => setOpen(false)} />
                    <MenuLink href="/#our-values" label="Our Values" onClick={() => setOpen(false)} />
                  </div>
                )}
              </li>

              <li><NavLink to="/services" className={({ isActive }: { isActive: boolean }) => linkCls(isActive)}><Shield className="inline -mt-1" size={16} /> Services</NavLink></li>
              <li><NavLink to="/products" className={({ isActive }: { isActive: boolean }) => linkCls(isActive)}><ShoppingCart className="inline -mt-1" size={16} /> Products</NavLink></li>
              <li><NavLink to="/work-with-us" className={({ isActive }: { isActive: boolean }) => linkCls(isActive)}><Users className="inline -mt-1" size={16} /> Work With Us</NavLink></li>
              <li><NavLink to="/reach-us" className={({ isActive }: { isActive: boolean }) => linkCls(isActive)}><Mail className="inline -mt-1" size={16} /> Reach Us</NavLink></li>
              <li><NavLink to="/careers" className={({ isActive }: { isActive: boolean }) => linkCls(isActive)}><Briefcase className="inline -mt-1" size={16} /> Careers</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-slate-600">
        &copy; {new Date().getFullYear()} Pallyflo. All rights reserved.
      </footer>
    </div>
  )
}

function MenuLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a
      role="menuitem"
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none"
    >
      {label}
    </a>
  )
}

function linkCls(active: boolean) {
  return [
    'px-2 py-1 rounded-md transition-colors',
    active ? 'bg-white/15 text-white' : 'text-blue-100 hover:bg-white/10'
  ].join(' ')
}

export default Layout
