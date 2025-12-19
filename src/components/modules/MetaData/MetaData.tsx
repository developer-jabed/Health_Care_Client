/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { fetchDashboardMetaData } from "@/service/meta/metaData.service";
import { FileText, Star, CheckCircle, Users, User, DollarSign, CreditCard } from "lucide-react";

// --------------------
// CUSTOM HOOK
// --------------------
export function useDashboardMetaData() {
  const [metaData, setMetaData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDashboardMetaData();
      if (result.success === false) {
        setError(result.message || "Failed to fetch metadata");
      } else {
        setMetaData(result.data || result);
      }
    };
    fetchData();
  }, []);

  return { metaData, error };
}

// --------------------
// COMPONENT
// --------------------
export function DashboardMetaViewer() {
  const { metaData, error } = useDashboardMetaData();

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!metaData) return null; // Just don't render anything if data isn't loaded yet

  // Common fields
  const appointmentCount = metaData?.appointmentCount || 0;
  const reviewCount = metaData?.reviewCount || 0;
  const prescriptionCount = metaData?.prescriptionCount || 0;
  const formattedAppointmentStatusDistribution = metaData?.formattedAppointmentStatusDistribution || [];

  // Admin-specific
  const patientCount = metaData?.patientCount;
  const doctorCount = metaData?.doctorCount;
  const adminCount = metaData?.adminCount;
  const paymentCount = metaData?.paymentCount;
  const totalRevenue = metaData?.totalRevenue?._sum?.amount || 0;

  // Admin charts
  const barChartData = metaData?.barChartData || [];
  const pieChartData = metaData?.pieChartData || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Appointments */}
      <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition">
        <CheckCircle className="w-10 h-10 text-blue-600 mr-4" />
        <div>
          <h3 className="text-gray-700">Appointments</h3>
          <p className="text-2xl font-bold">{appointmentCount}</p>
        </div>
      </div>

      {/* Prescriptions */}
      {"prescriptionCount" in metaData && (
        <div className="flex items-center bg-green-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <FileText className="w-10 h-10 text-green-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Prescriptions</h3>
            <p className="text-2xl font-bold">{prescriptionCount}</p>
          </div>
        </div>
      )}

      {/* Reviews */}
      {"reviewCount" in metaData && (
        <div className="flex items-center bg-yellow-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <Star className="w-10 h-10 text-yellow-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Reviews</h3>
            <p className="text-2xl font-bold">{reviewCount}</p>
          </div>
        </div>
      )}

      {/* Admin-specific: Patients */}
      {patientCount !== undefined && (
        <div className="flex items-center bg-pink-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <Users className="w-10 h-10 text-pink-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Patients</h3>
            <p className="text-2xl font-bold">{patientCount}</p>
          </div>
        </div>
      )}

      {/* Admin-specific: Doctors */}
      {doctorCount !== undefined && (
        <div className="flex items-center bg-indigo-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <User className="w-10 h-10 text-indigo-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Doctors</h3>
            <p className="text-2xl font-bold">{doctorCount}</p>
          </div>
        </div>
      )}

      {/* Admin-specific: Admins */}
      {adminCount !== undefined && (
        <div className="flex items-center bg-purple-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <User className="w-10 h-10 text-purple-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Admins</h3>
            <p className="text-2xl font-bold">{adminCount}</p>
          </div>
        </div>
      )}

      {/* Admin-specific: Payment Count */}
      {paymentCount !== undefined && (
        <div className="flex items-center bg-teal-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <CreditCard className="w-10 h-10 text-teal-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Payments</h3>
            <p className="text-2xl font-bold">{paymentCount}</p>
          </div>
        </div>
      )}

      {/* Admin-specific: Total Revenue */}
      {totalRevenue !== undefined && (
        <div className="flex items-center bg-rose-100 p-4 rounded-lg shadow hover:shadow-lg transition">
          <DollarSign className="w-10 h-10 text-rose-600 mr-4" />
          <div>
            <h3 className="text-gray-700">Total Revenue</h3>
            <p className="text-2xl font-bold">${totalRevenue}</p>
          </div>
        </div>
      )}

      {/* Status Distribution */}
      {formattedAppointmentStatusDistribution.length > 0 && (
        <div className="flex flex-col bg-purple-50 p-4 rounded-lg shadow hover:shadow-lg transition col-span-1 sm:col-span-2 lg:col-span-4">
          <h3 className="text-gray-700 mb-2">Appointment Status</h3>
          {formattedAppointmentStatusDistribution.map(({ status, count }: any) => (
            <div key={status} className="flex items-center mb-1">
              <span className="w-24">{status}</span>
              <div className="flex-1 bg-purple-200 h-4 rounded-full mr-2">
                <div
                  className="bg-purple-600 h-4 rounded-full"
                  style={{ width: `${count * 20}px` }}
                />
              </div>
              <span>{count}</span>
            </div>
          ))}
        </div>
      )}

      {/* Admin Bar Chart */}
      {metaData?.barChartData?.length > 0 && (
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-gray-700 mb-2">Monthly Appointments</h3>
          <div className="flex items-end gap-2 h-32">
            {metaData.barChartData.map(({ month, count }: any, idx: number) => {
              const barHeight = Math.min(count * 20, 100);
              const monthLabel = new Date(month).toLocaleString("default", { month: "short" });
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-blue-500 w-6 rounded-t" style={{ height: `${barHeight}px` }} />
                  <span className="text-xs mt-1">{monthLabel}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Admin Pie Chart */}
      {metaData?.pieChartData?.length > 0 && (
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-gray-700 mb-2">Appointment Status Distribution</h3>
          <div className="flex gap-4">
            {metaData.pieChartData.map(({ status, count }: any) => {
              const total = metaData.pieChartData.reduce((acc: any, curr: { count: any }) => acc + curr.count, 0);
              const widthPercent = total === 0 ? 0 : (count / total) * 100;
              return (
                <div key={status} className="flex flex-col items-center w-16">
                  <div className="bg-purple-500 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-white font-bold">{Math.round(widthPercent)}%</span>
                  </div>
                  <span className="text-xs mt-1">{status}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
