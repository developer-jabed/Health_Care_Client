import { ManagementPageLoading } from "@/components/shared/ManagementPageLoader";

const DoctorDetailsLoading = () => {
  return <div>    <ManagementPageLoading
    columns={10}
    hasActionButton
    filterCount={5}
    filterWidths={["w-48", "w-32", "w-40", "w-24", "w-36"]}
  /> </div>;
};

export default DoctorDetailsLoading;