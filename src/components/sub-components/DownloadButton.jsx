import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react";

const DownloadButton  = ({size, brochure})=>{

    const [brochureFormOpen, setBrochureForomOpen] = useState(false);
    const handleBrochureFormSubmit = (e)=>{
        e.preventDefault();

        alert("submitted");
    }

    const form__row = `w-full md:pb-8 flex gap-6 flex-col sm:flex-row`;
    const form__group = `w-full`;
    const form__input = `w-full appearance-none outline-none border-b border-solid border-darkGray min-h-8 bg-transparent`;
    const input__parent = `w-full`;
    const form__label = `mb-3`;
    
    const finalBrochure = size? `${brochure} - ${size}` : `${brochure}`;
    return (<>
        <button className="btn mt-3 text-white bg-orange" onClick={()=>setBrochureForomOpen(true)}>Donwload</button>
        <Dialog open={brochureFormOpen} onClose={()=>setBrochureForomOpen(false)} className={`bg-red-900 w-screen h-screen z-[999]`}>
            <DialogBackdrop transition
                className="fixed inset-0 bg-white/20 backdrop-blur-[3px] duration-200 ease-in-out data-[closed]:opacity-0"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-[999]">
                <DialogPanel className="max-w-[720px] w-full border border-solid border-darkGray bg-white rounded-3xl p-8 md:p-8 xl:p-16 z-[999]">
                <div className="close__button__modal flex justify-end md:hidden">
                    <button onClick={()=>setBrochureForomOpen(false)} className="font-semibold text-2xl mb-5">X</button>
                </div>
                <div className="quote_form ">
                    <div className="main__contact__form">
                        <div className="form__heading"><h2 className="mb-6 text-xl font-semibold">Ask for Brochure :)</h2></div>
                        <form onSubmit={(e)=>handleBrochureFormSubmit(e)}>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <label htmlFor="name" className={form__label}>Name</label>
                                    <div className={input__parent}>
                                        <input type="text" id="name" name="name" placeholder="Your name" className={form__input}/>
                                    </div>
                                </div><div className={form__group}>
                                    <label htmlFor="mobile" className={form__label}>Mobile</label>
                                    <div className={input__parent}>
                                        <input type="number" id="mobile" name="mobile" placeholder="Your number" className={form__input}/>
                                    </div>
                                </div>
                            </div>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <label htmlFor="brochure" className={form__label}>Brochure</label>
                                    <div className={input__parent}>
                                        <input type="text" id="brochure" name="brochure" placeholder="Your brochure" className={form__input} value={finalBrochure} readOnly/>
                                    </div>
                                </div><div className={form__group}>
                                    <label htmlFor="email" className={form__label}>Email</label>
                                    <div className={input__parent}>
                                        <input type="email" id="email" name="email" placeholder="Your email" className={form__input}/>
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
                                    <button type="submit" className="text-lg underline">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </DialogPanel>
            </div>
        </Dialog>
    </>);
}

export default DownloadButton;