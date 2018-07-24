import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './styles.css';

import pic1 from '../../img/weebly4.png';

const items = [
  {
    src: pic1,
    altText: 'Aaron Orza, Director',
    caption: 'Nashville Classical Ballet Academy',
		className: 'specialClass'
  }
];

class CarouselFrame extends Component {
	constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

	render() {
		const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} id="carouselImage"/>
          <CarouselCaption captionText={item.altText} captionHeader={item.caption} className={item.className}/>
        </CarouselItem>
      );
    });

    return (
      <div>
					<Carousel
	        activeIndex={activeIndex}
	        next={this.next}
	        previous={this.previous}
					className="carouselBackground"
	      >
	        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
	        {slides}
	        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
	        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
	      </Carousel>
			</div>
    );
	}
}

export default CarouselFrame;
