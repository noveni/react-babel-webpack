import React from 'react'
import { connect } from 'react-redux'
import { shouldFetchAboutPageData } from './actions'
import AboutComposite from './components/AboutComposite'

class AboutContainer extends React.Component{
  componentDidMount() {
    this.props.dispatch(shouldFetchAboutPageData())
  }
  render(){
    console.log(this.props)
    return <AboutComposite {...this.props} />
  }
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)