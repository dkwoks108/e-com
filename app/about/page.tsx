import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Gabaya Legacy",
  description:
    "Learn about Gabaya Legacy's mission to bring conscious luxury to the world through premium bio-vegan leather handbags handcrafted in India.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAF8]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F5F0E8] to-[#EDE5D8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-3">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-6">
            Luxury Should Be Kind to the Earth
          </h1>
          <p className="text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed text-lg">
            At Gabaya Legacy, we believe that you shouldn&apos;t have to choose
            between luxury and sustainability. Our mission is to craft premium
            accessories that are as kind to the planet as they are beautiful.
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-6">
                Born in Jaipur, Made for the World
              </h2>
              <div className="space-y-4 text-[#5C5C5C] leading-relaxed">
                <p>
                  Gabaya Legacy was founded in 2025 in the heart of Jaipur,
                  Rajasthan — India&apos;s city of craft and culture. We set out
                  with a single purpose: to create luxury handbags that don&apos;t
                  cost the earth.
                </p>
                <p>
                  Our name &ldquo;Gabaya&rdquo; is rooted in the idea of pride and
                  purposeful living. Every bag we create is a testament to our
                  belief that fashion can be both exquisite and ethical.
                </p>
                <p>
                  We work with skilled artisans in Jaipur who bring decades of
                  craft expertise to each piece, ensuring every stitch, zipper,
                  and hardware reflects the highest standard of quality.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EDE5D8] to-[#DDD0BE] rounded-3xl p-12 flex flex-col gap-6">
              <div className="text-center">
                <span className="text-6xl">🏛️</span>
                <p className="mt-3 font-bold text-[#2C2C2C]">
                  Gabaya Legacy Fashion &amp; Lifestyle Pvt. Ltd.
                </p>
                <p className="text-sm text-[#5C5C5C] mt-1">
                  Incorporated September 2025
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Products", value: "6+" },
                  { label: "Reviews", value: "690+" },
                  { label: "Avg Rating", value: "4.7★" },
                  { label: "Since", value: "2025" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/60 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-[#2C2C2C]">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-wider text-[#7B9E87] font-semibold mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Every decision we make considers the environmental impact. From materials to packaging, we minimize our footprint.",
              },
              {
                icon: "💚",
                title: "Cruelty-Free",
                desc: "We are 100% vegan. No animals are harmed in the making of any Gabaya Legacy product — ever.",
              },
              {
                icon: "👐",
                title: "Ethical Craft",
                desc: "We partner with skilled artisans and ensure fair wages and safe working conditions at every stage.",
              },
              {
                icon: "⏳",
                title: "Timeless Design",
                desc: "We design for longevity, not trends. Our bags are made to be cherished and used for years.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-8 border border-[#E8E0D5] text-center"
              >
                <span className="text-5xl block mb-4">{val.icon}</span>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Vegan Leather Explainer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Our Material
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] mb-4">
              The Science of Bio-Vegan Leather
            </h2>
            <p className="text-[#5C5C5C] max-w-xl mx-auto">
              Our bio-vegan leather is a premium sustainable material that
              matches the look, feel, and durability of animal leather — without
              any of the ethical or environmental costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sustainable Sourcing",
                desc: "Our materials are sourced from eco-certified suppliers who use low-impact production processes.",
              },
              {
                step: "02",
                title: "Premium Processing",
                desc: "The bio-vegan leather undergoes multiple quality checks to ensure it meets our premium standards for softness, durability, and appearance.",
              },
              {
                step: "03",
                title: "Handcrafted in Jaipur",
                desc: "Skilled artisans cut, stitch, and assemble each bag by hand, ensuring consistent quality and meticulous attention to detail.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-5">
                <div className="shrink-0">
                  <span className="text-4xl font-black text-[#E8E0D5] leading-none">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2C2C2C] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5C5C5C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.4em] uppercase text-[#7B9E87] font-semibold mb-2">
              Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
              The Visionaries Behind Gabaya
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Pulkit Kumawat",
                role: "Co-Founder & Director",
                initial: "PK",
              },
              {
                name: "Anju Bala",
                role: "Co-Founder & Director",
                initial: "AB",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 border border-[#E8E0D5] text-center w-64"
              >
                <div className="w-20 h-20 rounded-full bg-[#7B9E87] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {member.initial}
                </div>
                <h3 className="text-base font-bold text-[#2C2C2C]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#7B9E87] mt-1">{member.role}</p>
                <p className="text-xs text-[#5C5C5C] mt-2">
                  Jaipur, Rajasthan
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Join the Conscious Luxury Movement
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Discover our collection of premium bio-vegan leather bags and
            become part of a community that believes luxury and sustainability
            go hand in hand.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-[#7B9E87] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-white hover:text-[#2C2C2C] transition-colors"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
