import PublicNavbar from "@/components/shared/PublicNavbar";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PublicNavbar/>
            {children}
        </>
    );
};

export default commonLayout;