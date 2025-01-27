import truck from "../assets/icons/truck__icon.png";
import box from "../assets/icons/box__icon.png";
import compare from "../assets/icons/compare__icon.png";
import medal from "../assets/icons/medal__icon.png";
import message from "../assets/icons/message__icon.png";
import settings from "../assets/icons/setings__icon.png";
const HowWeWork = ()=>{
    return (<>
        <div className="py-44">
            <div className="container sm:px-2 md:px-4 lg:px-8 xl:px-16  flex flex-col gap-20">
                <div className="how__we__work__heading flex gap-6 flex-col text-center">
                    <h4 className="font-semibold text-3xl md:text-5xl">How We Work</h4>
                    <p className="text-darkGray">Our export process ensures a smooth and efficient journey, guiding you from initial inquiry to the final dispatch with precision and care. Experience hassle-free service tailored to meet your global business needs.</p>
                </div>
                <div className="how__we__work__process grid gap-20 relative py-6 px-4">
                    <div className="h-[90%] w-[2px] hidden md:block border border-solid border-orange absolute top-[5%] left-[50%]"></div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                        <div className="hidden md:grid absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 place-items-center top-0 left-[50%] -translate-x-1/2 bg-white">1</div>
                        <div className="icon__parent__div  w-full  flex justify-start md:justify-end">
                            <img src={message} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3">
                                <h6 className="text-xl">Inquiry</h6>
                                <p className="text-darkGray">We begin by understanding your needs and requirements to offer the best solutions tailored to your preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                    <div className="hidden md:grid absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">2</div>                        
                        <div className="icon__parent__div w-full  md:hidden flex justify-start">
                            <img src={settings} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3 md:text-right">
                                <h6 className="text-xl">Customised Product Selection</h6>
                                <p className="text-darkGray">Explore our diverse range of products, and we&apos;ll assist you in selecting the perfect options to meet your specifications.</p>
                            </div>
                        </div>
                        <div className="icon__parent__div w-full  hidden md:flex justify-start">
                            <img src={settings} alt="" className=""/>
                        </div>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                    <div className="absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 hidden md:grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">3</div>    
                        <div className="icon__parent__div  w-full  flex justify-start md:justify-end">
                            <img src={compare} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3">
                                <h6 className="text-xl"> Streamlined Manufacturing Process</h6>
                                <p className="text-darkGray">Your chosen products are crafted with precision using advanced technology and strict quality standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                    <div className="absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 hidden md:grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">4</div>                            
                        <div className="icon__parent__div w-full  md:hidden flex justify-start">
                            <img src={medal} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3 md:text-right">
                                <h6 className="text-xl">Rigorous Quality Check</h6>
                                <p className="text-darkGray">Each product undergoes thorough inspection to ensure it meets our high-quality benchmarks before leaving the facility.</p>
                            </div>
                        </div>
                        <div className="icon__parent__div w-full  hidden md:flex justify-start">
                            <img src={medal} alt="" className=""/>
                        </div>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                    <div className="absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 hidden md:grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">5</div>    
                        <div className="icon__parent__div  w-full  flex justify-start md:justify-end">
                            <img src={box} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3">
                                <h6 className="text-xl">Secure Packing</h6>
                                <p className="text-darkGray">Products are carefully packed with attention to detail to ensure they reach you in perfect condition.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 relative">
                    <div className="absolute rounded-full w-[40px] h-[40px] border-orange border-solid border-2 hidden md:grid place-items-center bottom-0 left-1/2 -translate-x-1/2 bg-white">6</div>                            
                        <div className="icon__parent__div w-full  md:hidden flex justify-start">
                            <img src={truck} alt="" className=""/>
                        </div>
                        <div className="icon__content__div">
                            <div className="content__parent flex flex-col gap-3 md:text-right">
                                <h6 className="text-xl">Timely Dispatch</h6>
                                <p className="text-darkGray">Your order is promptly shipped, ensuring on-time delivery
                                to your destination.</p>
                            </div>
                        </div>
                        <div className="icon__parent__div w-full  hidden md:flex justify-start">
                            <img src={truck} alt="" className=""/>
                        </div>
                    </div>
                </div>
                <h3 className="text-center text-xl md:text-2xl px-4">This efficient and reliable process ensures your complete satisfaction at every step!</h3>
                </div>
        </div>
    </>);
}

export default HowWeWork;