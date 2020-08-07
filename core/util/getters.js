/**
 * Getting error state
 * @param {string} messageType
 * @param {Object} err
 * @return {boolean}
 */
function getErrorState(messageType, err){
    return !!err[messageType];
}

module.exports = {
    getErrorState
}