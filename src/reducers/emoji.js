

const emojiReducer = (state = [], { type, payload }) => {
    console.log(payload, '')
    switch (type){
        case 'HYDRATE_EMOJI_LIST':
            return { ...state, emojiList: payload}
        default:
            return state;
    }
}

export default emojiReducer;