export function loadFromJSON(elementId, category) {
    $.ajax({
        type:    "GET",
        url:     "posts/posts.json",
        success: function(json) {
            switch(category) {
                case "misc": 
                    loadByJSON(elementId, json.misc);
                    break;
                case "release": 
                    loadByJSON(elementId, json.release);
                    break;
                case "concert": 
                    loadByJSON(elementId, json.concert);
                    break;
                case "all": 
                    let posts = json.misc.concat(json.release, json.concert)
                    loadByJSON(elementId, posts);
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
        let asplit = a.split(" ")
        let bsplit = b.split(" ")
        return (10000*Number(bsplit[0]) + 100*Number(bsplit[1]) + Number(bsplit[2])) - (10000*Number(asplit[0]) + 100*Number(asplit[1]) + Number(asplit[2]))
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
        let content = create(post.content)
        let contentbox = document.createElement("div")
        contentbox.className = "contentbox"
        contentbox.appendChild(cap);
        contentbox.appendChild(date);
        contentbox.appendChild(content);
        document.getElementById(elementId).appendChild(contentbox);
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