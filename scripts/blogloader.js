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
            const array = json.misc;
            for(let i = 0; i < array.length; i++) {
                const post = array[i];
                let cap = document.createElement("p")
                cap.innerText = post.cap;
                cap.className = "cap";
                let date = document.createElement("p")
                cap.innerText = format(new Date(post.date))
                date.className = "date";
                let content = create(post.content)
                let contentbox = document.createElement("div")
                contentbox.className = "contentbox"
                contentbox.appendChild(cap);
                contentbox.appendChild(date);
                contentbox.appendChild(content);
                document.getElementById(elementId).appendChild(contentbox);
            }
        },
        error:   function() {
            console.log("BRUH")
        }
    });
}

function format(date) {
    return `${fullMonth(date)} ${date.getDate()}, ${date.getFullYear()}`
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

function fullMonth(date) {
    const options = { month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}