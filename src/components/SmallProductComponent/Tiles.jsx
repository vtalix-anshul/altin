import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import arrow__down from "../../assets/images/arrow__down.png";
import book__image from "../../assets/images/book__image.jpeg";
import gvt__pgvt__600x600 from "../../assets/images/CatalogueImages/GVT__PGVT__600x600.png"
import GVT__PGVT__600x1200 from "../../assets/images/CatalogueImages/GVT__PGVT__600x1200.png"
import porcelain__600x600 from "../../assets/images/CatalogueImages/porcelain__600x600.png"
import porcelain__600x1200 from "../../assets/images/CatalogueImages/porcelain__600x1200.png"
import wall__600x600 from "../../assets/images/CatalogueImages/wall__600x600.png"
import wall__600x1200 from "../../assets/images/CatalogueImages/wall__600x1200.png"
import double__charged__600x1200 from "../../assets/images/CatalogueImages/double__charged__600x1200.png"
import double__600x600 from "../../assets/images/CatalogueImages/double__charged__600x600.png"
import porcelain__800x800 from "../../assets/images/CatalogueImages/porcelain__800x800.png"
import double__800x800 from "../../assets/images/CatalogueImages/double__800x800.png"
import wall__800x800 from "../../assets/images/CatalogueImages/wall__800x800.png"
import gvt__pgvt__800x800 from "../../assets/images/CatalogueImages/gvt__pvgt__800x800.png"
import porcelain__800x1600 from "../../assets/images/CatalogueImages/porcelain__800x1600.png"
import double__800x1600 from "../../assets/images/CatalogueImages/double__800x1600.png"
import wall__800x1600 from "../../assets/images/CatalogueImages/wall__800x1600.png"
import gvt__pgvt__800x1600 from "../../assets/images/CatalogueImages/GVT__PGVT__800x1600.png"
import DownloadButton from "../sub-components/DownloadButton";
import { Link } from "react-router-dom";
const Tiles = ()=>{
    return (<>
        <div className="product__small__home__banner h-dvh -mt-24 relative grid items-center">
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
                        <h4 className="font-semibold text-4xl md:text-5xl">Download Our tile catalogues</h4>
                        <TabList className="size__button__parent flex justify-between flex-wrap gap-5">
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">600x600 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">600x1200 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">800x800 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">800x1600 mm</Tab>
                        </TabList>
                    </div>
                    <div className="py-12">

                        <TabPanels className={`py-12`}>
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={gvt__pgvt__600x600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"600x600 MM"} brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={double__600x600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"600x600 MM"} brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={porcelain__600x600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"600x600 MM"} brochure={"Porcelain"}  />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={wall__600x600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"600x600 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={GVT__PGVT__600x1200} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={double__charged__600x1200} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={porcelain__600x1200} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={wall__600x1200} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={gvt__pgvt__800x800} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={double__800x800} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={porcelain__800x800} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={wall__800x800} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={gvt__pgvt__800x1600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={double__800x1600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={porcelain__800x1600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={wall__800x1600} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                        </TabPanels>
                        <div className="w-full flex gap-6 flex-wrap justify-center">
                            <Link to="/sanitary" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Sanitary Wares</Link>
                            <Link to="/bath-fittings" className="grid place-items-center rounded-full text-2xl md:max-w-[350px] lg:max-w-[500px] w-full h-[150px] hover:bg-lightGray border border-solid border-darkGray">Bath Fittings</Link>
                        </div>
                    </div>
                </TabGroup>
            </div>
        </div>
    </>);
}

export default Tiles;