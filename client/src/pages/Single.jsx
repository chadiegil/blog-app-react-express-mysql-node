import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Chadie Gil</span>
            <p>POsted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit img" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img src={Delete} alt="edit img" />
            </Link>
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum
          nam deserunt dolorem exercitationem laborum illo, ipsa eum at
          recusandae!
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eligendi rem, quia consectetur nesciunt ab incidunt nulla commodi id
          omnis dolorum consequatur velit aliquam ea ullam provident sint
          ratione itaque ad ipsum cumque! Voluptate quae eaque praesentium
          voluptas autem sed qui omnis! Perspiciatis maiores quaerat saepe cum
          earum, doloremque nihil.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eligendi rem, quia consectetur nesciunt ab incidunt nulla commodi id
          omnis dolorum consequatur velit aliquam ea ullam provident sint
          ratione itaque ad ipsum cumque! Voluptate quae eaque praesentium
          voluptas autem sed qui omnis! Perspiciatis maiores quaerat saepe cum
          earum, doloremque nihil.
        </p>
        <br />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eligendi rem, quia consectetur nesciunt ab incidunt nulla commodi id
          omnis dolorum consequatur velit aliquam ea ullam provident sint
          ratione itaque ad ipsum cumque! Voluptate quae eaque praesentium
          voluptas autem sed qui omnis! Perspiciatis maiores quaerat saepe cum
          earum, doloremque nihil.
        </p>
        <br />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eligendi rem, quia consectetur nesciunt ab incidunt nulla commodi id
          omnis dolorum consequatur velit aliquam ea ullam provident sint
          ratione itaque ad ipsum cumque! Voluptate quae eaque praesentium
          voluptas autem sed qui omnis! Perspiciatis maiores quaerat saepe cum
          earum, doloremque nihil.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
