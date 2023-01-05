var x = document.getElementById('output');
//  x.innerHTML = "Here is Output"

importScripts = src = "https://code.jquery.com/jquery-2.2.4.min.js".integrity = "sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=".crossorigin = "anonymous";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showERROR);
        console.log("1 is working")
        console.log(position.data)
    } else {
        x.innerHTML = "Browser not supporting ";
        alert("Update your browser")
    }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude;
    x.innerHTML += "<br>"
    x.innerHTML += position.coords.longitude;
    alert(position.coords.longitude + position.coords.latitude)
    console.log("2 is working")
    var locapi = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensors=true";
    x.innerHTML = locapi;

    // $get({
    //     success: function(data) {
    //         console.log(data);
    // x.innerHTML = data.results[].x.long_name + ",";
    // x.innerHTML = data.results[].x.long_name + ",";
    // x.innerHTML = data.results[].x.long_name + ",";
    // x.innerHTML = data.results[].x.long_name + ",";
    // x.innerHTML = data.results[].x.long_name + ",";
    // }
    // })


}

function showERROR(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User dont want to show locaion . Please press the 'allow' button to get to your location";
            break;

        case error.POSITION_UNAVAILABEL:
            x.innerHTML = "User location data unavailable";
            break;

        case error.TIMEOUT:
            x.innerHTML = "Sorry! timeout.... ";
            break;

        case error.UNKNOWN_ERROR:
            x.innerHTML = "Something went wrong";
            break;
    }
}