import { BsFillDice4Fill } from "react-icons/bs";
import { AiFillAppstore, AiFillTool } from "react-icons/ai";


const dashboardRoutes = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <AiFillAppstore />
  },
  {
    heading: "Peoples"
  },
  {
    name: "Customers",
    url: "/customers",
    icon: <AiFillTool />
  },
  {
    title: "Food",
    id: "food-nav",
    icon: <BsFillDice4Fill />,
    children: [
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 1",
        url: "/sidebar1",
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 2",
        url: "/sidebar2"
      },

      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 3",
        url: "/sidebar3"
      },
      {
        childIcon: <BsFillDice4Fill />,
        name: "Sidebar 4",
        url: "/sidebar4"
      }
    ]
  },
  {
    heading: "Setting"
  },
  {
    name: "All Setting",
    url: "/setting",
    icon: <AiFillTool />
  }
]


export default dashboardRoutes;
