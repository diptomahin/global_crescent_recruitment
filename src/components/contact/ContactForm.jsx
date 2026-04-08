'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: '', // New field
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success alert
        await Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: data.message,
          confirmButtonColor: '#D60000',
          confirmButtonText: 'Great!',
          animation: true,
        });

        // Reset form
        setFormData({
          inquiryType: '',
          fullName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        // Show error alert
        await Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: data.error || 'Failed to send message. Please try again.',
          confirmButtonColor: '#D60000',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Show error alert
      await Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Failed to connect to the server. Please try again later.',
        confirmButtonColor: '#D60000',
        confirmButtonText: 'Close',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">China Office</h3>
                  <p className="text-gray-600">22F, Building B, World Trade Plaza, No. 9, Fuhong Road, Funan Community, Futian Subdistrict, Shenzhen City, China</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Bangladesh Office</h3>
                  <p className="text-gray-600">H-1, Level 2, Binimoy Complex, Dhaka- Mymensingh Highway, Auch Para, Nishat Nagar- 1711, Tongi West, Gazipur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">Email</h3>
                  <p className="text-[#2B2B2B]">Info@gcrecruitmentltd.com</p>
                  <p className="text-[#2B2B2B]">Support@gcrecruitmentltd.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">Phone</h3>
                  <p className="text-[#2B2B2B]">+387 62 012 295</p>
                  <p className="text-[#2B2B2B]">+44 7493 478440</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕐</span>
                <div>
                  <h3 className="font-bold text-lg text-[#0A0A0A]">Business Hours</h3>
                  <p className="text-[#2B2B2B]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#2B2B2B]">Weekend: Available for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border-2 border-[#D60000] space-y-6">
              <div>
                <label className="block text-[#0A0A0A] font-semibold mb-2">Inquiry Type *</label>
                <select 
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition bg-white disabled:bg-gray-100"
                >
                  <option value="">Select inquiry type...</option>
                  <option value="Employer">I'm an Employer/Company</option>
                  <option value="Worker">I'm a Job Seeker/Worker</option>
                  <option value="Agency">I'm a Recruitment Agency</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0A0A0A] font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition disabled:bg-gray-100"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0A0A0A] font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-[#0A0A0A] font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0A0A0A] font-semibold mb-2">
                  {formData.inquiryType === 'Worker' ? 'Current Employer or Organization (Optional)' : 'Company *'}
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder={
                    formData.inquiryType === 'Worker'
                      ? 'Your current employer or organization'
                      : 'Your company name'
                  }
                  value={formData.company}
                  onChange={handleChange}
                  required={formData.inquiryType !== 'Worker'}
                  disabled={isLoading}
                  className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-[#0A0A0A] font-semibold mb-2">Subject *</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition bg-white disabled:bg-gray-100"
                >
                  <option value="">Select a subject...</option>
                  <option value="Recruitment Services">Recruitment Services</option>
                  <option value="Job Inquiry">Job Inquiry</option>
                  <option value="Partnership">Partnership</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0A0A0A] font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="text-black w-full px-4 py-3 border-2 border-[#C0C0C0] rounded-lg focus:outline-none focus:border-[#D60000] transition resize-none disabled:bg-gray-100"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#D60000] to-[#9B0000] hover:from-[#9B0000] hover:to-[#6B0000] text-white font-bold py-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Sending... ⏳' : 'Send Message ✉️'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
