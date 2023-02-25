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
        success: function(json) {
            console.log(json);
            const array = json.misc;
            console.log(array);
            for(let i = 0; i < array.length; i++) {
                const post = array[i];
                let cap = document.createElement("p")
                cap.innerText = post.cap;
                cap.className = "cap";
                let date = document.createElement("p")
                date.innerText = new Date(post.date).toString("MMMM yyyy");
                date.className = "date";
                let contentbox = document.createElement("div")
                contentbox.className = "contentbox"
                contentbox.appendChild(cap);
                contentbox.appendChild(date);
                document.getElementById(elementId).appendChild(contentbox);
            }
        },
        error:   function() {
            console.log("BRUH")
        }
    });
}

function create(htmlStr) {
    const frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}