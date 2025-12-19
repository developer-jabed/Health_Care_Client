import MedicineContent from "@/components/modules/medicine/MedicineContent";


export const dynamic = "force-dynamic"; // disables static prerendering
const MedicinePage = async () => {


    return (
        <div className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-sky-100/40 to-emerald-100/40 dark:from-primary/20 dark:via-background dark:to-background" />
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl -z-10" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl -z-10" />

            {/* Client Component */}
            <MedicineContent />
        </div>
    );
};

export default MedicinePage;
