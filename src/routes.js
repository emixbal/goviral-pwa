import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home";
import * as Blog from "./pages/blog";
import * as Pricing from "./pages/pricing";
import * as Features from "./pages/features";
import * as Testimonial from "./pages/testimonial";
import * as About from "./pages/about";
import * as Login from "./pages/login";
// import * as Campaign from "./pages/campaign";  Campaign,
// import * as CampaignForm from "./pages/campaignForm"; CampaignForm,

import * as CreateCampaign from "./pages/campaign/createCampaign";
import * as CampaignForm from "./pages/campaign/campaignForm";

export default configureRoutes([
  Home,
  Blog,
  Pricing,
  Features,
  Testimonial,
  About,
  Login,
  CreateCampaign,
  CampaignForm
]);
