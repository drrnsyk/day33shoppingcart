export interface Cart {
    name: string;
    address: string;
    email: string;
    phone: string;
    express: boolean;
    delivery: string;
    items: Item[];
}

export interface Item {
    name: string;
    quantity: number;
    unitPrice: number;
}