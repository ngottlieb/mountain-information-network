import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';
import moment from 'moment';
import avcanRegions from '../regions.js';
import booleanWithin from '@turf/boolean-within';
import { point as TurfPoint } from '@turf/helpers';

const obsClasses = {
  'quick': 'secondary',
  'snowpack': 'primary',
  'weather': 'warning',
  'avalanche': 'info',
  'incident': 'danger'
};

class MINTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: this.getRegion()
    };
  }

  obsTypes() {
    return this.props.obs.map((obs) => (<Badge key={obs.obid} color={obsClasses[obs.obtype]} pill>{obs.obtype}</Badge>))
  }

  avCanUrl() {
    return `https://www.avalanche.ca/map?panel=mountain-information-network-submissions/${this.props.subid}`;
  }

  getRegion() {
    const point = TurfPoint(this.props.latlng.reverse());
    return avcanRegions.features.filter((feature) => (booleanWithin(point, feature))).map((feature) => (feature.properties.name));
  }

  formattedDate() {
    return moment(this.props.datetime).format('MMM Do YYYY, h:mm a');
  }

  render() {
    return (
      <tr color="primary">
        <td>{this.formattedDate()}</td>
        <td>{this.props.user}</td>
        <td>{this.props.title}</td>
        <td>{this.obsTypes()}</td>
        <td>{this.state.region}</td>
        <td>
          <a href={this.avCanUrl()}>
            <Button color="primary" size="md">View on AvCan</Button>
          </a>
        </td>
      </tr>
    );
  }
}

export default MINTableRow;
