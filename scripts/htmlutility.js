export function create(htmlStr) {
    const frag = document.createDocumentFragment(),
        temp = document.createElement("div");
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

export function elem(tagname, rel, href, classnames, innerText, id, src, style, onclick, children) {
    let elem = document.createElement(tagname)
    elem.rel = rel
    elem.href = href
    elem.classList = classnames
    elem.innerText = innerText
    elem.id = id
    elem.src = src
    elem.style = style
    elem.onclick = onclick
    children.forEach((child) => {elem.appendChild(child)})
    return elem
}

export function div(classnames, innerText, id, style, children) {
    return elem("div", "", "", classnames, innerText, id, "", style, "", children)
}

export function p(classnames, innerText, id, style, children) {
    return elem("p", "", "", classnames, innerText, id, "", style, "", children)
}

export function a(href, classnames, innerText, id, style, children) {
    return elem("a", "", href, classnames, innerText, id, "", style, "", children)
}

export function img(classnames, id, src, style) {
    return elem("img", "", "", classnames, "", id, src, style, "", [])
}

export function button(classnames, innerText, id, style, onclick, children) {
    return elem("button", "", "", classnames, innerText, id, "", style, onclick, children)
}