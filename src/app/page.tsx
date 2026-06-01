"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="subtle-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav" className={nunito.variable}>
        <NavbarLayoutFloatingInline
          brandName="GreenBloom Dispensary"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About", id: "#about" },
            { name: "Products", id: "#products" },
            { name: "Reviews", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>
      <div id="home" data-section="home" className={nunito.variable}>
        <HeroCarouselLogo
          logoText="GreenBloom Dispensary"
          description="Your trusted source for premium cannabis products. Explore a world of wellness and quality, delivered right to your door."
          buttons={[
            { text: "Explore Our Menu", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          slides={[
            { imageSrc: "http://img.b2bpic.net/free-photo/minimal-floral-arrangement-red-surface_58702-17361.jpg", imageAlt: "Close-up of premium cannabis buds" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-cbd-treatment-still-life_23-2151160228.jpg", imageAlt: "Variety of cannabis products on display" },
            { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-holding-cream-container_23-2149343954.jpg", imageAlt: "Happy customer interacting with cannabis products" },
            { imageSrc: "http://img.b2bpic.net/free-photo/marijuana-leaves-cannabis-beautiful-background_1150-7603.jpg", imageAlt: "Indoor cannabis cultivation facility" },
            { imageSrc: "http://img.b2bpic.net/free-photo/beauty-salon-with-cosmetology-equipment-anime-style_23-2151501037.jpg", imageAlt: "Luxury cannabis dispensary interior" },
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-decorations-with-lights_23-2148339562.jpg", imageAlt: "Abstract background of cannabis leaves" }
          ]}
          autoplayDelay={4000}
        />
      </div>
      <div id="about" data-section="about" className={nunito.variable}>
        <MediaAbout
          title="Our Commitment to Quality"
          description="At GreenBloom Dispensary, we are dedicated to providing the finest selection of cannabis products. We source from reputable growers who prioritize sustainable and ethical practices, ensuring every product meets our stringent quality standards. Experience the difference of true craftsmanship and passion."
          tag="About Us"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/doctor-patient-ophthalmologist-s-office_23-2150917700.jpg"
          imageAlt="Friendly staff helping a customer in a modern cannabis store"
        />
      </div>
      <div id="features" data-section="features" className={nunito.variable}>
        <FeatureCardTwentySeven
          title="Explore Our Diverse Offerings"
          description="From aromatic flowers to delicious edibles and potent concentrates, GreenBloom Dispensary offers a carefully curated selection to suit every preference and need."
          tag="Our Products"
          features={[
            { id: "flower", title: "Premium Flower Strains", descriptions: ["Discover a wide range of Indica, Sativa, and Hybrid strains.", "Each bud is hand-selected for optimal potency and flavor.", "Sustainably grown and rigorously lab-tested for purity."], imageSrc: "http://img.b2bpic.net/free-photo/top-view-organic-fresh-broccoli-supermarket_23-2148209733.jpg", imageAlt: "Various cannabis strains in glass jars" },
            { id: "edibles", title: "Delicious & Discreet Edibles", descriptions: ["Indulge in our selection of gourmet chocolates, gummies, and baked goods.", "Perfectly dosed for a consistent and enjoyable experience.", "A tasty alternative for those who prefer not to smoke."], imageSrc: "http://img.b2bpic.net/free-photo/pile-green-menthol-candies-white-plate_114579-50589.jpg", imageAlt: "Assortment of cannabis edibles like gummies and chocolates" },
            { id: "concentrates", title: "Potent Concentrates", descriptions: ["Experience the intense effects of our high-quality shatters, waxes, and oils.", "Ideal for experienced users seeking powerful relief and rich flavor profiles.", "Expertly extracted to preserve cannabinoids and terpenes."], imageSrc: "http://img.b2bpic.net/free-photo/glass-dry-chrysanthemum-flowers-stone-surface_114579-84355.jpg", imageAlt: "Glass jars containing cannabis concentrates" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="products" data-section="products" className={nunito.variable}>
        <ProductCardTwo
          title="Featured Cannabis Products"
          description="Explore our top-rated selection designed to enhance your well-being and elevate your experience."
          tag="Shop Now"
          products={[
            { id: "product-1", brand: "Flora Farms", name: "Granddaddy Purple (Indica)", price: "$50.00 / 3.5g", rating: 5, reviewCount: "125 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/cannabis-brownies-cannabis-leaves-put-white-floor_1150-28189.jpg", imageAlt: "Granddaddy Purple Indica strain" },
            { id: "product-2", brand: "Zenith Botanicals", name: "Sour Diesel (Sativa)", price: "$48.00 / 3.5g", rating: 4, reviewCount: "98 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/organic-cbd-oil-dropper-arrangement_23-2149013591.jpg", imageAlt: "Sour Diesel Sativa strain" },
            { id: "product-3", brand: "Leaf & Bloom", name: "Blue Dream (Hybrid)", price: "$52.00 / 3.5g", rating: 5, reviewCount: "150 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/organic-dried-flowers-white-bowl_114579-70373.jpg", imageAlt: "Blue Dream Hybrid strain" },
            { id: "product-4", brand: "Relief & Calm", name: "CBD Sleep Tincture", price: "$65.00 / 30ml", rating: 5, reviewCount: "80 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/green-marijuana_1150-12313.jpg", imageAlt: "CBD Sleep Tincture bottle" },
            { id: "product-5", brand: "Ganja Goodies", name: "Mixed Berry Gummies", price: "$25.00 / 10pc", rating: 4, reviewCount: "110 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/still-life-colorful-gummy-bears_23-2149870805.jpg", imageAlt: "Mixed Berry Cannabis Gummies" },
            { id: "product-6", brand: "Ready Rollers", name: "Classic Pre-Roll Pack", price: "$35.00 / 5pc", rating: 4, reviewCount: "70 Reviews", imageSrc: "http://img.b2bpic.net/free-photo/joss-stick-background-with-place-text-banner_460848-14685.jpg", imageAlt: "Pack of Classic Cannabis Pre-Rolls" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="metrics" data-section="metrics" className={nunito.variable}>
        <MetricCardEleven
          title="Why Choose GreenBloom?"
          description="We are dedicated to providing an unparalleled cannabis experience built on trust, quality, and community."
          tag="Our Values"
          metrics={[
            { id: "metric-1", value: "10+", title: "Years of Experience", description: "Serving our community with expert knowledge and premium products.", imageSrc: "http://img.b2bpic.net/free-photo/green-plant-leaf-texture-background_1150-45064.jpg", imageAlt: "Cannabis leaf background" },
            { id: "metric-2", value: "99%", title: "Customer Satisfaction", description: "Our customers love our products and exceptional service.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-cbd-cream-pain_23-2150830175.jpg", imageAlt: "Happy customers" },
            { id: "metric-3", value: "Fast & Discreet", title: "Delivery Service", description: "Enjoy quick, reliable, and discreet delivery right to your doorstep.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-talking-phone_23-2148767178.jpg", imageAlt: "Delivery truck in a city" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="testimonials" data-section="testimonials" className={nunito.variable}>
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from the GreenBloom community about their experiences with our products and service."
          tag="Testimonials"
          testimonials={[
            { id: "1", name: "Sarah J.", role: "Wellness Advocate", company: "Local Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-european-woman-green-jacket-touching-her-hair-blur-background-photo-fashionable-girl-with-beautiful-brown-hair-smiling-camera_291650-2183.jpg", imageAlt: "smiling woman enjoying cannabis product" },
            { id: "2", name: "Michael T.", role: "Cannabis Enthusiast", company: "Tech Innovator", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-man-posing_23-2150171293.jpg", imageAlt: "man looking confidently at camera" },
            { id: "3", name: "Emily R.", role: "Creative Professional", company: "Artist Collective", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-girl-posing-studio_176474-67441.jpg", imageAlt: "young woman smiling urban background" },
            { id: "4", name: "David K.", role: "Medical Patient", company: "Health Seeker", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/age-difference-female-friends-meeting-up-yoga-outdoors_23-2149891994.jpg", imageAlt: "person in natural setting relaxing" },
            { id: "5", name: "Linda & Tom B.", role: "Retirees", company: "Active Seniors", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-couple-having-fun-christmas_1187-689.jpg", imageAlt: "senior couple smiling together happy" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq" className={nunito.variable}>
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, services, and regulations."
          tag="Support"
          faqs={[
            { id: "1", title: "What are your delivery options?", content: "We offer discreet and fast delivery to all legal addresses within our service area. You can choose from standard or express delivery at checkout." },
            { id: "2", title: "Are your products lab-tested?", content: "Absolutely. All GreenBloom products undergo rigorous third-party lab testing to ensure purity, potency, and absence of harmful contaminants. Certificates of analysis are available upon request." },
            { id: "3", title: "What payment methods do you accept?", content: "We accept various secure payment methods, including major credit/debit cards and secure online payment platforms. Specific options will be displayed at checkout." },
            { id: "4", title: "Do I need a medical card to purchase?", content: "Depending on local regulations, a medical card may or may not be required. Please check your local laws or contact us for specific requirements in your region." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/african-american-freelancer-solving-daily-tasks-with-music-headset_482257-120739.jpg"
          imageAlt="Diverse group of people asking questions"
          mediaAnimation="slide-up"
          mediaPosition="right"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact" className={nunito.variable}>
        <ContactSplitForm
          title="Get in Touch with GreenBloom"
          description="Have a question or need assistance? Our knowledgeable team is here to help. Fill out the form below or reach out directly."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Your Message", rows: 5, required: true }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-delivery-man-holding-net_23-2148773385.jpg"
          imageAlt="Modern cannabis dispensary exterior at night"
          mediaAnimation="opacity"
          mediaPosition="left"
          buttonText="Send Message"
        />
      </div>
      <div id="footer" data-section="footer" className={nunito.variable}>
        <FooterBaseCard
          logoText="GreenBloom Dispensary"
          columns={[
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Our Mission", href: "#about" }] },
            { title: "Products", items: [{ label: "Flower", href: "#products" }, { label: "Edibles", href: "#products" }, { label: "Concentrates", href: "#products" }] },
            { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact Us", href: "#contact" }] }
          ]}
          copyrightText="© 2024 GreenBloom Dispensary | All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
