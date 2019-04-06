exports.mobileFormat = text => {
    if(isNaN(text)) {
        return null
    }
    text = String(text)
    return text.substr(text.length - 10)
};

exports.generateCode = (len = 6) => {
    let token = "";
    do {
        token = Math.floor(Math.random() * 1000000);
    }while (token.length < len);
    return token;
};

