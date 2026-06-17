import { useState } from 'react'
import { FiCheck, FiZap } from 'react-icons/fi'

const tabs = [
  { label: '4 Days / 3 Nights', short: '4 Days' },
  { label: '7 Days / 6 Nights', short: '7 Days' },
  { label: '14 Days / 13 Nights', short: '14 Days' },
]

const packages = [
  // Tab 0 — 4 days
  [
    {
      name: 'Basic', price: '£100', badgeLabel: 'Entry Level', badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      desc: 'For applicants who already have most documents ready.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation for 3 nights', 'Travel itinerary for 4 days', 'Visa appointment guidance', 'Basic document checklist'],
      processing: '2–6 days', bestFor: 'Solo travellers, self-managing applicants', featured: false,
    },
    {
      name: 'Standard', price: '£150', badgeLabel: 'Most Popular', badgeClass: 'bg-red-50 text-primary border border-red-200',
      desc: 'The most popular choice for Schengen tourist visa applications.',
      features: ['Flight reservation with verifiable PNR', 'Hotel reservation for 3 nights', 'Travel itinerary for 4 days', 'Cover letter', 'Employment & financial document checklist', 'Visa form assistance', 'Email support'],
      processing: 'Priority: 1–3 days', bestFor: 'First-time applicants, family applications', featured: true,
    },
    {
      name: 'Premium', price: '£250', badgeLabel: 'Full Service', badgeClass: 'bg-amber-50 text-amber-800 border border-amber-200',
      desc: 'Complete end-to-end Schengen visa preparation.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation for 3 nights', 'Personalised day-by-day itinerary', 'Professional cover letter', 'Complete application review', 'Visa form filling assistance', 'Embassy-specific checklist', 'Priority support', 'Mock interview guidance', 'Revisions until appointment'],
      processing: 'Priority: 1–3 days', bestFor: 'Business travellers, complex applications', featured: false,
    },
    {
      name: 'Family', price: 'From £320', badgeLabel: 'Families', badgeClass: 'bg-orange-50 text-orange-800 border border-orange-200',
      desc: 'Special package for couples and families travelling together.',
      features: ['Group flight reservations / dummy ticket', 'Family hotel bookings for 3 nights', 'Combined itinerary for 4 days', 'Travel insurance support', 'Cover letters for all applicants', 'Child document guidance', 'Full document checklist', 'Priority support'],
      processing: 'Priority: 1–3 days', bestFor: 'Families with children, couples, groups', featured: false,
    },
  ],
  // Tab 1 — 7 days
  [
    {
      name: 'Basic', price: '£100', badgeLabel: 'Entry Level', badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      desc: 'For applicants who already have most documents ready.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation confirmation', 'Travel itinerary', 'Visa appointment guidance', 'Basic document checklist'],
      processing: '2–6 days', bestFor: 'Solo travellers, self-managing applicants', featured: false,
    },
    {
      name: 'Standard', price: '£150', badgeLabel: 'Most Popular', badgeClass: 'bg-red-50 text-primary border border-red-200',
      desc: 'The most popular choice for Schengen tourist visa applications.',
      features: ['Flight reservation with verifiable PNR', 'Hotel reservation for full trip', 'Travel insurance arrangement guidance', 'Detailed travel itinerary', 'Cover letter template', 'Employment & financial document checklist', 'Visa form assistance', 'Email support'],
      processing: 'Priority: 1–3 days', bestFor: 'First-time applicants, family applications', featured: true,
    },
    {
      name: 'Premium', price: '£250', badgeLabel: 'Full Service', badgeClass: 'bg-amber-50 text-amber-800 border border-amber-200',
      desc: 'Complete end-to-end Schengen visa preparation.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation for full trip', 'Personalised day-by-day itinerary', 'Professional cover letter', 'Complete application review', 'Visa form filling assistance', 'Embassy-specific checklist', 'Priority support', 'Mock interview guidance', 'Revisions until appointment'],
      processing: 'Priority: 1–3 days', bestFor: 'Business travellers, complex applications', featured: false,
    },
    {
      name: 'Family', price: 'From £320', badgeLabel: 'Families', badgeClass: 'bg-orange-50 text-orange-800 border border-orange-200',
      desc: 'Special package for couples and families travelling together.',
      features: ['Group flight reservations / dummy ticket', 'Family hotel bookings for full trip', 'Combined itinerary', 'Cover letters for all applicants', 'Child document guidance', 'Full document checklist', 'Priority support'],
      processing: 'Priority: 1–3 days', bestFor: 'Families with children, couples, groups', featured: false,
    },
  ],
  // Tab 2 — 14 days
  [
    {
      name: 'Basic', price: '£100', badgeLabel: 'Entry Level', badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      desc: 'For applicants who already have most documents ready.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation confirmation', 'Travel itinerary', 'Visa appointment guidance', 'Basic document checklist'],
      processing: '2–6 days', bestFor: 'Solo travellers, self-managing applicants', featured: false,
    },
    {
      name: 'Standard', price: '£150', badgeLabel: 'Most Popular', badgeClass: 'bg-red-50 text-primary border border-red-200',
      desc: 'The most popular choice for Schengen tourist visa applications.',
      features: ['Flight reservation with verifiable PNR', 'Hotel reservation for full trip', 'Personalised day-by-day itinerary', 'Cover letter', 'Employment & financial document checklist', 'Visa form assistance', 'Email support'],
      processing: 'Priority: 1–3 days', bestFor: 'First-time applicants, family applications', featured: true,
    },
    {
      name: 'Premium', price: '£250', badgeLabel: 'Full Service', badgeClass: 'bg-amber-50 text-amber-800 border border-amber-200',
      desc: 'Complete end-to-end Schengen visa preparation.',
      features: ['Flight reservation / dummy ticket', 'Hotel reservation for full trip', 'Personalised day-by-day itinerary', 'Professional cover letter', 'Complete application review', 'Visa form filling assistance', 'Embassy-specific checklist', 'Priority support', 'Mock interview guidance', 'Revisions until appointment'],
      processing: 'Priority: 1–3 days', bestFor: 'Business travellers, complex applications', featured: false,
    },
    {
      name: 'Family', price: 'From £320', badgeLabel: 'Families', badgeClass: 'bg-orange-50 text-orange-800 border border-orange-200',
      desc: 'Special package for couples and families travelling together.',
      features: ['Group flight reservations / dummy ticket', 'Family hotel bookings for full trip', 'Combined itinerary', 'Cover letters for all applicants', 'Child document guidance', 'Full document checklist', 'Priority support'],
      processing: 'Priority: 1–3 days', bestFor: 'Families with children, couples, groups', featured: false,
    },
  ],
]

export default function Packages() {
  const [tab, setTab] = useState(0)

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">Our Packages</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Choose Your Package</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            All prices exclude our professional service fee of{' '}
            <span className="font-semibold text-primary">£250 per application</span> (initial consultation & case file opening).
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex bg-[#fdf8f0] border border-cream-muted rounded-xl overflow-hidden mb-8 max-w-lg mx-auto">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`flex-1 py-3 text-sm font-medium transition-all duration-200 ${
                tab === i
                  ? 'bg-primary text-cream shadow-inner'
                  : 'text-gray-600 hover:bg-cream-dark/30 hover:text-primary'
              }`}
            >
              <span className="hidden sm:inline">{t.label}</span>
              <span className="sm:hidden">{t.short}</span>
            </button>
          ))}
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {packages[tab].map(pkg => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                pkg.featured
                  ? 'border-gold shadow-lg shadow-gold/10 bg-white'
                  : 'border-cream-muted bg-white hover:border-gold/50'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <FiZap size={11} /> Most Popular
                  </span>
                </div>
              )}

              <div className="p-5 pb-4">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${pkg.badgeClass}`}>
                  {pkg.badgeLabel}
                </span>
                <h3 className="font-serif text-xl text-gray-900 mb-0.5">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2 leading-none">{pkg.price}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{pkg.desc}</p>
              </div>

              <div className="h-px bg-cream-dark mx-5" />

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">Included</p>
                <ul className="space-y-2 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                      <FiCheck className="text-gold flex-shrink-0 mt-0.5" size={13} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 bg-[#fdf8f0] rounded-lg p-3 text-xs text-gray-600 space-y-1">
                  <div><span className="font-semibold text-primary">Processing:</span> {pkg.processing}</div>
                  <div><span className="font-semibold text-primary">Best for:</span> {pkg.bestFor}</div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <a
                  href="#contact"
                  className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    pkg.featured
                      ? 'bg-primary hover:bg-primary-light text-white'
                      : 'border border-gold text-primary hover:bg-gold/5'
                  }`}
                >
                  {pkg.featured ? 'Get Started →' : 'Learn More →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
