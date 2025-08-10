import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Shield, ShoppingCart, Star, Briefcase, Mail, Users } from 'lucide-react'

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-blue text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-brand-gold to-brand-primary shadow" aria-hidden="true" />
            <span className="font-extrabold tracking-wide">Pallyflo</span>
          </div>
          <nav aria-label="Primary">
            <ul className="flex flex-wrap gap-2">
              <li><NavLink to="/" end className={({isActive}) => linkCls(isActive)}>About Pallyflo</NavLink></li>
              <li><NavLink to="/services" className={({isActive}) => linkCls(isActive)}><Shield className="inline -mt-1" size={16}/> Services</NavLink></li>
              <li><NavLink to="/products" className={({isActive}) => linkCls(isActive)}><ShoppingCart className="inline -mt-1" size={16}/> Products</NavLink></li>
              <li><NavLink to="/work-with-us" className={({isActive}) => linkCls(isActive)}><Users className="inline -mt-1" size={16}/> Work With Us</NavLink></li>
              <li><NavLink to="/reach-us" className={({isActive}) => linkCls(isActive)}><Mail className="inline -mt-1" size={16}/> Reach Us</NavLink></li>
              <li><NavLink to="/careers" className={({isActive}) => linkCls(isActive)}><Briefcase className="inline -mt-1" size={16}/> Careers</NavLink></li>
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

function linkCls(active: boolean) {
  return [
    'px-2 py-1 rounded-md transition-colors',
    active ? 'bg-white/15 text-white' : 'text-blue-100 hover:bg-white/10'
  ].join(' ')
}
