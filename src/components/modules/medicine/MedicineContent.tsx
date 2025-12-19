"use client";

import { Badge } from "@/components/ui/badge";
import { Card,  CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Pill, Shield, ShoppingCart, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { icon: Pill, title: "Wide Selection", description: "Access to thousands of medicines and healthcare products" },
    { icon: DollarSign, title: "Best Prices", description: "Competitive pricing with regular discounts and offers" },
    { icon: Truck, title: "Fast Delivery", description: "Quick and reliable delivery to your doorstep" },
    { icon: Shield, title: "Genuine Products", description: "100% authentic medicines from licensed pharmacies" },
    { icon: Clock, title: "24/7 Service", description: "Order anytime, anywhere with our online platform" },
    { icon: ShoppingCart, title: "Easy Ordering", description: "Simple and secure online ordering process" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const MedicineContent = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            {/* Hero */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <Badge className="mb-4 px-4 py-1 text-sm" variant="outline">
                    🚀 Coming Soon
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Online Medicine Store
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Order prescribed medicines online and get fast, safe delivery at your doorstep.
                </p>
            </motion.div>

            {/* Features */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            >
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div key={index} variants={fadeUp}>
                            <Card className="group relative h-full border border-gray-200 bg-white/90 backdrop-blur transition-all hover:-translate-y-2 hover:shadow-xl hover:border-gray-300">
                                <CardHeader className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 shadow">
                                        <Icon className="h-7 w-7 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default MedicineContent;
