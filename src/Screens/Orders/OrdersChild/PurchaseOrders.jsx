import React from 'react';
import { EmptySectionImage } from '../../../CommonScreens/EmptySectionImage';
import img from '../../../Assets/Images/download.png';

function PurchaseOrders() {
    return (
        <>
            <EmptySectionImage EmpImage={img} manage="Manage your purchase orders" track="Track and receive inventory ordered from suppliers" createBtn="Create purchase order" learnMore="Learn more about purchase orders"/>
        </>
    )
}
export { PurchaseOrders }