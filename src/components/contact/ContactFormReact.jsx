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

export default function ContactFormReact() {
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
        title: 'Message sent',
        text: data.message || 'Your inquiry has been submitted successfully.',
        confirmButtonColor: '#D60000',
      })

      setFormData(initialFormData)
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Unable to send message',
        text: error.message || 'Please try again later.',
        confirmButtonColor: '#D60000',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f0ea_100%)] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div data-aos="fade-right">
          <div className="mb-5 inline-flex rounded-full border border-[#D60000]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D60000] shadow-sm">
            Contact Desk
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Start the conversation</h2>
          <p className="mt-4 text-gray-600">
            Tell us whether you are hiring, applying, or exploring a partnership. We will route your inquiry to the right team.
          </p>
          <div className="mt-8 space-y-5 text-gray-700">
            <div className="rounded-[24px] bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold text-gray-900">China Office</h3>
              <p>22F, Building B, World Trade Plaza, No. 9, Fuhong Road, Shenzhen City, China</p>
            </div>
            <div className="rounded-[24px] bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)]">
              <h3 className="font-semibold text-gray-900">Bangladesh Office</h3>
              <p>H-1, Level 2, Binimoy Complex, Dhaka-Mymensingh Highway, Tongi West, Gazipur</p>
            </div>
            <div className="rounded-[24px] bg-[linear-gradient(145deg,#101010_0%,#1d1d1d_100%)] p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <h3 className="font-semibold text-white">Contact</h3>
              <p className="mt-2 text-white/80">Info@gcrecruitmentltd.com</p>
              <p className="text-white/80">Support@gcrecruitmentltd.com</p>
              <p className="text-white/80">+387 62 012 295</p>
              <p className="text-white/80">+44 7493 478440</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} data-aos="fade-left" className="space-y-5 rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
          <div>
            <label htmlFor="inquiryType" className="mb-2 block font-medium text-gray-900">Inquiry Type *</label>
            <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3">
              <option value="">Select inquiry type...</option>
              <option value="Employer">I&apos;m an Employer</option>
              <option value="Worker">I&apos;m a Worker</option>
              <option value="Agency">I&apos;m an Agency</option>
            </select>
          </div>
          <div>
            <label htmlFor="fullName" className="mb-2 block font-medium text-gray-900">Full Name *</label>
            <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block font-medium text-gray-900">Email *</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block font-medium text-gray-900">Phone *</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block font-medium text-gray-900">Company / Organization</label>
            <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block font-medium text-gray-900">Subject *</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3">
              <option value="">Select a subject...</option>
              <option value="Recruitment Services">Recruitment Services</option>
              <option value="Job Inquiry">Job Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-medium text-gray-900">Message *</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full rounded-xl bg-gradient-to-r from-[#D60000] to-[#9B0000] px-6 py-4 font-semibold text-white shadow-[0_14px_35px_rgba(214,0,0,0.22)] transition hover:-translate-y-0.5 disabled:opacity-60">
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
