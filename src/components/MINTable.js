import React, {Component} from "react";
import {Table} from "reactstrap";
import axios from "axios";
import MINTableRow from "./MINTableRow.js";
import {GridLoader} from "react-spinners";

class MINTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reports: [],
      loading: true,
    };
    this.getReports();
  }

  async getReports() {
    try {
      const reports = await axios.get(
        "https://www.avalanche.ca/api/min/submissions",
        {
          params: {
            last: "7:days",
          },
        },
      );
      this.setState({
        reports: reports.data.reverse(),
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    var tbody;
    if (this.state.loading) {
      return (
        <GridLoader
          css="margin: 0 auto; margin-top:10%;"
          color={"#36D7B7"}
          size={15}
          sizeUnit={"px"}
          margin={"2px"}
        />
      );
    } else {
      return (
        <Table striped hover>
          <thead>
            <tr>
              <th>Submission Date</th>
              <th>User</th>
              <th>Title</th>
              <th>Obs Type</th>
              <th>Region</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.reports.map((report, index) => (
              <MINTableRow key={report.subid} {...report} />
            ))}
          </tbody>
        </Table>
      );
    }
  }
}

export default MINTable;
