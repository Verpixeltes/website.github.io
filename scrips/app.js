function createObserver(className, showClass, reverseClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showClass);
            } else {
                entry.target.classList.remove(showClass);
                entry.target.classList.add(reverseClass);
            }
        });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll(className);
    elements.forEach((element) => {
        observer.observe(element);
    });
}

createObserver(".hidden", "show", "reverse");
createObserver(".line", "line_show", "reverse_line");
createObserver(".cycle", "cycle_show", "reverse_cycle1");
createObserver(".erfolg_text1", "erfolg_text_show", "reverse_erfolgtext");
