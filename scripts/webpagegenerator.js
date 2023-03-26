import {loadFromJSON} from "/scripts/blogloader.js";

export function createPageLayout(topic) {
    document.head.appendChild(elem("title", "", "", [], "proxdxd03 - Official Website", "", "", "", []))
    document.head.appendChild(elem("link", "stylesheet", "/style.css", [], "", "", "", "", []))
    document.head.appendChild(elem("link", "icon", "/images/favicon.png", [], "", "", "", "", []))
    document.body.appendChild(elem("div", "", "", ["topbar"], "", "topbar", "", "", [
        elem("div", "", "", ["topleft"], "", "", "", "", [
            a("/", [], "", "", "", [
                elem("img", "", "", [], "", "", "/images/icon.png", "", []),
                p([], "proxdxd03", "", "", [])
            ])
        ]),
        elem("div", "", "", ["topright"], "", "", "", "", [
            a("/contact/", topic === "contact" ? ["current"] : [], "Contact", "", "", []),
            a("/other_news/", topic === "misc" ? ["current"] : [], "Other News", "", "", []),
            a("/concerts/", topic === "concert" ? ["current"] : [], "Concerts", "", "", []),
            a("/releases/", topic === "release" ? ["current"] : [], "Releases", "", "", []),
        ])
    ]))
    document.body.appendChild(elem("div", "", "", ["scrollbody"], "", "blogspace", "", "", [
        p(["tab"], getTopicTitle(topic), "", "", [])
    ]))
    document.body.appendChild(elem("div", "", "", ["bottombar"], "", "", "", "", [
        a("https://www.youtube.com/@proxdxdmusic", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/youtube.png", "", []),
        ]),
        a("https://open.spotify.com/artist/2pfoI1ZRXb6ST9KhoGZlkW?si=JPZPuBWLRiWmNHov4lcRUA", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/spotify.png", "", []),
        ]),
        a("https://apple.co/40h7otr", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/applemusic.png", "", []),
        ]),
        a("https://music.amazon.com/artists/B0BHXKXMJ6/proxdxd03?marketplaceId=A1PA6795UKMFR9&musicTerritory=EN&ref=dm_sh_Ao7WQCuzyX4paOZ8Euz7b0XcJ", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/amazonmusic.png", "", []),
        ]),
        a("https://discord.gg/FG3MTsTKDC", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/dc.png", "", []),
        ]),
        a("https://www.instagram.com/proxdxd03.artist", [], "", "", "", [
            elem("img", "", "", [], "", "", "/images/ig.png", "", []),
        ]),
        p([], "© 2023 proxdxd03", "", "", [])
    ]))
    loadFromJSON("blogspace", topic)
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

function p(classnames, innerText, id, style, children) {
    return elem("p", "", "", classnames, innerText, id, "", style, children)
}

function a(href, classnames, innerText, id, style, children) {
    return elem("a", "", href, classnames, innerText, id, "", style, children)
}