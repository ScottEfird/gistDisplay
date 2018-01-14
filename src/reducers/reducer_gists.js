import { FETCH_GISTS, FETCH_GIST } from '../actions/index'
import { normalize, denormalize, schema } from 'normalizr'
//import { testData, gistObjectSchema, gistOwnerSchema, ownerSchema } from '../schemas/sechema'
import { normalizeData } from '../utility/index'

const INITIAL_STATE = { gistIds: [], gists: {}, owners: {}  }

// {
//   entities: {
//     gists: {},
//     users: {}
//   },
//   result: []
// }


export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_GISTS: 
      const response = normalizeData(action.payload.data)

      return { ...state, gistIds: response.result, gists: response.entities.gists, owners: response.entities.users}
    case FETCH_GIST:
      //Clean up our GET/id data to match the data structure used everywhere else.  
      const gistId = action.payload.data.id
      const ownerId = action.payload.data.history[0].user.id

      const gist = {}
      const owner = {}

      gist[gistId] = action.payload.data
      gist[gistId].owner = ownerId
      owner[ownerId] = action.payload.data.history[0].user
      delete gist[gistId].history
      
      //GitHub handles anonymous get by Id calls differently here, they return a user with the object
      //but it is a "invalid-email-address" user.
      return { ...state, gists: gist, owners: owner}
    default:
      return state
  }
}

