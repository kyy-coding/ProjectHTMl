function showFlowers(){

    const story =
    document.getElementById("story-container");

    const flowerScene =
    document.getElementById("flower-scene");

    if(story){
        story.style.display = "none";
    }

    if(flowerScene){

        flowerScene.classList.remove("hidden");

        /* restart seluruh animasi */
        const animated =
        flowerScene.querySelectorAll(
            ".flower__line, .grow-ans"
        );

        animated.forEach(el=>{

            el.style.animation = "none";

            void el.offsetWidth;

            el.style.animation = "";

        });

    }

}
