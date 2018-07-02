import React, { Component } from 'react'
import PropTypes from 'prop-types'
import copyToClipboard from 'copy-to-clipboard'

const Tooltip = require('../tooltip-v2.js')

const addressStripper = (address = '') => {
  if (address.length < 4) {
    return address
  }

  return `${address.slice(0, 4)}...${address.slice(-4)}`
}

class SelectedAccount extends Component {
  state = {
    copied: false,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    selectedAddress: PropTypes.string,
    selectedIdentity: PropTypes.object,
  }

  render () {
    const { t } = this.context
    const { selectedAddress, selectedIdentity } = this.props

    return (
      <div className="selected-account">
        <Tooltip
          position="bottom"
          title={this.state.copied ? t('copiedExclamation') : t('copyToClipboard')}
        >
          <div
            className="selected-account__clickable"
            onClick={() => {
              this.setState({ copied: true })
              setTimeout(() => this.setState({ copied: false }), 3000)
              copyToClipboard(selectedAddress)
            }}
          >
            <div className="selected-account__name">
              { selectedIdentity.name }
            </div>
            <div className="selected-account__address">
              { addressStripper(selectedAddress) }
            </div>
          </div>
        </Tooltip>
      </div>
    )
  }
}

export default SelectedAccount
