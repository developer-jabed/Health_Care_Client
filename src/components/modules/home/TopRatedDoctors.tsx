"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import cardioDoc from "../../../assets/images/doctor-cardiologist .jpg";
import neurolDoc from "../../../assets/images/doctor-neurologist.jpg";
import orthoDoc from "../../../assets/images/doctor-orthopedic.jpg";

const doctors = [
  { name: "Dr. Cameron Williamson", specialty: "Cardiologist", rating: 4.9, reviews: 23, image: cardioDoc },
  { name: "Dr. Leslie Alexander", specialty: "Neurologist", rating: 4.8, reviews: 45, image: neurolDoc },
  { name: "Dr. Robert Fox", specialty: "Orthopedic", rating: 4.9, reviews: 32, image: orthoDoc },
];

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
      <Card className="text-center overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-700 shadow-lg hover:shadow-2xl bg-white/90 dark:bg-gray-800/70 backdrop-blur transition-all duration-300">
        <CardHeader className="relative bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 p-6">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 dark:to-gray-900/70"></div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative z-10">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={110}
              height={110}
              className="rounded-full border-4 border-white dark:border-gray-700 shadow-lg mx-auto object-cover"
            />
          </motion.div>
        </CardHeader>

        <CardContent className="p-6">
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">{doctor.name}</CardTitle>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{doctor.specialty}</p>

          <div className="flex items-center justify-center my-3 text-sm">
            <Star className="text-yellow-400 fill-current" size={18} />
            <span className="ml-2 font-semibold text-gray-800 dark:text-gray-100">{doctor.rating}</span>
            <span className="ml-1 text-gray-500 dark:text-gray-400">({doctor.reviews} reviews)</span>
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 justify-center p-4 pt-0">
          <Button variant="outline" className="border-blue-300 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 transition-all duration-300">
            View Profile
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white dark:from-blue-600 dark:to-indigo-600 shadow-md hover:shadow-lg transition-all duration-300">
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const TopRatedDoctors = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 overflow-hidden transition-colors duration-500">
      {/* Subtle floating gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Our <span className="text-blue-600 dark:text-blue-400">Top Rated</span> Doctors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Access highly qualified medical specialists ready to provide world-class healthcare tailored to your needs.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </motion.div>

        <motion.div className="text-center mt-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Doctors
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
