var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  menuItems = [
    { route: 'root', text: 'Home' },
    { route: 'tournament', text: 'Tournament' },
    { route: 'doubles', text: 'Doubles' },
    { route: 'schedule', text: 'Schedule' },
    { route: 'players', text: 'Players' },
    { route: 'rules', text: 'Rules' },
    { text: 'Live', type: 'LINK', target: '__blank', payload: 'http://live.endava.com' }
  ];

var OpenLogo = require('./controls/open-logo.js')


var AppLeftNav = React.createClass({

  mixins: [Router.Navigation, Router.State],

  getInitialState: function() {
    return {
      selectedIndex: null
    };
  },

  render: function() {
    var header = <div className="layout vertical bg-primary tall">
        <div className="logo">
          <OpenLogo/>
          <span>Endava Open 2016</span>
        </div>
        <div className="bottom">
          <div>May 20 - 22, 2015</div>
          <div>Chisinau, MD</div>
        </div>
      </div>;

    return (
      <mui.LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle: function() {
    this.refs.leftNav.toggle();
  },

  _getSelectedIndex: function() {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.isActive(currentItem.route)) return i;
    }
  },

  _onLeftNavChange: function(e, key, payload) {
    if (payload.route) {
      this.transitionTo(payload.route);
    }
  },

  _onHeaderClick: function() {
    this.transitionTo('root');
    this.refs.leftNav.close();
  }

});

module.exports = AppLeftNav;
