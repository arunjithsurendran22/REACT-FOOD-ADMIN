import { RxDashboard } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import { MdOutlineFastfood } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaList } from "react-icons/fa6";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <RxDashboard />,
  },
  {
    key: "categories",
    label: "Categories",
    path: "/category-list",
    icon: <MdOutlineFastfood />,
  },
  {
    key: "restaurants",
    label: "Restaurants",
    path: "/vendors-profile-get",
    icon: <MdRestaurant />,
  },
  {
    key: "Customers",
    label: "customers",
    path: "/customers-profile-get",
    icon: <FaUsers />,
  },
  {
    key: "coupons",
    label: "Coupons",
    path: "/coupons",
    icon: <BiSolidOffer />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <FaList />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdOutlineSettings />,
  },
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <BiSupport />,
  },
  
];
