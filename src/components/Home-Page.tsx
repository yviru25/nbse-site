import * as React from 'react';

interface Homestate{

}

export default class HomePage extends React.Component<Homestate>{

    render(){
       return(
          <div className="homePage">
            <section className="slider_indanica top_space_bg">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="10000" data-pause="true">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                    <a href="ogo-olympiads/ogo.html">
                        <img src={require("../assets/images/slides/nbse.png")} className="img-responsive" alt="Responsive image" />
                    </a>  
                    </div>
                </div>
                </div>
                </section>
          </div>
      )
    }
}