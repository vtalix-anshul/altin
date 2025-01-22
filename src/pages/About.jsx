import GlobalMaps from "../components/AboutComponents/GlobalMaps";
import HomeBanner from "../components/AboutComponents/HomeBanner";
import OurValues from "../components/AboutComponents/OurValues";

const About = ()=>{
    return (<>
        <main className="about__main__section">
            <HomeBanner />
            {/* one component is missing */}
            <OurValues />
            <GlobalMaps />
        </main>
    </>);
}

export default About;