import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../actions/index'
import { Link } from 'react-router'

function mapStateToProps(state) {
  return { list: state.candidate.list }
}

@connect(mapStateToProps, { fetchList })
export default class List extends Component {
  componentDidMount() {
    this.props.fetchList()
  }

  renderList() {
    let { list } = this.props
    return list ? this.props.list.map( candidate => {
      return(
        <li className="list-group-item" key={candidate._id}>
          <Link to={`/candidate/${candidate._id}`}>
            <span className="pull-xs-right">{candidate.first_name} {candidate.last_name}</span>
            <strong>{candidate.job_title}</strong>
          </Link>
        </li>
      )
    }): <div>Loading</div>
  }

  render() {
    let { list } = this.props

    return(
      <div>
        <div className="text-xs-right">
          <Link to="/candidate/new" className="btn btn-primary">
            Add A Candidate
          </Link>
        </div>
        <h3>Candidates</h3>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}
