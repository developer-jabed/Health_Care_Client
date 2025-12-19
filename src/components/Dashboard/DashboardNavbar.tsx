import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getNavItemsByRole } from "@/lib/navItems.config";
import DashboardNavbarContent from "./DashboardNavbarComponent";
import { getUserInfo } from "@/service/auth/getUserInfo";
import { UserInfo } from "@/types/user.interface";


const DashboardNavbar = async () => {
  const userInfo = await getUserInfo() as UserInfo;
  const navItems = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardNavbarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardNavbar;