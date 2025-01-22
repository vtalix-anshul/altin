import AltinExports from "../components/HomeComponents/AltinExports";
import BlogComponents from "../components/HomeComponents/BlogComponents";
import Collections from "../components/HomeComponents/Collections";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import HowWeWork from "../components/HomeComponents/HowWeWork";
import ProjectTalk from "../components/HomeComponents/ProjectTalk";

const Home = ()=>{
    return (<>
        <main className="main__home">
            <HomeBanner />
            <AltinExports />
            <Collections />
            <HowWeWork />
            <ProjectTalk />
            <BlogComponents />
        </main>
    </>);
}

export default Home;