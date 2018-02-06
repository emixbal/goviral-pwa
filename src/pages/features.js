import Features from "../app/components/features";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/features",
    exact: true,
    component: Features,
    layout: DefaultLayout,
  }
];
export default routes;
