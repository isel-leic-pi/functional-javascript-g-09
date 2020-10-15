'use strict'
function getShortMessages(messages) {

    return messages.filter(item => item.message.length < 50).map(x => x.message)

}

module.exports = getShortMessages