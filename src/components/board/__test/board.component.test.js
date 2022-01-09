import React from "react";
import reactDom from "react-dom";
import Board from "../board.component";
import Square from "../../square/square.component";
import { isTSAnyKeyword } from "@babel/types";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";

//Test Case
//Render the board component
//Passes
it("Renders the component squares correctly", () => {
  let squares = Array(9).fill(null);
  shallow(<Board squares={squares} />);
});

//Test Case
//Test the text value of the next player
//Passes or fails
it("Renders the next player turn(passes or fails)", () => {
  const wrapper = mount(<Board />);
  const firstPlayer = wrapper.find("h1.turn").children().first().text();
  expect(firstPlayer).toEqual("Next player : X");

  const button = wrapper.find("#square1").first();
  button.simulate("click");
  const secondPlayer = wrapper.find("h1.turn").children().first().text();
  expect(secondPlayer).toEqual("Next player : O");
});

//TestCase
//Tests the value of the winner
//Passes or fails

it("Renders the Winner(passes or fails)", () => {
  const wrapper = mount(<Board />);
  let status;

  const turn1 = wrapper.find("#square3").first();
  turn1.simulate("click");

  const turn2 = wrapper.find("#square6").first();
  turn2.simulate("click");

  const turn3 = wrapper.find("#square5").first();
  turn3.simulate("click");

  const turn4 = wrapper.find("#square9").first();
  turn4.simulate("click");

  const turn5 = wrapper.find("#square7").first();
  turn5.simulate("click");

  status = wrapper.find("h1.turn").children().first().text();
  expect(status).toEqual("Winner : X");
});

//TestCase
//Renders draw
//Passes
it("Renders draw", () => {
  const wrapper = mount(<Board />);
  let status;

  const turn1 = wrapper.find("#square1").first();
  turn1.simulate("click");

  const turn2 = wrapper.find("#square7").first();
  turn2.simulate("click");

  const turn3 = wrapper.find("#square3").first();
  turn3.simulate("click");

  const turn4 = wrapper.find("#square9").first();
  turn4.simulate("click");

  const turn5 = wrapper.find("#square8").first();
  turn5.simulate("click");

  const turn6 = wrapper.find("#square2").first();
  turn6.simulate("click");

  const turn7 = wrapper.find("#square4").first();
  turn7.simulate("click");

  const turn8 = wrapper.find("#square5").first();
  turn8.simulate("click");

  const turn9 = wrapper.find("#square6").first();
  turn9.simulate("click");

  status = wrapper.find("h1.turn").children().first().text();
  expect(status).toEqual("It's a draw");
});

//Test Case
//Expects not the It's a draw string
//Fails
it("Renders draw", () => {
  const wrapper = mount(<Board />);
  let status;

  const turn1 = wrapper.find("#square1").first();
  turn1.simulate("click");

  const turn2 = wrapper.find("#square7").first();
  turn2.simulate("click");

  const turn3 = wrapper.find("#square3").first();
  turn3.simulate("click");

  const turn4 = wrapper.find("#square9").first();
  turn4.simulate("click");

  const turn5 = wrapper.find("#square8").first();
  turn5.simulate("click");

  const turn6 = wrapper.find("#square2").first();
  turn6.simulate("click");

  const turn7 = wrapper.find("#square4").first();

  turn7.simulate("click");

  const turn8 = wrapper.find("#square5").first();
  turn8.simulate("click");

  const turn9 = wrapper.find("#square6").first();
  turn9.simulate("click");

  status = wrapper.find("h1.turn").children().first().text();
  expect(status).not.toEqual("It's a draw");
});

//TestCase
//Test if the initial counter value of the Board state is 1
//Passes

describe("Test the state of the Board initial counter", () => {
  it("Should have the following state", () => {
    const target = shallow(<Board />);
    expect(target.state("counter")).toEqual(1);
  });
});

function doSomething(item, callback) {
  callback(item);
}

const mock = jest.fn(() => 42);

doSomething(1, mock);

expect(mock).toHaveBeenCalled();

//TestCase
//Test the current value of counter after a few clicks
//Fails
describe("Test the state of the Board counter after a few clicks", () => {
  it("Should have the following state", () => {
    const target = shallow(<Board />);

    const turn1 = target.find("#square1").first();
    turn1.simulate("click");

    const turn2 = target.find("#square7").first();
    turn2.simulate("click");

    const turn3 = target.find("#square3").first();
    turn3.simulate("click");

    expect(target.state("counter")).toEqual(6);
  });
});

//TestCase
//Test the current value of counter after a few clicks
//Passes
describe("Test the state of the Board counter after a few clicks", () => {
  it("Should have the following state", () => {
    const target = shallow(<Board />);

    const turn1 = target.find("#square1").first();
    turn1.simulate("click");

    const turn2 = target.find("#square7").first();
    turn2.simulate("click");

    const turn3 = target.find("#square3").first();
    turn3.simulate("click");

    const turn4 = target.find("#square4").first();
    turn3.simulate("click");

    expect(target.state("counter")).toEqual(5);
  });
});

//TestCase
//Tests if the initial boolean value of the XIsNext from Board state is true
describe("Check the boolean state of the XIsNext", () => {
  it("Should have the following state", () => {
    const target = shallow(<Board />);
    expect(target.state("xIsNext")).toEqual(true);
  });
});
