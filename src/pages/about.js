import About from "../app/components/about";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/about-us",
    exact: true,
    component: About,
    layout: DefaultLayout,
  }
];
export default routes;
