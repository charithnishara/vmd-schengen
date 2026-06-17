import { FiMail, FiPhone } from 'react-icons/fi'

const schengenCountries = [
  'Austria', 'Belgium', 'Czech Republic', 'Denmark', 'Estonia',
  'Finland', 'France', 'Germany', 'Greece', 'Hungary',
  'Iceland', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland',
  'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden',
  'Switzerland',
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-cream/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="VMD" className="h-12 w-12 rounded-full border-2 border-gold object-cover" />
            <div>
              <div className="text-cream font-semibold text-sm">VMD Group</div>
              <div className="text-cream/50 text-xs italic">change for the future</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed mb-4">
            Professional Schengen visa assistance for individuals, families and businesses. Expert guidance, fast delivery, personalised service.
          </p>
          <a
            href="mailto:mishm.silva@vmdgroup.uk"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-xs transition-colors mb-1"
          >
            <FiMail size={13} /> mishm.silva@vmdgroup.uk
          </a>
          <a
            href="tel:+442033939445"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-xs transition-colors"
          >
            <FiPhone size={13} /> +44 2033 939445
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {[
              ['Home', '#home'],
              ['Packages', '#packages'],
              ['Destinations', '#destinations'],
              ['Visa Info', '#visa-info'],
              ['Contact Us', '#contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="hover:text-cream transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">Packages</h4>
          <ul className="space-y-2 text-xs">
            {['Basic — £100', 'Standard — £150', 'Premium — £250', 'Family — from £320'].map(p => (
              <li key={p}><a href="#packages" className="hover:text-cream transition-colors">{p}</a></li>
            ))}
            <li className="pt-2 border-t border-white/10 text-cream/40 text-xs">
              + £250 service fee per application
            </li>
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">All Schengen Countries</h4>
          <div className="flex flex-wrap gap-1">
            {schengenCountries.map(c => (
              <span key={c} className="text-xs bg-white/5 border border-white/10 rounded px-2 py-0.5 text-cream/50">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 sm:px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} VMD Group of Companies. All rights reserved.</span>
          <span>Schengen Visa Assistance · Confidential &amp; Professional Service</span>
        </div>
      </div>
    </footer>
  )
}
