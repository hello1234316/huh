function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    console.log(text);
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text);
}

function handleLinkClick(caller)
{
    var copy = caller.querySelector('.copy-text');
    var link = caller.querySelector('.link-target');

    if (copy) copyTextToClipboard(copy.innerText)

    caller.classList.add("pulse");
    setTimeout(() => {
        caller.classList.remove("pulse")
        if (copy)
        { 
            var toastModal = document.getElementsByClassName('toast-modal')[0];
            toastModal.classList.add('animated');
            setTimeout(() => toastModal.classList.remove('animated'), 2000);
        }
        else if (link) link.click();
    }, 1000);
}
