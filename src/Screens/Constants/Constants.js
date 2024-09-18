
import { Dashboard } from "../Dashboard/DashboardParent/Dashboard";
import Home from "../Home/Home";
import { InventoryParent } from "../Inventory/InventoryParent/InventoryParent";
import { Order } from "../Orders/Orders";
import { PurchaseOrders } from '../Orders/OrdersChild/PurchaseOrders';
import Profile from "../Profile/Profile";
import { Collection } from '../Products/Collections/CollectionParent/Collection';
import { CollectionDetail } from "../Products/Collections/CollectionChild/CollectionDetail";
import { GiftCardMain } from "../Products/GiftCards/GiftCardParent/GiftCardMain";
import { CategoryParent } from "../Category/CategoryParent/CategoryParent";
import { CreateCategoryScreen } from "../Category/CategoryChild/AddCategory";


export const ScreensArray = [
    { route: 'Dashboard', label: 'Dashboard', icon: "user", component: Dashboard, },
    { route: 'Home', label: 'Home', icon: 'home', component: Home, },
    { route: 'Profile', label: 'Profile', icon: "user", component: Profile, },
    { route: "Orders", label: "Orders", component: Order },
    { route: "Collection", label: "Collection", component: Collection },
    { route: "Inventory", label: "Inventory", component: InventoryParent },
    { route: "CollectionDetail", label: "CollectionDetail", component: CollectionDetail },
    { route: "PurchaseOrders", label: "PurchaseOrders", component: PurchaseOrders },
    { route: "GiftCardMain", label: "GiftCardMain", component: GiftCardMain },
    { route: "Category", label: "Category", component: CategoryParent },
    { route: "CreateCategoryScreen", label: "CreateCategoryScreen", component: CreateCategoryScreen }
];