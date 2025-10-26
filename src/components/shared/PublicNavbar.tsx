"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
    Stethoscope,
    HeartPulse,
    Pill,
    Microscope,
    Building2,
    Menu,
    X,
    Sun,
    Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function PublicNavbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const menuRef = useRef<HTMLDivElement | null>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const navLinks = [
        { name: "Consultation", href: "/consultation", icon: Stethoscope },
        { name: "Health Plan", href: "/health-plan", icon: HeartPulse },
        { name: "Medicine", href: "/medicine", icon: Pill },
        { name: "Diagnostic", href: "/diagnostic", icon: Microscope },
        { name: "NGOs", href: "/ngos", icon: Building2 },
    ];

    // Initialize theme safely
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";

        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(initialTheme);
    }, []);

    // Animate menu link items with GSAP when opening
    useEffect(() => {
        if (open && linksRef.current.length > 0) {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    linksRef.current.filter(Boolean),
                    { y: -8, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.06, duration: 0.28, ease: "power2.out" }
                );
            }, menuRef);
            return () => ctx.revert();
        }
    }, [open]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-background/95 border-b shadow-md px-4 h-16 backdrop-blur-md">
            {/* Brand */}
            <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center text-2xl font-bold text-primary tracking-tight">
                    <div className="rounded-md w-9 h-9 flex items-center justify-center bg-primary/10 dark:bg-primary/20">
                        <Stethoscope size={18} className="text-primary" />
                    </div>
                    <span className="ml-3">
                        Health<span className="text-secondary"> Care</span>
                    </span>
                </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-6 items-center">
                {navLinks.map(({ name, href, icon: Icon }, i) => (
                    <Link
                        key={name}
                        href={href}
                        ref={(el) => {
                            linksRef.current[i] = el;
                        }}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/60 ${pathname === href ? "text-primary" : "text-muted-foreground hover:text-primary"
                            }`}
                    >
                        <Icon size={18} />
                        {name}
                    </Link>
                ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    title="Toggle theme"
                    className="p-2 rounded-md hover:bg-muted/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <div className="hidden sm:block">
                    <Link href="/login">
                        <Button className="font-semibold rounded-full">Login</Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen((s) => !s)}
                        aria-expanded={open}
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="p-2 rounded-md hover:bg-muted/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.28 }}
                            className="absolute right-0 top-0 h-full w-72 bg-card/95 border-l p-6"
                            ref={menuRef}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-md w-9 h-9 flex items-center justify-center bg-primary/10">
                                        <Stethoscope size={18} className="text-primary" />
                                    </div>
                                    <div className="font-semibold text-lg">Health Care</div>
                                </div>
                                <button onClick={() => setOpen(false)} aria-label="Close panel" className="p-2 rounded-md">
                                    <X />
                                </button>
                            </div>

                            <div className="flex flex-col gap-3">
                                {navLinks.map(({ name, href, icon: Icon }, i) => (
                                    <Link
                                        key={name}
                                        href={href}
                                        ref={(el) => {
                                            linksRef.current[i] = el;
                                        }}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-base text-muted-foreground hover:bg-muted/10"
                                    >
                                        <Icon size={18} />
                                        {name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-6">
                                <Link href="/login">
                                    <Button className="w-full">Login</Button>
                                </Link>
                            </div>

                            <div className="mt-4 text-sm text-muted-foreground">Contact: +8801XXXXXXXXX</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}