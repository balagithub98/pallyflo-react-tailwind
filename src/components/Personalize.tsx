import React, { useState } from 'react'
import { Star } from 'lucide-react'

export const Personalize: React.FC = () => {
  const [engraving, setEngraving] = useState<string>('')
  const [packaging, setPackaging] = useState<'standard' | 'premium'>('standard')

  return (
    <form className="grid gap-4 max-w-xl">
      <label className="block">
        <span className="font-medium">Engraving (optional)</span>
        <input
          type="text"
          value={engraving}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEngraving(e.target.value)}
          placeholder="Enter text (max 24 chars)"
          maxLength={24}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <span className="text-slate-500 text-sm">{engraving.length}/24</span>
      </label>

      <div>
        <span className="font-medium block">Packaging</span>
        <div className="mt-1 flex gap-3">
          {(['standard', 'premium'] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setPackaging(opt)}
              className={
                'px-3 py-2 rounded-md border shadow-sm transition ' +
                (packaging === opt ? 'border-brand-primary ring-2 ring-brand-primary' : 'border-slate-300 hover:border-slate-400')
              }
            >
              {opt === 'premium' ? <Star className="inline -mt-1 mr-1" size={16} /> : null}
              {opt[0].toUpperCase() + opt.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-md bg-slate-50 border border-slate-200 p-3 text-slate-700">
        <strong>Preview:</strong> Engraving “{engraving || '—'}”, Packaging <em>{packaging}</em>
      </div>
    </form>
  )
}
