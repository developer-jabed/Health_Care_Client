import { Column } from "@/components/shared/ManagementTable";
import { ISpeciality } from "@/types/specialities.interface";
import Image from "next/image";

export const specialitiesColumns: Column<ISpeciality>[] = [
  {
    header: "Icon",
    accessor: (speciality) => (
      <Image
        src={speciality.icon}
        alt={speciality.title}
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    header: "Title",
    accessor: (speciality) => speciality.title,
  },
];