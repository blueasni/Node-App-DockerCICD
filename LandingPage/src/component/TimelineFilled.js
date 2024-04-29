import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FileEarmarkText, PersonLinesFill, TelephoneFill, ChatRightTextFill } from 'react-bootstrap-icons';

const TimelineFilled = () => {
  return (
    <Container>
      <ListGroup variant="flush">
        <ListGroupItem>
          <h5>Get on the flight</h5>
          <p>Charles de Gaulle Airport, Paris to Heathrow Airport, London</p>
          <small className="text-muted">Wednesday - 6:30 AM</small>
          <div className="mt-2">
            <FileEarmarkText /> bookingCard.pdf
          </div>
        </ListGroupItem>

        {/* ... other timeline items ... */}

        <ListGroupItem>
          <h5>Interview Schedule</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <PersonLinesFill className="mr-2" />
              <div>
                <strong>Rebecca Godman</strong>
                <div>Javascript Developer</div>
              </div>
            </div>
            <div>
              <ChatRightTextFill className="mr-2" />
              <TelephoneFill />
            </div>
          </div>
        </ListGroupItem>

        {/* ... other timeline items ... */}
      </ListGroup>
    </Container>
  );
};

export default TimelineFilled;
