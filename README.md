# atn-wallet Browser Extension

atn-wallet forks [metamask](metamask.md) to reuse the most features

## TODO List

- [x] register coin type for [BIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) 
- [ ] new UI desigh( *most of work* )
- [ ] adding ATN networks(testnet)
- [ ] change eth to atn 
- [ ] change eth_oracle to atn_oracle(option)
- [ ] emit event when account changes 


### UI design

TODO: UI designer

UI dev flow:

[ui-dev-mode](https://github.com/MetaMask/metamask-extension/blob/develop/docs/ui-dev-mode.md)

[ui-mock-mode](https://github.com/MetaMask/metamask-extension/blob/develop/docs/ui-mock-mode.md)

### [Adding ATN Networks](https://github.com/MetaMask/metamask-extension/blob/develop/docs/adding-new-networks.md)
To add a network to dropdown menu, make sure the following files are adjusted properly:

```
app/scripts/lib/buy-eth-url.js
app/scripts/lib/config-manager.js
ui/app/app.js
ui/app/components/buy-button-subview.js
ui/app/components/drop-menu-item.js
ui/app/components/network.js
ui/app/components/tx-list.js
ui/app/css/lib.css
ui/lib/account-link.js
ui/app/components/token-cell.js
```

You will need:

  * The network ID
  * An RPC endpoint url
  * An explorer link
  * CSS for the display icon
