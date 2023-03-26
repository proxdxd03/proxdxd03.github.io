import {loadFromJSON} from "/scripts/blogloader.js";

export function createPageLayout(topic) {
    document.head.appendChild(elem("title", "", "", [], "proxdxd03 - Official Website", "", "", "", []))
    document.head.appendChild(elem("link", "stylesheet", "/style.css", [], "", "", "", "", []))
    document.head.appendChild(elem("link", "icon", "/images/favicon.png", [], "", "", "", "", []))
    document.body.appendChild(elem("div", "", "", ["topbar"], "", "topbar", "", "", [
        elem("div", "", "", ["topleft"], "", "", "", "", [
            elem("a", "", "/", [], "", "", "", "", [
                elem("img", "", "", [], "", "", "/images/icon.png", "", []),
                elem("p", "", "", [], "proxdxd03", "", "", "", [])
            ])
        ]),
        elem("div", "", "", ["topright"], "", "", "", "", [
            elem("a", "", "/contact/", [], "Contact", "", "", "", []),
            elem("a", "", "/other_news/", [], "Other News", "", "", "", []),
            elem("a", "", "/concerts/", [], "Concerts", "", "", "", []),
            elem("a", "", "/releases/", [], "Releases", "", "", "", []),
        ])
    ]))
    document.body.appendChild(elem("div", "", "", ["scrollbody"], "", "blogspace", "", "", [
        elem("p", "", "", ["tab"], "Test", "", "", "", [])
    ]))
    document.body.appendChild(elem("div", "", "", ["bottombar"], "", "", "", "", [
        elem("a", "", "https://www.youtube.com/@proxdxdmusic", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/youtube.png", "", []),
        ]),
        elem("a", "", "https://open.spotify.com/artist/2pfoI1ZRXb6ST9KhoGZlkW?si=JPZPuBWLRiWmNHov4lcRUA", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/spotify.png", "", []),
        ]),
        elem("a", "", "https://apple.co/40h7otr", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/applemusic.png", "", []),
        ]),
        elem("a", "", "https://music.amazon.com/artists/B0BHXKXMJ6/proxdxd03?marketplaceId=A1PA6795UKMFR9&musicTerritory=EN&ref=dm_sh_Ao7WQCuzyX4paOZ8Euz7b0XcJ", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/amazonmusic.png", "", []),
        ]),
        elem("a", "", "https://discord.gg/FG3MTsTKDC", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/dc.png", "", []),
        ]),
        elem("a", "", "https://www.instagram.com/proxdxd03.artist", [], "", "", "", "", [
            elem("img", "", "", [], "", "", "/images/ig.png", "", []),
        ]),
        elem("p", "", "", [], "© 2023 proxdxd03", "", "", "", [])
    ]))
    loadFromJSON("blogspace", topic)
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