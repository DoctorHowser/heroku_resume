/**
 * Created by danesmith on 10/29/15.
 */
var express = require('express');
var app = express();

var path = require('path');

app.set('port', process.env.PORT || 5000);

app.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

app.listen(app.get('port', function(){
    console.log("COOL RUNNINGS! ", app.get('port'));
}));