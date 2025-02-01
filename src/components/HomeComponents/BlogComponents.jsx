import { Link } from "react-router-dom";
import first__blog from "../../assets/images/blog__1.png";
import second__blog from "../../assets/images/blog__2.png";
import third__blog from "../../assets/images/blog__3.png";
const BlogComponents = ()=>{
    return (<>
        <div className="blog__component__parent py-44  bg-lightGray">
            <div className="container px-4 md:px-8 lg:px-16 flex flex-col gap-12">
                <div className="top__section flex flex-col gap-6">
                    <div className="text-xs border border-solid border-orange w-fit px-4 py-3 rounded-full">News</div>
                    <div className="new__heading w-full lg:w-1/2">
                        <h3 className="text-2xl md:text-5xl font-semibold">Take a look at our Blogs
                        and Articles</h3>
                    </div>
                </div>
                <div className="blog__section flex flex-wrap gap-6 justify-center">
                    <div className="blog__card bg-white w-full max-w-[420px] rounded-3xl p-3 flex flex-col gap-6">
                        <div className="blog__card__image w-full">
                            <img src={first__blog} alt="" className="rounded-2xl object-cover" />
                        </div>
                        <div className="blog__card__content flex flex-col p-2 md:p-4 lg:p-8 gap-6">
                            <div className="blog__content w-full">
                                <h4 className="text-2xl">Why Indian Porcelain Tiles Are Capturing Global Attention!</h4>
                                <p className="text-darkGray"> India has emerged as a global hub for porcelain tiles, thanks to its unparalleled craftsmanship, innovative designs, and competitive pricing. From intricate patterns to sleek modern aesthetics, Indian porcelain tiles are transforming homes and commercial spaces worldwide.</p>
                            </div>
                            <Link to="/blog/1" className="text-lg relative w-fit bottom__line">Know more</Link>
                        </div>
                    </div>
                    <div className="blog__card bg-white w-full max-w-[420px] rounded-3xl p-3 flex flex-col gap-6">
                        <div className="blog__card__image w-full">
                            <img src={second__blog} alt="" className="rounded-2xl object-cover" />
                        </div>
                        <div className="blog__card__content flex flex-col p-2 md:p-4 lg:p-8 gap-6">
                            <div className="blog__content w-full">
                                <h4 className="text-2xl">Indian Ceramic Sanitary Ware: A Perfect Blend of Functionality and Style</h4>
                                <p className="text-darkGray">India has long been celebrated for its rich craftsmanship and innovative manufacturing capabilities, and the ceramic sanitary ware industry is no exception. Combining functionality with impeccable style, Indian ceramic sanitary ware has gained global recognition for its quality, design, and versatility.</p>
                            </div>
                            <Link to="/blog/2" className="text-lg relative w-fit bottom__line">Know more</Link>
                        </div>
                    </div>
                    <div className="blog__card bg-white w-full max-w-[420px] rounded-3xl p-3 flex flex-col gap-6">
                        <div className="blog__card__image w-full">
                            <img src={third__blog} alt="" className="rounded-2xl object-cover" />
                        </div>
                        <div className="blog__card__content flex flex-col p-2 md:p-4 lg:p-8 gap-6">
                            <div className="blog__content w-full">
                                <h4 className="text-2xl">Indian Bath Fittings: From Sleek Faucets to Luxurious Showers</h4>
                                <p className="text-darkGray">In the world of interior design and construction, bath fittings play a crucial role in blending functionality with aesthetics. Over the years, India has emerged as a significant global player in the manufacturing and export of bath fittings, offering a wide range of products that cater to diverse preferences and needs.</p>
                            </div>
                            <Link to="/blog/3" className="text-lg relative w-fit bottom__line">Know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default BlogComponents;