var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

// function getIssPosition() {
//     return request("http://api.open-notify.org/iss-now.json")
//         .then(
//             function(response) {
//                 // Parse as JSON
//                 response = JSON.parse(response);
//                 // Return object with lat and lng
//                 return {
//                     lat: response.iss_position.latitude,
//                     long: response.iss_position.longitude
//                 }
//             }
//         )
// }

function getIssPosition() {
    return request('http://api.open-notify.org/iss-now.json')
        .then(
            function(res) {
                res=JSON.parse(res);
                return {
                    lat: res.iss_position.latitude,
                    lng: res.iss_position.longitude
                };
            }
        )
        .then(
            function(latLong){
                console.log('latLong', latLong);
                return;
            })
}

getIssPosition();

function getAddressPosition(address) {

}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}

exports.getIssPosition = getIssPosition;
exports.getAddressPosition = getAddressPosition;
exports.getCurrentTemperatureAtPosition = getCurrentTemperatureAtPosition;
exports.getCurrentTemperature = getCurrentTemperature;
exports.getDistanceFromIss = getDistanceFromIss;