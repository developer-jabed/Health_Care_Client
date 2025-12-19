"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPaymentStatus } from "@/service/payment/payment.service";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PaymentSuccessContentProps {
  appointmentId: string;
}

const PaymentSuccessContent: React.FC<PaymentSuccessContentProps> = ({ appointmentId }) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [isPaid, setIsPaid] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const statusRes = await getPaymentStatus(appointmentId);
        if (statusRes?.data?.status === "PAID") {
          setIsPaid(true);
          setChecking(false);
        } else {
          // Retry after delay if not paid yet
          setTimeout(checkPayment, 2000);
        }
      } catch (err) {
        console.error("Error checking payment status:", err);
        setTimeout(checkPayment, 2000);
      }
    };

    checkPayment();
  }, [appointmentId]);

  useEffect(() => {
    if (!isPaid) return;

    // Start countdown once payment is confirmed
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/dashboard/my-appointment"); // Or use sessionStorage return URL
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [isPaid, router]);

  const handleManualRedirect = () => {
    router.push("/dashboard/my-appointment");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-green-50 to-emerald-50">
      <Card className="max-w-md w-full border-green-200 shadow-lg">
        <CardContent className="pt-8 pb-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-green-100 rounded-full p-4">
                  <CheckCircle2 className="h-20 w-20 text-green-600" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-green-900">
                {checking ? "Processing Payment..." : "Payment Successful!"}
              </h1>
              <p className="text-green-700">
                {checking
                  ? "Please wait while we confirm your payment."
                  : "Your appointment has been confirmed and payment received."}
              </p>
            </div>

            {isPaid && (
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-800">
                  A confirmation email has been sent to your registered email with appointment details.
                </p>
              </div>
            )}

            {isPaid && (
              <div className="text-sm text-green-600">
                Redirecting to your appointments in {countdown} seconds...
              </div>
            )}

            <Button
              onClick={handleManualRedirect}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
            >
              View My Appointments
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccessContent;
