import { useRouter } from "next/router";
// import DashboardNav from "../components/DashboardNav";

const DashboardPage = () => {
  let router = useRouter();

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <div className="row">
        <div className="col-md-3">
          {/* <DashboardNav /> */}
        </div>
        <div className="col-md-9">
          {router.pathname === "/dashboard" && <h2>Dashboard</h2>}
          {router.pathname === "/settings" && <h2>Settings</h2>}
          {router.pathname === "/profile" && <h2>Profile</h2>}
          {/* Rest of your page content goes here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
