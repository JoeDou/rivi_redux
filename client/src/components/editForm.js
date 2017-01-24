import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { addCandidate, fetchCandidate, updateCandidate } from '../actions/index'
import { Link } from 'react-router'

function mapStateToProps(state) {
  return {
    initialValues: state.candidate.record
  }
}

function validate(values) {
  const errors = {}

  if (!values.first_name) {
    errors.title = 'Enter a first name'
  }

  if (!values.last_name) {
    errors.categories = 'Enter a last name'
  }

  if (!values.company) {
    errors.company = 'Enter a company'
  }

  if (!values.job_title) {
    errors.job_title = 'Enter a job title'
  }

  return errors
}

@connect(mapStateToProps, { addCandidate, fetchCandidate, updateCandidate })
@reduxForm({
  form: 'candidateForm',
  enableReinitialize: true,
  validate
})
export default class EditForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount() {
    let { params } = this.context.router
    if (params && params.id) {
      this.props.fetchCandidate(params.id)
    }
  }

  onSubmit = (props) => {
    let { params, push } = this.context.router
    if ( params && params.id) {
      this.props.updateCandidate(params.id, props).then(() => {
        push('/')
      })
    } else {
      this.props.addCandidate(props).then(() => {
        push('/')
      })
    }
  }

  onCancel = () => {
    this.context.router.goBack()
  }

  render() {
    let { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create A New Candidate</h3>

        <div className="form-group">
          <label>First Name</label>
          <Field name="first_name" component="input" type="text"/>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <Field name="last_name" component="input" type="text"/>
        </div>

        <div className="form-group">
          <label>Company</label>
          <Field name="company" component="input" type="text"/>
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <Field name="job_title" component="input" type="text"/>
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
        <button className="btn btn-danger" onClick={this.onCancel}>
          cancel
        </button>
      </form>
    )
  }
}
