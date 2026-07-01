// app/page.tsx (or wherever your component is)
import { MoveRight } from 'lucide-react';
import { sendEmail } from '../../actions/send-email'; // Adjust the path as necessary
import SubmitButton from '../../components/Form/SubmitButton'; // Adjust the path as necessary
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <>
    <Navbar/>
      <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 shadow-sm rounded-lg border border-outline-variant/20">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
          Design Your Journey
        </h2>
        <form className="space-y-8" action={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label
                htmlFor="name"
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                placeholder="Full Name"
                type="text"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                placeholder="your@email.com"
                type="email"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="destination"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
            >
              Destination Interests
            </label>
            <select
              id="destination"
              name="destination"
              className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors"
            >
              <option value="The Giza Plateau &amp; Saqqara">
                The Giza Plateau &amp; Saqqara
              </option>
              <option value="Luxor &amp; The Valley of the Kings">
                Luxor &amp; The Valley of the Kings
              </option>
              <option value="Aswan &amp; Philae Temple">
                Aswan &amp; Philae Temple
              </option>
              <option value="Red Sea Riviera Diving">
                Red Sea Riviera Diving
              </option>
              <option value="Nile River Cruising">
                Nile River Cruising
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <label
                htmlFor="travelDates"
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Travel Dates
              </label>
              <input
                id="travelDates"
                name="travelDates"
                className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                placeholder="Approximate Month/Year"
                type="text"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="partySize"
                className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Party Size
              </label>
              <input
                id="partySize"
                name="partySize"
                className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant"
                min="1"
                placeholder="1"
                type="number"
              />
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="inquiry"
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2 block"
            >
              Inquiry Details
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              className="w-full bg-transparent border-0 border-b border-secondary text-on-surface py-2 px-0 focus:ring-0 focus:border-primary-container transition-colors placeholder:text-outline-variant resize-none"
              placeholder="Tell us about your dream Egyptian experience..."
              rows={4}
              required
            ></textarea>
          </div>

          <SubmitButton />
        </form>
      </div>
    </>
  );
}