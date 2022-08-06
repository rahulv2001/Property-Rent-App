import React from "react";
import "./styles.css";

const FilterPanel = ({
  locations,
  locationvalue,
  changeLocation,
  pricevalue,
  changePrice,
  datevalue,
  changeDate,
  types,
  typevalue,
  changeType,
  searchvalue,
  handleSearch
}) => {
  return (
    <div className="filter">

      {/* Location filter option */}
      <div className="col-sm-12 my-2 filterCard">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={locationvalue}
            onChange={changeLocation}
          >
            <option value="">Select</option>

            {locations.map((title) => (
              <option value={title} key={title}>
                {title}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Location</label>
        </div>
      </div>

      {/* Date filter option */}
      <div className="col-sm-12 my-2 filterCard">
        <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={datevalue}
              onChange={changeDate}
            />
          <label htmlFor="floatingSelect">When</label>
        </div>
      </div>

      {/* Price filter option */}
      <div className="col-sm-12 my-2 filterCard">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={pricevalue}
            onChange={changePrice}
          >
            <option value="">Select</option>
            <option value="1000-2000">Rs. 1000-2000</option>
            <option value="2000-3000">Rs. 2000-3000</option>
            <option value="3000-4000">Rs. 3000-4000</option>
            <option value="4000-5000">Rs. 4000-5000</option>

          </select>
          <label htmlFor="floatingSelect">Price</label>
        </div>
      </div>

      {/* Property type filter option */}
      <div className="col-sm-12 my-2 filterCard">
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={typevalue}
            onChange={changeType}
          >
            <option value="">Select</option>

            {types.map((type,key) => (
              <option value={type} key={key}>
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Property Type</label>
        </div>
      </div>

      {/* Search Button option */}
      <div className="col-sm-12 my-2 filterCard">
        <div className="">
          <button type="button" value={searchvalue} onClick={handleSearch} className="btn btn-primary filterButton">
            Search
          </button> 
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
