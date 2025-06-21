import { useEffect, useState } from 'react';

export const calculatePrices = (ticket_price: number, quantity: number) => {
    let totalPrice = ticket_price * quantity;
    let taxes = Math.round(0.1 * totalPrice); // Assuming 18% tax
    const platformFees = 12; // Fixed platform fees
    let grandTotal = totalPrice + platformFees + taxes;

    useEffect(() => {
        totalPrice = ticket_price * quantity;
        taxes = Math.round(0.1 * totalPrice); // Assuming 18% tax
        grandTotal = totalPrice + platformFees + taxes;
    }, [quantity]);

    return {
        totalPrice,
        taxes,
        platformFees,
        grandTotal,
    };
};
