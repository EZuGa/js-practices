function searchWord(str1,str2){
    if(typeof str1 !== "string" || typeof str2 !== "string"){
        throw new Error("Not a String");
    }

    let reg = new RegExp(`${str2}`,"gi")
    let matches = str1.match(reg);
    console.log(`'${str2}' was found ${matches.length} times.`)
}


searchWord('The quick brown fox', 'fox');
searchWord('aa, bb, cc, dd, aa', 'aa');
// searchWord(2, 2);
// searchWord(2, "JABAXAAA");
// searchWord("JABAXA", 2);


