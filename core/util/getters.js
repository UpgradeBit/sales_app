/**
 * Getting error state
 * @param {string} messageType
 * @param {Object} err
 * @return {boolean}
 */
function getErrorState(messageType, err){
    if (err.hasOwnProperty(messageType))
        return !!err[messageType]

    return false;
}

module.exports = {
    getErrorState
}