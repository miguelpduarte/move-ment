const stop_info_from_stop_id_regex = /(.*)_(.*)/;

/**
 * @returns [provider_name,stop_name]
 */
export const getInfoFromStopId = (stop_id) => stop_info_from_stop_id_regex.exec(stop_id).slice(1);