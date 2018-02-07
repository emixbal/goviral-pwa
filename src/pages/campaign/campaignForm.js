import CampaignForm from "../../app/components/campaignForm";
import DefaultLayout from "../../app/components/layout"

const routes = [
  {
    path : "/campaign-form",
    exact: true,
    component: CampaignForm,
    layout: DefaultLayout
  }
];

export default routes;
