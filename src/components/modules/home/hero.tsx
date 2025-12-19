"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Star } from "lucide-react";

import AISearchDialog from "@/components/shared/AISSearchDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { HeroProps } from "@/types/heroProps";
import { LargeSparkleIcon, SparkleIcon } from "@/assets/icon/SparkleIcon";

export function Hero({
  badge = { text: "AI-Powered Healthcare" },
  heading = { line1: "Find Your Perfect", line2: "Doctor with AI" },
  description = [
    "Our advanced AI technology analyzes your symptoms, medical",
    "history, and preferences to match you with the best-fit doctors",
    "in seconds.",
  ],
  buttons = {
    primary: { text: "Find Your Doctor" },
    secondary: { text: "Book Appointment" },
  },
  stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "1000+", label: "Expert Doctors" },
    {
      value: "4.9",
      label: "Patient Rating",
      icon: <Star className="size-6 fill-yellow-400 stroke-yellow-400" />,
    },
  ],
  formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    submitText: "Get AI Recommendations",
    footerText: "✨ Powered by advanced AI algorithms for accurate doctor matching",
  },
}: HeroProps) {
  const [symptoms, setSymptoms] = useState("");
  const [aiDialogOpen, setAiDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;
    setAiDialogOpen(true);
  };

  return (
    <section className="relative w-full bg-white dark:bg-gray-900 transition-colors">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #ffffff 30%, #155DFC 100%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-4 py-2 w-fit">
              <SparkleIcon />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                {badge.text}
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-[48px] leading-[58px] font-semibold text-gray-900 dark:text-gray-100">
                {heading.line1}
              </h1>
              <h1 className="text-[48px] leading-[58px] font-semibold text-gray-900 dark:text-gray-100">
                {heading.line2}
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-1 text-gray-600 dark:text-gray-300">
              {description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Buttons → Navigate to /consultation */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {buttons.primary && (
                <Button
                  asChild
                  className="h-[64px] gap-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Link href="/consultation">
                    <Search className="size-5" />
                    {buttons.primary.text}
                  </Link>
                </Button>
              )}

              {buttons.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="h-[64px] gap-3 rounded-xl border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
                >
                  <Link href="/consultation">
                    <Calendar className="size-5" />
                    {buttons.secondary.text}
                  </Link>
                </Button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    {stat.icon}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-end">
            <div className="w-full max-w-[560px] rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {formCard.title}
                </h2>
                <LargeSparkleIcon />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-xs text-gray-600 dark:text-gray-300">
                    {formCard.symptomLabel}
                  </Label>
                  <Input
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder={formCard.symptomPlaceholder}
                    className="h-[50px] rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-[60px] w-full rounded-xl bg-blue-600 hover:bg-blue-700"
                >
                  {formCard.submitText}
                </Button>
              </form>

              {/* Footer */}
              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                {formCard.footerText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI SEARCH DIALOG */}
      <AISearchDialog
        initialSymptoms={symptoms}
        externalOpen={aiDialogOpen}
        onOpenChange={(open) => {
          setAiDialogOpen(open);
          if (!open) setSymptoms("");
        }}
        onSearchComplete={() => setSymptoms("")}
      />
    </section>
  );
}
