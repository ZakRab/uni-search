import React from "react";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Saves from "../components/Saves";

describe("search form", () => {
  describe("search functionality", () => {
    it("should set the search input on click", () => {
      const searchButton = getByTestId("search-button");
      fireEvent.click(searchButton);
      expect(preSearch).toBeDefined();
    });

    it("should set the country on select", () => {
      const searchCountry = getByTestId("search-country");
      fireEvent.select("United States");
      expect(searchCountry).toBe("United States");
    });
  });

  describe("Saved Universities functions", () => {
    it("should trigger the add function ", () => {
      const saveHeartAdd = getByTestId("saveHeartAdd");
      fireEvent.click(saveHeartAdd);
      expect(Saves).toBeDefined();
    });
    it("should trigger the add function ", () => {
      const saveHeartRemove = getByTestId("saveHeartRemove");
      fireEvent.click(saveHeartRemove);
      expect(Saves).toBeUndefined();
    });
  });
});
