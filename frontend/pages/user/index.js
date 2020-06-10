import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <h2 className="headers pl-4">User Dashboard</h2>
      </Private>
    </Layout>
  );
};

export default UserIndex;
