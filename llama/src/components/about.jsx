import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                        <p>Thank you for taking the time to come view my portfolio page as I stated before my name is Alexander
                            Garcia.
                            I am 26 years old and I am currently living in Gastonia, NC. I am currently attending UNCC Full Stack
                            Developer Bootcamp.</p>
                        <p>The reason for me to begin this journey to become a full stack developer is because I wanted a change
                            that reflects me.
                            I have been managing for over 8 years in the food service industry and also owned a Flowers bakery
                            route. There has always
                            been problems that needs to be resolved. What I have coime to find out is that I do enjoy being a
                            problem solver.</p>
                        <p>I wanted to be able to go to a path that will feel rewarding when a problem is solved. You feel such a
                            huge accomplishment for it.
                            I have had a love for computers in high school and explored but never dove into more. My passion has
                             always been in my heart but
                            I have recently deciding to take control and change my future. Please feel free to check out my
                            portfolio and to contact me for anything.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites with JavaScript,React,HTML,CSS.
                        I do my best to keep learning new materials to enhance my skills and be able to
                        provide the best design I possibly can for future employers.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures </h3>
                    <p>I have experience with SQL, Node, and MongoDB to help ease database managemnet.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Future languages to build on </h3>
                    <p>I am extremely motivated to learn Python, Go, Ruby, Java, and C#.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
