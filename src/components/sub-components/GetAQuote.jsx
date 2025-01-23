import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

const GetAQuote = ()=>{
    
    const form__row = `w-full md:pb-8 flex gap-6 flex-col sm:flex-row`;
    const form__group = `w-full`;
    const form__input = `w-full appearance-none outline-none border-b border-solid border-darkGray min-h-8 bg-transparent`;
    const input__parent = `w-full`;
    const form__label = `mb-3`;

    const [isOpen, setIsOpen] = useState(false);

    const handleQuoteSubmit = (e)=>{
        e.preventDefault();
        console.log("event done");
    }

    return (<>
        <div className="text-lg text-white">
            <button className="btn bg-orange -px-2 -py-2 text-base sm:text-lg" onClick={()=>setIsOpen(true)}>Get a Quote</button>
        </div>
        <Dialog open={isOpen} onClose={()=>setIsOpen(false)} className={`bg-red-900 w-screen h-screen z-[999]`}>
        <DialogBackdrop transition
            className="fixed inset-0 bg-white/20 backdrop-blur-[1px] duration-200 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 z-[999]">
            <DialogPanel className="max-w-[720px] w-full border bg-white rounded-3xl p-8 md:p-8 xl:p-16 z-[999]">
                {/* <DialogTitle className={`font-semibold text-xl text-left`}>
                    Get your personalised quote :)
                </DialogTitle> */}
                <div className="close__button__modal flex justify-end">
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
                                    <label htmlFor="topic" className={form__label}>Topic</label>
                                    <div className={input__parent}>
                                        <input type="text" id="topic" name="topic" placeholder="Inquire about" className={form__input}/>
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
        {/* <div className="w-full h-screen z-[999] bg-red-900 grid grid-cols-2">
            <DialogPanel 
            <div className="w-screen flex flex-col justify-start items-start">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" className="border-solid border-b-[1px] p-1" />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="mobile">Mobile</label>
                <input id="mobile" type="text" placeholder="Your Contact Number" className="border-solid border-b-[1px] p-1" />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="Your Name" className="border-solid border-b-[1px] p-1" />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Name" className="border-solid border-b-[1px] p-1" />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" className="border-solid border-b-[1px] p-1" />
            </div>

            <div className="w-full flex flex-col justify-start items-start">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" className="border-solid border-b-[1px] p-1" />
            </div>
        </div> */}
        </Dialog>
    </>);
}

export default GetAQuote;