import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { MapPin, Navigation, Clock, Phone, Building2, ExternalLink } from 'lucide-react';

const Location = () => {
  const { location, contact, landmarks } = siteData;

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F3EDE6]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="STRATEGIC LOCATION"
          title="Unbeatable Commute from"
          highlight="Biswa Bangla Gate"
          description="Situated at Ajanta Building adjacent to Chowman Restaurant — with effortless connectivity to New Town IT parks, Sector V, universities, bus stands, and metro lines."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Visiting Hours & Proximity Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Box */}
            <div className="bg-white p-7 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <div className="flex items-center gap-3 text-[#832B4C] mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#832B4C]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D48B68]">
                    Official Address
                  </span>
                  <h4 className="text-lg font-bold text-[#1E1B18]">
                    {location.building}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-[#4A443E] leading-relaxed font-medium mb-4">
                {location.fullAddress}
              </p>

              <div className="p-3.5 rounded-xl bg-[#FAF7F4] border border-[#E8DFD5] text-xs text-[#6B645C] space-y-1.5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#832B4C] shrink-0" />
                  <span><strong>Landmark:</strong> {location.landmark}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#832B4C] shrink-0" />
                  <span><strong>Visiting Hours:</strong> {contact.visitingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#832B4C] shrink-0" />
                  <span><strong>Warden Helpline:</strong> {contact.displayPhone}</span>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href={location.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#832B4C] hover:bg-[#6D233E] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>

            {/* Travel Time Grid */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8DFD5] shadow-sm">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C] mb-3">
                Key Hubs & Commute Times:
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                {landmarks.slice(0, 6).map((lm, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-[#FAF7F4] border border-[#E8DFD5]/80 text-xs">
                    <span className="font-bold text-[#1E1B18] block truncate">
                      {lm.name}
                    </span>
                    <span className="text-[#832B4C] font-semibold block mt-0.5">
                      {lm.time} ({lm.distance})
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl border border-[#E8DFD5] shadow-sm flex flex-col min-h-[420px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#E8DFD5]">
              <iframe
                title="Ajanta Luxury Ladies PG Biswa Bangla Gate Kolkata Map"
                src={location.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-3 text-center text-xs text-[#6B645C] flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#832B4C]" />
              <span>Right at Biswa Bangla Gate junction, right beside Chowman Restaurant.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;

