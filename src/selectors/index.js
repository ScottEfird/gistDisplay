export const selectGistIds = state => state.gists.gistIds
export const getGistById = (state, id) => state.gists.gists[id]
export const getGistUserByUserId = (state, id) => state.gists.owners[id]