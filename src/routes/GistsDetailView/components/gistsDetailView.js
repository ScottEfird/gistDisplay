import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { fetchGist } from '../../../actions/index'
import { Link } from 'react-router'
import { getGistById, getGistUserByUserId } from '../../../selectors/index'

class GistsDetailView extends Component {
  componentWillMount() {
    const { gist } = this.props
    if(!gist) {
      this.props.fetchGist(this.props.params.id) 
    }
  }

  renderGistUser(gistOwner) {
    if(!gistOwner){
      return (
        <div>
          <strong> Anonymous User </strong>
        </div>
      )
    }
    return (
      <div  className='gitUser'>
        <div className='avatar nav nav-pills nav-stacked pull-xs-left'>
          <img src={gistOwner.avatar_url} height='100' width='100' />
        </div>
        <div className='nav nav-pills nav-stacked pull-xs-right'>
          <strong>Username: </strong> {gistOwner.login}
          <br />
          <br />
          Organization:<a href={gistOwner.organizations_url}>{gistOwner.organizations_url}</a>
          <br />
          Repo:<a href={gistOwner.repos_url}>{gistOwner.repos_url}</a>
        </div>
      </div>      
    )
  }

  renderGistContent(selectedGist) {
    return (
      <div className='gitContent'>
        Description: {selectedGist.description}
        <br />
        Comments: {selectedGist.comments}
        <br />
        created on: {selectedGist.created_at}
        <br />
        Gist ID: {selectedGist.id}
        <br />
        Gist URL: {selectedGist.url}
      </div>
    )
  }
  
  render() {
    const { gist, gistOwner } = this.props
    //This should only be displayed for a second as we load the gist from the API (if we don't have it in the state)
    if(!gist){
      return (
        <div> 
          <Link className='link' to='/'>Return Home</Link>
          <br />
          Loading...
        </div>
      )
    }
    return (
      <div>
        <Link className='link' to='/'>Return Home</Link>
        <br />        
        {this.renderGistUser(gistOwner)}
        {this.renderGistContent(gist)}
      </div>
    )  
  }
}

function mapStateToProps(state, ownProps){
  const gist = getGistById(state, ownProps.params.id)
  var gistOwner = gist ? getGistUserByUserId(state, gist.owner) : gistOwner = undefined
  return {
    gist: gist,
    gistOwner: gistOwner
  }  
}

export default connect(mapStateToProps, { fetchGist })(GistsDetailView)
