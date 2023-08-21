var splashes = [
    "that's not good.",
    "who you gonna call?",
    "somebody set up us the bomb.",
    "SIGSEGV - segment violation",
    "about:blank",
    "[Nyantent Deleted]",
    "nice link. unfortunately, your mother",
    "java.lang.NullPointerException",
    "ChromaNyan was ejected."
]

function generateSplash() {
    var randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
    $("#failtext").text(randomSplash);
}

$(document).ready(function() {
    generateSplash();
});