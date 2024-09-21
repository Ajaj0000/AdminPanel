import React from "react";
import { EmptySectionImage } from "../../../../CommonScreens/EmptySectionImage";
import giftImg from '../../../../Assets/Images/giftCard.png';

function EmpGift() {
    return (
        <>
            <EmptySectionImage EmpImage={giftImg} manage="Start selling gift card" track="Add gift card products to sell or create gift cards and send them directly to your customers" createBtn="Create gift card" addBtn="Add gift card products" learnMore='By using gift cards, you agree to our Terms of Service' />
        </>
    )
}
export { EmpGift }