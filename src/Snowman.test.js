import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman"

it("Game finishes after nWrong reaches MaxGuess", function(){
  const { container } = render(<Snowman maxWrong = {1}/>);

  const button = container.querySelector( 'button[value="j"]' )
  fireEvent.click(button)
  expect(container).toContainHTML("You Lose")
  expect(container).toContainHTML("apple")
  expect(container).toMatchSnapshot()

  // const rightArrow = container.querySelector(".fa-chevron-circle-right");
  // fireEvent.click(rightArrow);

  // // expect the second image to show, but not the first
  // expect(
  //   container.querySelector('img[alt="Photo by Richard Pasquarella on Unsplash"]')
  // ).not.toBeInTheDocument();
  // expect(
  //   container.querySelector('img[alt="Photo by Pratik Patel on Unsplash"]')
  // ).toBeInTheDocument();

  // expect(container).toMatchSnapshot();


} )