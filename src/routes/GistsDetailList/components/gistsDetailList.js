import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchGists } from '../../../actions/index'
import { Link } from 'react-router'
import { selectGistIds } from '../../../selectors/index'

class GistsDetailList extends Component {
  componentWillMount() {
    this.props.fetchGists()
  }

  renderGistsList() {
    if(!this.props.gists || !this.props.owners || !this.props.gistIds){
      return <div> loading... </div>
    }

    return this.props.gistIds.map((id) => {
      // Grab our gist from our gistId.
      const gist = this.props.gists[id]
      var description = gist.description ? description = gist.description : description = 'No description available'
      var gistOwner = this.props.owners[gist.owner] ? gistOwner = this.props.owners[gist.owner] : gistOwner = 'Anonymous'
      var userName = gistOwner.login ? userName = gistOwner.login : userName = 'Anonymous'
  
      return (
        <li className='list-group-item' key={gist.id} >          
          <br />
          <strong>User Name: </strong>{userName}
          <br />
          <strong>Description:</strong>
          <p>{description}</p>
          <Link className='button btn btn-info btn-sm pull-right' to={`/${gist.id}`}>
            More info...
          </Link>
          <strong>Git: </strong> {gist.id}
        </li>
      )
    })
  }

  render(){
      return (
        <div>
          <h3> Current <strong>GitHub </strong>Gists </h3>
          <ul className='list-group' >
            {this.renderGistsList()}
          </ul>
        </div>
      )
  } 
}

function mapStateToProps(state){
  const gistIds = selectGistIds(state)

  return {
    gistIds: gistIds,
    gists: state.gists.gists,
    owners: state.gists.owners
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGists }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GistsDetailList)
