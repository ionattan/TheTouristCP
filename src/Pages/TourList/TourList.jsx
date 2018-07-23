import React, { Component } from 'react';

import './TourList.css';

export default class TourList extends Component {
    renderTour(tour) {
        return (
            <tr key={ tour.id }>
                <th scope="row">{ tour.id }</th>
                <td><button type="button" className="btn btn-light" data-toggle="modal" data-target={ tour.modalid }>{ tour.name }</button></td>
                <td>{ tour.company }</td>
                <td>{ tour.dirPath }</td>
                <td>{ tour.level }</td>
                <td>{ tour.template }</td>
                <td>{ tour.type }</td>
            </tr>
        );
    }

    renderLine(image) {
        return(
            <li className="padding-modal-list" key={ image }>{ image }</li>
        )
    }

    renderInfo(info) {
        return(
            <p key={ info }>{ info }</p>
        )
    }

    renderModal(tour) {
        return (
            <div className="modal fade" id={ tour.modalidname } tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" key={ tour.id }>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={ tour.name }>
                                <img className="img-icon" src={ tour.icon } alt={ tour.summary }/>
                                <span><strong>{ tour.id } - Tour: </strong>{ tour.name }</span>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="description">
                                        <div className="title-info"><strong>Gallery: </strong></div>
                                        <div className="description-info"><ul>{ tour.gallery.map(this.renderLine.bind(this)) }</ul></div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="description">
                                        <div className="title-info"><strong>Availability: </strong></div>
                                        <span className="description-info"><ul>{ tour.availability.map(this.renderLine.bind(this)) }</ul></span>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="description">
                                        <div className="title-info"><strong>Description: </strong></div>
                                        <span className="description-info">
                                            { tour.description.map(this.renderInfo.bind(this)) }
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="description">
                                        <div className="title-info"><strong>Restrictions: </strong></div>
                                        <span className="description-info">
                                            { tour.restrictions.map(this.renderInfo.bind(this)) }
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="description">
                                        <div className="title-info"><strong>What to Excluded: </strong></div>
                                        <span className="description-info"><ul>{ tour.excluded.map(this.renderLine.bind(this)) }</ul></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="description">
                                        <div className="title-info"><strong>What's Included: </strong></div>
                                        <span className="description-info"><ul>{ tour.included.map(this.renderLine.bind(this)) }</ul></span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="description">
                                        <div className="title-info"><strong>What's to Bring: </strong></div>
                                        <span className="description-info"><ul>{ tour.bring.map(this.renderLine.bind(this)) }</ul></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let tours = this.props.data || [];
        console.log(tours)

        return (
            <section className="container" id="tourList">
                <h1>Tour List</h1>
                { tours.map( this.renderModal.bind(this) ) }
                <table className="table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">DirPath</th>
                            <th scope="col">Level</th>
                            <th scope="col">Template</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tours.map( this.renderTour.bind(this) ) }
                    </tbody>
                </table>
            </section>
        );
    }
}
