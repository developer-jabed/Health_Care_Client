"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import samplePhoto from "../../../assets/images/hero-doctor.jpg";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Patient",
    image: samplePhoto,
    quote:
      "The care and professionalism I received were outstanding. The doctors were knowledgeable and the staff was incredibly supportive throughout my treatment.",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    role: "Patient",
    image: samplePhoto,
    quote:
      "A seamless experience from booking an appointment to the consultation. The use of technology for prescriptions and follow-ups is very convenient.",
    rating: 5,
  },
  {
    name: "Wade Warren",
    role: "Patient",
    image: samplePhoto,
    quote:
      "I highly recommend their services. The specialists are top-notch, and they truly focus on preventive care which has greatly improved my health.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-500">
      {/* Soft glowing orbs for subtle background depth */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 dark:bg-pink-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We are committed to providing you with the best medical and
            healthcare services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="relative bg-white/80 dark:bg-gray-800/70 backdrop-blur border border-blue-100 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 relative">
                  <Quote
                    className="absolute top-4 left-4 text-blue-400 dark:text-blue-500 opacity-30"
                    size={64}
                  />
                  <p className="text-gray-700 dark:text-gray-200 mb-8 relative z-10 leading-relaxed italic">
                    “{testimonial.quote}”
                  </p>

                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-blue-100 dark:border-gray-700 shadow-md"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-current"
                            size={16}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
