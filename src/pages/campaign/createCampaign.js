import CreateCampaign from "../../app/components/campaign/createCampaign";
import DefaultLayout from "../../app/components/layout";

const routes = [
  {
    path: "/create-campaign",
    exact: true,
    component: CreateCampaign,
    layout: DefaultLayout,
  }
];
export default routes;
