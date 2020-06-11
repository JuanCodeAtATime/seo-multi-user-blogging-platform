import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4 headers">Sign-in</h2>
      <div className="row pl-3 pr-3">
        <div className="col-md-6 offset-md-3">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
