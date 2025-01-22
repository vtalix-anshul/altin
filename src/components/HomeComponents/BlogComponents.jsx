import { Link } from "react-router-dom";
import first__blog from "../../assets/images/altin__exports__panel__1.png";
import second__blog from "../../assets/images/altin__exports__panel__1.png";
import third__blog from "../../assets/images/altin__exports__panel__1.png";
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
                                <h4 className="text-2xl">Worlds Second Largest Ceramic Expo-2017</h4>
                                <p className="text-darkGray">2017 was the year of new beginnings as the expo was highly successful and the exhibitors gained a good amount of business through Vibrant Ceramics 2017.</p>
                            </div>
                            <Link to="/blog/1" className="text-lg">Know more</Link>
                        </div>
                    </div>
                    <div className="blog__card bg-white w-full max-w-[420px] rounded-3xl p-3 flex flex-col gap-6">
                        <div className="blog__card__image w-full">
                            <img src={second__blog} alt="" className="rounded-2xl object-cover" />
                        </div>
                        <div className="blog__card__content flex flex-col p-2 md:p-4 lg:p-8 gap-6">
                            <div className="blog__content w-full">
                                <h4 className="text-2xl">Worlds Second Largest Ceramic Expo-2017</h4>
                                <p className="text-darkGray">2017 was the year of new beginnings as the expo was highly successful and the exhibitors gained a good amount of business through Vibrant Ceramics 2017.</p>
                            </div>
                            <Link to="/blog/2" className="text-lg">Know more</Link>
                        </div>
                    </div>
                    <div className="blog__card bg-white w-full max-w-[420px] rounded-3xl p-3 flex flex-col gap-6">
                        <div className="blog__card__image w-full">
                            <img src={third__blog} alt="" className="rounded-2xl object-cover" />
                        </div>
                        <div className="blog__card__content flex flex-col p-2 md:p-4 lg:p-8 gap-6">
                            <div className="blog__content w-full">
                                <h4 className="text-2xl">Worlds Second Largest Ceramic Expo-2017</h4>
                                <p className="text-darkGray">2017 was the year of new beginnings as the expo was highly successful and the exhibitors gained a good amount of business through Vibrant Ceramics 2017.</p>
                            </div>
                            <Link to="/blog/3" className="text-lg">Know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default BlogComponents;