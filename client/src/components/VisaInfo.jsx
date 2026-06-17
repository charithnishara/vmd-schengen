import { FiClock, FiCalendar, FiAlertCircle } from 'react-icons/fi'

const fees = [
  { category: 'Adults', fee: '€90' },
  { category: 'Children aged 6–12', fee: '€45' },
  { category: 'Armenia, Azerbaijan & Belarus applicants', fee: '€35' },
  { category: 'Cabo Verde applicants', fee: '€67.50' },
]

const notes = [
  { icon: FiAlertCircle, text: 'Flight reservations are temporary bookings for visa purposes — not fully paid tickets.' },
  { icon: FiAlertCircle, text: 'Hotel reservations are provided according to your travel dates and embassy requirements.' },
  { icon: FiAlertCircle, text: 'Processing times may vary during peak travel seasons.' },
  { icon: FiAlertCircle, text: 'Visa approval depends solely on embassy decisions — we cannot guarantee outcomes.' },
  { icon: FiAlertCircle, text: 'Do not purchase non-refundable flight tickets before your visa is approved.' },
  { icon: FiAlertCircle, text: 'All appointment bookings are subject to availability at the relevant embassy or consulate.' },
]

export default function VisaInfo() {
  return (
    <section id="visa-info" className="py-20 bg-[#fdf8f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">What to Know</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Visa Information</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">Key facts about Schengen visa applications to help you plan ahead.</p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-white border border-cream-muted rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <FiClock className="text-gold" size={18} />
              </div>
              <h3 className="font-semibold text-gray-800">Processing Time</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Normal processing: <strong className="text-gray-800">15 calendar days</strong><br />
              Extended cases (if more documents needed): up to <strong className="text-gray-800">45 days</strong>
            </p>
          </div>
          <div className="bg-white border border-cream-muted rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <FiCalendar className="text-gold" size={18} />
              </div>
              <h3 className="font-semibold text-gray-800">When to Apply</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Submit at least <strong className="text-gray-800">15 days before</strong> your travel date and no earlier than{' '}
              <strong className="text-gray-800">6 months beforehand</strong>. An appointment may be required.
            </p>
          </div>
        </div>

        {/* Embassy fees */}
        <div className="bg-white border border-cream-muted rounded-2xl overflow-hidden mb-8">
          <div className="bg-primary px-6 py-4">
            <h3 className="font-serif text-lg text-cream">Embassy Visa Fees</h3>
            <p className="text-cream/60 text-xs mt-0.5">These are official embassy fees, separate from VMD service fees.</p>
          </div>
          <div className="divide-y divide-cream-dark">
            {fees.map((f, i) => (
              <div key={f.category} className={`flex justify-between items-center px-6 py-3.5 text-sm ${i % 2 === 1 ? 'bg-[#fdf8f0]' : 'bg-white'}`}>
                <span className="text-gray-700">{f.category}</span>
                <span className="font-bold text-primary">{f.fee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important notes */}
        <div>
          <h3 className="font-semibold text-gray-700 text-sm mb-4 uppercase tracking-wide">Important Notes</h3>
          <div className="space-y-2.5">
            {notes.map((n, i) => (
              <div key={i} className="flex gap-3 items-start bg-white border-l-4 border-gold px-4 py-3 rounded-r-xl text-sm text-gray-600">
                <n.icon className="text-gold flex-shrink-0 mt-0.5" size={14} />
                {n.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
