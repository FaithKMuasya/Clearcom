import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/clearcomData.ts';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, MessageSquare, Copy, Check, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitContactInquiry } from '../../app/actions/contact';

interface ContactSectionProps {
  headingAs?: 'h1' | 'h2';
  preselectedService?: string;
}

interface SubmittedInquiry {
  id: string;
  timestamp: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  headingAs: Heading = 'h2',
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Managed IT Services',
    company: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<SubmittedInquiry | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyList, setHistoryList] = useState<SubmittedInquiry[]>([]);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name or company representative.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g., name@company.co.ke).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone number so our engineers can reach you.';
    } else if (!/^[+0-9\s-]{8,20}$/.test(formData.phone)) {
      newErrors.phone = `Please enter a valid phone number (e.g., ${COMPANY_INFO.phoneDisplay}).`;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your requirements.';
    }

    if (formData.honeypot) {
      return false; // Silent bot rejection
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitContactInquiry({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        website: formData.honeypot,
      });
      if (result.ok === false) {
        setSubmitError(result.error);
        return;
      }
      const ticketId = result.ticket;

      const nowStr = new Date().toLocaleString('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const newInquiry: SubmittedInquiry = {
        id: ticketId,
        timestamp: nowStr,
        name: formData.name,
        company: formData.company || 'Not Specified',
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        status: 'Received - Assigned to Mombasa Rd Field Team',
      };

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('clearcom_inquiries') || '[]');
        stored.unshift(newInquiry);
        localStorage.setItem('clearcom_inquiries', JSON.stringify(stored.slice(0, 20)));
      } catch (err) {
        console.warn('Storage error', err);
      }

      setLastSubmission(newInquiry);

      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F26B21', '#0B6BB5', '#10b981'],
      });

      // Clear non-service fields
      setFormData((prev) => ({
        ...prev,
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      }));
    } catch (err) {
      setSubmitError(`Unable to deliver message right now. Please call us directly at ${COMPANY_INFO.phoneDisplay} or message via WhatsApp.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyTicketId = () => {
    if (lastSubmission) {
      navigator.clipboard.writeText(lastSubmission.id);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading">
            Get a Free Consultation & Quote
          </Heading>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Schedule a no-obligation IT audit, 3CX/Yeastar VoIP demonstration, or cybersecurity appraisal for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company Details & Google Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <h3 className="text-xl font-bold text-[#08365F] font-heading mb-6">
                Clearcom Headquarters
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B6BB5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Office Location</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                    <span className="inline-block mt-1 text-xs font-semibold text-[#0B6BB5]">
                      Serving Nairobi & across Kenya
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26B21] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Direct Telephone</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-slate-700 hover:text-[#0B6BB5] font-semibold text-base transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <span className="block text-xs text-slate-500">Rapid dispatch & support desk</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Email Inquiries</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-700 hover:text-[#0B6BB5] font-semibold transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="block text-xs text-slate-500">Quotes & technical support</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">Operating Hours</span>
                    <span className="block text-slate-600">{COMPANY_INFO.workingHours.weekdays}</span>
                    <span className="block text-slate-600">{COMPANY_INFO.workingHours.saturday}</span>
                    <span className="inline-block mt-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {COMPANY_INFO.workingHours.support}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-200/80 overflow-hidden">
              <div className="rounded-2xl overflow-hidden h-64 w-full relative">
                <iframe
                  title={`${COMPANY_INFO.name} location`}
                  src={COMPANY_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 text-center">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0B6BB5] hover:text-[#F26B21] transition-colors"
                >
                  Open in Google Maps Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Fully Functional Inquiry & Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="text-2xl font-bold text-[#08365F] font-heading">
                Send an Inquiry or Request a Quote
              </h3>
            </div>
            <p className="text-slate-600 text-sm mb-8">
              Fill in your details below and an IT systems consultant will get in touch within 2 business hours.
            </p>

            {lastSubmission ? (
              /* Rich Interactive Submission Confirmation */
              <div className="p-6 sm:p-8 bg-emerald-50/70 border border-emerald-200 rounded-2xl text-left animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-900 font-heading">
                      Inquiry Logged Successfully!
                    </h4>
                    <p className="text-xs text-emerald-700">
                      Our Nairobi engineering dispatch desk has received your ticket.
                    </p>
                  </div>
                </div>

                {/* Ticket Details Box */}
                <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-2xs space-y-2.5 text-xs text-slate-700 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-500">Reference Ticket ID:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-[#0B6BB5] text-sm">{lastSubmission.id}</span>
                      <button
                        onClick={copyTicketId}
                        className="p-1 hover:bg-slate-100 rounded text-slate-500 hover:text-slate-800 transition-colors"
                        title="Copy Reference ID"
                      >
                        {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Person:</span>
                    <span className="font-bold text-slate-900">{lastSubmission.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Company:</span>
                    <span className="font-bold text-slate-900">{lastSubmission.company}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Service Requested:</span>
                    <span className="font-bold text-[#F26B21]">{lastSubmission.service}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      {lastSubmission.status}
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Clearcom%2C%20I%20just%20submitted%20inquiry%20ticket%20${lastSubmission.id}%20for%20${encodeURIComponent(lastSubmission.service)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up Immediately on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setLastSubmission(null)}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. David Mwangi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-200 focus:border-[#0B6BB5] focus:ring-blue-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Legal Advocates"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all focus:outline-none focus:ring-2 focus:border-[#0B6BB5] focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="david@company.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-200 focus:border-[#0B6BB5] focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Mobile / Office) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                          : 'border-slate-200 focus:border-[#0B6BB5] focus:ring-blue-100'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>


                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    How Can We Assist You? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your team size, current issues, or specific systems you want to upgrade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-200 focus:border-[#0B6BB5] focus:ring-blue-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Ticket to Nairobi Helpdesk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request for Free Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 We respect your privacy. No spam. You will only be contacted by a certified Clearcom engineer.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Logged Inquiries Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 text-[#0B6BB5] rounded-xl">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#08365F] font-heading">
                    Logged Inquiries & Quotes
                  </h4>
                  <p className="text-xs text-slate-500">
                    Locally stored submissions on this device
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowHistory(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-4 overflow-y-auto space-y-3 flex-1">
              {historyList.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-sm">
                  No inquiries logged yet on this device. Submit the form above to see your tickets!
                </div>
              ) : (
                historyList.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-black text-[#0B6BB5] text-sm">{item.id}</span>
                      <span className="text-[11px] text-slate-500">{item.timestamp}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-700">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Client / Company:</span>
                        <span className="font-semibold">{item.name} ({item.company})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Contact:</span>
                        <span className="font-semibold">{item.phone} • {item.email}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Requested Service:</span>
                      <span className="font-bold text-[#F26B21]">{item.service}</span>
                    </div>
                    {item.message && (
                      <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 line-clamp-2">
                        {item.message}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              {historyList.length > 0 && (
                <button
                  onClick={() => {
                    localStorage.removeItem('clearcom_inquiries');
                    setHistoryList([]);
                  }}
                  className="text-xs text-red-500 hover:text-red-700 font-semibold"
                >
                  Clear Local Inquiries
                </button>
              )}
              <button
                onClick={() => setShowHistory(false)}
                className="px-5 py-2 bg-[#0B6BB5] hover:bg-[#08548F] text-white text-xs font-bold rounded-xl transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
