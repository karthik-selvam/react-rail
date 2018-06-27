import React from 'react';
import { getDepartures } from '../../scripts/service';
import { stationCodes } from '../../scripts/constants';

export default class TrainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departures: []
        };
    }

    async componentDidMount() {
        const departures = await getDepartures();

        this.setState({departures: departures});
    }

    render() {
        return (
            <p>Trainlist {this.state.departures && this.state.departures.length}</p>
        );
    }
}