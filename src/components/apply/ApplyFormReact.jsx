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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center" data-aos="fade-down">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D60000]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D60000] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D60000]" />
            Quick Application
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-[#D60000] to-[#9B0000] bg-clip-text text-transparent">
              Ready to Start?
            </span>
          </h1>
          {/* <p className="mt-4 text-gray-600">Submit your application and let's explore opportunities together</p> */}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} data-aos="zoom-in" data-aos-delay="200" className="space-y-5 rounded-[32px] border-2 border-[#D60000] bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
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
    </section>
  )
}
