import Login from "../app/components/login";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    layout: DefaultLayout,
  }
];
export default routes;
