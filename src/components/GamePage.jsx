import React from 'react'

function GamePage() {
    return (
        <>
            <main>
                <h1>Welcome to Trivia Wheel!</h1>
                <h2>A quiz game inspired by Trivial Pursuit.</h2>
                <p>First, select a region and a level of difficulty.</p>
                <p>Next, select a category, then a question.</p>
                <p>When select a correct answer, the category "pie" will be added to the wheel.</p>
                <p>Keep playing until the wheel is filled with all the categories!</p>
                {/* Presets component */}
            </main>
        </>
    )
}

export default GamePage