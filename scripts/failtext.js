var splashes = [
    "that's not good.",
    "who you gonna call?",
    "somebody set up us the bomb.",
    "SIGSEGV - segment violation",
    "about:blank",
    "attempt to concatenate a nil value",
    "[Nyantent Deleted]",
    "nice link. unfortunately, your mother",
    "java.lang.NullPointerException",
    "BLOWS UP?!",
    "MixinTransformerError: An unexpected critical error was encountered",
    "ChromaNyan was ejected.",
    "this page is out of logic!"
]

function generateSplash() {
    var randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
    $("#failtext").text(randomSplash);
}

$(document).ready(function() {
    generateSplash();
});