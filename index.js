var dataReceived;

function ajaxSimulate(id, callback) {
    var database = ['Aaron', 'Barbara', 'Chris'];
    database.forEach(function (data, i) {
        if(i === id) {
            setTimeout(function(){callback(database[i])}, 0);
        }
    })
}
// ...your code below
function storeData(data) {
    console.log('Element of database is: ' + data);
    dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log('dataReceived >>>', dataReceived);

