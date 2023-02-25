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
        },
        error:   function() {
            console.log("BRUH")
        }
    });
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