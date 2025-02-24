import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react";
import { toast } from "react-toastify";

const DownloadButton  = ({size, brochure})=>{

    const [loading, setLoading] = useState(false);
    const [brochureFormOpen, setBrochureForomOpen] = useState(false);
    const handleBrochureFormSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            setLoading(true);
            const response = await fetch("./api/formHandler.php", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (response.ok) {
                setLoading(false);
                toast.success(data?.message || "Message sent successfully!");
                e.target.reset();
            } else {
                setLoading(false);
                throw new Error("Something went wrong");
            }
            setBrochureForomOpen(false);
        } catch (error) {
            setLoading(false);
            setBrochureForomOpen(false);
            toast.error("Something went wrong ");
        }
    }

    const form__row = `w-full pb-8 flex gap-6 flex-col sm:flex-row`;
    const form__group = `w-full`;
    const form__input = `w-full appearance-none outline-none border-b border-solid border-darkGray min-h-8 bg-transparent`;
    const input__parent = `w-full mt-1`;
    const form__label = `mb-3`;
    
    const finalBrochure = size? `${brochure} - ${size}` : `${brochure}`;
    return (<>
        <button className="btn mt-3 text-white bg-orange hover:bg-white hover:text-orange border border-solid border-orange duration-300 transition-all ease-in-out" onClick={()=>setBrochureForomOpen(true)}>Download</button>
        <Dialog open={brochureFormOpen} onClose={()=>setBrochureForomOpen(false)} className={`w-screen h-screen z-[999]`}>
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
                                        <input type="hidden" value="brochure__form" name="type" id="type" />
                                        <input type="text" id="name" name="name" placeholder="Your name" className={form__input} required />
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
                                    <label htmlFor="brochure" className={form__label}>Brochure</label>
                                    <div className={input__parent}>
                                        <input type="text" id="brochure" name="brochure" placeholder="Your brochure" required className={form__input} value={finalBrochure} readOnly/>
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
                                        <input type="text" name="message" id="message" placeholder="Start Typing your message" className={form__input} required/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={form__group}>
                                    <button type="submit" disabled={loading} className="text-lg bottom__line relative border-b-2 border-black border-solid">
                                        {loading? "Processing..." : "Submit"}
                                    </button>
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