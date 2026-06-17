const destinations = [
  { name: 'Paris', country: 'France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80&auto=format&fit=crop', desc: 'Eiffel Tower & Louvre' },
  { name: 'Rome', country: 'Italy', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80&auto=format&fit=crop', desc: 'Colosseum & Vatican' },
  { name: 'Santorini', country: 'Greece', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80&auto=format&fit=crop', desc: 'Caldera & Oia village' },
  { name: 'Barcelona', country: 'Spain', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80&auto=format&fit=crop', desc: 'Sagrada Família & beaches' },
  { name: 'Amsterdam', country: 'Netherlands', img: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600&q=80&auto=format&fit=crop', desc: 'Canals & museums' },
  { name: 'Swiss Alps', country: 'Switzerland', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop', desc: 'Mountains & lakes' },
  { name: 'Prague', country: 'Czech Republic', img: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=600&q=80&auto=format&fit=crop', desc: 'Old Town & castle' },
  { name: 'Vienna', country: 'Austria', img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&q=80&auto=format&fit=crop', desc: 'Palaces & opera houses' },
]

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-[#fdf8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-2">26 Countries</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-3">Popular Destinations</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            We provide visa assistance for all 26 Schengen countries. Start planning your European adventure today.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {destinations.map(d => (
            <div
              key={d.name}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={d.img}
                alt={`${d.name}, ${d.country}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-serif text-lg leading-tight">{d.name}</div>
                <div className="text-cream/70 text-xs">{d.country}</div>
                <div className="text-gold text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Also covering: Finland · Iceland · Latvia · Liechtenstein · Lithuania · Malta · Norway · Romania · Sweden · and more
          </p>
        </div>
      </div>
    </section>
  )
}
