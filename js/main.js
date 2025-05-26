const questionsBtn = document.querySelectorAll('.questions__block');
for(let i = 0; i < questionsBtn.length; i++) {
    questionsBtn[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};

document.querySelector('.btn_burgir').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('active');
});

$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__right .img img").css({
        "transform" : "translate(0px, " + st/25 + "px"
    });
    $(".banner__right .img span").css({
        "transform" : "translate(0px, -" + st/25 + "px"
    });
    $(".animate_h1").css({
        "transform" : "translate(" + -st/10 + "px, " + "0px"
    });
    $(".animate_p").css({
        "transform" : "translate(" + -st/20 + "px, " + "0px"
    });
    $(".animate_btn").css({
        "transform" : "translate(" + -st/30 + "px, " + "0px"
    });
});