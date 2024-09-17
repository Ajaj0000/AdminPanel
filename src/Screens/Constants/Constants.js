import { CollectionDetail } from "../Collections/Collectionchild/CollectionDetail";
import { Collection } from "../Collections/CollectionParent/Collection";
import { Dashboard } from "../Dashboard/DashboardParent/Dashboard";
import Home from "../Home/Home";
import { Order } from "../Orders/Orders";
import Profile from "../Profile/Profile";


export const ScreensArray = [
    { route: 'Dashboard', label: 'Dashboard', icon: "user", component: Dashboard, },
    { route: 'Home', label: 'Home',  icon: 'home', component: Home, },
    { route: 'Profile', label: 'Profile', icon: "user", component: Profile, },
    { route: "Orders" , label: "Orders", component : Order},
    { route:"Collection", label:"Collection", component:Collection },
    {route :"CollectionDetail", label:"CollectionDetail" , component:CollectionDetail}
];

// export const drawerMenu = [
//     {
//         title: "Orders",
//         //   bg: Colors.menu1,
//         //   type: Icons.Feather, icon: 'settings',
//         route: 'Orders',
//         menuList: [
//             { title: 'Orders' },
//             { title: 'Drafts' },
//         ]
//     },
//     {
//         title:"Dashbord",
//         route:"Dashboard"
//     },
//     {
//         title: "Products",
//         //   bg: Colors.menu2,
//         //   type: Icons.Feather, icon: 'check-square',
//         route: 'Products',
//         menuList: [
//             { title: 'Products' },
//             { title: 'Collections' },
//             { title: 'Purchase orders' },
//             { title: 'Gift cards' },
//         ]
//     },
//     {
//         title: "Customers",
//         //   bg: Colors.menu3,
//         //   type: Icons.Octicons, icon: 'project',
//         route: 'Customers',
//         menuList: [
//             { title: 'Customers' },
//             { title: 'Segments' },
//         ]
//     },
//     {
//         title: "Discounts",
//         route: "Discounts",
//     }
// ]