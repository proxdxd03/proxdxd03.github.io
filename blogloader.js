var misc_blogentries = ["24_02_2023_0.html"];
var concert_blogentries = [];
var release_blogentries = [];
export function addBlogEntries(elementId, category) {
    switch(category) {
        case "all": 
            addBlogEntriesByCategory(elementId, misc_blogentries)
            addBlogEntriesByCategory(elementId, concert_blogentries)
            addBlogEntriesByCategory(elementId, release_blogentries)
            break;
        case "misc": 
            addBlogEntriesByCategory(elementId, misc_blogentries)
            break;
        case "concert": 
            addBlogEntriesByCategory(elementId, concert_blogentries)
            break;
        case "release": 
            addBlogEntriesByCategory(elementId, release_blogentries)
            break;
    }
}

function addBlogEntriesByCategory(elementId, src) {
    for(var i = 0; i < src.length; i++) {
        $(`#${elementId}`).load(src[i]);
    }
}