import ScrollDownButton from "../ScrollDownButton";
const HomeBanner = ()=>{
    return(<>
        <div className="product__home__banner h-dvh -mt-24 relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
                <h4 className="text-2xl">COLLECTIONS</h4>
                <h1 className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3">Diverse collections for <br /> global markets</h1>
            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <ScrollDownButton targetId={"products__collection"} />
            </div>
        </div>
    </>);
}

export default HomeBanner;