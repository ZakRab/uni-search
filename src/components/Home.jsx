import React from "react";
import {NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <main className="">

      <section className=" padding-top flex-row d-flex height1000px">
      <div className=" v-center margin-left5px font-large width33p">Welcome To UNISEARCH</div>
    
      <img
        className="bubbles "
        alt="boy"
        src={require("./Bubbles.png")}
      ></img> 
        <div className="width33p margin-left5px font-large v-center">Get Started Today!
        <div>
            <NavLink to="/login" className=" btn btn-primary">
              Login
            </NavLink>
          </div>
        </div>
      </section>
      <section className="height1000px  ">
    <div className="font-large text-center">Search Our Directorty of Over 
    9,000 Universities and Colleges</div>
      </section>
      </main>
      <footer className=""></footer>
    </>
  );
};

export default Home;
