const provider_from_stop_id_regex = /(.*)_.*/;

export const getProviderFromStopId = (stop_id) => provider_from_stop_id_regex.exec(stop_id)[1];

const stop_name_from_stop_id_regex = /.*_(.*)/;

export const getStopNameFromStopId = (stop_id) => stop_name_from_stop_id_regex.exec(stop_id)[1];

const stop_info_from_stop_id_regex = /(.*)_(.*)/;

/**
 * @returns [stop_name,provider_name]
 */
export const getInfoFromStopId = (stop_id) => stop_info_from_stop_id_regex.exec(stop_id).slice(1);