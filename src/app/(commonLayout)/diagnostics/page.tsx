// app/(commonLayout)/diagnostics/page.tsx
import DiagnosticsContent from "@/components/modules/Diagnostics/Diagnostics";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function DiagnosticsPage() {
    return (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
            <DiagnosticsContent />
        </Suspense>
    );
}
