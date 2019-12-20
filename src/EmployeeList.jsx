import React from "react";

function EmployeeList() {
  console.log("this is employee list");
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">EMPLOYEE LIST!</h1>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <hr className="my-4" />
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </>
  );
}
export default EmployeeList;
