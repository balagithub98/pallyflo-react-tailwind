import React from 'react'
import hero from '../assets/hero.jpg'
import { Personalize } from '../components/Personalize'

export const Home: React.FC = () => (
  <>
    <section className="border-b border-slate-200">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <img src={hero} alt="Globe with digital icons representing global supply chain" className="rounded-lg shadow" />
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">What We Do</h1>
          <p className="mt-3 text-slate-700">
            Pallyflo's objective is to connect key resources for physical commodities at the heart of the global supply chain
            in a sustainable and ethical manner. We pay attention to the demands of society and use our in‑depth knowledge of the markets
            we serve to improve supply chain management and ensure the long‑term viability of the resources we distribute.
          </p>
        </div>
      </div>
    </section>

    <Section title="Who We Are">
      <p>Pallyflo is a Canadian multinational agro‑commodities exporting company headquartered in Toronto, Ontario. We deliver pulses and seeds to buyers worldwide and connect producers, farmers, processors, and local suppliers with importers, processors, wholesalers, and retailers.</p>
      <ul className="list-disc pl-6 text-slate-600">
        <li><strong>Federal Corporation #</strong> 1343177‑1</li>
        <li><strong>Business Registration</strong> Toronto, Ontario, Canada</li>
      </ul>
    </Section>

    <Section title="Our Mission" alt>
      <p>To improve the state of the world by facilitating the international exchange of goods and services between enterprises. We accelerate progress by delivering top‑quality products, logistics, and services that help partners reach their goals faster.</p>
    </Section>

    <Section title="Our Vision">
      <p>To be recognized as one of the most reliable and prosperous commercial enterprises worldwide.</p>
    </Section>

    <Section title="Our Values" alt>
      <div className="grid md:grid-cols-3 gap-4">
        {['Global Responsibility','Integrity & Transparency','Pursue Excellence','Focus on Client Success','Diversity, Equity & Inclusion'].map((v) => (
          <article key={v} className="p-4 rounded-lg border border-slate-200 shadow-sm bg-white">
            <h3 className="font-semibold">{v}</h3>
            <p className="text-slate-600 mt-1">We uphold this value across our operations with practical actions and measurable outcomes.</p>
          </article>
        ))}
      </div>
    </Section>

    <Section title="Customize Your Order">
      <Personalize />
    </Section>
  </>
)

const Section: React.FC<{title: string; alt?: boolean; children: React.ReactNode}> = ({ title, alt, children }) => (
  <section className={alt ? 'bg-slate-50' : ''}>
    <div className="container mx-auto px-4 py-10 space-y-3">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="text-slate-700">{children}</div>
    </div>
  </section>
)
