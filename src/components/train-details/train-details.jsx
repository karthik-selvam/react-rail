import React from 'react';


export default class TrainDetails extends React.PureComponent {
    render() {
        const {train} = this.props;

        const trainDetail = (
            <div>
                <p>From: {train.origin_name} </p>
                <p>To: {train.destination_name} </p>
                <p>Status: {train.status}</p>
                <p>ARR: {train.aimed_arrival_time}</p>
                <p>DEP: {train.aimed_departure_time}</p>
                <hr />
            </div>
        );

        return trainDetail;
    }
}