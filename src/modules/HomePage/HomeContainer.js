import React from 'react'
import { connect } from 'react-redux'
import { shouldFetchHomePageData } from './actions'
import HomeComposite from './components/HomeComposite'

class HomeContainer extends React.Component{
  componentDidMount() {
    this.props.dispatch(shouldFetchHomePageData())
  }
  render(){
    console.log(this.props)
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