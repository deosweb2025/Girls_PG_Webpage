import { useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';
import { MessageCircle, Phone } from 'lucide-react';

const CostEstimator = () => {
  const [sharingType, setSharingType] = useState('double');
  const [acType, setAcType] = useState('ac');
  const [duration, setDuration] = useState('long');

  const pricing = {
    single: { ac: 13500, nonAc: 11500, label: 'Single Private Suite' },
    double: { ac: 9500, nonAc: 8000, label: 'Executive Double Sharing' },
    triple: { ac: 7500, nonAc: 6500, label: 'Comfort Triple Sharing' },
  };

  const selectedBase = pricing[sharingType][acType];
  const monthlyCost = duration === 'long' ? selectedBase : selectedBase + 500;
  const deposit = monthlyCost;

  const sharingLabel = pricing[sharingType].label;
  const acLabel = acType === 'ac' ? 'Air Conditioned (Split AC)' : 'Non-AC';
  const durationLabel = duration === 'long' ? 'Long Stay (6+ Months)' : 'Short Term (1-3 Months)';

  const whatsappMessage = `Hello Ajanta Ladies PG, I used your Cost Estimator for:
- Room Type: ${sharingLabel}
- Climate: ${acLabel}
- Duration: ${durationLabel}
- Estimated Rent: ₹${monthlyCost.toLocaleString('en-IN')}/mo (Food Included)
Is there an available room for this configuration?`;

  const whatsappUrl = `https://wa.me/919433359907?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="TRANSPARENT PRICING CALCULATOR"
          title="Calculate Your Exact Monthly"
          highlight="Living Cost"
          description="No hidden maintenance fees, no surprise electricity surcharges, and strictly 0% brokerage. Customize your stay options below."
          className="mb-12"
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8DFD5] shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Options Selection */}
            <div className="md:col-span-7 space-y-6">
              
              {/* 1. Sharing Type */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1E1B18] mb-2.5">
                  1. Select Room Occupancy
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'single', label: 'Single', sub: 'Private' },
                    { id: 'double', label: 'Double', sub: '2-Sharing' },
                    { id: 'triple', label: 'Triple', sub: '3-Sharing' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSharingType(item.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        sharingType === item.id
                          ? 'bg-[#832B4C] text-white border-[#832B4C] shadow-md'
                          : 'bg-[#FAF7F4] text-[#5A534B] border-[#E8DFD5] hover:border-[#832B4C]'
                      }`}
                    >
                      <span className="block text-sm font-bold">{item.label}</span>
                      <span className={`text-[11px] block mt-0.5 ${sharingType === item.id ? 'text-rose-100' : 'text-[#8C8275]'}`}>
                        {item.sub}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. AC Option */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1E1B18] mb-2.5">
                  2. Room Climate Control
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'ac', label: 'Split AC Room', desc: 'Summer comfort' },
                    { id: 'nonAc', label: 'Non-AC / Natural Air', desc: 'Budget option' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAcType(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        acType === item.id
                          ? 'bg-[#832B4C] text-white border-[#832B4C] shadow-md'
                          : 'bg-[#FAF7F4] text-[#5A534B] border-[#E8DFD5] hover:border-[#832B4C]'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-bold">{item.label}</span>
                      <span className={`text-[11px] ${acType === item.id ? 'text-rose-100' : 'text-[#8C8275]'}`}>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Duration */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1E1B18] mb-2.5">
                  3. Planned Duration
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'long', label: 'Long Term (6+ Mos)', tag: 'Best Rate' },
                    { id: 'short', label: 'Short Term (1-3 Mos)', tag: 'Flexible' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDuration(item.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        duration === item.id
                          ? 'bg-[#832B4C] text-white border-[#832B4C] shadow-md'
                          : 'bg-[#FAF7F4] text-[#5A534B] border-[#E8DFD5] hover:border-[#832B4C]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold">{item.label}</span>
                        <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm ${
                          duration === item.id ? 'bg-white/20 text-white' : 'bg-[#832B4C]/10 text-[#832B4C]'
                        }`}>
                          {item.tag}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Price Breakdown Card */}
            <div className="md:col-span-5 bg-[#FAF7F4] p-6 sm:p-7 rounded-2xl border border-[#E8DFD5] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD5]">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#832B4C]">
                    Calculated Rent
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Food Included
                  </span>
                </div>

                <div className="my-5">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#1E1B18]">
                    ₹{monthlyCost.toLocaleString('en-IN')}
                    <span className="text-xs font-semibold text-[#6B645C]"> / month</span>
                  </div>
                  <p className="text-xs text-[#6B645C] mt-1">
                    Includes 4-time food, Wi-Fi, housekeeping & attached geyser.
                  </p>
                </div>

                <div className="space-y-2 py-4 border-t border-[#E8DFD5] text-xs text-[#5A534B]">
                  <div className="flex justify-between">
                    <span>Brokerage Commission:</span>
                    <span className="font-bold text-emerald-700">₹0 (Free)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Refundable Deposit:</span>
                    <span className="font-bold text-[#1E1B18]">₹{deposit.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Housekeeping:</span>
                    <span className="font-bold text-emerald-700">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>100% Power Backup:</span>
                    <span className="font-bold text-emerald-700">Included</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#832B4C] to-[#B44A70] hover:shadow-md transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lock in via WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-[#1E1B18] bg-white border border-[#E8DFD5] hover:border-[#832B4C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#832B4C]" />
                  <span>Call: {siteData.contact.displayPhone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CostEstimator;

