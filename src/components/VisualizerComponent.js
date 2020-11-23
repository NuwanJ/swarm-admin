import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Visualizer extends Component {
    render() {
        return (
            <div className="container">
                <br></br>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12">
                            <Iframe
                                url="http://ce-projects.nuwanjaliyagoda.com/docs/github_projects"
                                width="100%"
                                height="450px"
                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Visualizer;
