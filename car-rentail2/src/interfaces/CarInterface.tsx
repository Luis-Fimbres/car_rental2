export default interface CarInterface {
    brand_id: number;
    model: string;
    year: number;
    color: string;

    img:string;
    price:number;

    license_plate: string;
    mileage: number;
    lat: number;
    lng: number;
    is_premium: number;
    rental_count: number;
    daily_rate: number;
    status: string;
    created_at: string;
    updated_at: string | null;
}