const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const {ATN, ATN_TESTNET_URL} = require('../../../app/scripts/controllers/network/enums')

module.exports = Network

inherits(Network, Component)

function Network() {
    Component.call(this)
}

Network.prototype.render = function() {
    const props = this.props
    const networkNumber = props.network
    let providerName
    let rpcTarget
    try {
        providerName = props.provider.type
        rpcTarget = props.provider.rpcTarget
    } catch (e) {
        providerName = null
        rpcTarget = null
    }
    let iconName, hoverText
    if (networkNumber === 'loading') {
        return h('span.pointer', {
            className: props.onClick && 'pointer',
            style: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            },
            onClick: (event) => props.onClick && props.onClick(event),
        }, [
            props.onClick && h('img', {
                title: 'Attempting to connect to blockchain.',
                style: {
                    width: '27px',
                },
                src: 'images/loading.svg',
            }),
            h('i.fa.fa-caret-down'),
        ])
    } else if (providerName === 'mainnet') {
        hoverText = 'Main Ethereum Network'
        iconName = 'ethereum-network'
    } else if (providerName === 'ropsten') {
        hoverText = 'Ropsten Test Network'
        iconName = 'ropsten-test-network'
    } else if (parseInt(networkNumber) === 3) {
        hoverText = 'Ropsten Test Network'
        iconName = 'ropsten-test-network'
    } else if (providerName === 'kovan') {
        hoverText = 'Kovan Test Network'
        iconName = 'kovan-test-network'
    } else if (providerName === 'rinkeby') {
        hoverText = 'rinkeby Test Network'
        iconName = 'rinkeby-test-network'
    } else if (networkNumber === '17' && rpcTarget === ATN_TESTNET_URL) {
        hoverText = 'ATN Test Network'
        iconName = 'atn-test-network'
    } else {
        hoverText = 'Unknown Private Network'
        iconName = 'unknown-private-network'
    }

    return (
        h('#network_component', {
            className: props.onClick && 'pointer',
            title: hoverText,
            onClick: (event) => props.onClick && props.onClick(event),
        }, [
            (function() {
                switch (iconName) {
                    case 'ethereum-network':
                        return h('.network-indicator', [
                                h('.menu-icon.diamond'),
                                h('.network-name', {
                                        style: {
                                            color: '#039396',
                                        }
                                    },
                                    'Main Network'),
                                props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                            ])
                            // case 'ropsten-test-network':
                            //   return h('.network-indicator', [
                            //     h('.menu-icon.red-dot'),
                            //     h('.network-name', {
                            //       style: {
                            //         color: '#ff6666',
                            //       }},
                            //     'Ropsten Test Net'),
                            //     props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                            //   ])
                            // case 'kovan-test-network':
                            //   return h('.network-indicator', [
                            //     h('.menu-icon.hollow-diamond'),
                            //     h('.network-name', {
                            //       style: {
                            //         color: '#690496',
                            //       }},
                            //     'Kovan Test Net'),
                            //     props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                            //   ])
                    case 'rinkeby-test-network':
                        return h('.network-indicator', [
                            h('.menu-icon.golden-square'),
                            h('.network-name', {
                                    style: {
                                        color: '#e7a218',
                                    }
                                },
                                'ATN Test Net'),
                            props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                        ])
                  case 'atn-test-network':
                    return h('.network-indicator', [
                      h('.menu-icon.golden-square'),
                      h('.network-name', {
                          style: {
                            color: '#33A0F4',
                          }
                        },
                        'ATN Test Network'),
                      props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                    ])
                    default:
                        return h('.network-indicator', [
                            h('i.fa.fa-question-circle.fa-lg', {
                                style: {
                                    margin: '10px',
                                    color: 'rgb(125, 128, 130)',
                                },
                            }),

                            h('.network-name', {
                                    style: {
                                        color: '#AEAEAE',
                                    }
                                },
                                'Private Network'),
                            props.onClick && h('i.fa.fa-caret-down.fa-lg'),
                        ])
                }
            })(),
        ])
    )
}