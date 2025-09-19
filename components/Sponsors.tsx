"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Image from "next/image";

type BenefitKey =
  | "Networking Session Access"
  | "Social Media Promotion"
  | "Website + Booklet Listing"
  | "Premier Recognition"
  | "Premium Exhibit/Table Space"
  | "Top Logo Placement";

interface Tier {
  name: string;
  color: string;
  borderColor: string;
  benefits: Record<BenefitKey, boolean>;
}

export function Sponsors() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tiers: Tier[] = [
    {
      name: "Steward",
      color: "from-[#CFB991] to-[#DDB945]",
      borderColor: "border-[#CFB991]",
      benefits: {
        "Networking Session Access": true,
        "Social Media Promotion": true,
        "Website + Booklet Listing": true,
        "Premier Recognition": true,
        "Premium Exhibit/Table Space": true,
        "Top Logo Placement": true,
      },
    },
    {
      name: "Cultivator",
      color: "from-[#555960] to-[#6F727B]",
      borderColor: "border-[#555960]",
      benefits: {
        "Networking Session Access": true,
        "Social Media Promotion": true,
        "Website + Booklet Listing": true,
        "Premier Recognition": true,
        "Premium Exhibit/Table Space": true,
        "Top Logo Placement": false,
      },
    },
    {
      name: "Pollinator",
      color: "from-[#555960] to-[#6F727B]",
      borderColor: "border-[#555960]",
      benefits: {
        "Networking Session Access": true,
        "Social Media Promotion": true,
        "Website + Booklet Listing": true,
        "Premier Recognition": false,
        "Premium Exhibit/Table Space": false,
        "Top Logo Placement": false,
      },
    },
  ];

  const benefits: BenefitKey[] = [
    "Networking Session Access",
    "Social Media Promotion",
    "Website + Booklet Listing",
    "Premier Recognition",
    "Premium Exhibit/Table Space",
    "Top Logo Placement",
  ];

  return (
    <section id="sponsors" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-10%" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-[#000000] mb-8">
            Sponsors
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl text-[#000000]/80 leading-relaxed"
            >
              Thank you to our generous sponsors for supporting our mission to
              advance digital agriculture. Your partnership helps us bring
              together students, researchers, and industry leaders to shape the
              future of this transformative field.
            </motion.p>
          </div>
        </motion.div>

        {/* Current Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <Image
                src="/sponsors/current_sponsors.jpeg"
                alt="Thank You to Our Current Sponsors"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-[#CFB991] via-[#DDB945] to-[#555960] rounded-full origin-left"></div>
        </motion.div>
      </div>
    </section>
  );
}
