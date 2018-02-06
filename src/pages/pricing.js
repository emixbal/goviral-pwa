import Pricing from "../app/components/pricing";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/pricing",
    exact: true,
    component: Pricing,
    layout: DefaultLayout,
  }
];
export default routes;
