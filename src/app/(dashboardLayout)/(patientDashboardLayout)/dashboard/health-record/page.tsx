
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileText, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// Dynamic SSR - authenticated page
// export const dynamic = "force-dynamic";
export const dynamic = "force-dynamic"; // ✅ correct


const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HealthRecordsPage() {
  const upcomingFeatures = [
    {
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      title: "Medical Reports",
      desc: "Store and access all your lab reports, imaging results, and medical documents in one place.",
    },
    {
      icon: <Heart className="h-5 w-5 text-red-600" />,
      title: "Vital Signs",
      desc: "Track your blood pressure, heart rate, temperature, and other vital signs over time.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-green-600" />,
      title: "Health Trends",
      desc: "Visualize your health data with charts and graphs to monitor your progress and trends.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="space-y-2 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold tracking-tight">Health Records</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
          View and manage your medical history and health data securely.
        </p>
      </motion.div>

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="border border-border bg-background/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full flex items-center justify-center">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Health Records Feature Coming Soon
              </h3>
              <p className="text-muted-foreground">
                We&apos;re working on bringing you comprehensive health record
                management. Stay tuned for updates!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Upcoming Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {upcomingFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="transition-all"
          >
            <Card className="border border-border bg-background/70 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
