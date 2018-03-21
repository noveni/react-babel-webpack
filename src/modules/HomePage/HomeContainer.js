import React from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { shouldFetchHomePageData } from './actions'
import HomeComposite from './components/HomeComposite'

class HomeContainer extends React.Component{
  componentWillMount() {
    this.props.dispatch(shouldFetchHomePageData())
  }
  render(){
    return <HomeComposite {...this.props} />
  }
}

HomeContainer.propTypes = {
  dispatch: PropType.func
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)