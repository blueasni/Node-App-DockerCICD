    import React, { useState, useEffect } from "react";
    import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
    import announcementsData from "../../src/announcement.json";

    const Announcement = () => {
      const [announcements, setAnnouncements] = useState([]);

      useEffect(() => {
        setAnnouncements(announcementsData.announcements);
      }, []);

      const [showModal, setShowModal] = useState(false);
      const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);

      const handleCloseModal = () => setShowModal(false);
      const handleShowModal = (index) => {
        setSelectedAnnouncements([announcements[index]]);
        setShowModal(true);
      };

      return (
        <>
          {/* <Navbar />s */}
        
          <Container>
            <Row>
              {announcements.slice(0, 3).map((announcement, index) => (
                <Col key={index} sm={6} md={4}>
                  <Card>
                    <Card.Img variant="top" src={announcement.image} />
                    <Card.Body>
                      <Card.Title>{announcement.title}</Card.Title>
                      <Card.Text>{announcement.content}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button onClick={() => handleShowModal(index)}>
                          View Details
                        </Button>
                        {/* <div className="text-muted">by: {announcement.author}</div> */}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>All Announcements</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedAnnouncements.map((announcement, index) => (
                  <div key={index}>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.content}</p>
                    <img src={announcement.image} alt={announcement.title} />
                    {/* <div className="text-muted mt-2">by: {announcement.author}</div> */}
                  </div>
                ))}
              </Modal.Body>
            </Modal>
          </Container>

          {/* < Footer /> */}
        </>
      );
    };

    export default Announcement;
