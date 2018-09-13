var xhttp = new XMLHttpRequest();
var url = 'https://api.spotify.com/v1';
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = xhttp.responseText;
        console.log('response: ', response);
    }
};

xhttp.open('GET', url, true);
xhttp.send();