"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Video,
  CreditCard,
  HeartPulse,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { icon: Search, title: "Search Doctor", description: "Find your doctor easily with a minimum of effort." },
  { icon: ClipboardList, title: "Check Doctor Profile", description: "Get to know your doctor better." },
  { icon: CalendarCheck, title: "Schedule Appointment", description: "Choose the time and date that suits you." },
  { icon: ShieldCheck, title: "Get Your Solution", description: "Our doctors are here to help you." },
  { icon: FileText, title: "Electronic Prescription", description: "Get your prescription instantly." },
  { icon: Video, title: "Instant Video Consultation", description: "Consult with your doctor from anywhere." },
  { icon: CreditCard, title: "Easy Payment Options", description: "Pay with ease using various methods." },
  { icon: HeartPulse, title: "Health Recovery", description: "Start your journey to better health." },
];

const bgColors = [
  "bg-blue-50 dark:bg-gray-800/70",
  "bg-pink-50 dark:bg-pink-900/50",
  "bg-green-50 dark:bg-green-900/50",
  "bg-yellow-50 dark:bg-yellow-900/50",
  "bg-indigo-50 dark:bg-indigo-900/50",
  "bg-sky-50 dark:bg-sky-900/50",
  "bg-rose-50 dark:bg-rose-900/50",
  "bg-emerald-50 dark:bg-emerald-900/50",
];

const iconColors = [
  "text-blue-500",
  "text-pink-500",
  "text-green-500",
  "text-yellow-500",
  "text-indigo-500",
  "text-sky-500",
  "text-rose-500",
  "text-emerald-500",
];

const StepCard = ({ icon: Icon, title, description, index }: { icon: React.ElementType; title: string; description: string; index: number }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.03 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
      <Card className={`${bgColors[index % bgColors.length]} rounded-xl border border-blue-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden`}>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }} className={`p-4 rounded-full bg-white dark:bg-gray-900 shadow-md ${iconColors[index % iconColors.length]}`}>
              <Icon size={26} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 leading-snug">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Steps = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-500">
      {/* Soft animated background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200/30 dark:bg-pink-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Easy Steps to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Get Your Solution
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We provide advanced technologies and high-quality facilities to make your healthcare experience seamless.
          </p>
        </motion.div>

        {/* Step Cards Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
