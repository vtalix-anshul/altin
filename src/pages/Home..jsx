import AltinExports from "../components/HomeComponents/AltinExports";
import Collections from "../components/HomeComponents/Collections";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import HowWeWork from "../components/HomeComponents/HowWeWork";

const Home = ()=>{
    return (<>
        <main className="main__home">
            <HomeBanner />
            <AltinExports />
            <Collections />
            <HowWeWork />
        </main>
    </>);
}

export default Home;