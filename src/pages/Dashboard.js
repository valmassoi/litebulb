import React, { Component } from 'react'
import NewBulb from '../components/new_bulb'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as bulbActions from '../actions/bulb'
import Bulbs from '../components/bulb_list'
import { Modal } from 'react-bootstrap'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  componentWillMount() {
    this.props.authActions.getProfile()//TODO move to index?
    this.props.bulbActions.getAll() // HACK
  }

  openModal(){
    this.setState({ showModal: true })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <button class="btn btn-primary pull-right" onClick={this.openModal.bind(this)}>+ New Bulb</button>
        <h1>My Bulbs</h1>
        <Bulbs mode="user" />
        <Modal
          aria-labelledby='modal-label'
          show={this.state.showModal}
          onHide={this.close}
        >
          <div>
            <h1 style={{marginLeft:"10px"}}>Create a new bulb</h1>
            <NewBulb close={this.closeModal.bind(this)}/>
          </div>
        </Modal>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    bulbActions: bindActionCreators(bulbActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
