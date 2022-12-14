import React, { useContext, useEffect } from "react";
import { CardContext } from "../context/CardContext";
import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from "../context/UrlContext";
import useAxios from "../hooks/useAxios";

function Category() {
	const { setQuestion, setAnswers } = useContext(CardContext);
	const { url, setUrl } = useContext(UrlContext);
	const { data: card } = useAxios(url);
	const { selected, setSelected } = useContext(CategoryContext);

	//**** IMPORTANT:
	// ****Here is where you set your api data into contexts you've set up for card and category. ex: setQuestion turns question into the "question" part from the API url:
	useEffect(() => {
		if (card) {
			setQuestion(card.question);
			setAnswers(card.choices);
			// setSelected(card.category);
		}
	}, [card, setQuestion, setAnswers, setSelected]);

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
					<option value="default" data-color="#efefef">
						-Select-
					</option>
					<option value="geography" data-color="#05b4e1">
						Geography
					</option>
					<option value="film_and_tv" data-color="#b91274">
						Entertainment
					</option>
					<option value="history" data-color="#fbd60a">
						History
					</option>
					<option value="arts_and_literature" data-color="#8c4e09">
						Art & Literature
					</option>
					<option value="science" data-color="#6cac06">
						Science & Nature
					</option>
					<option value="sport_and_leisure" data-color="#d93905">
						Sports and Leisure
					</option>
				</select>
			</div>

			<div className="input-container px-4 py-8 flex center">
				<button
					disabled={selected === "default"}
					className="disabled:bg-gray-500 rounded navy py-2 px-6 white-text hover:bg-violet-600"
					onClick={(e) => {
						e.preventDefault();
						setUrl(`&categories=${selected}`);
						console.log(selected);
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
