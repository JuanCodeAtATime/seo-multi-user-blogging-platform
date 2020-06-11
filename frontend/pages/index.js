import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <Layout>
      <section className="landingTop ml-0 pl-0">
        <div className="centered">
          <button className="btn learnMore">
            <FontAwesomeIcon icon={faCodeBranch} /> Learn
            <span className="more">More</span>
          </button>
        </div>
      </section>
      <section className="container landingSectionTwo">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
