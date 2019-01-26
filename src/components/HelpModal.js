import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class HelpModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle} >Help plz</ModalHeader>
        <ModalBody>
          <h4>What is the Mountain Information Network (MIN)?</h4>
          <p>
            <a href="http://www.avalanche.ca">Avalanche Canada</a> provides the MIN as a way for recreationalists to communicate
            snow and avalanche observations with each other and with the forecasting team. It's an extremely valuable tool,
            especially in regions where there aren't ski hills or significant ski guiding operations.
          </p>
          <h4>What is this tool?</h4>
          <p>
            Avalanche Canada provides a way of viewing recent MIN reports on their map interface. This is great, but only recent MIN reports are
            shown and it can be hard to figure out how recent they are without drilling in on each one (they use different shades of blue to indicate that).
            This tool allows you to view a tabular feed of recent MIN reports organized by date -- it's just another way of looking at the same data, but one
            that -- for me -- makes it easier to quickly scan and see what the latest information in my region is.
          </p>
          <h4>Feedback?</h4>
          <p>
            Honestly, I built this because I wanted a tool like this. That said, I'm open to suggestions. Please use <a href="https://github.com/ngottlieb/mountain-information-network/issues">Github issues</a> to reach out with
            bugs, feature requests, etc. Thanks!
          </p>
          <h4>Who are you?</h4>
          <p>
            Hi! My name is <a href="http://www.nicholasgottlieb.com">Nick Gottlieb</a>. I'm a backcountry enthusiast based in Squamish BC who would love to see more local use of and engagement with the MIN!
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default HelpModal;
