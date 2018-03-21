import React from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import { shouldFetchAboutPageData } from './actions'
import AboutComposite from './components/AboutComposite'

class AboutContainer extends React.Component{
  componentDidMount() {
    this.props.dispatch(shouldFetchAboutPageData())
  }
  render(){
    return <AboutComposite {...this.props} />
  }
}

AboutContainer.propTypes = {
  'dispatch': PropType.func,
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)