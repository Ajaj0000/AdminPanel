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
import { ItemSection } from "../Items/ItemChild/Additem";

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
    { route: "CreateCategoryScreen", label: "Add Category", component: CreateCategoryScreen },
    { route: "CreateCategoryScreen", label: "CreateCategoryScreen", component: CreateCategoryScreen },
    { route: "Add Item", label: "Add Item", component: ItemSection },
    { route: "Item", label: "Item", component: ItemParent },
    
];


