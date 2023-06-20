window.addEventListener('DOMContentLoaded', function () {
    var female = document.getElementById('female');
    female.style.opacity = '1';

    var headline1 = document.getElementById('headline1');
    headline1.style.transform = 'translateX(0)';

    var headline2 = document.getElementById('headline2');
    headline2.style.opacity = '0';
    headline2.style.transform = 'translateX(100%)';

    var subheadline = document.getElementById('subheadline');
    subheadline.style.opacity = '0';

    var learnmore = document.getElementById('learnmore');
    learnmore.style.opacity = '0';

    var logo = document.getElementById('logo');
    logo.style.opacity = '0';
    logo.style.transform = 'translateX(0)'

    var replay = document.getElementById('replay');
    replay.style.opacity = '0';
    
    var replayBtn = document.getElementById('replay-btn')
    replayBtn.addEventListener('click', function () {
        location.reload();
    });

    setTimeout(function () {
        female.style.opacity = '0';
        headline1.style.opacity = '0'

        setTimeout(function () {
            headline2.style.opacity = '1';
            headline2.style.transform = 'translateX(0)';

            setTimeout(function () {
                subheadline.style.opacity = '1';

                setTimeout(function () {
                    learnmore.style.opacity = '1';

                    setTimeout(function () {
                        logo.style.opacity = '1';
                        logo.style.transform = 'translateX(100%)';

                        setTimeout(function () {
                            replay.style.opacity = '1';
                        }, 700);
                    }, 700);
                }, 700);
            }, 1000);
        }, 1000);
    }, 2000);
});