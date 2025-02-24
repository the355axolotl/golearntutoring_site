        // Philosophy text changer using left and right buttons
        var btn_left = document.getElementById("philosophy-left-button");
        var btn_right = document.getElementById("philosophy-right-button");
        var text_chamber = document.querySelectorAll(".phil-text-chamber > *")
        var counter = 0;
        var max_text = text_chamber.length-1;

        text_chamber[counter].style.opacity = 1;
        btn_left.style.opacity = 0;

        function nextText(btn) {
            if (btn === "left" && counter != 0) { 
                text_chamber[counter].style.opacity = 0;
                text_chamber[--counter].style.opacity = 1;
            } else if (btn === "right" && counter != max_text) {
                text_chamber[counter].style.opacity = 0;
                text_chamber[++counter].style.opacity = 1;
            }

            if (counter == 0) { 
                btn_left.style.opacity = 0;
                btn_left.onClick = false;
            } else if (counter === max_text) {
                btn_right.style.opacity = 0;
                btn_right.onClick = false;
            } else {
                btn_left.style.opacity = .65;
                btn_right.style.opacity = .65;
                btn_left.onClick = true;
                btn_right.onClick = true;
            }
        }


        // animation for scrolling
        let animation = {
            revealDistance: 150,
            initialOpacity: 0,
            transitionDelay: 0,
            transitionDuration: '1s',
            transitionProperty: 'all',
            transitionTimingFunction: 'ease'
        };

        let revealableContainers = document.querySelectorAll('.revealable');

        function reveal() {
            for (let i = 0; i < revealableContainers.length; i++) {
                let windowHeight = window.innerHeight;
                let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

                if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
                    revealableContainers[i].classList.add('active');
                } else {
                    revealableContainers[i].classList.remove('active');
                }
            }
        }
        window.addEventListener('scroll', reveal);
        reveal();
        // end of animation code 