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
        const flowers =
        flowerScene.querySelector(".flowers");
        if(flowers){
        flowers.style.opacity = "1";
}
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
