"use client";

import { motion } from "framer-motion";
import { Star, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import cardioDoc from "../../../assets/images/doctor-cardiologist .jpg";
import neurolDoc from "../../../assets/images/doctor-neurologist.jpg";
import orthoDoc from "../../../assets/images/doctor-orthopedic.jpg";

const doctors = [
  { name: "Dr. Cameron Williamson", specialty: "Cardiologist", rating: 4.9, reviews: 23, image: cardioDoc },
  { name: "Dr. Leslie Alexander", specialty: "Neurologist", rating: 4.8, reviews: 45, image: neurolDoc },
  { name: "Dr. Robert Fox", specialty: "Orthopedic", rating: 4.9, reviews: 32, image: orthoDoc },
];

const DoctorCard = ({ doctor }: { doctor: (typeof doctors)[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="group relative"
    >
      {/* Glow Ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 blur-xl transition group-hover:opacity-40" />

      <Card className="relative overflow-hidden rounded-3xl border border-blue-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/80 backdrop-blur shadow-xl">
        {/* Header */}
        <CardHeader className="relative p-8 bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
          {/* Specialty Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/90 dark:bg-gray-900 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 shadow">
            <Stethoscope size={12} />
            {doctor.specialty}
          </div>

          {/* Doctor Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex justify-center"
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
            />
          </motion.div>
        </CardHeader>

        {/* Content */}
        <CardContent className="p-6 text-center">
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {doctor.name}
          </CardTitle>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-3 text-sm">
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              {doctor.rating}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              ({doctor.reviews} reviews)
            </span>
          </div>

          {/* Hover CTA */}
          <div className="mt-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 dark:bg-blue-400/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
              ✨ AI Recommended Specialist
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TopRatedDoctors = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-700/20 blur-3xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-700/20 blur-3xl rounded-full animate-pulse -z-10" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Our <span className="text-blue-600 dark:text-blue-400">Top Rated</span> Doctors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Hand-picked specialists trusted by thousands of patients and powered by AI recommendations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Link href="/consultation">
              View All Doctors →
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
