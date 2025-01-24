import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import arrow__down from "../../assets/images/arrow__down.png";
import bath__accessories from "../../assets/images/CatalogueImages/bath__accessories.png"
import shower from "../../assets/images/CatalogueImages/shower.png"
import health__faucet from "../../assets/images/CatalogueImages/health__faucet.png"
import faucet from "../../assets/images/CatalogueImages/faucet.png"
import altin__exports__panel__1 from "../../assets/images/altin__exports__panel__1.png"
import altin__exports__panel__2 from "../../assets/images/altin__exports__panel__2.png"
import altin__exports__panel__3 from "../../assets/images/altin__exports__panel__3.png"
import altin__exports__panel__4 from "../../assets/images/altin__exports__panel__4.png"
import DownloadButton from "../sub-components/DownloadButton";
import { Link } from "react-router-dom";
const BathFittings = ()=>{
    return(<>
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
                        <h4 className="font-semibold text-4xl md:text-5xl">Download our sanitary ware catalogues</h4>
                        <TabList className="size__button__parent flex justify-between flex-wrap gap-5">
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Faucet</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Shower</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Health Faucet</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">Accessories</Tab>
                        </TabList>
                    </div>
                    <div className="py-12 flex flex-col gap-16">

                        <TabPanels>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="flex flex-wrap justify-center gap-6">
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Faucet</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="card flex gap-6 p-3 w-full items-center max-w-[450px]">
                                        <div className="img__parent">
                                            <img src={faucet} alt="" className="w-[90%] mx-auto"/> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">Faucet Catalogue</p>
                                            <DownloadButton brochure={"Faucet Catalogue"} />
                                        </div>
                                    </div> 
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="flex flex-wrap justify-center gap-6">
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Shower</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="card flex gap-6 p-3 w-full items-center max-w-[450px]">
                                        <div className="img__parent">
                                            <img src={shower} alt="" className="w-[90%] mx-auto"/> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">Shower Catalogue</p>
                                            <DownloadButton brochure={"Shower Catalogue"} />
                                        </div>
                                    </div> 
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="flex flex-wrap justify-center gap-6">
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                    <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                        <div className="image__parent w-full">
                                            <img src={altin__exports__panel__3} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="card__content py-6 px-3">
                                            <h3 className="text-2xl">Health Faucet</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="card flex gap-6 p-3 w-full items-center max-w-[450px]">
                                        <div className="img__parent">
                                            <img src={health__faucet} alt="" className="w-[90%] mx-auto"/> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">Health Faucet Catalogue</p>
                                            <DownloadButton brochure={"Health Faucet Catalogue"} />
                                        </div>
                                    </div> 
                                </div>
                            </TabPanel>
                            <TabPanel className="flex gap-16 flex-col">
                                <div className="flex gap-6 flex-wrap justify-center">
                                    <div className="flex flex-wrap justify-center gap-6">
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                        <div className="card bg-lightGray rounded-3xl p-3 max-w-[400px] flex flex-col gap-3">
                                            <div className="image__parent w-full">
                                                <img src={altin__exports__panel__4} alt="" className="rounded-3xl"/>
                                            </div>
                                            <div className="card__content py-6 px-3">
                                                <h3 className="text-2xl">Accessories</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="card flex gap-6 p-3 w-full items-center max-w-[450px]">
                                        <div className="img__parent">
                                            <img src={bath__accessories} alt="" className="w-[90%] mx-auto"/> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">Accessories Catalogue</p>
                                            <DownloadButton brochure={"Bath Fitting Accessories Catalogue"} />
                                        </div>
                                    </div> 
                                </div>
                            </TabPanel> 
                        </TabPanels>
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