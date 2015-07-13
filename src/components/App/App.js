import React from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Rankinglist from '../Rankinglist/Rankinglist';

@withContext
@withStyles(styles)
class App {

  render() {
    return (
      <div id="app">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Norges Tour</h3>
          </div>
          <div id="main-wrapper">
            <nav className="sidebar-left" id="left-menu">
                <ul className="nav nav-pills nav-stacked">
                <li role="presentation" className="active"><a href="#">
                  <span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Rankinglister</a>
                </li>
                <li role="presentation" className="disabled"><a href="#">
                  <span className="glyphicon glyphicon-bullhorn" aria-hidden="true"></span> Resultater</a>
                </li>
                <li role="presentation" className="disabled"><a href="#">
                  <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span> Turneringer</a>
                </li>
              </ul>
            </nav>
            <main>
              <Rankinglist />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
