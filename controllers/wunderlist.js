const wunderlistService = require('../services/wunderlist.service');
const wunderlistAPI = wunderlistService.getWunderListApi;
// const WunderlistSDK = require('wunderlist');

function handleListData(lists) {
    try {
        console.log(lists);

    } catch (error) {
        throw new Error(error)
    }
}

function handleError(error) {
    throw new Error(error);
}

async function getList(req, res) {
    try {
        const done = await wunderlistAPI().initialized;
        if (done) {
            const lists = await wunderlistAPI().http.lists.all();
            if (lists) res.send(lists);
            else res.send('Could not get lists')
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getList
}