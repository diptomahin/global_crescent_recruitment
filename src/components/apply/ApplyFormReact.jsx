import { useState } from 'react'
import Swal from 'sweetalert2'
import useAos from '../../hooks/useAos'

const initialFormData = {
  inquiryType: '',
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
}

const rawApiBase = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || ''
const contactEndpoint = rawApiBase
  ? rawApiBase.endsWith('/api')
    ? `${rawApiBase}/contact`
    : `${rawApiBase}/api/contact`
  : '/api/contact'

export default function ApplyFormReact() {
  useAos()

  const [formData, setFormData] = useState(initialFormData)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const contentType = response.headers.get('content-type') || ''
      const data = contentType.includes('application/json')
        ? await response.json()
        : { error: 'Backend did not return JSON. Check whether the API server is running.' }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      await Swal.fire({
        icon: 'success',
        title: 'Application sent',
        text: data.message || 'Your application has been submitted successfully.',
        confirmButtonColor: '#D60000',
      })

      setFormData(initialFormData)
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Unable to send application',
        text: error.message || 'Please try again later.',
        confirmButtonColor: '#D60000',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f0ea_100%)] py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Application Info Section - Top on all screens */}
        <div data-aos="fade-up" className="mb-16">
          <div className="mb-5 inline-flex rounded-full border border-[#D60000]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D60000] shadow-sm">
            Application
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Submit Your Application</h2>
          
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold text-gray-900 mb-2">EU Office</h3>
              <p className="text-gray-600">Serving all EU member states with regional recruitment coordination and local expertise</p>
            </div>
            <div className="rounded-[24px] bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold text-gray-900 mb-2">China Office</h3>
              <p className="text-gray-600">22F, Building B, World Trade Plaza, No. 9, Fuhong Road, Shenzhen City, China</p>
            </div>
            <div className="rounded-[24px] bg-[linear-gradient(145deg,#101010_0%,#1d1d1d_100%)] p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <h3 className="font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-white/80 text-sm">Info@gcrecruitmentltd.com</p>
              <p className="text-white/80 text-sm">Support@gcrecruitmentltd.com</p>
              <p className="text-white/80 text-sm">+387 62 012 295</p>
              <p className="text-white/80 text-sm">+44 7493 478440</p>
            </div>
          </div>
        </div>
 
        {/* Application Form Section */}
        <div id="apply-form" className="grid gap-12 ">
          <div data-aos="fade-right">
            <h3 className="text-2xl mt-5 font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Tell us about your experience and what opportunities you are interested in. We will review your application and get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} data-aos="fade-left" className="space-y-5 rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
          <div>
            <label htmlFor="inquiryType" className="mb-2 block font-medium text-gray-900">Inquiry Type *</label>
            <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2">
              <option value="">Select inquiry type...</option>
              <option value="Employer">I&apos;m an Employer</option>
              <option value="Worker">I&apos;m a Worker</option>
              <option value="Agency">I&apos;m an Agency</option>
            </select>
          </div>
          <div>
            <label htmlFor="fullName" className="mb-2 block font-medium text-gray-900">Full Name *</label>
            <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block font-medium text-gray-900">Email *</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block font-medium text-gray-900">Phone *</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2" />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block font-medium text-gray-900">Company / Organization</label>
            <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2" />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block font-medium text-gray-900">Subject *</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2">
              <option value="">Select a subject...</option>
              <option value="Recruitment Services">Recruitment Services</option>
              <option value="Job Inquiry">Job Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-medium text-gray-900">Message *</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-6 py-4 font-semibold text-white shadow-[0_14px_35px_rgba(214,0,0,0.22)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D60000] focus:ring-offset-2 disabled:opacity-60">
            {isLoading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
        </div>
      </div>
    </section>
  )
}
