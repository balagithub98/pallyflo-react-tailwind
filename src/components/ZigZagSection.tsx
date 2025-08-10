import React from 'react'

export interface ZigZagSectionProps {
  id: string
  title: string
  text: React.ReactNode
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export const ZigZagSection: React.FC<ZigZagSectionProps> = ({
  id,
  title,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <section id={id} className={reverse ? 'bg-slate-50' : ''}>
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className={reverse ? 'md:order-2' : ''}>
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <div className="mt-3 text-slate-700">{text}</div>
          </div>
          <div className={reverse ? 'md:order-1' : ''}>
            <img src={imageSrc} alt={imageAlt} className="rounded-lg shadow" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZigZagSection
