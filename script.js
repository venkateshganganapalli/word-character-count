let textareaEle=document.getElementById("text-content");
let wordcountEle=document.getElementById("word_count");
let charcountEle=document.getElementById("char_count");
let content=" "
textareaEle.addEventListener(
    "input",()=>{
        content=textareaEle.value
        charcountEle.innerHTML=content.length;
        let text=content.trim()
        let words=text.split(/\s/).length;
        wordcountEle.innerHTML=words
    }
)