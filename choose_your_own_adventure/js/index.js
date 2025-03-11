const journeyRef = document.querySelector("#journey");



function startJourney() {
    journeyRef.innerHTML =
    "<p>-Insert Story here-</p>"; 

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
            } else {
                journeyRef.innerHTML += "";
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
        journeyRef.innerHTML += "<p> Words words words</p>";
        } else {
            journeyRef.innerHTML += "";
        }

        
    }

