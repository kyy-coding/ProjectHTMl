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
    }
    document.body.classList.remove("not-loaded");
}
