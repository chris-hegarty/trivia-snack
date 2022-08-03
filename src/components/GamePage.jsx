import React from 'react'
import Wheel  from "./Wheel";
import Category from "./Category";
// import Question from "./Question";
import Card from "./Card";

function GamePage() {

    return (
        <>
            <main className="navy">
                <section className="intro flex center align-center column">
                    <h1 className="gold">Trivia Time</h1>
                    <h2>A quiz game inspired by Trivial Pursuit.</h2>
                    <br />
                    <div className="flex column align-center instructions">
                    <p>Select a category, and click to generate a question.</p>
                    <p>When you've selected a correct answer, the category "pie" will be added to the wheel.</p>
                    <p>Keep playing until the wheel is filled with all the categories!</p>
                    </div>
                </section>
                <section className="category-button flex center align-center">
                    <Category />
                </section>
                <section className="game-main p-16 flex space-around">
                    <Wheel />
                    {/* <Question /> */}
                    <Card />
                </section>
            </main>
        </>
    )
}

export default GamePage