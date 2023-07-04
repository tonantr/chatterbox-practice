import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import runServer from "./api";
runServer();

ReactDOM.render(<App />, document.getElementById("root"));
