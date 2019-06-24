import React from "react";
import { Router } from "@reach/router";
import StopPageRoot from "../components/StopPageRoot";

const Stop = () => (
    <Router>
        <StopPageRoot path="/stop/:stop_id" />
    </Router>
);

export default Stop;