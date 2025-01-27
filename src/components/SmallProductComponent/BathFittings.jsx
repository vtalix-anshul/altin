import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import arrow__down from "../../assets/images/arrow__down.png";

import Bath_Grating_BG05 from "../../assets/images/bath__fitting__images/Bath_Grating_BG05.png"
import Bib_cock_BL3618 from "../../assets/images/bath__fitting__images/Bib_cock_BL3618.png"
import Bib_cock_BL3601 from "../../assets/images/bath__fitting__images/Bib_cock_BL3601.png"
import Bib_cock_BL3603 from "../../assets/images/bath__fitting__images/Bib_cock_BL3603.png"
import Bib_cock_BL3607 from "../../assets/images/bath__fitting__images/Bib_cock_BL3607.png"
import Bib_cock_BL3611 from "../../assets/images/bath__fitting__images/Bib_cock_BL3611.png"
import Bib_cock_BL3616_A from "../../assets/images/bath__fitting__images/Bib_cock_BL3616_A.png"
import Bib_cock_BL3621_A from "../../assets/images/bath__fitting__images/Bib_cock_BL3621_A.png"
import Bib_cock_BL3623_FU from "../../assets/images/bath__fitting__images/Bib_cock_BL3623_FU.png"
import imageHS_06_10 from "../../assets/images/bath__fitting__images/HS_06.png"
import Over_Head_Shower from "../../assets/images/bath__fitting__images/Over_Head_Shower 222.png"
import Paper_Holder_124 from "../../assets/images/bath__fitting__images/Paper_Holder_124.png"
import Robe_Hook_116 from "../../assets/images/bath__fitting__images/Robe_Hook_116.png"
import Soap_Dish_113 from "../../assets/images/bath__fitting__images/Soap_Dish_113.png"
import Soap_Dispenser_115 from "../../assets/images/bath__fitting__images/Soap_Dispenser_115.png"
import Towel_Rack_112 from "../../assets/images/bath__fitting__images/Towel_Rack_112.png"
import Towel_Rail_111 from "../../assets/images/bath__fitting__images/Towel_Rail_111.png"
import Towel_Ring_110 from "../../assets/images/bath__fitting__images/Towel_Ring_110.png"
import Tumbler_Holder_114 from "../../assets/images/bath__fitting__images/Tumbler_Holder_114.png"
import bath__fittings from "../../assets/images/CatalogueImages/BathFittings__mockup.png";

import DownloadButton from "../sub-components/DownloadButton";
import { Link } from "react-router-dom";

const BathFittings = ()=>{

    const faucet__products = [
        { image: Bib_cock_BL3611, alt: "Bib_cock_BL3611", title: "Pillar Cock" },
        { image: Bib_cock_BL3616_A, alt: "Bib_cock_BL3616_A", title: "Diverter" },
        { image: Bib_cock_BL3603, alt: "Bib_cock_BL3603", title: "Pillar Cock" },
        { image: Bib_cock_BL3607, alt: "Bib_cock_BL3607", title: "Sink Cock" },
        { image: Bib_cock_BL3623_FU, alt: "Bib_cock_BL3623_FU", title: "Flush Cock" },
        { image: Bib_cock_BL3618, alt: "Bib_cock_BL3618", title: "Bathtub Spout" },
        { image: Bib_cock_BL3601, alt: "Bib_cock_BL3601", title: "Bib Cock" },
        { image: Bib_cock_BL3621_A, alt: "Bib_cock_BL3621_A", title: "Basin Mixer" },
    ];

    const shower__products = [
        { image: imageHS_06_10, alt: "head shower", title: "Hand Shower" },
        { image: Over_Head_Shower, alt: "over head shower", title: "Overhead Shower" },
    ];
      

    const accessories__product = [
        { image: Paper_Holder_124, alt: "paper holder", title: "Paper Holder" },
        { image: Robe_Hook_116, alt: "robe hook", title: "Robe Hook" },
        { image: Tumbler_Holder_114, alt: "tumbler holder", title: "Tumbler Holder" },
        { image: Towel_Rack_112, alt: "towel rack", title: "Towel Rack" },
        { image: Towel_Rail_111, alt: "towel rail", title: "Towel Rail" },
        { image: Towel_Ring_110, alt: "towel ring", title: "Towel Ring" },
        { image: Soap_Dish_113, alt: "soap dish", title: "Soap Dish" },
        { image: Bath_Grating_BG05, alt: "grating", title: "Bath Grating" },
        { image: Soap_Dispenser_115, alt: "soap dispenser", title: "Soap Dispenser" },
    ];
    return(<>
        <div className="product__small__home__banner__3 h-dvh -mt-24 relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
                <h4 className="text-2xl">COLLECTIONS</h4>
                <h1 className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3">Diverse collectins for <br /> global markets</h1>
            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <button className="">
                    <img src={arrow__down} alt="" />
                </button>
            </div>
        </div>
        <div className="catalouge__main__parent pt-44">
            <div className="container px-4 md:px-8 xl:px-16">
                <TabGroup>
                    <div className="heading flex flex-col items-center justify-center gap-8">
                        <h4 className="font-semibold text-4xl md:text-5xl text-center">Download our bath fitting catalogues</h4>
                        <TabList className="size__button__parent flex justify-center flex-wrap gap-5">
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Faucet</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Shower</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Accessories</Tab>
                        </TabList>
                    </div>
                    <div className="py-12 flex flex-col gap-16">

                        <TabPanels>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                    {faucet__products.map((product, index)=>(
                                        <div key={index} className="card bg-lightGray rounded-3xl px-3 py-5 max-w-[400px] h-full max-h-[420px] flex flex-col gap-3 justify-center">
                                            <div className="image__parent w-full  h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                                <img src={product.image} alt={product.alt} loading="lazy" className="rounded-3xl object-contain"/>
                                            </div>
                                            <div className="card__content  py-6 px-3 h-[20%]">
                                                <h3 className="text-2xl">{product.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                    {shower__products.map((product, index)=>(
                                        <div key={index} className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                                <img src={product.image} alt={product.alt} loading="lazy" className="rounded-3xl object-contain"/>
                                            </div>
                                            <div className="card__content  py-6 px-3 h-[20%]">
                                                <h3 className="text-2xl">{product.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                                    {accessories__product.map((product, index) => (
                                        <div
                                            key={index}
                                            className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3"
                                        >
                                            <div className="image__parent w-full h-[80%] flex justify-center bg-white p-3 px-5 rounded-3xl">
                                                <img
                                                src={product.image}
                                                alt={product.alt}
                                                loading="lazy"
                                                className="rounded-3xl object-contain"
                                                />
                                            </div>
                                            <div className="card__content py-6 px-3 h-[20%]">
                                                <h3 className="text-2xl">{product.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel> 
                        </TabPanels>

                        <div className="flex justify-center">
                            <div className="card flex gap-6 flex-col sm:flex-row p-3 w-full items-center max-w-[450px]">
                                <div className="img__parent">
                                    <img src={bath__fittings} alt="" className="w-[90%] mx-auto"/> 
                                </div>
                                <div className="button__parent text-center">
                                    <p className="text-2xl">Bath Fitting Catalogue</p>
                                    <DownloadButton brochure={"Bath Fitting Catalogue"} />
                                </div>
                            </div> 
                        </div>
                        <div className="w-full flex gap-6 flex-wrap justify-center">
                            <Link to="/tiles" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Porcelian Tiles</Link>
                            <Link to="/sanitary" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Sanitary Wares</Link>
                        </div>
                    </div>
                </TabGroup>
            </div>
        </div>
    </>);
}

export default BathFittings;