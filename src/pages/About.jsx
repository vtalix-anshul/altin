import GlobalMaps from "../components/AboutComponents/GlobalMaps";
import HomeBanner from "../components/AboutComponents/HomeBanner";
import OurValues from "../components/AboutComponents/OurValues";
import HowWeWork from "../components/HowWeWork";

const About = ()=>{
    return (<>
        <main className="about__main__section">
            <HomeBanner />
            <HowWeWork />
            <OurValues />
            <GlobalMaps />
        </main>
    </>);
}

export default About;