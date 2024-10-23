// Dice Component that shows dice with a click event to roll the dice
const Dice = ({ value, onClick, isRolling }) => {
    const diceImage = `images/${value}.png`;
    
    return (
        <div className={`dice ${isRolling ? 'rolling' : ''}`} onClick={onClick}>
            <img src={diceImage} alt={`Dice showing ${value}`} />
        </div>
    );
};

// Main App Component
const App = () => {
    const [numDice, setNumDice] = React.useState(1);
    const [numSides, setNumSides] = React.useState(4); // Default number of sides set to 4
    const [diceValues, setDiceValues] = React.useState([1]);
    const [isRolling, setIsRolling] = React.useState(false);

    // Handle dice increment
    const handleDiceIncrement = () => {
        setNumDice(prev => prev + 1);
        setDiceValues(prev => [...prev, 1]); // Add new dice with default value 1
    };

    // Handle reset
    const handleReset = () => {
        setNumDice(1);
        setNumSides(4); // Reset sides back to 4 on reset
        setDiceValues([1]); // Reset all dice to show the image for value 1
    };

    // Handle number of sides up/down with max sides limited to 6 and min to 1
    const handleSidesChange = (delta) => {
        setNumSides(prev => {
            const newSides = prev + delta;
            return newSides < 1 || newSides > 6 ? prev : newSides; // Maximum sides limited to 6
        });
    };

    // Roll all dice with a delay for 1.5 seconds
    const handleRollAll = () => {
        setIsRolling(true); // Start rolling animation

        // After 1.5 seconds, stop the rolling and show the result
        setTimeout(() => {
            const newValues = diceValues.map(() => Math.floor(Math.random() * numSides) + 1);
            setDiceValues(newValues);
            setIsRolling(false); // Stop rolling animation
        }, 1500); // Delay for 1.5 seconds
    };

    // Roll a specific dice when clicked
    const handleDiceClick = (index) => {
        const newDiceValues = [...diceValues];
        newDiceValues[index] = Math.floor(Math.random() * numSides) + 1;
        setDiceValues(newDiceValues);
    };

    return (
        <div className="app">
            {/* Left Side: Settings */}
            <div className="settings">
                <h1>Unique Dice Roller</h1>
                <div className="controls">
                    <div>
                        <label>Number of Dice: </label>
                        <input type="text" value={numDice} readOnly />
                        <button onClick={handleDiceIncrement}>Add Dice</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>

                    <div>
                        <label>Number of Sides: </label>
                        <input type="text" value={numSides} readOnly />
                        <button onClick={() => handleSidesChange(1)}>
                            <img src="images/up.png" alt="Increase Sides" />
                        </button>
                        <button onClick={() => handleSidesChange(-1)}>
                            <img src="images/down.png" alt="Decrease Sides" />
                        </button>
                    </div>

                    <button onClick={handleRollAll}>Roll All Dice</button>
                </div>
            </div>

            {/* Right Side: Dice Display */}
            <div className="dice-display">
                <div className="dice-container">
                    {diceValues.map((value, index) => (
                        <Dice 
                            key={index} 
                            value={value} 
                            isRolling={isRolling} 
                            onClick={() => handleDiceClick(index)} // Allow specific dice to roll
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
