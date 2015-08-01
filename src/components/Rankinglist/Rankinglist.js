import React from 'react';
import styles from './Rankinglist.less';
import withStyles from '../../decorators/withStyles';
import CircleSpinner from '../CircleSpinner/CircleSpinner';
import superagent from 'superagent';


@withStyles(styles)
class Rankinglist extends React.Component {

  constructor() {
    super();
    this.state = { ranking: [] };
  }

  componentDidMount() {
    this.loadPlayers();
  }

  loadPlayers(gender = 'men', year = 2015) {
    superagent.get( 'http://localhost:5000' + '/api/rankinglist/' + year + '/' + gender, 
      (err, res) => {
        if(err) {
          console.log(err);
        } else {
          this.setState({ranking: JSON.parse(res.text) });
          console.log(res.text);
        }
      });
  }

 handleClick(gender, year) {
   this.loadPlayers(gender, year)
  }

  render() {
    const playersList = this.state.ranking.map((player) => {
      return (
        <a href="#" className="list-group-item">{player.place} {player.name} {player.points}</a>
      );
    });

    const spinner = (this.state.ranking.length === 0) ? <CircleSpinner /> : <br/>;

    return (
      <section className="rankinglist">
        <h3 className="header-rankinglist">Ranking Herrer, 2015 </h3>
        <button className="btn btn-default dropdown-toggle" id="rankinglistDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="rankinglistDropdown">
          <li><a href="#" onClick={this.handleClick('woman', 2015)}>Kvinner, 2015</a></li>
          <li><a href="#" className="disabled">Herrer, 2014</a></li>
          <li><a href="#" className="disabled">Kvinner, 2014</a></li>
        </ul>

        <div className="list-group">
          {{spinner}}
          {{playersList}}
        </div>
      </section>
    );
  }
}

export default Rankinglist;
