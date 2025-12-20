""
import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);

    return [
        {
            items: [
                {
                    title: "Home",
                    href: "/",
                    icon: "Home", // ✅ String
                    roles: ["PATIENT", "DOCTOR", "ADMIN"],
                },
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ["PATIENT", "DOCTOR", "ADMIN"],
                },
                {
                    title: "My Profile",
                    href: `/my-profile`,
                    icon: "User",
                    roles: ["PATIENT", "DOCTOR", "ADMIN"],
                },

            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "Settings", // ✅ String
                    roles: ["PATIENT"],
                },
            ],
        },
    ]
}

export const doctorNavItems: NavSection[] = [
    {
        title: "Patient Management",
        items: [
            {
                title: "Appointments",
                href: "/doctor/dashboard/appointments",
                icon: "Calendar", // ✅ String
                badge: "3",
                roles: ["DOCTOR"],
            },
            {
                title: "My Schedules",
                href: "/doctor/dashboard/schedules",
                icon: "Clock", // ✅ String
                roles: ["DOCTOR"],
            },
            {
                title: "Prescriptions",
                href: "/doctor/dashboard/prescriptions",
                icon: "FileText", // ✅ String
                roles: ["DOCTOR"],
            },
        ],
    }
]

export const patientNavItems: NavSection[] = [
    {
        title: "Appointments",
        items: [
            {
                title: "My Appointments",
                href: "/dashboard/my-appointment",
                icon: "Calendar", // ✅ String
                roles: ["PATIENT"],
            },
            {
                title: "Book Appointment",
                href: "/consultation",
                icon: "ClipboardList", // ✅ String
                roles: ["PATIENT"],
            },
        ],
    },
    {
        title: "Medical Records",
        items: [
            {
                title: "My Prescriptions",
                href: "/dashboard/my-prescription",
                icon: "FileText", // ✅ String
                roles: ["PATIENT"],
            },
            {
                title: "Health Records",
                href: "/dashboard/health-record",
                icon: "Activity", // ✅ String
                roles: ["PATIENT"],
            },
        ],
    },

]

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admins-managment",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Doctors",
                href: "/admin/dashboard/doctors-managment",
                icon: "Stethoscope", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Patients",
                href: "/admin/dashboard/patients-managment",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Hospital Management",
        items: [
            {
                title: "Appointments",
                href: "/admin/dashboard/appointments-managment",
                icon: "Calendar", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Schedules",
                href: "/admin/dashboard/schedules-managment",
                icon: "Clock", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Specialities",
                href: "/admin/dashboard/specialities-management",
                icon: "Hospital", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    }
]

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "DOCTOR":
            return [...commonNavItems, ...doctorNavItems];
        case "PATIENT":
            return [...commonNavItems, ...patientNavItems];
        default:
            return [];
    }
}