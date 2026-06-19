import { FiShield, FiClock, FiFileText, FiUsers, FiStar, FiHeadphones } from 'react-icons/fi'

const reasons = [
  {
    icon: FiShield,
    title: 'Expert Guidance',
    desc: 'Our experienced consultants know exactly what embassies look for, significantly improving your chances of approval.',
  },
  {
    icon: FiClock,
    title: 'Fast Processing',
    desc: 'Most packages delivered within 1–6 hours. Priority support available so you never miss an appointment deadline.',
  },
  {
    icon: FiFileText,
    title: 'Complete Documentation',
    desc: 'We prepare and review every document — from flight reservations to cover letters — tailored to your specific embassy.',
  },
  {
    icon: FiUsers,
    title: 'Family Friendly',
    desc: 'Specialised packages for families, couples and groups. Child documentation guidance included at no extra cost.',
  },
  {
    icon: FiStar,
    title: 'Personalised Service',
    desc: 'Every case is handled individually. We craft itineraries and cover letters specific to your travel history and profile.',
  },
  {
    icon: FiHeadphones,
    title: 'Ongoing Support',
    desc: 'We don\'t disappear after delivery. Email and WhatsApp support available throughout your visa journey.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#fdf8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">Why Choose VMD</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">The Schengen Gateway Masters Difference</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We combine deep visa expertise with personalised care to deliver a seamless, stress-free application experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div
              key={r.title}
              className="bg-white border border-cream-muted rounded-2xl p-6 hover:border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors">
                <r.icon className="text-gold" size={20} />
              </div>
              <h3 className="font-serif text-lg text-primary mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
