import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/image/1.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid ">
          <div className="" row>
            <div className="col-10 max-auto">
              <div className="row">


                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="fw-bold">
                   {props.name}
                    <br/><strong className="brand-name navbar-brand">Sandeep Singh</strong>
                  </h2>
                  <h6 className="my-3">
                    We are the team of Talented developer making websites.
                  </h6>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;

