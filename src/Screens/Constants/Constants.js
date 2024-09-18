import { CollectionDetail } from '../Collections/CollectionChild/CollectionDetail';
import { Collection } from "../Collections/CollectionParent/Collection";
import { Dashboard } from "../Dashboard/DashboardParent/Dashboard";
import Home from "../Home/Home";
import { InventoryParent } from "../Inventory/InventoryParent/InventoryParent";
import { Order } from "../Orders/Orders";
import { PurchaseOrders } from '../Orders/OrdersChild/PurchaseOrders';
import Profile from "../Profile/Profile";


export const ScreensArray = [
    { route: 'Dashboard', label: 'Dashboard', icon: "user", component: Dashboard, },
    { route: 'Home', label: 'Home', icon: 'home', component: Home, },
    { route: 'Profile', label: 'Profile', icon: "user", component: Profile, },
<<<<<<< HEAD
    { route: "Inventory", label: "Inventory", component: InventoryParent },
    { route: "Orders" , label: "Orders", component : Order},
    { route:"Collection", label:"Collection", component:Collection },
    {route :"CollectionDetail", label:"CollectionDetail" , component:CollectionDetail}
=======
    { route: "Orders", label: "Orders", component: Order },
    { route: "Collection", label: "Collection", component: Collection },
    { route: "Inventory", label: "Inventory", component: InventoryParent },
    { route: "CollectionDetail", label: "CollectionDetail", component: CollectionDetail },
    { route: "PurchaseOrders", label: "PurchaseOrders", component: PurchaseOrders }
>>>>>>> 11c3fa6f63ba09020aeafef4d74be625157399e9
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