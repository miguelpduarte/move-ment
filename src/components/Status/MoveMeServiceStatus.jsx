import React from "react";
import { ListItem, LinearProgress } from "@material-ui/core";
import ServiceStatusList from "./ServiceStatusList";
import ServiceStatusTitle from "./ServiceStatusTitle";
import { checkSearchStatus, checkNextArrivalsStatus } from "../../requests/move_me_api";
import { useEndpointStatus } from "../../hooks/serviceStatus";

const MoveMeServiceStatus = () => {
    const [search_endpoint_status, search_endpoint_status_loading] = useEndpointStatus(checkSearchStatus, "Search");
    const [next_arrivals_endpoint_status, next_arrivals_endpoint_status_loading] = useEndpointStatus(checkNextArrivalsStatus, "Stop Schedule");

    return (
        <ListItem>
            <ServiceStatusTitle name={"move-me"} />
            {
                search_endpoint_status_loading || next_arrivals_endpoint_status_loading ?
                    <LinearProgress/>
                    :
                    <ServiceStatusList
                        statuses={[
                            search_endpoint_status,
                            next_arrivals_endpoint_status,
                        ]}
                    />
            }
        </ListItem>
    );
};

export default MoveMeServiceStatus;
