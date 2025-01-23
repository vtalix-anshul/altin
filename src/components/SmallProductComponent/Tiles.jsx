import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import arrow__down from "../../assets/images/arrow__down.png";
import book__image from "../../assets/images/book__image.jpeg";
import DownloadButton from "../sub-components/DownloadButton";
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
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">600x800 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">600x1200 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">800x800 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">800x1600 mm</Tab>
                        </TabList>
                    </div>
                    <div className="py-12">

                        <TabPanels>
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"600x800 MM"} brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"600x800 MM"} brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"600x800 MM"} brochure={"Porcelain"}  />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"600x800 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"600x1200 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
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
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"800x800 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
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
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">GVT / PGVT</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"GVT/PGVT"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Double Charged</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Double Charged"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Porcelain</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Porcelain"} />
                                    </div>
                                </div>    
                                <div className="card flex flex-col gap-6 p-3">
                                    <div className="img__parent">
                                        <img src={book__image} alt="" /> 
                                    </div>
                                    <div className="button__parent text-center">
                                        <p className="text-2xl">Wall</p>
                                        <DownloadButton size={"800x1600 MM"}  brochure={"Wall"} />
                                    </div>
                                </div>    
                            </TabPanel> 
                        </TabPanels>
                    </div>
                </TabGroup>
            </div>
        </div>
    </>);
}

export default Tiles;