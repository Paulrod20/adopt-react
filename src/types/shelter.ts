export interface Shelter {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    latitude: number;
    longitude: number;
    phone: string;
    email: string;
    website?: string;
    hours: string;
    description: string;
    imageUrl: string;
    animalsAvailable: number;
}