import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import EWC from "../../assets/images/sanitary__images/EWC.png";
import floor__mounted from "../../assets/images/sanitary__images/floor__mounted.png";
import flush__tank from "../../assets/images/sanitary__images/flush__tank.png";
import full__pedastal from "../../assets/images/sanitary__images/full__pedastal.png";
import one__piece__closet from "../../assets/images/sanitary__images/one__piece__closet.png";
import p__trap from "../../assets/images/sanitary__images/p__trap.png";
import table__top from "../../assets/images/sanitary__images/table__top.png";
import wall__mounted from "../../assets/images/sanitary__images/wall__mounted.png";
import urinal from "../../assets/images/sanitary__images/urinal.png";
import wall__hung from "../../assets/images/sanitary__images/wall__hung.png";
import toilet__seat__cover from "../../assets/images/sanitary__images/toilet__seat__cover.png"
import half__one__piece from "../../assets/images/sanitary__images/half__one__piece.png"
import half__pedastal from "../../assets/images/sanitary__images/half__pedastal.png"
import one__piece__fittings from "../../assets/images/sanitary__images/one__piece__fittings.jpg"


import sanitary__wares from "../../assets/images/CatalogueImages/SanitaryWaresMockups.png";
import DownloadButton from "../sub-components/DownloadButton";
import { Link } from "react-router-dom";
import ScrollDownButton from "../ScrollDownButton";
const SanitaryWare = ()=>{

    const closet__products = [
        { image: one__piece__closet, alt: "One Piece Closet", title: "One Piece Closet"},
        { image: wall__hung, alt: "Wall hung", title: "Wall hung"},
        { image: floor__mounted, alt: "Floor Mounted", title: "Floor mounted"},
        { image: EWC, alt: "EWC", title: "EWC"},
    ];
    
    const basin__products = [
        { image: table__top, alt: "Table Top", title: "Table Top"},
        { image: wall__mounted, alt: "Wall Mounted", title: "Wall Mounted"},
        { image: full__pedastal, alt: "Full Pedastal", title: "Full Pedastal"},
        { image: half__pedastal, alt: "Half Pedastal", title: "Half Pedastal"},
        { image: half__one__piece, alt: "Half One Piece", title: "Half One Piece"},
    ];
    
    const accessories__product = [
        { image:toilet__seat__cover, alt:"Toilet seat cover", title: "Toilet Seat Cover"},
        { image: flush__tank, alt: "Flush tank", title: "Flush Tank"},
        { image: p__trap, alt: "P Trap", title: "P trap"},
        { image:one__piece__fittings, alt:"One Piece Fittings", title:"One Piece Fittings"},
    ];

    return(<>
        <div className="product__small__home__banner__2 h-dvh -mt-[100px] relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
                <h4 className="text-2xl">SANITARY WARES</h4>
                <h1 className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3">Diverse collections for <br /> global markets</h1>
            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <ScrollDownButton targetId={"sanitary__section"} />
            </div>
        </div>
        <div className="catalouge__main__parent pt-44" id="sanitary__section">
            <div className="container px-4 md:px-8 xl:px-16">
                <TabGroup>
                    <div className="heading flex flex-col items-center justify-center gap-8">
                        <h4 className="font-semibold text-4xl md:text-5xl text-center">Download our sanitary ware catalogues</h4>
                        <TabList className="size__button__parent flex justify-center flex-wrap gap-5">
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Closet</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Basin</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Urinal</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Accessories</Tab>
                        </TabList>
                    </div>
                    <div className="py-12 flex flex-col gap-16">

                        <TabPanels>
                            <TabPanel className="flex flex-col gap-16">
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                    {closet__products.map((product, index)=>(
                                        <div key={index} className="card bg-lightGray rounded-3xl px-3 py-5 max-w-[400px] h-full max-h-[420px] flex flex-col gap-3 justify-center">
                                            <div className="image__parent w-full  h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                                <img src={product.image} alt={product.alt} loading="lazy" className="rounded-3xl object-contain"/>
                                            </div>
                                            <div className="card__content  py-6 px-3 h-[20%]">
                                                <h3 className="text-2xl bottom__line relative w-fit">{product.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                    {basin__products.map((product, index)=>(
                                        <div key={index} className="card bg-lightGray rounded-3xl px-3 py-5 max-w-[400px] h-full max-h-[420px] flex flex-col gap-3 justify-center">
                                            <div className="image__parent w-full  h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                                <img src={product.image} alt={product.alt} loading="lazy" className="rounded-3xl object-contain"/>
                                            </div>
                                            <div className="card__content  py-6 px-3 h-[20%]">
                                                <h3 className="text-2xl bottom__line relative w-fit">{product.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="card bg-lightGray rounded-3xl px-3 py-5 max-w-[400px] max-h-[420px] h-full flex flex-col gap-3 justify-center">
                                    <div className="image__parent w-full  max-h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                        <img src={urinal} alt={urinal} loading="lazy" className="rounded-3xl max-h-[250px] object-contain"/>
                                    </div>
                                    <div className="card__content  py-6 px-3 h-[20%]">
                                        <h3 className="text-2xl bottom__line relative w-fit">Urinal</h3>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                
                            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                {accessories__product.map((product, index)=>(
                                    <div key={index} className="card bg-lightGray rounded-3xl px-3 py-5 max-w-[400px] h-full max-h-[420px] flex flex-col gap-3 justify-center">
                                        <div className="image__parent w-full  h-[80%] flex justify-center bg-[#FDFDFD] p-3 px-5 rounded-3xl">
                                            <img src={product.image} alt={product.alt} loading="lazy" className="rounded-3xl object-contain"/>
                                        </div>
                                        <div className="card__content  py-6 px-3 h-[20%]">
                                            <h3 className="text-2xl bottom__line relative w-fit">{product.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </TabPanel> 
                        </TabPanels>

                        <div className="flex justify-center">
                            <div className="card flex gap-6 p-3 flex-col sm:flex-row w-full items-center max-w-[450px]">
                                <div className="img__parent">
                                    <img src={sanitary__wares} alt="" className="w-[90%] mx-auto"/> 
                                </div>
                                <div className="button__parent text-center">
                                    <p className="text-2xl">Sanitary Ware Catalogue</p>
                                    <DownloadButton  brochure={"Sanitary Ware Catalogue"} />
                                </div>
                            </div> 
                        </div>

                        <div className="w-full flex gap-6 flex-wrap justify-center">
                            <Link to="/tiles" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Porcelain Tiles</Link>
                            <Link to="/bath-fittings" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Bath Fittings</Link>
                        </div>
                    </div>
                </TabGroup>
            </div>
        </div>
    </>);
}

export default SanitaryWare;