import React from 'react'
import ZigZagSection from '../components/ZigZagSection'
import { Personalize } from '../components/Personalize'

export const Home: React.FC = () => (
  <>
    {/* Hero — mirrors your screenshot: image left, copy right */}
    <section className="border-b border-slate-200">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
        <img src="/hero.jpg" alt="Globe with digital icons representing global supply chain" className="rounded-lg shadow" />
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">WHAT WE DO</h1>
          <div className="h-1 w-16 bg-slate-700/60 rounded mt-2 mb-3" aria-hidden="true" />
          <p className="mt-3 text-slate-700">
            Pallyflo's objective is to connect key resources for physical commodities at the heart of the global supply chain
            in a sustainable and ethical manner. We pay attention to the demands of society and use our in-depth knowledge of the markets
            we serve to improve supply chain management and ensure the long-term viability of the resources we distribute.
          </p>
        </div>
      </div>
    </section>

    {/* Zigzag sections */}
    <ZigZagSection
      id="who-we-are"
      title="Who We Are"
      imageSrc="/hero.jpg"
      imageAlt="Warehousing and logistics"
      text={
        <>
          <p>
            Pallyflo is a Canadian multinational agro-commodities exporting company headquartered in Toronto, Ontario. We deliver pulses and
            seeds worldwide, connecting producers, farmers, processors, and local suppliers with importers, wholesalers, and retailers.
          </p>
          <ul className="list-disc pl-6 text-slate-600 mt-2">
            <li><strong>Federal Corporation #</strong> 1343177-1</li>
            <li><strong>Business Registration</strong> Toronto, Ontario, Canada</li>
          </ul>
        </>
      }
    />

    <ZigZagSection
      id="what-we-do"
      title="What We Do"
      reverse
      imageSrc="/hero.jpg"
      imageAlt="Global supply chain"
      text={
        <>
          <p>
            We connect key resources for physical commodities at the heart of the global supply chain in a sustainable and ethical manner.
            We listen to market and societal needs to improve supply-chain management and ensure long-term resource viability.
          </p>
          <div className="grid grid-cols-3 gap-3 mt-3">
            <Stat value="9+" label="Countries" />
            <Stat value="50+" label="Clients" />
            <Stat value="Trusted" label="Partner" />
          </div>
        </>
      }
    />

    <ZigZagSection
      id="our-mission"
      title="Our Mission"
      imageSrc="/hero.jpg"
      imageAlt="Target illustrating mission"
      text={<p>To improve the state of the world by facilitating the international exchange of goods and services between enterprises. We accelerate progress by delivering top-quality products, logistics, and services that help partners reach their goals faster.</p>}
    />

    <ZigZagSection
      id="our-vision"
      title="Our Vision"
      reverse
      imageSrc="/hero.jpg"
      imageAlt="Telescope illustrating vision"
      text={<p>To be recognized as one of the most reliable and prosperous commercial enterprises worldwide.</p>}
    />

    {/* Values block */}
    <section id="our-values" className="bg-slate-50">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          {['Global Responsibility','Integrity & Transparency','Pursue Excellence','Focus on Client Success','Diversity, Equity & Inclusion'].map((v) => (
            <article key={v} className="p-4 rounded-lg border border-slate-200 shadow-sm bg-white">
              <h3 className="font-semibold">{v}</h3>
              <p className="text-slate-600 mt-1">We uphold this value across our operations with practical actions and measurable outcomes.</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Optional: personalization section (kept from your spec) */}
    <section className="">
      <div className="container mx-auto px-4 py-10 space-y-3">
        <h2 className="text-3xl font-bold tracking-tight">Customize Your Order</h2>
        <Personalize />
      </div>
    </section>
  </>
)

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm">
      <span className="block text-lg font-extrabold">{value}</span>
      <span className="text-slate-600 text-sm">{label}</span>
    </div>
  )
}
