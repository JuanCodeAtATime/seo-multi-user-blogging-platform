import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";

const Index = () => {
  return (
    <Layout>
      <section className="landingTop ml-0 pl-0">
        <div className="row centered">
          <button className="btn learnMore mr-1">
            <FontAwesomeIcon icon={faBrain} /> Learn
            {/* <span className="more">More</span> */}
          </button>

          <button className="btn contributeBtn ml-1">
            <FontAwesomeIcon icon={faPencilAlt} /> Contribute
          </button>
        </div>
      </section>
      <section className="landingSectionTwo text-center">
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program">
            <em>Start programming your coding career...</em>
          </h2>
        </div>
        <div className="row program-your-career pl-3 pr-3">
          <div className="col-md-3 mb-2">
            <LandingCardsOne />
          </div>
          <div className="col-md-3 mb-2">
            <LandingCardsTwo />
          </div>
          <div className="col-md-3 mb-2">
            <LandingCardsThree />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
