import React, {Component} from 'react';
import Course from './Course.js';


class Coursesales extends Component {
  sumPrice(price){
    this.setState({total: this.state.total + price});
  }
  constructor(props){
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice  =  this.sumPrice.bind(this);
  }
  render(){
    // console.log(this.props.items);
    var courses = this.props.items.map((item, i) => {
      return <Course name={item.name} price={item.price} key={i}
      sumPrice={this.sumPrice} active={item.active} />
    })
    return(
      <div>
        <h1>You can buy courses:  </h1>
        <div id="courses">
          {courses} <br />
        <p id="total"> Total {this.state.total}<br/> </p>
        </div>
        <Course />
      </div>
    );
  }
}
export default Coursesales;
