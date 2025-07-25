import {loadFromJSON} from "/scripts/blogloader.js"
import {create, elem, div, p, a, img, button} from "/scripts/htmlutility.js"

export function createPageLayout(topic, specialPage) {
    document.head.appendChild(elem("title", "", "", [], "proxdxd03 - Official Website", "", "", "", [], []))
    document.head.appendChild(elem("link", "icon", "/images/favicon.png", [], "", "", "", "", [], []))
    document.body.appendChild(div(["topbar"], "", "topbar", "", [
        div(["topleft"], "", "", "", [
            a("/", [], "", "", "", [
                img([], "", "/images/icon.png", ""),
                p([], "proxdxd03", "", "", [])
            ])
        ]),
        div(["topright"], "", "", "", [
            a("/contact/", topic === "contact" ? ["current"] : [], "Contact", "", "", []),
            a("/lyrics/", topic === "lyrics" ? ["current"] : [], "Lyrics", "", "", []),
            a("/music/", topic === "music" ? ["current"] : [], "Music", "", "", []),
            a("/other_news/", topic === "misc" ? ["current"] : [], "Other News", "", "", []),
            a("/concerts/", topic === "concert" ? ["current"] : [], "Concerts", "", "", []),
            a("/releases/", topic === "release" ? ["current"] : [], "Releases", "", "", [])
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
    if(specialPage) {
        $.ajax({
            type:    "GET",
            url:     `/posts/special.json`,
            success: function(json) {
                switch(topic) {
                    case "lyrics":
                        json.lyrics.forEach((text) => 
                            document.getElementById("blogspace").appendChild(
                                div(["contentbox"], "", "", "", [
                                    p(["cap"], text.name, "", "", []),
                                    div(["lyrics"], text.text, "", "", [])
                                ])
                            )
                        )
                        break;
                    case "contact": 
                        json.contact.forEach((box) => document.getElementById("blogspace").appendChild(new Contentbox(box.cap, "", box.content, "").generateElement()))
                        break;
                    case "music":
                        json.music.forEach((box) => {
                            //let cbox = new Contentbox(box.cap, "", "<div class=\"videolist\">" + box.tracks.map((track) => `<div class="videolist_element"><p class="date">${track.name}</p><iframe class="fullsize_video" src="https://www.youtube.com/embed/${track.id}?rel=0&iv_load_policy=3" title="${track.name}" allowfullscreen="false"></div>`).join("") + "</div>", "").generateElement()
                            document.getElementById("blogspace").appendChild(
                                div(["contentbox"], "", "", "", [
                                    p(["cap"], box.cap, "", "", []),
                                    box.type === "album" ? div(["videolist"], "", "", "", box.tracks.map((track) => 
                                        div(["videolist_element"], "", "", "", [
                                            p(["videocap"], track.name, "", "", []),
                                            div(["music_video_wrapper"], "", "", "", [
                                                button(["mv_thumbnail"], "", "", "", loadIframe(track.id), [
                                                    img("", "", `/images/${track.thumbnail}`, "")
                                                ])
                                            ])
                                        ])
                                    )) : div(["spotlight"], "", "", "", [
                                            div(["music_video_spotlight"], "", "", "", [
                                                elem("iframe", "", "", ["iframe_spotlight"], "", "", `https://www.youtube.com/embed/${box.track.id}?rel=0&iv_load_policy=3`, "", [], [])
                                            ])
                                    ])
                                ])
                            )
                        })
                }
            },
            error:   function() {
                console.log("BRUH")
            }
        })
    }
    else loadFromJSON("blogspace", topic)
}

function loadIframe(ytid) {
    return (element) => element.outerHTML = elem("iframe", "", "", ["music_video"], "", "", `https://www.youtube.com/embed/${ytid}?rel=0&iv_load_policy=3`, "", [], []).outerHTML
}

function loadPostIframe(ytid) {
    let video = elem("iframe", "", "", ["post_video"], "", "", `https://www.youtube.com/embed/${ytid}?rel=0&iv_load_policy=3`, "", [], []).outerHTML
    return (element) => element.outerHTML = video
}

function getTopicTitle(topic) {
    switch(topic) {
        case "home": return "News"
        case "release": return "Releases"
        case "concert": return "Concerts"
        case "misc": return "Other News"
        case "contact": return "Contact"
        case "music": return "Music"
        case "lyrics": return "Lyrics"
        default: "Something went wrong."
    }
}

export class Contentbox {

    cap
    subcap
    content
    media

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
                let videoprops = this.media.slice(3).split(":")
                let contentbox = document.createElement("div")
                contentbox.className = "contentbox videobox"
                contentbox.appendChild(button(["post_thumbnail"], "", "", "", loadPostIframe(videoprops[0]), [
                        img("", "", `/images/${videoprops[2]}`, "")
                    ]))
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