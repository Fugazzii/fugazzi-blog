import Dashboard from "@/containers/Dashboard";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const DashboardPage = async () => {
    return <Dashboard />;
}

export default withPageAuthRequired(DashboardPage, { returnTo: "/home" });