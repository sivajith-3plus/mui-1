import GroupIcon from "@mui/icons-material/Group";
import MoneyIcon from "@mui/icons-material/Money";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PieChartIcon from "@mui/icons-material/PieChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsIcon from "@mui/icons-material/Settings";
import WindowIcon from "@mui/icons-material/Window";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const sideNavItems = [
  {
    name: "Admin Users",
    route:'admin-users',
    icon: <GroupIcon />,
  },
  {
    name: "Users",
    icon: <GroupIcon />,
    children: [],
  },
  {
    name: "Games",
    icon: <SportsEsportsIcon />,
    children: [],
  },
  {
    name: "Analytics",
    icon: <PieChartIcon />,
    children: [],
  },
  {
    name: "Popular games",
    icon: <SportsEsportsIcon />,
  },
  {
    name: "Bonus",
    icon: <MoneyIcon />,
    children: [
      { name: "Daily Bonus", route: "/daily-spin-bonus" },
      { name: "Refer & Earn", route: "/refer-and-earn" },
    ],
  },
  {
    name: "Revenue",
    icon: <CurrencyExchangeIcon />,
    children: [],
  },
  {
    name: "Master",
    icon: <BarChartIcon />,
    children: [],
  },
  {
    name: "Marketing",
    icon: <TrendingUpIcon />,
    children: [],
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    children: [],
  },
  {
    name: "MGP Release",
    icon: <WindowIcon />,
  },
  {
    name: "Withdrawel",
    icon: <AccountBalanceIcon />,
    children: [],
  },
  {
    name: "TDS",
    icon: <PieChartIcon />,
    children: [],
  },
  {
    name: "Help & Support",
    icon: <ConfirmationNumberIcon />,
  },
  {
    name: "Company Logo",
    icon: <WindowIcon />,
  },
];

export default sideNavItems;
