// 把url的参数转为json对象的构造函数
function QueryString() {
    this.data = {};
}
QueryString.prototype.initial = function() {
    var aPairs, aTmp;
    var queryString = new String(window.location.search);
    queryString = queryString.substr(1, queryString.length);
    aPairs = queryString.split("&");
    for (var i = 0; i < aPairs.length; i++) {
        aTmp = aPairs[i].split("=");
        this.data[aTmp[0]] = aTmp[1];
    }
};
QueryString.prototype.GetValue = function(key) {
    return this.data[key];
}