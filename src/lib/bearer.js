module.exports = {
    
    request: function (req, token) {
        this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },
    
    response: function (res) {
        var headers = this.options.http._getHeaders.call(this, res),
            token = headers.Authorization || headers.authorization;
        token = res.data.jwt
        console.log(token)
        if (token) {
            token = token.split(/Bearer\:?\s?/i);
            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};