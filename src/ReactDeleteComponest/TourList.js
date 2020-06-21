import React, { Component } from "react";

import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    console.log(id);

    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <section className="tourlist">
        {tours.map(tour => (
          <div key={tour.id} tour={tour} onClick={()=>this.removeTour(tour.id)} >{tour.id}</div>
        ))}
      </section>
    );
  }
}
