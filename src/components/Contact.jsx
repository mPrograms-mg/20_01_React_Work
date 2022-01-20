import React from "react";
import Header from "./Header";
function Contact() {
  return (
    <div>
      <Header/>
      <div class="container col-10 col-md-8 col-lg-7 "><br/>
        <form>
          <h1>Contact Us</h1>
          <div class="form-row">
            <div class="form-group col-md-8">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
              ></input>
            </div>
            <div class="form-row">
              <div class="form-group col-md-8">
                <label for="inputName">Name</label>
                <input
                  type="txt"
                  class="form-control"
                  placeholder="Name"
                ></input>
              </div>
            </div>
            <div class="form-group col-md-8">
              <label for="inputAddress">Message</label>
              <textarea
                class="form-control"
                type="text"
                rows="3"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <br />

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>    
  );
}

export default Contact;
