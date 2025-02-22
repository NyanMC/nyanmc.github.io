var splashes = [
    "one of the space cats ever",
    "humanity is for chumps",
    "your local cosmic feline",
    "now with 20% more transgender",
    "\"not so anonymous\" luna37",
    "the leading cause of eye strain",
    // "h doesn't stand for horny",
    "woag, the chromanyan",
    "memories: 0 entries",
    "test'); DROP TABLE Splashes; --",
    "this here nyan is 1,000 millinyans",
    "chromanyan jumpscare",
    "yes, i can double jump",
    "wowie talk about a room with my view",
    "chromatic arsenal is canon to chromanyan lore",
    "hoarder of netherite",
    "chromanother and nyanother",
    "reaching far across these new frontiers",
    "this is who i am",
    "i am all of me",
    "wanna see a magic trick? 💥",
    "probably a fairy type",
    "but do you remember how you got here?",
    "JAR transformation complete",
    "formerly immensely gay",
    "was once called a weasel. that was a compliment",
    "\"One day, somewhere in the future, my work will be quoted!\" -Minecraft splash text #313"
]

function generateSplash() {
    var randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
    // 3ds detection hopefully
    if ((navigator.platform.indexOf("Nintendo 3DS") > -1) || (screen.pixelDepth == 16 && navigator.platform == "iPhone")) {
        $("#splashtext").text("holy fucking shit is that the Nintendo 3DS Internet Browser");
    } else {
        $("#splashtext").text(randomSplash);
    }
}

$(document).ready(function() {
    generateSplash();
});