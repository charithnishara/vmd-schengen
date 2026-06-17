import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const initialForm = { name: '', email: '', phone: '', destination: '', package: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">Get in Touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Start Your Schengen Journey</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Fill in the form below and our team will be in touch within 24 hours with a personalised quote.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-primary rounded-2xl p-6 text-cream">
              <h3 className="font-serif text-xl mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-sm text-cream/80">
                {[
                  'Free initial consultation',
                  'Same-day response guaranteed',
                  'Tailored quote for your specific case',
                  'Expert advice on document requirements',
                  'Family & group discounts available',
                ].map(t => (
                  <li key={t} className="flex gap-2 items-start">
                    <span className="text-gold mt-0.5">✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fdf8f0] border border-cream-muted rounded-2xl p-6 space-y-4 text-sm">
              <div>
                <div className="font-semibold text-gray-700 mb-1">Email</div>
                <a href="mailto:mishma.silva@vmdgroup.uk" className="text-primary hover:text-gold transition-colors">mishma.silva@vmdgroup.uk</a>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Hotline</div>
                <a href="tel:+442033939445" className="text-primary hover:text-gold transition-colors">+44 2033 939445</a>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">WhatsApp</div>
                <a href="https://wa.me/94742299313" className="text-primary hover:text-gold transition-colors">+94 74 229 9313</a>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-1">Response time</div>
                <span className="text-gray-600">Within 24 hours (usually same day)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                <input
                  required name="name" value={form.name} onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                <input
                  required type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone / WhatsApp</label>
                <input
                  name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+44 7000 000000"
                  className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Destination Country</label>
                <input
                  name="destination" value={form.destination} onChange={handleChange}
                  placeholder="e.g. France, Italy, Spain"
                  className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Package Interest</label>
              <select
                name="package" value={form.package} onChange={handleChange}
                className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0] text-gray-700"
              >
                <option value="">Select a package...</option>
                <option>Basic (£100)</option>
                <option>Standard (£150)</option>
                <option>Premium (£250)</option>
                <option>Family (from £320)</option>
                <option>Not sure — need advice</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
              <textarea
                required name="message" value={form.message} onChange={handleChange}
                rows={4}
                placeholder="Tell us about your travel plans, travel dates, number of applicants, or any specific questions..."
                className="w-full border border-cream-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors bg-[#fdf8f0] resize-none"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm">
                <FiCheckCircle size={16} /> Thank you! We'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                <FiAlertCircle size={16} /> Something went wrong. Please email us at mishma.silva@vmdgroup.uk
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-primary hover:bg-primary-light disabled:opacity-60 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {status === 'loading' ? (
                <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4" />
              ) : (
                <FiSend size={15} />
              )}
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
