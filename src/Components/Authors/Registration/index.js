import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import 'materialize-css';
import { Carousel, Table,Container } from "react-materialize";
import './registration.css';
class Registration extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="addreg">
                        <h1 className="font-bold font-setting">REGISTRATION</h1>
                    </div>
                </Carousel>
                
                <Container className="center">
                <h4>Registration details are as follows:</h4>
                <h5>Conference Registration Fee:</h5>
                <Table
                    centered={true}
                    hoverable={true}
                    responsive={true}
                    striped={true}
                    className="hoverable"
                >
                    <thead>
                        <tr>
                            <th data-field="event">Delegates</th>
                            <th data-field="date">Indian (INR)</th>
                            <th data-field="date">Internation (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Students/Research Scholars</td>
                            <td>5000</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Faculty from Academics</td>
                            <td>8000</td>
                            <td>250</td>
                        </tr>
                        <tr>
                            <td>Delegates from Industry</td>
                            <td>10000</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>Attendee</td>
                            <td>3000</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </Table>
                <h6>One additional paper per author/presenter shall be charged 3000 INR for participants
                from India and 100 USD for International participants.</h6>
                
                </Container>
            </div>
        );
    }
}

export default Registration;