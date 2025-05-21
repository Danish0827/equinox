import Intro from "./components/Intro";
import Info from "./components/Info";
import MainServices from "./components/MainServices";
import ProblemSection from "./components/ProblemSection";
import ReactUs from "./components/ReactUs";
import Services from "./components/Services";
import VisionMission from "./components/VisionMission";

function App() {
  return <>
    <Intro />
    <ProblemSection />
    <MainServices/>
    <Services />
    <Info />
    <VisionMission/>
    <ReactUs/>
  </>;
}

export default App;
