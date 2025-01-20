import user__logo from "../assets/images/user.svg";
import logo from "../assets/images/logo__2.png"
import { Link } from "react-router-dom";
const Footer = ()=>{
    const FooterLine = ()=>{
        return (
            <div className="w-[100%]  border-[1px] border-solid border-lightGray"></div>
        );
    }
    return (<>
        <footer className="p-4 md:p-8 lg:p-16 flex flex-col gap-16">
            <FooterLine />
            <div className="newsletter__div gap-12 md:gap-0 items-center flex flex-col md:flex-row md:justify-between w-full">
                <h4 className="text-2xl max-w-[320px]">Join our newsletter to keep up to date with us!</h4>
                <form className="newletter__email__parent flex flex-wrap gap-3 sm:gap-0">
                    <div className="input__parent relative min-w-[300px] max-w-[360px]">
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="relative px-6 py-3 rounded-[100px] border border-solid border-darkGray indent-8 focus:outline-none focus:border-orange"/>
                        <div className="group absolute inset-y-0 left-1 top-1/2 -translate-y-1/2 px-2.5">
                            <img src={user__logo} alt="" className="size-6" />
                        </div>
                    </div>
                    <button className="email__button btn bg-orange" type="submit">Subscribe</button>
                </form>
            </div>
            <FooterLine />
            <div className="footer__links__parent flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="logo__text__footer flex flex-col gap-4">
                    <img src={logo} alt="logo" className="w-fit" />
                    <div className="description">
                        <div className="title text-lg md:text-2xl">Altin Exports</div>
                        <div className="sub__title text-black2 max-w-[300px]">We growing up your business with personal AI manager.</div>
                    </div>
                </div>
                <div className="footer__links__second__parent flex md:flex-row gap-4 md:gap-8 lg:gap-20 flex-wrap">
                    <div className="first__links min-w-[120px] pt-4 md:pt-0">
                        <ul className="flex flex-col gap-4">
                            <li className="list__heading text-black2">Company</li>
                            <li className="text-darkGray text-sm"><Link to="/about">About</Link></li>
                            <li className="text-darkGray text-sm"><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="first__links min-w-[120px] pt-4 md:pt-0">
                        <ul className="flex flex-col gap-4">
                            <li className="list__heading text-black2">Products</li>
                            <li className="text-darkGray text-sm"><Link to="/" >Ceramic Tiles</Link></li>
                            <li className="text-darkGray text-sm"><Link to="/" >Sanitary Wares</Link></li>
                            <li className="text-darkGray text-sm"><Link to="/" >Bath Fittings</Link></li>
                        </ul>
                    </div>
                    <div className="first__links min-w-[120px] pt-4 md:pt-0">
                        <ul className="flex flex-col gap-4">
                            <li className="list__heading text-black2">Social</li>
                            <li className="text-darkGray text-sm"><a href="">Facebook</a></li>
                            <li className="text-darkGray text-sm"><a href="">Instagram</a></li>
                            <li className="text-darkGray text-sm"><a href="">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterLine />
            <div className="copyright__parent flex flex-wrap text-sm justify-between">
                <p className="copyright__para">© 2025 Altin Exports LLP.</p>
                <div className="terms__and__all flex flex-wrap gap-4 sm:gap-20 mt-8 md:mt-0">
                    <Link to="/" className="min-w-[120px]">Terms and Conditions</Link>
                    <Link to="/" className="min-w-[120px]">Privacy policy</Link>
                    <Link to="/" className="min-w-[120px]">Cookies</Link>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;