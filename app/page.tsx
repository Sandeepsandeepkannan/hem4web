
import Hero from "./src/hero";
import Stats from "./src/stats";
import Legacy from "./src/legacy";
import Services from "./src/services";
import NailArt from "./src/nailart";
import Reviews from "./src/review";
import Booking from "./src/book";
import About from "./src/about";
import Servicecontent from "./src/servicecontent";

export default function Home() {
  return (
    <div>
        <Hero/>
        <Stats/>
        <About/>
        <Services/>
        <NailArt/>
        <Legacy/>
        <Reviews/>
        <Servicecontent/>
        <Booking/>
    </div>
  );
}
