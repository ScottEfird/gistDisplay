// {
//   entities: {
//     gists: {},
//     users: {}
//   },
//   result: []
// }

export function normalizeData(response){
  var data = {entities: {gists: {}, users: {}}, result: []}
  
  for (var gist of response){
    data.result.push(gist.id)
    if(gist.owner){     
      const ownerId = gist.owner.id
      data.entities.users[ownerId] = gist.owner
      gist.owner = ownerId
    }
    const gistId = gist.id
    data.entities.gists[gistId] = gist 
  }
  return data
}
