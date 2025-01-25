import truck from "../../assets/images/truck.png"
import global__maps from "../../assets/images/Map.png"
const GlobalMaps = ()=>{
    return (<>
        <div className="flex flex-col gap-2 container px-4 md:px-8 xl:px-16 py-16">
            <h3 className="text-2xl md:text-5xl text-center font-semibold">Global Footprint</h3>
            <div className="map__div__parent">
                <img src={global__maps} alt="exporting countries map" />
            </div>
            <div className="pt-16 flex flex-col gap-6">
                <div className="partner__parent_div pt-10 flex flex-col md:flex-row md:justify-between">
                    <div className="left__div w-full flex flex-col gap-4">
                        <h5 className="text-2xl md:text-5xl font-semibold">Our Reach</h5>
                        <p className="text-darkGray">For many years, we have been transforming homes worldwide. With our products shipped to over 3 continents and 20 countries, we are known for delivering quality and luxury across borders.</p>
                    </div>
                    <div className="right__div w-full md:px-2 lg:px-16">
                        <div className="reach__partners__card__parent flex flex-col sm:flex-row gap-4 md:gap-8 lg:gap-16 py-8 md:py-0">
                            <div className="reach__partners__card flex flex-col gap-6">
                                <div className=""><div className="button__div rounded-full bg-orange text-white w-16 h-16 grid place-items-center">03</div></div>
                                <div className="card__content flex flex-col gap-2">
                                    <h3 className="text-2xl">Continents</h3>
                                    <p className="text-darkGray text-sm">Proudly exporting premium products to 3 continents, ensuring global reach and quality.</p>
                                </div>
                            </div>
                            <div className="reach__partners__card flex flex-col gap-6">
                                <div className=""><div className="button__div rounded-full bg-orange text-white w-16 h-16 grid place-items-center">15</div></div>
                                <div className="card__content flex flex-col gap-2">
                                    <h3 className="text-2xl">Countries</h3>
                                    <p className="text-darkGray text-sm">Delivering excellence to over 15 countries across the globe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="truck__parent__div flex flex-col md:flex-row gap-8">
                <div className="left__div sm:h-[600px] sm:w-[600px] md:h-[100%] px-4 md:px-8 lg:px-16 overflow-hidden md:w-full">
                    <img src={truck} alt="" className="object-cover scale-125"/>
                </div>
                <div className="right__div px-4 md:px-0 md:pr-16 grid place-items-center w-full">
                    <div className="truck__content__parent py-10 md:py-0">
                        <h4 className="font-semibold text-3xl md:text-5xl">Close to the Port</h4>
                        <p className="md:text-xl mt-6 text-darkGray">The shipment is just 115 miles away from Mundra Port, India&apos;s largest and most accessible port. Its excellent road connectivity ensures fast and timely delivery of consignments.</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default GlobalMaps;