



// ローディング
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loading").classList.add("hide");
    }, 1000); // 1秒ってこと!
});




// スクロールトリガー
window.addEventListener("load", () => {

    setTimeout(() => {
        document.querySelector(".loading").classList.add("hide");


        if (document.querySelector(".h-logo")) {
            gsap.from(".h-logo", {
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            });
        }

        if (document.querySelector(".h-svgmap")) {
            gsap.from(".h-svgmap g", {
                opacity: 0,
                duration: 1.4,
                ease: "power2.out"
            });
        }

        if (document.querySelector(".pm-datetime p")) {
            gsap.from(".pm-datetime p", {
                opacity: 0,
                duration: 1.4,
                ease: "power2.out"
            });
        }


        // ローディング後の動き
        gsap.utils.toArray(".h-tbspmap-btn a").forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                y: 10,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 105%",
                    once: true
                }
            });
        });

        gsap.utils.toArray(".pm-weatherpic, .ps-weatherpic").forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                y: 10,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 95%",
                    once: true
                }
            });
        });

        ScrollTrigger.refresh();

    }, 1000);

});