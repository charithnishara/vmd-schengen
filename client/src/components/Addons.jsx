import { FiPlus } from 'react-icons/fi'

const addons = [
  { service: 'Cover letter writing', price: '£20', desc: 'Professionally crafted letter tailored to your application.' },
  { service: 'Visa form filling', price: '£25', desc: 'Complete assistance filling your visa application form accurately.' },
  { service: 'Appointment booking assistance', price: '£40', desc: 'We help you secure the earliest available embassy appointment.' },
  { service: 'Business invitation letter guidance', price: '£40', desc: 'Expert guidance on obtaining correct business invitation letters.' },
  { service: 'Itinerary revision', price: '£10', desc: 'Update or revise an existing itinerary for changed travel dates.' },
]

export default function Addons() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">Extras</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Add-on Services</h2>
          <p className="text-gray-500 text-sm">Enhance any package with the following extras — price per applicant.</p>
        </div>

        <div className="space-y-3">
          {addons.map(a => (
            <div
              key={a.service}
              className="flex items-center justify-between gap-4 bg-[#fdf8f0] border border-cream-muted rounded-xl px-5 py-4 hover:border-gold/50 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                  <FiPlus className="text-gold" size={14} />
                </div>
                <div>
                  <div className="font-medium text-gray-800 text-sm">{a.service}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{a.desc}</div>
                </div>
              </div>
              <div className="text-primary font-bold text-lg flex-shrink-0">{a.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
