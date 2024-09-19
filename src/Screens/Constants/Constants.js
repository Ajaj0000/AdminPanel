import { Collection } from "../Products/Collections/CollectionParent/Collection";
import { CollectionDetail } from "../Products/Collections/CollectionChild/CollectionDetail";
import { Dashboard } from "../Dashboard/DashboardParent/Dashboard";
import Home from "../Home/Home";
import { InventoryParent } from "../Inventory/InventoryParent/InventoryParent";
import { Order } from "../Orders/Orders";
import { PurchaseOrders } from '../Orders/OrdersChild/PurchaseOrders';
import Profile from "../Profile/Profile";
import { GiftCardMain } from "../Products/GiftCards/GiftCardParent/GiftCardMain";
import { CategoryParent } from "../Category/CategoryParent/CategoryParent";
import { CreateCategoryScreen } from "../Category/CategoryChild/AddCategory";
import { ItemParent } from "../Items/ItemParent/ItemParent";
import { Additem } from "../Items/ItemChild/Additem";

export const ScreensArray = [
    { route: 'Dashboard', label: 'Dashboard', icon: "user", component: Dashboard },
    { route: 'Home', label: 'Home', icon: 'home', component: Home },
    { route: 'Profile', label: 'Profile', icon: "user", component: Profile },
    { route: "Orders", label: "Orders", component: Order },
    { route: "Collections", label: "Collections", component: Collection },
    { route: "Inventory", label: "Inventory", component: InventoryParent },
    { route: "Collection", label: "Collection", component: CollectionDetail },
    { route: "Purchase", label: "Purchase", component: PurchaseOrders },
    { route: "GiftCard", label: "GiftCard", component: GiftCardMain },
    { route: "Category", label: "Category", component: CategoryParent },
<<<<<<< HEAD
    { route: "CreateCategoryScreen", label: "Add Category", component: CreateCategoryScreen }
];
=======
    { route: "CreateCategoryScreen", label: "CreateCategoryScreen", component: CreateCategoryScreen },
    { route: "Item", label: "Item", component: ItemParent },
    // { route: "AddItem", lable: "AddItem", component: Additem }
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
>>>>>>> a37534659b5e58372f2bba0dab0f17b33d087b6c
