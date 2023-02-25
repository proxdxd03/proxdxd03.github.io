export function loadFromJSON(elementId, category) {
    $.ajax({
        type:    "GET",
        url:     "posts/posts.json",
        success: function(json) {
            switch(category) {
                case "misc": 
                    loadByJSON(elementId, json.misc);
                    if(json.misc.length === 0) {
                        document.getElementById(elementId).appendChild(create(`<div class="contentbox"><p class="missingpost">Nothing here yet. Check back to stay up to date with proxdxd03's work!</p></div>`));
                    }
                    break;
                case "release": 
                    loadByJSON(elementId, json.release);
                    if(json.release.length === 0) {
                        document.getElementById(elementId).appendChild(create(`<div class="contentbox"><p class="missingpost">Nothing here yet. Check back to find out about new releases!</p></div>`));
                    }
                    break;
                case "concert": 
                    loadByJSON(elementId, json.concert);
                    if(json.concert.length === 0) {
                        document.getElementById(elementId).appendChild(create(`<div class="contentbox"><p class="missingpost">The tour plan will be available soon!</p></div>`));
                    }
                    break;
                case "all": 
                    let posts = json.misc.concat(json.release, json.concert)
                    loadByJSON(elementId, posts);
                    if(posts.length === 0) {
                        document.getElementById(elementId).appendChild(create(`<div class="contentbox"><p class="missingpost">Nothing here yet.</p></div>`));
                    }
                    break;
            }
        },
        error:   function() {
            console.log("BRUH")
        }
    });
}

function loadByJSON(elementId, array) {
    array.sort((a, b) => {
        let asplit = a.date.split(" ").map(a => Number(a))
        let bsplit = b.date.split(" ").map(b => Number(b))
        return (10000*bsplit[0] + 100*bsplit[1] + bsplit[2]) - (10000*asplit[0] + 100*asplit[1] + asplit[2])
    })
    for(let i = 0; i < array.length; i++) {
        const post = array[i];
        let cap = document.createElement("p")
        cap.innerText = post.cap;
        cap.className = "cap";
        let splitdate = post.date.split(" ")
        let date = document.createElement("p")
        date.innerText = format(splitdate)
        date.className = "date";
        let content = document.createElement("div")
        content.className = "text"
        content.appendChild(create(post.content))
        if(post.image !== "") {
            let image = document.createElement("img")
            image.className = "post_image"
            image.src = post.image
            let lCol = document.createElement("div")
            lCol.appendChild(cap)
            lCol.appendChild(date)
            lCol.appendChild(content)
            let rCol = document.createElement("div")
            rCol.appendChild(image)
            let columns = document.createElement("div")
            columns.className = "columns"
            columns.appendChild(lCol)
            columns.appendChild(rCol)
            let contentbox = document.createElement("div")
            contentbox.className = "contentbox"
            contentbox.appendChild(columns);
            document.getElementById(elementId).appendChild(contentbox);
        }
        else {
            let contentbox = document.createElement("div")
            contentbox.className = "contentbox"
            contentbox.appendChild(cap)
            contentbox.appendChild(date)
            contentbox.appendChild(content)
            document.getElementById(elementId).appendChild(contentbox);
        }
    }
}

function format(date) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${month[Number(date[1])-1]} ${date[2]}${suffix(date[2])}, ${date[0]}`
}

function create(htmlStr) {
    const frag = document.createDocumentFragment(),
        temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function suffix(date) {
    let lastDigit = date.charAt(date.length-1);
    switch(lastDigit) {
        case "1": return "st";
        case "2": return "nd";
        case "3": return "rd";
        default: return "th";
    }
}