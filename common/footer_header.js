
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
window.addEventListener('resize', function() {
    resizeIframe(document.getElementById('iframe'))
    resizeIframe(document.getElementById('iframe2'))
});