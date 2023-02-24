var home_blogentries = ["24022023.html"];
export function addBlogEntries(document, elementId) {
    for(var i = 0; i < home_blogentries.length; i++) {
        console.log(home_blogentries[i]);
        $(`#${id}`).load(home_blogentries[i]);
    }
}