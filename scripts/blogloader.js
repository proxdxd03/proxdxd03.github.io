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
        $(`#${elementId}`).load(`posts/${src[i]}`); 
    }
}

export function loadFromJSON(elementId, category) {
    $.ajax({
        type:    "GET",
        url:     "posts/posts.json",
        success: function(text) {
            console.log(text);
            json = JSON.parse(text);
            console.log(json);
            array = json.misc;
            console.log(array);
            document.getElementById(elementId).innerHTML = array[0];
        },
        error:   function() {
            console.log("BRUH")
        }
    });
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var fragment = create('<div>Hello!</div><p>...</p>');
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]);