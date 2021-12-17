function createGoogleIframe() {
    let iframe = document.createElement("iframe");

    iframe.style.position = "absolute";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.zIndex = "9999999";
    iframe.style.padding = "0";
    iframe.style.margin = "0";

    iframe.src = "https://www.google.com/webhp?igu=1";
    iframe.hidden = true;
    iframe.id = "google-searcher";

    return iframe;
}

function keyUpHandler(event) {
    const iframe = document.querySelector("#google-searcher");
    if (event.key === "Control") {
        toggle(iframe);
    }
    if (event.ctrlKey && event.key === "Alt") {
        suicide();
    }
}

function toggle(iframe) {
    iframe.hidden = !iframe.hidden;
}

function suicide() {
    createGoogleIframe = undefined;
    toggle = undefined;
    suicide = undefined;
    document.querySelector("#google-searcher").remove();
    document.removeEventListener("keyup", keyUpHandler);
    keyUpHandler = undefined;
}

document.body.prepend(createGoogleIframe());

document.addEventListener("keyup", keyUpHandler);