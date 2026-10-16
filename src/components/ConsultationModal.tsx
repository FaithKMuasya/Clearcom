import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Mail, Send, Calendar, MessageSquare, Copy, Check, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/clearcomData.ts';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Managed IT Services',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [datePref, setDatePref] = useState('This Week');
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const id = `CLR-AUDIT-${Math.floor(1000 + Math.random() * 9000)}`;

      // Deliver the booking by email via the local API server (server.js)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation',
          ticket: id,
          name,
          email,
          phone,
          service,
          datePref,
        }),
      });
      if (!response.ok) {
        throw new Error(`delivery-failed-${response.status}`);
      }

      setTicketId(id);

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('clearcom_inquiries') || '[]');
        stored.unshift({
          id,
          timestamp: new Date().toLocaleString('en-KE'),
          name,
          company: 'Fast Consultation Booking',
          email,
          phone,
          service,
          message: `Requested Timeframe: ${datePref}`,
          status: 'Audit Scheduled - Contacting Client',
        });
        localStorage.setItem('clearcom_inquiries', JSON.stringify(stored.slice(0, 20)));
      } catch (err) {
        console.warn('Storage error', err);
      }

      confetti({
        particleCount: 75,
        spread: 55,
        colors: ['#F26B21', '#0B6BB5', '#10b981'],
      });
    } catch {
      setSubmitError('Unable to send your booking right now. Please call +254 795 768 010 or message us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyId = () => {
    if (ticketId) {
      navigator.clipboard.writeText(ticketId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full my-6 shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Top Accent bar */}
        <div className="h-2 bg-gradient-to-r from-[#F26B21] via-[#0B6BB5] to-[#08365F]" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {ticketId ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Poppins']">
                Consultation Scheduled!
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. A senior systems engineer from our Mombasa Road office will call you at <span className="font-semibold text-slate-900">{phone}</span>.
              </p>

              {/* Reference ID Pill */}
              <div className="my-5 inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500">Audit Ticket:</span>
                <span className="text-xs font-black text-[#0B6BB5]">{ticketId}</span>
                <button
                  onClick={copyId}
                  className="p-1 hover:bg-slate-200 rounded text-slate-500"
                  title="Copy ID"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Clearcom%2C%20I%20scheduled%20consultation%20ticket%20${ticketId}%20for%20${encodeURIComponent(service)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Notify via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setTicketId(null);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#F26B21] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Free Discovery Call & Audit
              </div>
              <h3 className="text-2xl font-black text-[#08365F] font-['Poppins']">
                Book a Free IT Consultation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-6">
                Meet with our Nairobi engineers at Vision Plaza, Mombasa Road or via a virtual meeting.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grace Wanjiku"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6BB5]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="grace@company.co.ke"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6BB5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6BB5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Service of Interest
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6BB5] bg-white font-medium"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="3CX vs Yeastar VoIP Comparison">3CX vs Yeastar VoIP Comparison</option>
                    <option value="Complete Office IT Setup">Complete Office IT Setup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Timeframe
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {['Urgent (Today)', 'This Week', 'Next Week'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setDatePref(time)}
                        className={`py-2 px-2 rounded-lg border font-semibold text-center transition-all ${
                          datePref === time
                            ? 'bg-[#0B6BB5] text-white border-[#0B6BB5]'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {submitError && (
                  <div className="flex items-start gap-2 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#F26B21] hover:bg-[#d95610] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? 'Confirming...' : 'Confirm My Free Consultation'}
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-400">
                    Prefer direct calling? Reach our Mombasa Rd office at{' '}
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#0B6BB5] font-bold">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
