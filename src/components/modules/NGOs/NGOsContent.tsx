// app/components/NGOs/NGOsContent.tsx
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building2, Globe, HandHeart, Heart, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const ngoCategories = [
    { icon: Heart, title: "Health & Wellness", description: "Free medical camps & health awareness programs", count: "25+ NGOs" },
    { icon: HandHeart, title: "Patient Support", description: "Financial aid for critical and chronic patients", count: "15+ NGOs" },
    { icon: Users, title: "Community Health", description: "Grassroots healthcare in underserved areas", count: "30+ NGOs" },
    { icon: Building2, title: "Medical Facilities", description: "Free clinics and community hospitals", count: "20+ Organizations" },
    { icon: Award, title: "Medical Research", description: "Funding innovation and medical studies", count: "10+ Institutions" },
    { icon: Globe, title: "International Aid", description: "Global health NGOs working in Bangladesh", count: "12+ NGOs" },
];

const NGOsContent = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center">
                <Badge variant="outline" className="mb-4 px-4 py-1">Coming Soon</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Healthcare NGOs & Organizations</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Connecting people with NGOs providing free or subsidized healthcare services.
                </p>
            </motion.div>

            {/* NGO Categories */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {ngoCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <motion.div key={index} variants={fadeUp}>
                            <Card className="h-full border border-border bg-background/80 backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                    <CardDescription>{category.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="secondary">{category.count}</Badge>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* How It Helps Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="mb-20 border border-border bg-background/70 backdrop-blur-sm">
                    <CardContent className="p-10">
                        <h2 className="text-3xl font-bold mb-10 text-center">How Our NGO Network Helps</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                { title: "Find Support", desc: "Search NGOs based on your medical needs & location" },
                                { title: "Get Assistance", desc: "Access free or subsidized healthcare services" },
                                { title: "Community Programs", desc: "Join health camps & awareness initiatives" },
                                { title: "Make a Difference", desc: "Volunteer or donate to support healthcare causes" },
                            ].map((item, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex gap-4">
                                    <div className="shrink-0 w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">{i + 1}</div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Partner CTA */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-20">
                <Card className="border border-border bg-background/80 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Are you a healthcare NGO? Register your organization and reach people who need help the most.
                        </p>
                        <Button size="lg" variant="outline">Register Your NGO</Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Footer CTA */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <Card className="inline-block bg-background/80 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-10">
                        <h2 className="text-3xl font-bold mb-4">Launching Soon</h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            We are building a verified directory of healthcare NGOs to ensure help reaches the right people.
                        </p>
                        <Link href="/"><Button size="lg">Back to Home</Button></Link>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default NGOsContent;
