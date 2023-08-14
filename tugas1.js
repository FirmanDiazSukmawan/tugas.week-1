// 1.palindrome
function checkPalindrome(str) {
    let palindrome = true;

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            palindrome = false;

        }
    }

    if (palindrome) {
        console.log("Palindrom");
    } else {
        console.log("Bukan palindrom");
    }
}

checkPalindrome("siang");

// 2 reverse word
function reverseWord(kata) {
    let kalimat = kata.split(" ");
    let reverseKalimat = kalimat.reverse();
    let balikinKalimat = reverseKalimat.join(" ");
    return balikinKalimat;
}

const rever = "Saya belajar javascript";
console.log(reverseWord(rever));



