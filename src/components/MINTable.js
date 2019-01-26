import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import MINTableRow from './MINTableRow.js';
import { GridLoader } from 'react-spinners';

class MINTable extends Component {
  constructor() {
    super();

    this.state = {
      reports: [],
      loading: true
    };
    this.getReports();
  }

  async getReports() {
    try {
      const reports = await axios.get('https://www.avalanche.ca/api/min/submissions', {
        params: {
          last: '7:days'
        }
      });
      this.setState({
        reports: reports.data.reverse(),
        loading: false
      });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    var tbody;
    if (this.state.loading) {
      tbody = (<GridLoader
        color={"#36D7B7"}
        size={15}
        sizeUnit={"px"}
        margin={"2px"}
      />);
    } else {
      tbody = this.state.reports.map((report, index) => (<MINTableRow key={report.subid} {...report} />));
    }

    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Submission Date</th>
            <th>User</th>
            <th>Title</th>
            <th>Obs Type</th>
            <th>Region</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { tbody }
        </tbody>
      </Table>
    );
  }
}

export default MINTable;
