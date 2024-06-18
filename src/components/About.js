import React from "react";

export default function About(props) {
  props.toggleUrl('/about')
  return (
    <>
      <div className="container">
        <div className="jumbotron my-2"style={{backgroundColor :props.mode==='dark'?'#2E5984':'lightgrey'}}>
          <div className="container">
            <h1 className="display-3">TextUtils</h1>
            <p>
              Welcome to TextUtils! At TextUtils, we are passionate about words.
              We believe in the power of effective communication and understand
              the value of well-crafted text. Our mission is to simplify and
              enhance your text processing needs, whether you’re a student, a
              professional writer, a coder, or anyone in between. Who We Are
              TextUtils is a comprehensive online platform dedicated to
              providing a wide range of text manipulation tools. Founded by a
              team of tech enthusiasts and language aficionados, we are
              committed to making text editing and formatting accessible and
              efficient for everyone. Our user-friendly tools are designed to
              cater to various text-related tasks, from basic formatting to
              advanced transformations.
            </p>

            <p>
              Experience the convenience and efficiency of TextUtils today.
              Explore our tools, simplify your text tasks, and let us help you
              communicate better. Thank you for choosing TextUtils – your
              partner in text excellence!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Founder</h2>
              <p>
                Sahil Sapkal, the visionary founder behind TextUtils, is a
                passionate advocate for heartfelt connections in the digital
                age. With a background in graphic design and a deep
                understanding of the power of personal expression, Sahil
                embarked on a mission to revolutionize the way people share
                greetings and sentiments. Driven by a desire to make meaningful
                connections more accessible and convenient, Sahil founded
                TextUtils with the vision of combining creativity with
                technology. His journey began with a simple idea to create an
                online platform where individuals could easily customize and
                download personalized greeting cards for any occasion.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Co-Founder</h2>
              <p>
                CodeWithHarry, known to many as a prominent figure in the world
                of coding education, is also a driving force behind the success
                of TextUtils as its co-founder. With a passion for technology
                and a keen eye for innovation, CodeWithHarry brings invaluable
                expertise to the intersection of coding and design within the
                greeting card industry. As a co-founder, CodeWithHarry plays a
                pivotal role in shaping the technological infrastructure that
                powers TextUtils's seamless user experience. His background in
                software development and commitment to excellence have been
                instrumental in ensuring that the platform remains efficient,
                reliable, and user-friendly.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Sponsor</h2>
              <p>
                Sinhagad Institute of Management proudly sponsors TextUtils,
                recognizing the platform's potential to redefine the digital
                greeting card industry. As a prestigious institution renowned
                for its dedication to excellence in management education, SIOM
                brings valuable support and expertise to TextUtils's journey.
                With a focus on nurturing innovation, SIOM serves as a guiding
                force for TextUtils, providing resources, mentorship, and
                networking opportunities crucial for its growth and success. By
                sponsoring TextUtils, SIOM demonstrates its commitment to
                empowering emerging startups and fostering a culture of
                creativity.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
