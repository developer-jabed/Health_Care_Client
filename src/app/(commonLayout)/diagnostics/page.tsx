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
    Activity,
    Bone,
    Brain,
    FileText,
    Heart,
    Microscope,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const dynamic = "force-static";

const services = [
    {
        icon: Activity,
        title: "Blood Tests",
        description: "Complete blood count, lipid profile, diabetes screening",
        tests: "50+ tests available",
    },
    {
        icon: Heart,
        title: "Cardiac Tests",
        description: "ECG, Echo, stress tests, and cardiac markers",
        tests: "15+ tests available",
    },
    {
        icon: Brain,
        title: "Imaging",
        description: "X-Ray, MRI, CT Scan, Ultrasound",
        tests: "20+ tests available",
    },
    {
        icon: Microscope,
        title: "Pathology",
        description: "Urine, stool, culture tests, and biopsies",
        tests: "40+ tests available",
    },
    {
        icon: Bone,
        title: "Radiology",
        description: "Bone density, mammography, specialized imaging",
        tests: "10+ tests available",
    },
    {
        icon: FileText,
        title: "Health Packages",
        description: "Comprehensive health checkup packages",
        tests: "8+ packages",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const DiagnosticsPage = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Soft background */}
            <div className="absolute inset-0 -z-10 bg-muted/40" />

            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <Badge variant="outline" className="mb-4 px-4 py-1">
                        Coming Soon
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Diagnostic Services
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Book diagnostic tests online and get accurate digital reports from
                        trusted labs.
                    </p>
                </motion.div>

                {/* Services */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div key={index} variants={fadeUp}>
                                <Card className="group h-full border border-border bg-background/80 backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                                    <CardHeader>
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition group-hover:bg-primary/20">
                                            <Icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription>
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Badge variant="secondary">{service.tests}</Badge>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Why Choose Us */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <Card className="mb-20 border border-border bg-background/70 backdrop-blur-sm">
                        <CardContent className="p-10">
                            <h2 className="text-3xl font-bold mb-10 text-center">
                                Why Choose Our Diagnostic Services?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {[
                                    {
                                        title: "Accredited Labs",
                                        desc: "Partner labs certified by national & international authorities",
                                    },
                                    {
                                        title: "Home Sample Collection",
                                        desc: "Trained professionals collect samples from your home",
                                    },
                                    {
                                        title: "Digital Reports",
                                        desc: "Access reports securely anytime from your dashboard",
                                    },
                                    {
                                        title: "Affordable Pricing",
                                        desc: "Transparent pricing with value health packages",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="flex gap-4"
                                    >
                                        <div className="shrink-0 w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {item.desc}
                                            </p>
                                        </div>
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
                    <Card className="inline-block bg-background/80 backdrop-blur-sm shadow-xl">
                        <CardContent className="p-10">
                            <h2 className="text-3xl font-bold mb-4">
                                Launching Very Soon
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                We are onboarding top diagnostic labs to provide reliable and
                                accurate testing services.
                            </p>
                            <Link href="/">
                                <Button size="lg">Back to Home</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default DiagnosticsPage;
