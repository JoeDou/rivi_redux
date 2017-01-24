import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchCandidate, deleteCandidate, clearCandidateData } from '../actions/index'
import { Link } from 'react-router'

function mapStateToProps(state) {
  return { record: state.candidate.record }
}

@connect(mapStateToProps, { fetchCandidate, deleteCandidate, clearCandidateData })
export default class Candidate extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchCandidate(this.props.params.id)
  }

  componentWillUnmount() {
    this.props.clearCandidateData()
  }

  onDelete(){
    this.props.deleteCandidate(this.props.params.id).then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { record, params } = this.props
    if (!record){
      return <div>Loading.....</div>
    }

    return (
      <div>
        <Link className="btn btn-primary" to="/">Go Back</Link>
        <Link className="btn btn-success" to={`/candidate/${params.id}/edit`}>Edit</Link>
        <h3>{record.first_name} {record.last_name}</h3>
        <h6>Company: {record.company}</h6>
        <h6>Job Title: {record.job_title}</h6>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>
          Delete Candidate
        </button>
      </div>
    )
  }
}
