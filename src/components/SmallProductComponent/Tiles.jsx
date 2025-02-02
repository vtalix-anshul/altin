import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";


// images of 600x1200
import glossy from "../../assets/images/CatalogueImages/Glossy_Series.png";
import matt from "../../assets/images/CatalogueImages/Matt_Series.png";
import carving from "../../assets/images/CatalogueImages/Carving_Series.png";
import Statuario from "../../assets/images/CatalogueImages/Statuario_Series.png"
import Colorado from "../../assets/images/CatalogueImages/Colorado_Series.png";
import inky from "../../assets/images/CatalogueImages/Inky_Series.png";
import Bookmatch_Series from "../../assets/images/CatalogueImages/Bookmatch_Series.png";
import Endless_Glossy from "../../assets/images/CatalogueImages/Endless_Glossy.png";
import Endless_Carving from "../../assets/images/CatalogueImages/Endless_Carving.png";
import high_gloss from "../../assets/images/CatalogueImages/High_Gloss_Series.png";
import Double_Charged from "../../assets/images/CatalogueImages/Double_Charge.png";
import series_3d from "../../assets/images/CatalogueImages/3D_Series.png";
import wood from "../../assets/images/CatalogueImages/Wood_Series.png";

// images of 800x1600
import glossy__800x1600 from "../../assets/images/CatalogueImages/Glossy__800x1600.png";
import BookMatch__800x1600 from "../../assets/images/CatalogueImages/BookMatch__800x1600.png";
import matt__800x1600 from "../../assets/images/CatalogueImages/Matt__800x1600.png";
import carving__800x1600 from "../../assets/images/CatalogueImages/Carving__800x1600.png";
import hgih__gloss_800x1600 from "../../assets/images/CatalogueImages/HighGloss__800x1600.png";
import endless__800x1600 from "../../assets/images/CatalogueImages/Endless__800x1600.png"

import DownloadButton from "../sub-components/DownloadButton";
import { Link } from "react-router-dom";
import ScrollDownButton from "../ScrollDownButton";

const Tiles = ()=>{
    const tiles__800x1600 = [
        { image: glossy__800x1600, alt: "glossy tiles", title: "Glossy", brochure: "Glossy" },
        { image: matt__800x1600, alt: "matt tiles", title: "Matt", brochure: "Matt" },
        { image: carving__800x1600, alt: "carving tiles", title: "Carving", brochure: "Carving" },
        { image: hgih__gloss_800x1600, alt: "high gloss tiles", title: "High Gloss", brochure: "High Gloss" },
        { image: endless__800x1600, alt: "endless tiles", title: "Endless", brochure: "Endless" },
        { image: BookMatch__800x1600, alt: "bookmatch tiles", title: "BookMatch", brochure: "Bookmatch" },
    ];

    const tiles__600x800 = [
        { image: glossy, alt: "glossy tiles", title: "Glossy", brochure: "Glossy" },
        { image: matt, alt: "matt tiles", title: "Matt", brochure: "Matt" },
        { image: carving, alt: "carving tiles", title: "Carving", brochure: "Carving" },
        { image: Statuario, alt: "staturio tiles", title: "Statuario", brochure: "Statuario" },
        { image: Colorado, alt: "colorado tiles", title: "Colorado", brochure: "Colorado" },
        { image: inky, alt: "inky tiles", title: "Inky", brochure: "Inky" },
        { image: Bookmatch_Series, alt: "bookmatch tiles", title: "Bookmatch", brochure: "Bookmatch" },
        { image: Endless_Glossy, alt: "endless glossy tiles", title: "Endless Glossy", brochure: "Endless Glossy" },
        { image: Endless_Carving, alt: "endless carving tiles", title: "Endless Carving", brochure: "Endless Carving" },
        { image: high_gloss, alt: "high gloss tiles", title: "High Gloss", brochure: "High Gloss" },
        { image: Double_Charged, alt: "double charged tiles", title: "Double Charged", brochure: "Double Charged" },
        { image: series_3d, alt: "3d tiles", title: "3D", brochure: "3D" },
        { image: wood, alt: "wood tiles", title: "Wood", brochure: "Wood" },
    ];
    return (<>
        <div className="product__small__home__banner__1 h-dvh -mt-24 relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
                <h4 className="text-2xl">PORCELAIN TILES</h4>
                <h1 className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3">Diverse collections for <br /> global markets</h1>
            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <ScrollDownButton targetId={"tiles__section"} />
            </div>
        </div>
        <div className="catalouge__main__parent pt-44" id="tiles__section">
            <div className="container px-4 md:px-8 xl:px-16">
                <TabGroup>
                    <div className="heading flex flex-col items-center justify-center gap-8">
                        <h4 className="font-semibold text-4xl md:text-5xl text-center">Download Our tile catalogues</h4>
                        <TabList className="size__button__parent flex justify-center flex-wrap gap-5">
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">600x1200 mm</Tab>
                            <Tab className="btn bg-white hover:border-orange border-solid border border-darkGray data-[selected]:bg-orange data-[selected]:border-orange data-[selected]:text-white data-[hover]:bg-orange data-[hover]:text-white data-[focus]:border-orange">800x1600 mm</Tab>
                        </TabList>
                    </div>
                    <div className="py-12">
                        <TabPanels className={`py-12`}>
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                                {tiles__600x800.map((card, index)=>(
                                    <div key={index} className="card flex flex-col p-3 items-center">
                                        <div className="img__parent">
                                            <img src={card.image} alt={card.alt} loading="lazy" className="p-4"/> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">{card.title}</p>
                                            <DownloadButton size={"600x1200 MM"} brochure={card.brochure} />
                                        </div>
                                    </div> 
                                ))}
                            </TabPanel> 
                            <TabPanel className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
                                {tiles__800x1600.map((card,index)=>(
                                    <div key={index} className="card flex flex-col p-3 items-center">
                                        <div className="img__parent">
                                            <img src={card.image} alt={card.alt} /> 
                                        </div>
                                        <div className="button__parent text-center">
                                            <p className="text-2xl">{card.title}</p>
                                            <DownloadButton size={"800x1600 MM"}  brochure={card.brochure} />
                                        </div>
                                    </div>    
                                ))}    
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