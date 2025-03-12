const journeyRef = document.querySelector("#journey");



// I'm so sorry for how much of a mess this code is. I tried looking up a way to make this shorter/a shortcut but nothing came up with the specific parameters of the assignment.

function startJourney() {
    journeyRef.innerHTML =
    "<p>Your friend was supposed to be back from a camping trip a week ago.</p> <p>They haven't answered any texts or calls.</p> <p>You decided to travel to the campsite they were supposed to be staying at, hopefully to find them.</p> <p>As you walk the trail, you notice a small trail that leads off the main path.</p> <p>Do you go further in?</p>"; 

    journeyRef.style.color = "#ffffff"

    const choiceOne = [
        {
            name: "go deeper into the woods.",
        },
    ];

    for (let i = 0; i < choiceOne.length; i++) {
        const decisionOne = choiceOne[i];
        const newSection = document.createElement("section");

        newSection.innerHTML += "<h4>" + decisionOne.name + "</h4>";

        newSection.dataset.storyOne = decisionOne.name;

        newSection.onclick = makeChoice;

        journeyRef.appendChild(newSection);
        console.log(decisionOne);
        
    };
    
    const choiceTwo = [
        {
            name: "turn around.",
        },
    ];

    for (let i = 0; i < choiceTwo.length; i++) {
        const decisionTwo = choiceTwo[i];
        const newSection = document.createElement("section");

        newSection.innerHTML += "<h4>" + decisionTwo.name + "</h4>";

        newSection.dataset.storyTwo = decisionTwo.name;

        newSection.onclick = makeChoiceTwo;

        journeyRef.appendChild(newSection);
        console.log(decisionTwo);
        
    }
};

function makeChoice(e) {
    console.log(e.currentTarget);
    const storyOne = e.currentTarget.dataset.storyOne;
    
    
    const confirmChoice = confirm("You chose to " + storyOne);

    
    if (confirmChoice) {
        journeyRef.innerHTML +=
        "You chose to " + storyOne;
        journeyRef.innerHTML += "<p>You hear an odd sound.</p>";
        journeyRef.style.color = "#ff3b3b"
        const choiceThree = [
            {
                name: " point your light towards the sound.",
            },
        ];

        const choiceFour = [
            {
                name: " ignore it."
            },
        ];

        for (let i = 0; i < choiceFour.length; i++) {
            const decisionFour = choiceFour[i];
            const newSection = document.createElement("section");

            newSection.innerHTML += "<h4>" + decisionFour.name + "</h4>";

            newSection.dataset.storyFour = decisionFour.name;

            newSection.onclick = makeChoiceFour;

            journeyRef.appendChild(newSection);
            console.log(decisionFour);
            
        }

        for (let i = 0; i < choiceThree.length; i++) {
            const decisionThree = choiceThree[i];
            const newSection = document.createElement("section");

            newSection.innerHTML += "<h4>" + decisionThree.name + "</h4>";

            newSection.dataset.storyThree = decisionThree.name;

            newSection.onclick = makeChoiceThree;

            journeyRef.appendChild(newSection);
            console.log(decisionThree);
            
        }

        function makeChoiceThree(e) {
            console.log(e.currentTarget);
            const storyThree = e.currentTarget.dataset.storyThree;

            const confirmChoiceThree = confirm("You chose to " + storyThree);

            if (confirmChoiceThree) {
                journeyRef.innerHTML += "You chose to " + storyThree;
                myChoiceThree = {name: storyThree}
                journeyRef.innerHTML += "<p>You catch sight of a weird deer creature.</p> <p>Continue?</p>"

                const choiceFive = [
                    {
                        name: "Yes.",
                    },
                ];

                const choiceSix = [
                    {
                        name: "No.",
                    },
                ];

                for (let i = 0; i < choiceFive.length; i++) {
                    const decisionFive = choiceFive[i];
                    const newSection = document.createElement("section");

                    newSection.innerHTML += "<h4>" + decisionFive.name + "</h4>";

                    newSection.dataset.storyFive = decisionFive.name;

                    newSection.onclick = makeChoiceFive;

                    journeyRef.appendChild(newSection);
                    console.log(decisionFive);
                    
                };

                for (let i = 0; i < choiceSix.length; i++) {
                    const decisionSix = choiceSix[i];
                    const newSection = document.createElement("section");

                    newSection.innerHTML += "<h4>" + decisionSix.name + "</h4>";

                    newSection.dataset.storySix = decisionSix.name;

                    newSection.onclick = makeChoiceSix;

                    journeyRef.appendChild(newSection);
                    console.log(decisionSix);
                    
                };

                function makeChoiceFive(e) {
                    console.log(e.currentTarget);
                    const storyFive = e.currentTarget.dataset.storyFive;

                    const cofirmChoiceFive = confirm("You chose " + storyFive);

                    if (cofirmChoiceFive) {
                        journeyRef.innerHTML += "You chose " + storyFive;
                        myChoiceFive = {name: storyFive};
                        journeyRef.innerHTML += "<p>You stumble upon the ruined campsite of where your friend was supposed to be.</p>"
                    } else {
                        journeyRef.innerHTML += "";
                    };

                };

                function makeChoiceSix(e) {
                    console.log(e.currentTarget);
                    const storySix = e.currentTarget.dataset.storySix;

                    const confirmChoiceSix = confirm("You Chose " + storySix);

                    if (confirmChoiceSix) {
                        journeyRef.innerHTML += "You chose " + storySix;
                        myChoiceSix = {name: storySix};
                        journeyRef.innerHTML += "<p>You feel a chill settle in your spine as the noise from before slowly gets louder.</p> <p>Turn around?</p>";

                        const choiceSeven = [
                            {
                               name: "Yes..."
                            },
                        ];

                        const choiceEight = [
                            {
                               name: "No..."
                            },
                        ];

                       for (let i = 0; i < choiceSeven.length; i++) {
                        const decisionSeven = choiceSeven[i];
                        const newSection = document.createElement("section");

                        newSection.innerHTML += "<h4>" + decisionSeven.name + "</h4>";

                        newSection.dataset.storySeven = decisionSeven.name;

                        newSection.onclick = makeChoiceSeven;

                        journeyRef.appendChild(newSection);
                        console.log(decisionSeven);
                       }; 

                       for (let i = 0; i < choiceEight.length; i++) {
                        const decisionEight = choiceEight[i];
                        const newSection = document.createElement("section");

                        newSection.innerHTML += "<h4>" + decisionEight.name + "</h4>";

                        newSection.dataset.storyEight = decisionEight.name;

                        newSection.onclick = makeChoiceEight;

                        journeyRef.appendChild(newSection);
                        console.log(decisionEight);
                       };

                       function makeChoiceSeven(e) {
                        console.log(e.currentTarget);
                        const storySeven = e.currentTarget.dataset.storySeven;

                        const confirmChoiceSeven = confirm("You chose " + storySeven);

                        if (confirmChoiceSeven) {
                            journeyRef.innerHTML += "You chose " + storySeven;
                            myChoiceSeven = {name: storySeven};
                            journeyRef.innerHTML += "<p>As you turn around, the only thing that registers in your mind is that what you saw was not a dear, before you hear a crunch as the world go dark.</p>";

                        } else {
                            journeyRef.innerHTML += "";
                        };
                       };

                       function makeChoiceEight(e) {
                        console.log(e.currentTarget);
                        const storyEight = e.currentTarget.dataset.storyEight;

                        const confirmChoiceEight = confirm("You chose " + storyEight);

                        if (confirmChoiceEight) {
                            journeyRef.innerHTML += "You chose " + storyEight;
                            myChoiceEight = {name: storyEight};
                            journeyRef.innerHTML += "<p> It's quiet...</p>"
                        } else {
                            journeyRef.innerHTML += ""
                        }
                    }
                    } else {
                        journeyRef.innerHTML += "";
                    };
                };


            } else {
                journeyRef.innerHTML += "";
                journeyRef.style.color = "#ffffff"
            }
        }

        function makeChoiceFour(e) {
            console.log(e.currentTarget);
            const storyFour = e.currentTarget.dataset.storyFour;

            const confirmChoiceFour = confirm("You chose to " + storyFour);

            if (confirmChoiceFour) {
                journeyRef.innerHTML += "You chose to " + storyFour;
                myChoiceFour = {name: storyFour}
                journeyRef.innerHTML += "<p>The world goes dark.</p>"
            } else {
                journeyRef.innerHTML += "";
            }
        }
    
    myChoice = { name: storyOne};
    } else {
        journeyRef.innerHTML += "";
    }
    }

    function makeChoiceTwo(e) {
        console.log(e.currentTarget);
        const storyTwo = e.currentTarget.dataset.storyTwo;
        
        
        const confirmChoiceTwo = confirm("You chose to " + storyTwo);
        
        if (confirmChoiceTwo) {
            journeyRef.innerHTML +=
            "You chose to " + storyTwo;
        
        myChoiceTwo = { name: storyTwo};
        journeyRef.innerHTML += "<p> As you turn around, you can't help but feel a sense of relief... like you just barely made it out of danger safely...</p>";
        } else {
            journeyRef.innerHTML += "";
        }

        
    }

