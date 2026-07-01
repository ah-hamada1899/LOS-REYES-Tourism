export default function NileOdysseys() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 mb-12 md:mb-0">
          <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest block mb-4">
            Nile Odysseys
          </span>
          <h2 className="text-headline-lg mb-8">Dahabiya: The Art of Slow Sailing</h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Experience the river of life as the aristocrats once did, reimagined for the modern connoisseur. Our private dahabiyas offer a tranquil sanctuary, blending bespoke Egyptian craftsmanship with ultra-modern amenities.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 group">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                sailing
              </span>
              <span className="text-label-lg text-underline-gold cursor-pointer">
                Bespoke Private Charters
              </span>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant_menu
              </span>
              <span className="text-label-lg text-underline-gold cursor-pointer">
                Farm-to-Table Deck Dining
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="pt-12">
            <img
              className="w-full aspect-[3/4] object-cover shadow-xl"
              alt="Luxurious dahabiya deck with Egyptian cotton pillows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1q-dwhbkeE5e_4DQFzvZ_EVHgwXGS8ozq74wxWpJ2yU2MaIDu3G6HilNx2R_ACD9xx999EAglVHuyAbuLjjiAx3fAidErlkUrFryghRRTAq06bMruoiIWbtVZdeVOFSyUfVD-_smpSxtulu3DQeR2M5doSOyuLF2hbEWy6l09YnL3mS763fPUOtZTL_OmNRWOy2H8c_Exy90gNoaw58vtarFbgLyKgXu2xzm78zG1Xsb6BaBQ85_lGBY1PF0VaoUumXWiEZgAsnV"
            />
          </div>
          <div className="pb-12">
            <img
              className="w-full aspect-[3/4] object-cover shadow-xl"
              alt="Modern suite interior on luxury Nile cruise"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR1zK8Ndyewpfb1pQiBk00hA6r52vx-PCrGtw46uAPcGYwdrGVTQLna3E4rrWxqcON30eQf44kAk0nXHnRJKbxYE2nuHZjtAxq09JI4WNvZ4K5-Pz8EnTb4vOHFylPXajwUPO6CxxtPNWP-NqUdUIPvuAbarth4zCWQ00tsm2vlJR5oum3D6HyYIFHtcz2MIo6CDw-Zt24yD-OWv4YJLjWbB1t7J_w7CRkSUd8coOirsoOdwXwoTmgLlVRDtuRQraPcDn6gaot8a-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}