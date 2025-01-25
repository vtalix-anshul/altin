import integrity from "../../assets/images/integrity.png";
import reliability from "../../assets/images/reliability.png";
import quality from "../../assets/images/quality.png";
import customer__centric from "../../assets/images/customer__centric.png";
import commitment from "../../assets/images/commitment.png";

const OurValues = ()=>{
    return (<>
        <div className="bg-lightGray">
            <div className="px-4 py-24 lg:py-44 lg:px-16 container flex flex-col gap-14 items-center md:items-start">
                <div className="section__heading w-full flex flex-col gap-5 py-4 px-4 md:px-16 xl:px-56 text-center">
                    <h4 className="text-3xl md:text-5xl text-center w-full">Our Values</h4>
                    <p className="text-darkGray text-xl">We are committed to quality, innovation, and sustainability. With integrity and creativity, we craft premium ceramic tiles that inspire and elevate spaces while prioritizing environmental responsibility and lasting relationships.</p>
                </div>
                <div className="section__content w-full">
                    <div className="first__row flex flex-col md:flex-row w-full flex-wrap gap-5 justify-center items-center lg:items-start">
                        <div className="content__box w-full max-w-[310px] py-12 px-7 lg:px-14 flex flex-col justify-center text-center">
                            <div className="button__number flex justify-center">
                                <div className="rounded-full bg-orange text-white w-[48px] h-[48px] grid place-items-center">
                                    <img src={integrity} alt="icon" />
                                </div>
                            </div>
                            <div className="content__box mt-4">
                                <h5 className="text-lg mb-4">Integrity and Ethics</h5>
                                <p className="text-sm text-darkGray">We conduct every business interaction with honesty, transparency, and adherence to the highest ethical standards.</p>
                            </div>
                        </div>
                        <div className="content__box w-full max-w-[310px] py-12 px-7 lg:px-14 flex flex-col justify-center text-center">
                            <div className="button__number flex justify-center">
                            <div className="rounded-full bg-orange text-white w-[48px] h-[48px] grid place-items-center">
                                    <img src={reliability} alt="icon" />
                                </div>
                            </div>
                            <div className="content__box mt-4">
                                <h5 className="text-lg mb-4">Reliability and Trust</h5>
                                <p className="text-sm text-darkGray">Trusted by global clients for our dependable services, timely deliveries, and consistent quality.</p>
                            </div>
                        </div>
                        <div className="content__box w-full max-w-[340px] py-12 px-7 lg:px-14 flex flex-col justify-center text-center">
                            <div className="button__number flex justify-center">
                            <div className="rounded-full bg-orange text-white w-[48px] h-[48px] grid place-items-center">
                                    <img src={quality} alt="icon" />
                                </div>
                            </div>
                            <div className="content__box mt-4">
                                <h5 className="text-lg mb-4">Quality First</h5>
                                <p className="text-sm text-darkGray">Uncompromising focus on delivering world-class products that meet international benchmarks of excellence.</p>
                            </div>
                        </div>
                        <div className="content__box w-full max-w-[310px] py-12 px-7 lg:px-14 flex flex-col justify-center text-center">
                            <div className="button__number flex justify-center">
                            <div className="rounded-full bg-orange text-white w-[48px] h-[48px] grid place-items-center">
                                    <img src={commitment} alt="icon" />
                                </div>
                            </div>
                            <div className="content__box mt-4">
                                <h5 className="text-lg mb-4">Commitment to Information</h5>
                                <p className="text-sm text-darkGray">Pioneering modern designs and technologies to stay ahead in the global market with cutting-edge solutions.</p>
                            </div>
                        </div>
                        <div className="content__box w-full max-w-[310px] py-12 px-7 lg:px-14 flex flex-col justify-center text-center">
                            <div className="button__number flex justify-center">
                            <div className="rounded-full bg-orange text-white w-[48px] h-[48px] grid place-items-center">
                                    <img src={customer__centric} alt="icon" />
                                </div>
                            </div>
                            <div className="content__box mt-4">
                                <h5 className="text-lg mb-4">Customer Centric Approach</h5>
                                <p className="text-sm text-darkGray">Dedicated to understanding and exceeding customer expectations with personalized solutions and outstanding support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default OurValues;