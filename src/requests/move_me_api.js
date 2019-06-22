// http://move-me.mobi/Find/SearchByStops?keyword=FEUP

export const searchByStops = async (search_str) => {
    // eslint-disable-next-line no-undef
    fetch(`/api/move-me/Find/SearchByStops?keyword=${search_str}`, {
        method: "POST",
    }).then(res => {
        console.log(res);
    });
};