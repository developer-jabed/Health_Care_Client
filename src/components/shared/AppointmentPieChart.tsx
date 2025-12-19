"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/* =========================
   Types
========================= */

export interface PieChartData {
  status: string;
  count: number;
}

interface AppointmentPieChartProps {
  data?: PieChartData[];
  title?: string;
  description?: string;
}

/* =========================
   Component
========================= */

export function AppointmentPieChart({
  data = [],
  title = "Appointment Status",
  description = "Distribution of appointment statuses",
}: AppointmentPieChartProps) {
  /* =========================
     Theme Colors (SSR Safe)
  ========================= */

  const chartColors = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        scheduled: "#f97316",
        inprogress: "#14b8a6",
        completed: "#0ea5e9",
        canceled: "#eab308",
        primary: "#3b82f6",
      };
    }

    const styles = getComputedStyle(document.documentElement);

    const get = (key: string, fallback: string) =>
      styles.getPropertyValue(key).trim() || fallback;

    return {
      scheduled: get("--chart-5", "oklch(0.77 0.19 70)"),
      inprogress: get("--chart-2", "oklch(0.6 0.12 185)"),
      completed: get("--primary", "oklch(0.55 0.2 250)"),
      canceled: get("--chart-4", "oklch(0.83 0.19 84)"),
      primary: get("--chart-1", "oklch(0.65 0.22 40)"),
    };
  }, []);

  const surfaceColors = useMemo(() => {
    if (typeof window === "undefined") {
      return {
        background: "#ffffff",
        card: "#ffffff",
        border: "#e5e7eb",
      };
    }

    const styles = getComputedStyle(document.documentElement);

    return {
      background: styles.getPropertyValue("--background").trim(),
      card: styles.getPropertyValue("--card").trim(),
      border: styles.getPropertyValue("--border").trim(),
    };
  }, []);

  /* =========================
     Status → Color Mapping
  ========================= */

  const STATUS_COLORS: Record<string, keyof typeof chartColors> = {
    SCHEDULED: "scheduled",
    INPROGRESS: "inprogress",
    COMPLETED: "completed",
    CANCELED: "canceled",
    PAID: "completed",
    UNPAID: "primary",
  };

  /* =========================
     Format Data
  ========================= */

  const formattedData = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data
      .filter(item => item.count > 0)
      .map(item => ({
        name: item.status
          .replace(/_/g, " ")
          .toLowerCase()
          .replace(/\b\w/g, char => char.toUpperCase()),
        value: Number(item.count),
        originalStatus: item.status,
      }));
  }, [data]);

  /* =========================
     Helpers
  ========================= */

  const getColor = (index: number, status?: string) => {
    if (status && STATUS_COLORS[status]) {
      return chartColors[STATUS_COLORS[status]];
    }
    const keys = Object.keys(chartColors) as (keyof typeof chartColors)[];
    return chartColors[keys[index % keys.length]];
  };

  /* =========================
     Empty State
  ========================= */

  if (formattedData.length === 0) {
    return (
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex h-[300px] items-center justify-center">
          <p className="text-sm text-muted-foreground">
            No appointment data available
          </p>
        </CardContent>
      </Card>
    );
  }

  /* =========================
     Render
  ========================= */

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={formattedData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              labelLine={false}
              stroke={surfaceColors.background}
              strokeWidth={2}
              label={({ name, percent }) =>
                `${name}: ${(percent ?? 0 * 100).toFixed(0)}%`
              }
            >
              {formattedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(index, entry.originalStatus)}
                  style={{
                    filter:
                      "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))",
                  }}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: surfaceColors.card,
                border: `1px solid ${surfaceColors.border}`,
                borderRadius: "8px",
              }}
            />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
