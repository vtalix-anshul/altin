import { Link } from "react-router-dom";
import container__image from "../../assets/images/altin__container.png";
const ProjectTalk = ()=>{
    return (<>
        <div className="project_talks pb-44 px-4 md:px-8 lg:px-16">
            <div className="container bg-black rounded-[42px] py-32 px-3 md:px-6 xl:px-28 flex flex-col gap-16">
                <div className="heading__section flex flex-col items-center">
                    <h1 className="text-white text-center text-3xl md:text-5xl">Let&apos;s talk about your project</h1>
                    <p className="text-darkGray mt-5 text-center md:w-2/3">At Altin exports, we&apos;re more than suppliers - we&apos;re partners in building your success. From residential to commercial and large-scale projects, we provide expertise, products, and solutions tailored to your needs.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="conatiner__image w-full">
                        <img src={container__image} alt="" className="rounded-[30px]"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-6 border-b border-slid border-darkGray">
                        <div className="cards1 py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6">
                            <div className="bumber__div flex justify-center">
                                <div className="rounded-full grid place-items-center bg-orange text-white w-[48px] h-[48px]">1</div>
                            </div>
                            <div className="card__content flex flex-col text-center w-full gap-3">
                                <h3 className="text-white text-lg">Comprehensive Range</h3>
                                <p className="text-darkGray text-sm">High-quality tiles, sanitaryware, durable materials, and stylish accessories in one place.</p>
                            </div>
                        </div>
                        <div className="cards2 py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6">
                            <div className="bumber__div flex justify-center">
                                <div className="rounded-full grid place-items-center bg-orange text-white w-[48px] h-[48px]">2</div>
                            </div>
                            <div className="card__content flex flex-col text-center w-full gap-3">
                                <h3 className="text-white text-lg">Global Experience</h3>
                                <p className="text-darkGray text-sm">Expertise in exporting materials worldwide with seamless logistics and timely delivery.</p>
                            </div>
                        </div>
                        <div className="cards3 py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6">
                            <div className="bumber__div flex justify-center">
                                <div className="rounded-full grid place-items-center bg-orange text-white w-[48px] h-[48px]">3</div>
                            </div>
                            <div className="card__content flex flex-col text-center w-full gap-3">
                                <h3 className="text-white text-lg">Custom Solutions</h3>
                                <p className="text-darkGray text-sm">Tailored recommendations to fit your vision, goals, and budget.</p>
                            </div>
                        </div>
                        <div className="cards4 py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6">
                            <div className="bumber__div flex justify-center">
                                <div className="rounded-full grid place-items-center bg-orange text-white w-[48px] h-[48px]">4</div>
                            </div>
                            <div className="card__content flex flex-col text-center w-full gap-3">
                                <h3 className="text-white text-lg">Uncompromized Quality</h3>
                                <p className="text-darkGray text-sm">Premium materials ensuring durability, aesthetics, and global standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get__in__touch flex flex-col gap-6 p-3 items-center">
                    <h5 className="w-full md:w-2/3 text-white text-2xl text-center">Let&apos;s create something extraordinary together.
                    Contact us today for expert guidance and innovative solutions!</h5>
                    <Link to='/contact-us' className="bg-orange text-lg btn w-fit text-white hover:text-black hover:bg-white">Get in touch</Link>
                </div>
            </div>
        </div>
    </>);
}

export default ProjectTalk;