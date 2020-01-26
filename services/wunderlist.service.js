const WunderlistSDK = require('wunderlist');

function getWunderListApi() {
    try {
        return new WunderlistSDK({
            'accessToken': '665b3deb953ef09ed884679d9350aa342f4c132e28484c1071c4281a8fab',
            'clientID': 'a78e780c5e7b15785fcc'
        });
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = {
    getWunderListApi
}