/*
<!DOCTYPE html>
<html>
    <head>
        <script src="scripts/jquery.js"></script>
        <script type="module" src="scripts/blogloader.js"></script>
        <title>proxdxd03 - Official Website</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="images/favicon.png">
    </head>
    <body>
            <div id="topbar" class="topbar">
                <div class="topleft">
                    <a href="/"><img src="images/icon.png">
                    proxdxd03</a>
                </div>
                <div class="topright">
                    <a href="contact/">Contact</a>
                    <a href="other_news/">Other News</a>
                    <a href="concerts/">Concerts</a>
                    <a href="releases/">Releases</a>
                </div>
            </div>
        <div id="blogspace" class="scrollbody">
            <p class="tab">News</p>
        </div>
        <div class="bottombar">
            <a href="https://www.youtube.com/@proxdxdmusic"><img src="images/youtube.png"></a>
            <a href="https://open.spotify.com/artist/2pfoI1ZRXb6ST9KhoGZlkW?si=JPZPuBWLRiWmNHov4lcRUA"><img src="images/spotify.png"></a>
            <a href="https://music.apple.com/de/artist/proxdxd03/1649502963?l=en"><img src="images/applemusic.png"></a>
            <a href="https://music.amazon.com/artists/B0BHXKXMJ6/proxdxd03?marketplaceId=A1PA6795UKMFR9&musicTerritory=EN&ref=dm_sh_Ao7WQCuzyX4paOZ8Euz7b0XcJ"><img src="images/amazonmusic.png"></a>
            <a href="https://discord.gg/FG3MTsTKDC"><img src="images/dc.png"></a>
            <a href="https://www.instagram.com/proxdxd03.artist"><img src="images/ig.png"></a>
            <p>© 2023 proxdxd03</p>
        </div>
        <script type="module">
            import {loadFromJSON} from "/scripts/blogloader.js";
            loadFromJSON("blogspace", "all")
        </script>
    </body>
</html>*/

export function createPageLayout(topic) {
    document.head.appendChild(elem('title', '', '', [], 'proxdxd03 - Official Website', '', '', '', []))
    document.head.appendChild(elem('link', 'stylesheet', '/style.css', [], '', '', '', '', []))
    document.head.appendChild(elem('link', 'icon', '/images/favicon.png', [], '', '', '', '', []))
    document.body.appendChild(elem('div', '', '', ['topbar'], '', 'topbar', '', '', [
        elem('div', '', '', ['topleft'], '', '', '', '', [
            elem('a', '', '/', [], '', '', '', '', [
                elem('img', '', '', [], '', '', '/images/icon.png', '', []),
                elem('div', '', '', [], 'proxdxd03', '', '', '', [])
            ])
        ]),
        elem('div', '', '', ['topright'], '', '', '', '', [
            elem('a', '', '/contact/', [], 'Contact', '', '', '', []),
            elem('a', '', '/other_news/', [], 'Other News', '', '', '', []),
            elem('a', '', '/concerts/', [], 'Concerts', '', '', '', []),
            elem('a', '', '/releases/', [], 'Releases', '', '', '', []),
        ])
    ]))
    document.body.appendChild(elem('div', '', '', ['scrollbody'], '', 'blogspace', '', '', [
        elem('p', '', '', ['tab'], 'Test', '', '', '', [])
    ]))
    document.body.appendChild(elem('div', '', '', ['bottombar'], '', '', '', '', [
        elem('a', '', 'https://www.youtube.com/@proxdxdmusic', [], '', '', '', '', [
            elem('img', '', '', [], '', '', '/images/youtube.png', '', []),
        ]),
        elem('p', '', '', [], '© 2023 proxdxd03', '', '', '', [])
    ]))
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