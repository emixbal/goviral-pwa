import {trackPageView} from "pawjs/src/utils/analytics";

import * as appReducers from "./app/reducers";

// import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";

export const reduxInitialState = {
  counter: {
    count: 5
  }
};
export const reduxReducers = appReducers;
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();
