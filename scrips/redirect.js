// redirect.js
if (!window.location.href.includes("redirected=true")) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = 'index_mobile.html?redirected=true';
    } else {
        window.location.href = 'index.html?redirected=true';
    }
}
