import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

const GetAQuote = ()=>{
    
    const form__row = `w-full pb-8 flex gap-6 flex-col sm:flex-row`;
    const form__group = `w-full`;
    const form__input = `w-full appearance-none outline-none border-b border-solid border-darkGray min-h-8 bg-transparent`;
    const input__parent = `w-full mt-1`;
    const form__label = `mb-3`;

    const [isOpen, setIsOpen] = useState(false);

    const handleQuoteSubmit = (e)=>{
        e.preventDefault();
        console.log("event done");
    }

    return (<>
        <div className="text-lg text-white">
            <button className="btn bg-orange -px-2 -py-2 text-base sm:text-lg hover:bg-white hover:text-orange transition-all duration-200" onClick={()=>setIsOpen(true)}>Get a Quote</button>
        </div>
        <Dialog open={isOpen} onClose={()=>setIsOpen(false)} className={`bg-red-900 w-screen h-screen z-[999]`}>
        <DialogBackdrop transition
            className="fixed inset-0 bg-white/20 backdrop-blur-[2px] duration-200 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-[999]">
            <DialogPanel className="max-w-[720px] w-full border border-solid border-darkGray bg-white rounded-3xl p-8 md:p-8 xl:p-16 z-[999]">
                {/* <DialogTitle className={`font-semibold text-xl text-left`}>
                    Get your personalised quote :)
                </DialogTitle> */}
                <div className="close__button__modal flex justify-end md:hidden">
                    <button onClick={()=>setIsOpen(false)} className="font-semibold text-2xl mb-5">X</button>
                </div>
                <div className="quote_form ">
                    <div className="main__contact__form">
                        <div className="form__heading"><h2 className="mb-6 text-xl font-semibold">Get your personalised quote :)</h2></div>
                        <form onSubmit={(e)=>handleQuoteSubmit(e)}>
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
                                    <label htmlFor="company" className={form__label}>Company</label>
                                    <div className={input__parent}>
                                        <input type="text" id="company" name="company" placeholder="Your company name" className={form__input}/>
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
                                    <label htmlFor="country" className={form__label}>Country</label>
                                    <div className={input__parent}>
                                        <input type="text" id="country" name="country" placeholder="Type your country" className={form__input}/>
                                    </div>
                                </div><div className={form__group}>
                                    <label htmlFor="topic" className={form__label}>Product</label>
                                    <div className={input__parent}>
                                        <input type="text" id="product" name="product" placeholder="Required product" className={form__input}/>
                                    </div>
                                </div>
                            </div>
                            <div className={form__row}>
                                <div className={form__group}>
                                    <label htmlFor="message">Description</label>
                                    <div className={input__parent}>
                                        <textarea name="description" id="description" rows={2} placeholder="Start Typing your message" className={form__input}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={form__group}>
                                    <button type="submit" className="text-lg bottom__line relative border-b-2 border-black border-solid">Submit</button>
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

export default GetAQuote;