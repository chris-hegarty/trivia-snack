import React from 'react'
import Wheel  from "./Wheel";
import Category from "./Category";
import Question from "./Question";

function GamePage() {

    return (
        <>
            <main>
                <section className="intro">
                    <h1>Welcome to Trivia Wheel!</h1>
                    <h2>A quiz game inspired by Trivial Pursuit.</h2>
                    <p>First, select a region and a level of difficulty.</p>
                    <p>Next, select a category, then a question.</p>
                    <p>When select a correct answer, the category "pie" will be added to the wheel.</p>
                    <p>Keep playing until the wheel is filled with all the categories!</p>
                </section>
                <section className="difficulty">
                    <Wheel />
                    <Category />
                    <Question />
                </section>
            </main>
        </>
    )
}

export default GamePage