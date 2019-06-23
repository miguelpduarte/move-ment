const provider_from_stop_id_regex = /(.*)_.*/;

export const getProviderFromStopId = (stop_id) => provider_from_stop_id_regex.exec(stop_id)[1];