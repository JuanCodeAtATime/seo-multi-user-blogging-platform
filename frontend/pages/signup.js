import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4 headers">
        Sign-up to create account
      </h2>
      <div className="row pl-3 pr-3">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
