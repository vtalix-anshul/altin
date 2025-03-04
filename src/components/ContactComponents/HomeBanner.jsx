import { toast } from "react-toastify";
import ScrollDownButton from "../ScrollDownButton";
import { useState } from "react";

const HomeBanner = ()=>{
    const form__row = `w-full pb-8 flex gap-6 flex-col sm:flex-row`;
    const form__group = `w-full`;
    const form__input = `w-full appearance-none outline-none border-b border-solid border-darkGray min-h-8 bg-transparent`;
    const input__parent = `w-full`;
    const form__label = `mb-3`;

    const [loading, setLoading] = useState(false);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        try {
            setLoading(true);
            const response = await fetch("./api/formHandler.php", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setLoading(false);
                toast.success("Message sent successfully!");
                e.target.reset();
            } else {
                setLoading(false);
                throw new Error("Something went wrong");
            }
        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong ");
        }
    };

    return (<>
        <div className="contact__home__banner h-dvh -mt-[100px] relative grid items-center">
            <div className="about__banner__content relative text-white text-center">
            <h4 className="text-2xl">
                CONTACT US
            </h4>

            <h1
            className="text-5xl lg:text-6xl px-4 md:px-28 lg:px-64 font-semibold mt-3"
            >
                Don&apos;t be shy
            </h1>

            </div>
            <div className="absolute flex justify-center w-full bottom-16">
                <ScrollDownButton targetId={"contact__form"} />
            </div>
        </div>
        <div className="" id="contact__form">
            <div className="px-4 py-24 lg:py-44 lg:px-16 container grid grid-cols-1 gap-16 items-center">
                <div className="grid grid-cols-1 md:grid-cols-[50%_50%] lg:grid-cols-[40%_60%] gap-6 md:gap-3">
                    <div className="contact__heading px-4 h-full flex flex-col justify-between">
                        <div className="contact__heading__child flex flex-col gap-3 mb-6">
                            <h3 className="text-3xl lg:text-5xl font-semibold">Let&apos;s work together</h3>
                            <a href="mailto:info@altinexports.com" className="text-orange w-fit">info@altinexports.com</a>
                            <a href="tel:+918488884599" target="_blank">+91 8488884599</a>
                        </div>
                        <div className="aline__info flex flex-col justify-between gap-6">
                            <div className="contact__info">
                                <h2 className="text-xl mb-2">Corporate Address:</h2>
                                <p>503, Asopalav Avenue,</p>
                                <p>Nana Mava Main Road,</p>
                                <p>Rajkot - 360005 (Guj.), India</p>
                            </div>
                            <div className="contact__info">
                                <h2 className="text-xl mb-2">Factory Address:</h2>
                                <p>Altin Tiles & Bathware,</p>
                                <p>Matel Road,</p>
                                <p>8 - A National Highway,</p>
                                <p>Morbi - 363621 (Guj.), India</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form py-2 px-4 md:px-9 xl:px-14">
                        <form onSubmit={(e)=>handleContactSubmit(e)} className="main__contact__form">
                            <div className="form__heading"><h2 className="mb-6">Say Hello :)</h2></div>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <input type="hidden" value="contact__form" name="type" id="type"/>
                                    <label htmlFor="name" className={form__label}>Name</label>
                                    <div className={input__parent}>
                                        <input type="text" id="name" name="name" placeholder="Your name" className={form__input} required/>
                                    </div>
                                </div><div className={form__group}>
                                    <label htmlFor="mobile" className={form__label}>Mobile</label>
                                    <div className={input__parent}>
                                    <input 
                                        type="text" 
                                        id="mobile" 
                                        name="mobile" 
                                        placeholder="Your number" 
                                        className={form__input} 
                                        required
                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9+]/g, '')} 
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <label htmlFor="company" className={form__label}>Company</label>
                                    <div className={input__parent}>
                                        <input type="text" id="company" name="company" placeholder="Your company name" className={form__input} required/>
                                    </div>
                                </div><div className={form__group}>
                                    <label htmlFor="email" className={form__label}>Email</label>
                                    <div className={input__parent}>
                                        <input type="email" id="email" name="email" placeholder="Your email" className={form__input} required/>
                                    </div>
                                </div>
                            </div>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <label htmlFor="message">Message</label>
                                    <div className={input__parent}>
                                        <input type="text" name="message" id="message" placeholder="Start Typing your message" className={form__input} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={form__group}>
                                    <button type="submit" disabled={loading} className="text-lg bottom__line relative border-b-2 border-black border-solid">
                                        {loading? "Processing...": "Submit"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HomeBanner;