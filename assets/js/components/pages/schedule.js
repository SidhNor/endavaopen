var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var ScheduleIcon = require('../controls/schedule-icon');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var SchedulePage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>
            <h4>Friday, May 20</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:30 - 11:00</span>
                  <span>Opening Ceremony</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">11:00 - 13:30</span>
                  <span>Round 0</span>
                </div> <div className="layout horizontal">
                  <span className="schedule-time">14:00 - 18:30</span>
                  <span>1st Round Singles</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Saturday, May 21</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:30 - 12:00</span>
                  <span>2nd Round Singles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">12:00 - 14:00</span>
                  <span>1st Round Doubles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">14:30 - 17:30</span>
                  <span>Quarter-finals Singles and Doubles</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Sunday, May 22</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:30 - 11:30</span>
                  <span>Semi-finals Singles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">12:00 - 13:00</span>
                  <span>Semi-finals Doubles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">14:00 - 15:00</span>
                  <span>Finals Doubles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">15:30 - 16:30</span>
                  <span>Finals Singles</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = SchedulePage;
