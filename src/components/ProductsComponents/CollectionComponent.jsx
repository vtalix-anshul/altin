import { Link } from "react-router-dom";
import arrow__down from "../../assets/images/arrow-right.svg";

const CollectionComponent = ()=>{
    return (<>
        <div className="collection__component__parent py-20">
            <div className="container grid gird-cols-1 lg:grid-cols-[30%_70%] px-4 gap-6">
                <div className="collection__heading">
                    <h3 className="text-5xl mb-4 font-semibold">Our Collections</h3>
                    <p className="text-darkGray">Explore our diverse and premium-quality collections, crafted to meet your unique needs with style and functionality.</p>
                </div>
                <div className="grid gap-6">
                    <div className="collection__parent__1 bg-white rounded-[32px] border border-solid border-darkGray">
                        <Link
                            to="/tiles"
                            className="w-full min-h-[350px] rounded-[32px] text-black hover:text-white flex flex-col gap-16 hover:cursor-pointer group p-4 md:p-8 xl:p-16"
                            > 
                            <div className="collection__heading__parent flex flex-col gap-6">
                                <div className="collection__heading flex flex-wrap justify-between w-full">
                                    <h4 className="collection__main__heading text-3xl lg:text-5xl font-semibold">Porcelain Tiles</h4>
                                    <img
                                    src={arrow__down}
                                    alt=""
                                    className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45"
                                    />
                                </div>
                                <div className="heading__description">
                                    <p className="text-darkGray group-hover:text-white w-full lg:w-2/3">Enhance your spaces with premium porcelain tiles - from GVT / PGVT to stunning big slabs for floors and walls.</p>
                                </div>
                            </div>
                            <div className="button__parent flex flex-wrap gap-3">
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">GVT / PGVT</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Full Body</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Wall Tiles</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Porcelain</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Double Charged</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Slab</button>
                            </div>
                        </Link>

                    </div>
                    <div className="collection__parent__2 bg-white rounded-[32px] border border-solid border-darkGray">
                        <Link
                            to="/sanitary"
                            className="w-full min-h-[350px] rounded-[32px] text-black hover:text-white flex flex-col gap-16 hover:cursor-pointer group p-4 md:p-8 xl:p-16"
                            >
                            <div className="collection__heading__parent flex flex-col gap-6">
                                <div className="collection__heading flex flex-wrap justify-between w-full">
                                    <h4 className="collection__main__heading text-3xl lg:text-5xl font-semibold">Sanitary Wares</h4>
                                    <img
                                    src={arrow__down}
                                    alt=""
                                    className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45"
                                    />
                                </div>
                                <div className="heading__description">
                                    <p className="text-darkGray group-hover:text-white w-full lg:w-2/3">Discover the perfect blend of functionality and style with our exclusive range of sanitary ware.</p>
                                </div>
                            </div>
                            <div className="button__parent flex flex-wrap gap-3">
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">One Piece Closet</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Wall Hung</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Pan</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Urinal</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Wash Basin</button>
                            </div>
                        </Link>
                    </div>
                    <div className="collection__parent__3 bg-white rounded-[32px] border border-solid border-darkGray">
                        <Link
                            to="/bath-fittings"
                            className="w-full min-h-[350px] rounded-[32px] text-black hover:text-white flex flex-col gap-16 hover:cursor-pointer group p-4 md:p-8 xl:p-16"
                            >
                            <div className="collection__heading__parent flex flex-col gap-6">
                                <div className="collection__heading flex flex-wrap justify-between w-full">
                                    <h4 className="collection__main__heading text-3xl lg:text-5xl font-semibold">Bath Fittings</h4>
                                    <img
                                    src={arrow__down}
                                    alt=""
                                    className="transform transition-transform duration-300 ease-in-out rotate-0 group-hover:rotate-45"
                                    />
                                </div>
                                <div className="heading__description">
                                    <p className="text-darkGray group-hover:text-white w-full lg:w-2/3">From sleek faucets to luxurious showers, and stylish accessories, we offer everything you need for a modern bathroom.</p>
                                </div>
                            </div>
                            <div className="button__parent flex flex-wrap gap-3">
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Faucet</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Shower</button>
                                <button className="bg-white btn border border-darkGray border-solid hover:border-orange group-hover:text-black">Accessories</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default CollectionComponent;