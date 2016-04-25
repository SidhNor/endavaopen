var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var Paper = mui.Paper;

var tournamentStore = require('../../stores/tournamentStore');

var CountDown = React.createClass({

  mixins: [
    Reflux.listenTo(tournamentStore, 'onStoreUpdate')
  ],

  beginDate: new Date('May 20, 2016, 10:00:00 GMT+0300').getTime(),
  currentDate: new Date().getTime(),

  getInitialState: function(){
    return {
      isIndoor: false,
      daysRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60 * 60 * 24)),
      hoursRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60 * 60)),
      minutesRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60))
    };
  },

  render: function () {
    var label =  '';
    var count = this.state.daysRemaining;
    var started = false;
    if (this.state.daysRemaining > 0) {
      label = 'DAYS UNTIL ENDAVA OPEN BEGINS';
    } else if (this.state.hoursRemaining > 0) {
      count = this.state.hoursRemaining;
      label = 'HOURS UNTIL ENDAVA OPEN BEGINS';
    } else if (this.state.minutesRemaining > 0) {
      count = this.state.minutesRemaining;
      label = 'minutes until ENDAVA open begins';
    } else {
      started = true;
      var court = (
        <div>
          <FlatButton linkButton={true} href="#schedule" label="Now Playing at Tennis Club Acvila"/>
          <FlatButton linkButton={true} href="https://www.google.com/maps/dir/Current+Location/Tennis+Club+Acvila" label=" " target="__blank" className="directions" tooltip="Directions"
                      tooltipPosition="top-center"/>
          <div className="court-location">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=400x300&maptype=roadmap&markers=color:red%7Clabel:A%7C47.0421601,28.7990609&center=47.0421601,28.7990609"/>
          </div>
        </div>
      )
    }
    if (started) {
      return (
        <div className="court layout vertical center">
          {court}
        </div>
      );
    } else {
      return (
        <div className="countdown layout vertical center">
          <div className="countdown-timer">
          {count}
          </div>
          <FlatButton linkButton={true} href="#schedule" label={label}/>
        </div>
      );
    }
  },

  onStoreUpdate: function(tournament) {
    var isIndoor = tournament.indoor;
    this.setState({
      loading: false,
      isIndoor: isIndoor
    });
  }

});

module.exports = CountDown;
