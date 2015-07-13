import React from 'react';
import styles from './Rankinglist.less';
import withStyles from '../../decorators/withStyles';
import CircleSpinner from '../CircleSpinner/CircleSpinner';

@withStyles(styles)
class Rankinglist extends React.Component {

  constructor() {
    super();
    this.state = {
      ranking: [{
        place: 1,
        name: 'Sindre Øye Svendby',
        points: 237
      },
        {
          place: 2,
          name: 'Håkon Tveitan',
          points: 236
        },
        {
          place: 2,
          name: 'Stian Hagen',
          points: 230
        },
        {
          place: 4,
          name: 'Johan Wathne',
          points: 142
        }
      ]
    };
  }

  render() {
    const playersList = this.state.ranking.map((player) => {
      return (
        <a href="#" className="list-group-item">{player.place} {player.name} {player.points}</a>
      );
    });

    return (
      <section className="rankinglist">
        <h3 className="header-rankinglist">Ranking Herrer, 2015 </h3>
        <button className="btn btn-default dropdown-toggle" id="rankinglistDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span className="caret"></span>
        </button>
        <CircleSpinner />
        <ul className="dropdown-menu" aria-labelledby="rankinglistDropdown">
          <li><a href="#">Kvinner, 2015</a></li>
          <li><a href="#" className="disabled">Herrer, 2014</a></li>
          <li><a href="#" className="disabled">Kvinner, 2014</a></li>
        </ul>

        <div className="list-group">
          {{playersList}}
        </div>
      </section>
    );
  }
}

export default Rankinglist;
