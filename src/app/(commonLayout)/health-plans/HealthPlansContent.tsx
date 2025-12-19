// app/components/health-plans/HealthPlansContent.tsx
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
import { CheckCircle, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

const HealthPlansContent = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "৳499",
            period: "/month",
            description: "Perfect for individuals seeking basic healthcare coverage",
            features: [
                "2 Doctor Consultations per month",
                "Basic Health Checkup",
                "Prescription Management",
                "Health Records Access",
                "Email Support",
            ],
            popular: false,
        },
        {
            name: "Family Plan",
            price: "৳1,499",
            period: "/month",
            description: "Comprehensive coverage for your entire family",
            features: [
                "Unlimited Doctor Consultations",
                "Annual Health Checkup for 4 members",
                "Priority Appointment Booking",
                "Specialist Consultations",
                "24/7 Phone Support",
                "Medicine Discounts up to 20%",
                "Diagnostic Test Discounts",
            ],
            popular: true,
        },
        {
            name: "Premium Plan",
            price: "৳2,999",
            period: "/month",
            description: "Ultimate healthcare with VIP benefits",
            features: [
                "Unlimited Consultations (All specialties)",
                "Comprehensive Annual Checkup",
                "Home Visit Services",
                "Emergency Consultation 24/7",
                "Dedicated Health Manager",
                "Medicine Discounts up to 30%",
                "Free Diagnostic Tests",
                "Mental Health Support",
            ],
            popular: false,
        },
    ];

    const benefits = [
        { icon: Shield, title: "Comprehensive Coverage", desc: "Wide range of medical services" },
        { icon: Users, title: "Family Friendly", desc: "Plans for everyone you love" },
        { icon: Zap, title: "Instant Access", desc: "Fast & easy consultations" },
        { icon: CheckCircle, title: "Trusted Care", desc: "Verified doctors only" },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20">
            {/* Floating glow orbs */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Flexible <span className="text-blue-600">Health Plans</span> for Everyone
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Transparent pricing, trusted doctors, and AI-powered healthcare designed for modern families.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    {benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <Card
                                key={idx}
                                className="group border-none bg-white/70 backdrop-blur shadow-md hover:shadow-xl transition-all"
                            >
                                <CardContent className="pt-8 text-center">
                                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                                        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition" />
                                    </div>
                                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{benefit.desc}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${plan.popular ? "border-2 border-blue-600 bg-gradient-to-b from-blue-50 to-white scale-105" : "bg-white"}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-blue-600 text-white px-3 py-1">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription className="mt-1">{plan.description}</CardDescription>

                                <div className="mt-6">
                                    <span className="text-5xl font-extrabold text-blue-600">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500">{plan.period}</span>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/login">
                                    <Button
                                        size="lg"
                                        className={`w-full rounded-xl ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                                        variant={plan.popular ? "default" : "outline"}
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Custom Plan CTA */}
                <Card className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl">
                    <CardContent className="p-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Need a Custom Healthcare Plan?
                        </h2>
                        <p className="text-white/90 mb-6 max-w-xl mx-auto">
                            We’ll design a personalized plan for your organization, clinic, or family.
                        </p>
                        <Button size="lg" variant="secondary" className="rounded-full px-8">
                            Contact Sales
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default HealthPlansContent;
