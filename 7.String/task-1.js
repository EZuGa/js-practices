let rmHtmlTags = (str)=>{
    if(typeof str !== "string"){
        throw new Error("Not a String");
    }

    str = str.replace(/<\/?\w+\/?>/gi,"");
    console.log(str);
}

rmHtmlTags('<p><strong><em>Content</em></strong></p>')
rmHtmlTags('<p><strong><em>Cont</br>ent2</br></em></strong></p>')
rmHtmlTags([])