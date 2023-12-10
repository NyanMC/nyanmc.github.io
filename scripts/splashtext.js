var splashes = [
    "one of the space cats ever",
    "humanity is for chumps",
    "your local cosmic feline",
    "now with 20% more transgender",
    "\"not so anonymous\" luna37",
    "the leading cause of eye strain",
    "h doesn't stand for horny",
    "woag, the chromanyan",
    "memories: 0 entries",
    "test'); DROP TABLE Splashes; --",
    "this here nyan is 1,000 millinyans",
    "chromanyan jumpscare",
    "yes, i can double jump",
    "wowie talk about a room with my view",
    "trinkets and baubles is canon to chromanyan lore",
    "hoarder of netherite",
    "chromanother and nyanother",
    "reaching far across these new frontiers",
    "this is who i am",
    "i am all of me",
    "wanna see a magic trick? 💥",
    "probably a fairy type",
    "but do you remember how you got here?"
]

function generateSplash() {
    var randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
    $("#splashtext").text(randomSplash);
}

$(document).ready(function() {
    generateSplash();
});