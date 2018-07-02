import React from 'react';
import { getDepartures } from '../../scripts/service';
import { stationCodes } from '../../scripts/constants';
import TrainDetails from '../train-details/train-details.jsx';

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
        const { departures } = this.state;

        const trainList = departures.map((train, index) =>
            <TrainDetails key={index} train={train} />
        );

        return trainList;
    }
}