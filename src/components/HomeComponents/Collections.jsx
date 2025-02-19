import { Link } from "react-router-dom";

const Collections = ()=>{
    return (<>
        <div className="container px-4">
            <h4 className="text-center text-3xl md:text-5xl font-semibold">Our Collections</h4>
            <div className="para__description text-center text-darkGray">
                <p className="mt-6">
                Explore our diverse and premium-quality collections,
                </p>
                <p>
                crafted to meet your unique needs with style and functionality.
                </p>
            </div>
        </div>
        <div className="collections__banners__parent mt-[100px]">
            <div className="collections__banner__1 min-h-[600px]">
                <div className="container flex p-4 md:p-14 justify-center md:justify-start">
                    <div className="frame rounded-[60px] max-w-[650px] min-h-[480px] p-8 py-12 md:p-14 bg-white/80 backdrop-blur-lg">
                        <div className="inner__frame h-full flex flex-col justify-between">
                            <div className="frame__info__parent flex flex-col gap-3">
                                <div className="heading__part flex flex-col gap-2">
                                    <h3 className="text-2xl">Porcelain Tiles</h3>
                                    <p className="text-darkGray">Enhance your spaces with premium porcelain tiles - from GVT/PGVT to stunning big slabs for floors and walls.</p>
                                </div>
                                <div className="button__parenting__div">
                                    <div className="buttons__row flex flex-wrap gap-2">
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">GVT/PGVT</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Full Body</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Wall Tiles</button>
                                    </div>
                                    <div className="buttons__row flex flex-wrap gap-2 mt-2">
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Porcelain</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Double Charged</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Slab</button>
                                    </div>
                                </div>
                            </div>
                            <Link to="/tiles" className="text-lg relative w-fit bottom__line">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collections__banner__2 min-h-[600px]">
                <div className="container flex p-4 md:p-14 justify-center md:justify-end">
                    <div className="frame rounded-[60px] max-w-[650px] min-h-[480px] p-8 py-12 md:p-14 bg-white/80 backdrop-blur-lg">
                        <div className="inner__frame h-full flex flex-col justify-between">
                            <div className="frame__info__parent flex flex-col gap-3">
                                <div className="heading__part flex flex-col gap-2">
                                    <h3 className="text-2xl">Sanitary Wares</h3>
                                    <p className="text-darkGray">Discover the perfect blend of functionality and style with our exclusive range of sanitary ware.</p>
                                </div>
                                <div className="button__parenting__div">
                                    <div className="buttons__row flex flex-wrap gap-2">
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">One Piece Closet</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Wall Hung</button>
                                    </div>
                                    <div className="buttons__row flex flex-wrap gap-2 mt-2">
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Pan</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Urinal</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Wash Basin</button>
                                    </div>
                                </div>
                            </div>
                            <Link to="/sanitary" className="text-lg relative w-fit bottom__line">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collections__banner__3 min-h-[600px]">
                <div className="container flex p-4 md:p-14 justify-center md:justify-start">
                    <div className="frame rounded-[60px] max-w-[650px] min-h-[480px] p-8 py-12 md:p-14 bg-white/80 backdrop-blur-lg">
                        <div className="inner__frame h-full flex flex-col justify-between">
                            <div className="frame__info__parent flex flex-col gap-3">
                                <div className="heading__part flex flex-col gap-2">
                                    <h3 className="text-2xl">Bath Fittings</h3>
                                    <p className="text-darkGray">From sleek faucets to luxurious showers, and stylish accessories, we offer everything you need for a modern bathroom.</p>
                                </div>
                                <div className="button__parenting__div">
                                    <div className="buttons__row flex flex-wrap gap-2">
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Faucet</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Shower</button>
                                        <button className="bg-transparent btn border border-solid border-darkGray hover:border-orange">Accessories</button>
                                    </div>
                                </div>
                            </div>
                            <Link to="/bath-fittings" className="text-lg relative w-fit bottom__line">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Collections;