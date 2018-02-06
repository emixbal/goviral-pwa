import Testimonial from "../app/components/testimonial";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/testimonial",
    exact: true,
    component: Testimonial,
    layout: DefaultLayout,
  }
];
export default routes;
