import arrow__down from "../../assets/images/arrow__down.png";
import second__image from "../../assets/images/altin__exports__about__page.png";

const HomeBanner = ()=>{
    return (<>
        <div className="about__home__banner h-dvh -mt-24 relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
                <h4 className="text-2xl">ABOUT US</h4>
                <h1 className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3">Discover Our Journey of Innovation,
                Quality, and Global Excellence</h1>
            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <button className="">
                    <img src={arrow__down} alt="" />
                </button>
            </div>
        </div>
        <div className="">
            <div className="px-4 py-24 lg:py-44 lg:px-16 container grid grid-cols-1 gap-16 items-center">
                <div className="about_information__parent flex flex-col gap-10 md:gap-16">
                    <div className="main__heading text-center w-full">
                        <p><span className="text-orange">/ </span> &nbsp; &nbsp; &nbsp;ALTIN EXPORTS</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 py-4 px-4 md:px-16 xl:px-56 text-center">
                        <h4 className="text-2xl md:text-5xl">Altin - Elevating spaces, Globally!</h4>
                        <div className="para__info text-darkGray flex flex-col gap-8">
                            <p>At Altin Exports, we pride ourselves on being a trusted exporter of premium tiles, sanitary ware, and bath fittings. Our unique business model is built on strategic partnerships with leading manufacturers, allowing us to deliver innovative and high-quality products tailored to meet the needs of our global clientele.</p>
                            <p>With a keen eye for design and a deep understanding of market trends, we provide our partner manufacturers with creative concepts and detailed instructions, ensuring that every product reflects excellence in both form and function. From the initial design phase to the final product, we oversee every step of the process, maintaining the highest standards of quality craftsmanship.</p>
                            <p>Our focus on customer satisfaction, combined with a deep understanding of global trends, makes us a trusted partner for those seeking top-tier products in tiles, sanitary ware, and bath fittings.</p>
                            <p>Discover the difference with Altin Exports, where innovation meets reliability and customer satisfaction is at the heart of everything we do.</p>
                        </div>
                    </div>
                </div>
                <div className="about__image__altin__exports">
                    <img src={second__image} alt="" />
                </div>
            </div>
        </div>
    </>);
}

export default HomeBanner;