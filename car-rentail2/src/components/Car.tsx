import type CarInterface from "../interfaces/CarInterface"

interface Props{
    data:CarInterface
}

export default function Car({data}:Props){
    const API_ASSETS = import.meta.env.VITE_API_ASSETS ?? "http://localhost:8000";
    const imageUrl = data.img ? `${API_ASSETS}/cars/${data.img}` : "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400";

    return(<>
                    <div className="car-card">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-3 fs-sm fw-medium">
                                        <div className="text-dark"><i className="fa-solid fa-person-walking text-muted me-2"></i>120m
                                            <span className="text-muted fw-normal">(4 min)</span>
                                        </div>
                                        <div className="text-warning"><i className="fa-solid fa-star"></i> <span className="text-dark">{data.lng}
                                            <span className="text-muted fw-normal">({data.lat})</span></span></div>
                                    </div>
                                    <i className="fa-regular fa-heart text-muted fs-5 cursor-pointer hover-danger"></i>
                                </div>
                                <img src={imageUrl}
                                    className="car-img" alt={data.model ?? "Car"} />
                                <div className="d-flex justify-content-between align-items-end mt-3">
                                    <div>
                                        <h5 className="fw-bold mb-1">{data.model}</h5>
                                        <div className="text-muted fs-sm">{data.year}</div>
                                    </div>
                                    <div className="text-end">
                                        <span className="fs-5 fw-bold">$24.59</span><span className="text-muted fs-sm"> / hour</span>
                                    </div>
                                </div>
                            </div>
    </>)
}