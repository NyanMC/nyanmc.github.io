const splashes = [
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
    "\"One day, somewhere in the future, my work will be quoted!\" -Minecraft splash text #313",
    "check it out, i'm in the house, like carpet",
    "have you met umbranyan yet"
]

const specialDays = [
    { // birthday
        "month": 3,
        "day": 24
    },
    { // proper creation of the void
        "month": 5,
        "day": 24
    },
    { // listed creation date of chromatic arsenal
        "month": 8,
        "day": 6
    },
    { // date my gf became my gf
        "month": 11,
        "day": 29
    }
]

function isTodaySpecial() {
    let curDate = new Date();

    for (let i = 0; i < specialDays.length; i++) {
        let element = specialDays[i];
        if (curDate.getMonth() + 1 === element.month && curDate.getDate() === element.day) {
            return true;
        }
    }

    return false;
}

function generateSplash() {
    if (isTodaySpecial()) {
        $("#splashtext").text("today is a special day...");
        return;
    }

    // 3ds detection hopefully
    if ((navigator.platform.indexOf("Nintendo 3DS") > -1) || (screen.pixelDepth == 16 && navigator.platform == "iPhone")) {
        $("#splashtext").text("is that the Nintendo 3DS Internet Browser? what an honor");
        return;
    }

    let randomSplash = splashes[Math.floor(Math.random() * splashes.length)];

    $("#splashtext").text(randomSplash);
}

$(document).ready(function() {
    generateSplash();
});