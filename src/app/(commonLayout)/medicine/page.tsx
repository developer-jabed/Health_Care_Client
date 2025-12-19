"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Clock,
    DollarSign,
    Pill,
    Shield,
    ShoppingCart,
    Truck,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const dynamic = "force-static";

const features = [
    {
        icon: Pill,
        title: "Wide Selection",
        description: "Access to thousands of medicines and healthcare products",
    },
    {
        icon: DollarSign,
        title: "Best Prices",
        description: "Competitive pricing with regular discounts and offers",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Quick and reliable delivery to your doorstep",
    },
    {
        icon: Shield,
        title: "Genuine Products",
        description: "100% authentic medicines from licensed pharmacies",
    },
    {
        icon: Clock,
        title: "24/7 Service",
        description: "Order anytime, anywhere with our online platform",
    },
    {
        icon: ShoppingCart,
        title: "Easy Ordering",
        description: "Simple and secure online ordering process",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const MedicinePage = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-sky-100/40 to-emerald-100/40 dark:from-primary/20 dark:via-background dark:to-background" />
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl -z-10" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl -z-10" />

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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                        Online Medicine Store
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Order prescribed medicines online and get fast, safe delivery at
                        your doorstep.
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
                                <Card className="group relative h-full border border-primary/10 bg-white/70 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 dark:bg-background/60">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition">
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>
                                        <CardTitle className="text-xl">
                                            {feature.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {feature.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* How it works */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <Card className="mb-20 border-primary/20 bg-gradient-to-br from-primary/5 to-emerald-50 dark:to-background">
                        <CardContent className="p-10 text-center">
                            <h2 className="text-3xl font-bold mb-10">
                                How It Works
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Upload Prescription",
                                        desc: "Upload doctor’s prescription or browse medicines",
                                    },
                                    {
                                        step: "2",
                                        title: "Place Order",
                                        desc: "Add medicines to cart and checkout securely",
                                    },
                                    {
                                        step: "3",
                                        title: "Fast Delivery",
                                        desc: "Get medicines delivered to your doorstep",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="space-y-3"
                                    >
                                        <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                                            {item.step}
                                        </div>
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center"
                >
                    <Card className="inline-block bg-white/80 backdrop-blur-xl shadow-xl border-primary/20 dark:bg-background/70">
                        <CardContent className="p-10">
                            <h2 className="text-3xl font-bold mb-4">
                                Launching Very Soon 🚀
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                We’re building the most reliable online medicine ordering
                                experience for you.
                            </p>
                            <Link href="/">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-emerald-500 hover:opacity-90"
                                >
                                    Back to Home
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default MedicinePage;
