// app/components/admin/DashboardCharts.tsx
"use client";

import { AppointmentBarChart } from "@/components/shared/AppointmentBarChart";
import { AppointmentPieChart } from "@/components/shared/AppointmentPieChart";
import { useSearchParams } from "next/navigation";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    barData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pieData: any;
}

export function DashboardCharts({ barData, pieData }: Props) {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "overview";

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-4">
                <h2 className="text-xl font-bold mb-2">Appointments Overview ({tab})</h2>
                <AppointmentBarChart data={barData} />
            </div>
            <div className="lg:col-span-3">
                <h2 className="text-xl font-bold mb-2">Appointment Distribution</h2>
                <AppointmentPieChart data={pieData} />
            </div>
        </div>
    );
}
