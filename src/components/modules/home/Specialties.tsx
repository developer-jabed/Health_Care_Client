"use client";

import { motion } from "framer-motion";
import { HeartPulse, Brain, Bone, Baby } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const specialists = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    bgColor: "bg-red-100",
    darkBgColor: "dark:bg-red-800",
    iconColor: "text-red-500",
    darkIconColor: "dark:text-red-300",
  },
  {
    name: "Neurology",
    icon: Brain,
    bgColor: "bg-blue-100",
    darkBgColor: "dark:bg-blue-800",
    iconColor: "text-blue-500",
    darkIconColor: "dark:text-blue-300",
  },
  {
    name: "Orthopedic",
    icon: Bone,
    bgColor: "bg-pink-100",
    darkBgColor: "dark:bg-pink-800",
    iconColor: "text-pink-500",
    darkIconColor: "dark:text-pink-300",
  },
  {
    name: "Pediatric",
    icon: Baby,
    bgColor: "bg-green-100",
    darkBgColor: "dark:bg-green-800",
    iconColor: "text-green-500",
    darkIconColor: "dark:text-green-300",
  },
];

const Specialities = () => {
  return (
    <section className="relative py-24 mt-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-500">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 dark:bg-pink-700/20 blur-3xl rounded-full -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Our <span className="text-blue-600 dark:text-blue-400">Specialists</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Access highly qualified medical experts across all major specialties.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 hover:underline transition-colors"
          >
            View All
          </motion.a>
        </motion.div>

        {/* Specialist Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {specialists.map((specialist) => (
            <motion.div
              key={specialist.name}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className={cn(
                  "text-center group rounded-2xl border border-blue-100 dark:border-gray-700 bg-white/90 dark:bg-gray-800/70 backdrop-blur transition-all duration-300 hover:shadow-2xl cursor-pointer"
                )}
              >
                <CardContent className="p-8">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                      specialist.bgColor,
                      specialist.darkBgColor
                    )}
                  >
                    <specialist.icon
                      className={cn(
                        "transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                        specialist.iconColor,
                        specialist.darkIconColor
                      )}
                      size={40}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {specialist.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specialities;
