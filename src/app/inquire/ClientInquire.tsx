'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { sendBookingEmail } from '../../actions/sendBooingEmails'

export default function ClientInquire() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [bookingId, setBookingId] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    arrivalDate: '',
    departureDate: '',
    adults: '1',
    childrenUnder2: '0',
    childrenUnder10: '0',
    details: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const result = await sendBookingEmail(formData)

      if (result.success && result.bookingId) {
        setBookingId(result.bookingId)
        setSubmitStatus('success')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          destination: '',
          arrivalDate: '',
          departureDate: '',
          adults: '1',
          childrenUnder2: '0',
          childrenUnder10: '0',
          details: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Failed to send booking request')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success message component
  if (submitStatus === 'success') {
    return (
      <main>
        <Navbar />
        <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
          <div className="max-w-2xl mx-auto text-center bg-surface-container-low p-12 rounded-lg border border-primary-container/30">
            <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl text-primary-container">
                check_circle
              </span>
            </div>
            <h2 className="text-headline-lg text-primary mb-4">Thank You!</h2>
            <p className="text-body-lg text-on-surface-variant mb-4">
              Your journey request has been received.
            </p>
            <div className="bg-surface p-4 rounded-lg border border-outline-variant/30 mb-6">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                Booking Reference
              </p>
              <p className="text-headline-md text-primary font-bold">{bookingId}</p>
            </div>
            <p className="text-body-md text-on-surface-variant mb-6">
              A confirmation email has been sent to your inbox with all the details.
              Our team will contact you within 24 hours to craft your bespoke journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setSubmitStatus('idle')
                  setBookingId('')
                }}
                className="bg-primary-container text-on-primary-container px-8 py-3 font-label-lg text-label-lg uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Start New Inquiry
              </button>
              <a
                href="/"
                className="bg-surface border border-primary text-primary px-8 py-3 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Error message
  if (submitStatus === 'error') {
    return (
      <main>
        <Navbar />
        <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
          <div className="max-w-2xl mx-auto text-center bg-surface-container-low p-12 rounded-lg border border-error-container/30">
            <div className="w-20 h-20 bg-error-container/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-5xl text-error">
                error
              </span>
            </div>
            <h2 className="text-headline-lg text-error mb-4">Something Went Wrong</h2>
            <p className="text-body-lg text-on-surface-variant mb-4">
              {errorMessage || "We couldn't process your request. Please try again or contact us directly."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setSubmitStatus('idle')
                  setErrorMessage('')
                }}
                className="bg-primary-container text-on-primary-container px-8 py-3 font-label-lg text-label-lg uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Try Again
              </button>
              <a
                href="/"
                className="bg-surface border border-primary text-primary px-8 py-3 font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-colors"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-center overflow-hidden pt-16">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Giza pyramids at sunset"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP1Hqum1vXLEeRjuA0tqwAZ-sS0qIL1AiwzTWswj8_4RjxY87PxzBhnV2VKq0ea5uqYC7UiFjbyIDqiIWq8jMvHnsBOtg-OQ1Uam1i7gjj-jqavibLHJGPM0XL_nvh1qEqlTRfZqBX6QcEoqquk0vf3-jcro-WeCZSM87MRbEi8dIP2y3bb_9Hi-yb2Q6nOxhBaWGpzPj7Nt6bwhCn7FTTqBc0O2tXWG8HH5x0viN9AGlWxjvXTCNZuQ9gOk2CRB67Zb5IdQo54EoR"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
            {t('inquire.title')}
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('inquire.subtitle')}
          </p>
        </div>
      </section>

      {/* Booking & Contact Content */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
        <div className="absolute inset-0 pattern-overlay -z-10 pointer-events-none"></div>
        
        {/* Left Column: Form */}
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 shadow-sm rounded-lg border border-outline-variant/20">
          <h2 className="text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
            {t('inquire.form.title')}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.name')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                  placeholder={t('inquire.form.name')}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.email')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                  placeholder="your@email.com"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                {t('inquire.form.destination')}
              </label>
              <div className="relative">
                <select
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors appearance-none cursor-pointer"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option disabled value="">{t('inquire.form.destination.placeholder')}</option>
                  <option value="cairo">{t('inquire.form.destination.cairo')}</option>
                  <option value="luxor">{t('inquire.form.destination.luxor')}</option>
                  <option value="aswan">{t('inquire.form.destination.aswan')}</option>
                  <option value="redsea">{t('inquire.form.destination.redsea')}</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-2 pointer-events-none text-primary">
                  expand_more
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.arrival')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors"
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.departure')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors"
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.adults')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                  min="1"
                  placeholder="1"
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.children.under2')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                  min="0"
                  placeholder="0"
                  type="number"
                  name="childrenUnder2"
                  value={formData.childrenUnder2}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                  {t('inquire.form.children.under10')}
                </label>
                <input
                  className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                  min="0"
                  placeholder="0"
                  type="number"
                  name="childrenUnder10"
                  value={formData.childrenUnder10}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="relative">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                {t('inquire.form.passport')}
              </label>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-lg p-6 text-center hover:border-primary-container transition-colors group cursor-pointer bg-surface-container-highest/30">
                <input className="hidden" id="passport-upload" type="file" disabled={isSubmitting} />
                <label className="cursor-pointer" htmlFor="passport-upload">
                  <span className="material-symbols-outlined text-primary-container text-headline-md mb-2 block">
                    upload_file
                  </span>
                  <p className="font-label-sm text-on-surface-variant">
                    {t('inquire.form.passport.drag')} <span className="text-primary font-bold">browse</span>
                  </p>
                  <p className="text-[10px] text-outline-variant mt-1 uppercase tracking-widest">
                    {t('inquire.form.passport.secure')}
                  </p>
                </label>
              </div>
            </div>

            <div className="relative">
              <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block">
                {t('inquire.form.details')}
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant resize-none"
                placeholder={t('inquire.form.details.placeholder')}
                rows={4}
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-4 font-label-lg text-label-lg tracking-[0.2em] uppercase hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  {t('inquire.form.submit')}
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Expert & Map */}
        <div className="lg:col-span-5 space-y-gutter">
          {/* Concierge Section */}
          <div className="bg-surface-container-highest p-8 border border-outline-variant/30 relative overflow-hidden">
            <div className="flex items-center gap-6 mb-6">
              {/* <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-container shadow-md">
                <img
                  className="w-full h-full object-cover"
                  alt="Travel concierge Khalid"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCloApWAGOXjIBKD8gvfq51YOZvAcoIsuxVJe-EUebzSJe9zJbfKCC62uFvnOs3kEcSEHiaJzLQPQm5Hq1dX1CyLCg528F4ejkMwwELT2ouT3YOLtYEyh_oqHj7p19-z2vk-3qtD0hJAeylzzD0pgXnzWvZv8bTTj3hlHQ8IcDWAqkHK38CeCNJJZ1c7k0iteZsQ7RYwy2THExIBvlBC9LjaGQuK_cfcz9pwK72R4xZllcJgbh5Pd0zg2RXWsqsNm8FavD3TavRrZ0e"
                />
              </div> */}
              <div>
                <h3 className="text-headline-md text-primary">{t('inquire.concierge.title')}</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {t('inquire.concierge.role')}
                </p>
              </div>
            </div>
            <p className="text-body-md text-on-surface mb-6 italic">
              {t('inquire.concierge.quote')}
            </p>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                stars
              </span>
              <span className="text-label-lg">{t('inquire.concierge.expert')}</span>
            </div>
          </div>

          {/* Egypt Map/Overview */}
          <div className="bg-surface-container p-8 border border-outline-variant/30">
            <h3 className="text-label-lg text-on-surface uppercase tracking-widest mb-6">
              {t('inquire.trust.title')}
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-primary-container/10 p-3 rounded-lg">
                  <span className="text-primary-container material-symbols-outlined text-headline-md">
                    shield
                  </span>
                </div>
                <div>
                  <h4 className="text-label-lg text-on-surface font-bold mb-1">
                    {t('inquire.trust.security')}
                  </h4>
                  <p className="text-body-md text-on-surface-variant">
                    {t('inquire.trust.security.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-primary-container/10 p-3 rounded-lg">
                  <span className="text-primary-container material-symbols-outlined text-headline-md">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="text-label-lg text-on-surface font-bold mb-1">
                    {t('inquire.trust.excellence')}
                  </h4>
                  <p className="text-body-md text-on-surface-variant">
                    {t('inquire.trust.excellence.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-primary-container/10 p-3 rounded-lg">
                  <span className="text-primary-container material-symbols-outlined text-headline-md">
                    handshake
                  </span>
                </div>
                <div>
                  <h4 className="text-label-lg text-on-surface font-bold mb-1">
                    {t('inquire.trust.hospitality')}
                  </h4>
                  <p className="text-body-md text-on-surface-variant">
                    {t('inquire.trust.hospitality.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Final CTA */}
      <section className="bg-primary text-on-primary py-24 text-center px-margin-mobile">
        <h2 className="text-display-lg-mobile md:text-headline-lg mb-6">
          {t('inquire.newsletter.title')}
        </h2>
        <p className="text-body-lg text-on-primary/80 max-w-xl mx-auto mb-10">
          {t('inquire.newsletter.desc')}
        </p>
        <div className="max-w-md mx-auto flex">
          <input
            className="flex-1 bg-on-primary/10 border-on-primary/30 text-on-primary placeholder:text-on-primary/50 focus:ring-0 focus:border-primary-container px-6"
            placeholder={t('inquire.newsletter.placeholder')}
            type="email"
          />
          <button className="bg-primary-container text-on-primary-container px-8 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-white transition-colors">
            {t('inquire.newsletter.button')}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}