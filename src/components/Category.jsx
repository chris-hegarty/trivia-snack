import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../context/CardContext";
import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from "../context/UrlContext";
import useAxios from "../hooks/useAxios";

function Category() {
  const { setQuestion, setAnswers } = useContext(CardContext);
  const { url, setUrl } = useContext(UrlContext);
  const { data: card } = useAxios(url);
  const { selected, setSelected } = useContext(CategoryContext);

  //set api data into context:
  useEffect(() => {
    if (card) {
      setQuestion(card.question);
      setAnswers(card.choices);
      setSelected(card.category);
    }
  }, [card, setQuestion, setAnswers]);

  return (
    // <section id="category-container flex">
    <>
      <div>
        <label htmlFor="category-dropdown">Select a Category:</label>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
          name="categories"
          id="category-dropdown"
          className="px-2 py-1 mx-6 rounded"
        >
          <option value="default">-Select-</option>
          <option value="geography">Geography</option>
          <option value="film_and_tv">Entertainment</option>
          <option value="history">History</option>
          <option value="arts_and_literature">Art & Literature</option>
          <option value="science">Science & Nature</option>
          <option value="sport_and_leisure">Sports and Leisure</option>
        </select>
      </div>

      <div className="input-container px-4 py-8 flex center">
        <button
          className="rounded navy py-2 px-6 white-text hover:[#05b4e1]"
          onClick={(e) => {
            e.preventDefault();
            setUrl(`&categories=${selected}`);
          }}
        >
          Get Question
        </button>
      </div>
    </>
    // </section>
  );
}

export default Category;