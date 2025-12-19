import NGOsContent from "@/components/modules/NGOs/NGOsContent";

export const dynamic = "force-static"; // Can be dynamic if fetching live data

const NGOsPage = async () => {
    // You can fetch server-side data here if needed
    // Example:
    // const data = await getNGOsData();

    return <NGOsContent />;
};

export default NGOsPage;
