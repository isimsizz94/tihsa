function createGoogleIframe() {
    let iframe = document.createElement("iframe");

    Object.assign(iframe.style, {
        position: "absolute",
        width: "50%",
        height: "100%",
        zIndex: "9999999",
        padding: "0",
        margin: "0",
        frameBorder: "1",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    });

    iframe.src = "https://www.google.com/webhp?igu=1";
    iframe.hidden = true;
    iframe.id = "google-searcher";

    return iframe;
}

function keyUpHandler(event) {
    if (event.shiftKey && event.key === "Control") {
        toggle(iframe);
    }
    if (event.ctrlKey && event.key === "Alt") {
        suicide();
    }
}

function toggle(iframe) {
    iframe.hidden = !iframe.hidden;
}

function hide(iframe){
    iframe.hidden = true;
}
function show(iframe){
    iframe.hidden = false;
}

function suicide() {
    createGoogleIframe = undefined;
    toggle = undefined;
    suicide = undefined;
    document.querySelector("#google-searcher").remove();
    window.removeEventListener("keyup", keyUpHandler);
    keyUpHandler = undefined;
}



let iframe = createGoogleIframe();
document.body.prepend(iframe);

document.addEventListener("click", event => {
    hide(iframe);
});
window.addEventListener("keyup", keyUpHandler);
