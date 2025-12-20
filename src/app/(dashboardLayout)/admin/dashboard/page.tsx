
import { StatsCard } from "@/components/shared/StatCard";
import { getDashboardMetaData } from "@/service/meta/dashboard.service";
import { IAdminDashboardMeta } from "@/types/meta.interface";
import { Suspense } from "react";

import { DashboardSkeleton } from "@/components/shared/DashboardSkeleton";
import { DashboardCharts } from "@/components/modules/Admin/AdminDashboard/AdminDashboard";

export const dynamic = "force-dynamic"; // forces SSR

export default async function AdminDashboardPage() {
  const result = await getDashboardMetaData();
  const data: IAdminDashboardMeta = result.data;

  const totalRevenue = data.totalRevenue?._sum?.amount || 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your healthcare system statistics
        </p>
      </div>

      {/* Stats Cards */}
      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${data.adminCount !== undefined ? "xl:grid-cols-6" : "xl:grid-cols-5"
          }`}
      >
        <StatsCard
          title="Total Appointments"
          value={data.appointmentCount.toLocaleString()}
          iconName="CalendarDays"
          description="All time appointments"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          title="Total Patients"
          value={data.patientCount.toLocaleString()}
          iconName="Users"
          description="Registered patients"
          iconClassName="bg-green-100"
        />
        <StatsCard
          title="Total Doctors"
          value={data.doctorCount.toLocaleString()}
          iconName="Stethoscope"
          description="Active doctors"
          iconClassName="bg-purple-100"
        />
        {data.adminCount !== undefined && (
          <StatsCard
            title="Total Admins"
            value={data.adminCount.toLocaleString()}
            iconName="UserCog"
            description="System administrators"
            iconClassName="bg-orange-100"
          />
        )}
        <StatsCard
          title="Total Payments"
          value={data.paymentCount.toLocaleString()}
          iconName="CreditCard"
          description="Payment transactions"
          iconClassName="bg-indigo-100"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          iconName="DollarSign"
          description="Total earnings"
          iconClassName="bg-emerald-100"
        />
      </div>

      {/* Charts Section (Client Component) */}
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardCharts
          barData={data.barChartData}
          pieData={data.pieCharData}
        />
      </Suspense>
    </div>
  );
}
