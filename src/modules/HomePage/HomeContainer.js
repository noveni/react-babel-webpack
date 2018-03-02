import React from 'react'
import { connect } from 'react-redux'
import { shouldFetchHomePageData } from './actions'
import HomeComposite from './components/HomeComposite'

class HomeContainer extends React.Component{
  componentWillMount() {
    console.log('HomeContainer componentWillMount')
    // this.props.dispatch(shouldFetchHomePageData())
  }
  render(){
    return <HomeComposite {...this.props} />
  }
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)