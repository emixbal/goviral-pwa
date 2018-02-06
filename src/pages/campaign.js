import Campaign from "../app/components/campaign";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/campaign",
    exact: true,
    component: Campaign,
    layout: DefaultLayout,
  }
];
export default routes;
