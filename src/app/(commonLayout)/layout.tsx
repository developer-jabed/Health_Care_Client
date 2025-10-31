import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavbar from "@/components/shared/PublicNavbar";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PublicNavbar/>
            {children}
            <PublicFooter/>
        </>
    );
};

export default commonLayout;