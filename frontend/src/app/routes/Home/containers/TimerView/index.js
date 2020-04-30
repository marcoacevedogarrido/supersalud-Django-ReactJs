import axios from 'axios'
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CardMenu from 'components/dashboard/Common/CardMenu';
import TimerProcess from './TimerProcess'
import { URL_GLOBAL } from 'constants/constants';



const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

class TimerView extends React.Component {

  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };


  state = {
    anchorEl: undefined,
    menuState: false,
    procesos: [],
    isloading: true

  }


  componentDidMount() {
    this.getDayProcess();

  }

  async getDayProcess() {
    const res = await axios.get(`${URL_GLOBAL}/api/dashboard/day/procesos/`);
    const { data } = await res;
    this.setState({
      ...this.state,
      procesos: data.results,
      isloading: false
    })
  }


  currYear = () => {
    var year = new Date().getFullYear();
    return year;
  }

  currMounth = () => {
    var month = new Date().getMonth();
    let mesParseado = monthNames[month]
    return mesParseado;
  }

  currDay = () => {
    var day = new Date().getDay();
    let dayActual = day + 2
    return dayActual;
  }

  render() {



    const { headerColor } = this.props;
    const { anchorEl, menuState, procesos } = this.state;
    return (
      <div className="jr-card">

        <div className={`jr-card-header-color text-center bg-${headerColor}`}>
          <div className="jr-card-header-top mb-3">
            <IconButton className="jr-menu-icon mr-auto" aria-label="Menu">
              <span className="menu-icon bg-white" />
            </IconButton>
            <IconButton className="icon-btn p-2" onClick={this.onOptionMenuSelect.bind(this)}><i
              className="zmdi zmdi-more-vert text-white" /></IconButton>
          </div>

          <Avatar className="bg-grey lighten-2 avatar-shadow size-90 mx-auto mb-3">
            <h1 className="m-0 text-primary font-weight-bold">{this.currDay()}</h1>
          </Avatar>
          <div className="jr-card-hd-content text-white">
            <h2 className="text-white jr-font-weight-medium mb-1">Viernes</h2>
            <p className="mb-0"> {this.currMounth()} {this.currYear()}</p>
          </div>
        </div>
        <div className="jr-card-body">

          <div className="d-flex flex-column">

            {procesos.map(proceso => (
              <TimerProcess
                key={proceso.id}
                proceso={proceso}
              />
            ))}
          </div>
        </div>

        <CardMenu menuState={menuState} anchorEl={anchorEl}
          handleRequestClose={this.handleRequestClose.bind(this)} />
      </div>
    )
  }
}

export default TimerView;

