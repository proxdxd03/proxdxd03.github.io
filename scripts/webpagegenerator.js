import {loadFromJSON} from "/scripts/blogloader.js"

export function createPageLayout(topic, specialcontent) {
    document.head.appendChild(elem("title", "", "", [], "proxdxd03 - Official Website", "", "", "", []))
    document.head.appendChild(elem("link", "stylesheet", "/style.css", [], "", "", "", "", []))
    document.head.appendChild(elem("link", "icon", "/images/favicon.png", [], "", "", "", "", []))
    document.body.appendChild(div(["topbar"], "", "topbar", "", [
        div(["topleft"], "", "", "", [
            a("/", [], "", "", "", [
                img([], "", "/images/icon.png", ""),
                p([], "proxdxd03", "", "", [])
            ])
        ]),
        div(["topright"], "", "", "", [
            a("/contact/", topic === "contact" ? ["current"] : [], "Contact", "", "", []),
            a("/other_news/", topic === "misc" ? ["current"] : [], "Other News", "", "", []),
            a("/concerts/", topic === "concert" ? ["current"] : [], "Concerts", "", "", []),
            a("/releases/", topic === "release" ? ["current"] : [], "Releases", "", "", []),
        ])
    ]))
    document.body.appendChild(div(["scrollbody"], "", "blogspace", "", [
        p(["tab"], getTopicTitle(topic), "", "", [])
    ]))
    document.body.appendChild(div(["bottombar"], "", "", "", [
        a("https://www.youtube.com/@proxdxdmusic", [], "", "", "", [
            img([], "", "/images/youtube.png", "")
        ]),
        a("https://open.spotify.com/artist/2pfoI1ZRXb6ST9KhoGZlkW?si=JPZPuBWLRiWmNHov4lcRUA", [], "", "", "", [
            img([], "", "/images/spotify.png", "")
        ]),
        a("https://apple.co/40h7otr", [], "", "", "", [
            img([], "", "/images/applemusic.png", "")
        ]),
        a("https://music.amazon.com/artists/B0BHXKXMJ6/proxdxd03?marketplaceId=A1PA6795UKMFR9&musicTerritory=EN&ref=dm_sh_Ao7WQCuzyX4paOZ8Euz7b0XcJ", [], "", "", "", [
            img([], "", "/images/amazonmusic.png", "")
        ]),
        a("https://discord.gg/FG3MTsTKDC", [], "", "", "", [
            img([], "", "/images/dc.png", "")
        ]),
        a("https://www.instagram.com/proxdxd03.artist", [], "", "", "", [
            img([], "", "/images/ig.png", "")
        ]),
        p([], "© 2023 proxdxd03", "", "", [])
    ]))
    if(specialcontent.length > 0) {
        specialcontent.forEach((contentbox) => {document.getElementById("blogspace").appendChild(contentbox.generateElement())})
    }
    else loadFromJSON("blogspace", topic)
}

function getTopicTitle(topic) {
    switch(topic) {
        case "home": return "News"
        case "release": return "Releases"
        case "concert": return "Concerts"
        case "misc": return "Other News"
        case "contact": return "Contact"
    }
}

function elem(tagname, rel, href, classnames, innerText, id, src, style, children) {
    let elem = document.createElement(tagname)
    elem.rel = rel
    elem.href = href
    elem.classList = classnames
    elem.innerText = innerText
    elem.id = id
    elem.src = src
    elem.style = style
    children.forEach((child) => {elem.appendChild(child)})
    return elem
}

function div(classnames, innerText, id, style, children) {
    return elem("div", "", "", classnames, innerText, id, "", style, children)
}

function p(classnames, innerText, id, style, children) {
    return elem("p", "", "", classnames, innerText, id, "", style, children)
}

function a(href, classnames, innerText, id, style, children) {
    return elem("a", "", href, classnames, innerText, id, "", style, children)
}

function img(classnames, id, src, style) {
    return elem("img", "", "", classnames, "", id, src, style, [])
}

export class Contentbox {
    constructor (cap, subcap, content, media) {
        this.cap = cap
        this.subcap = subcap
        this.content = content
        this.media = media
    }
    generateElement() {
        let cap = document.createElement("p")
        cap.innerText = this.cap
        cap.className = "cap"
        let date = document.createElement("p")
        date.innerText = this.subcap
        date.className = "date"
        let content = document.createElement("div")
        content.className = "text"
        content.appendChild(create(this.content))
        if(this.media !== "") {
            if(this.media.slice(0,3) === "yt/") {
                let video = document.createElement("iframe")
                let videoprops = this.media.slice(3).split(":")
                video.src = `https://www.youtube.com/embed/${videoprops[0]}?rel=0&iv_load_policy=3`
                video.title = videoprops[1]
                video.allowFullscreen = false
                video.className = "post_video"
                let contentbox = document.createElement("div")
                contentbox.className = "contentbox videobox"
                contentbox.appendChild(video)
                contentbox.appendChild(cap)
                contentbox.appendChild(date)
                contentbox.appendChild(content)
                return contentbox
            } else {
                let image = document.createElement("img")
                image.className = "post_image"
                image.src = "/" + this.media
                let contentbox = document.createElement("div")
                contentbox.className = "contentbox imagebox"
                contentbox.appendChild(image)
                contentbox.appendChild(cap)
                contentbox.appendChild(date)
                contentbox.appendChild(content)
                return contentbox
            }
        }
        else {
            let contentbox = document.createElement("div")
            contentbox.className = "contentbox"
            contentbox.appendChild(cap)
            contentbox.appendChild(date)
            contentbox.appendChild(content)
            return contentbox
        }
    }
}