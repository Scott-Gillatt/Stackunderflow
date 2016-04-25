app.factory("StackService", function() {
    var question = {
        text: "What is an IIFE in JavaScript?",
        author: "Scott Gillatt",
        date: "Mar 8' 16 at 08:30",
        tags: ["javascript", "functions", "encapsulation", "crazy javascript"],
        answers: [{
            text: "An IFFE is something you create when you don't know much about javascript.",
            author: "Jim Bob",
            date: "Mar 8' 16 at 09:30",
            score: -5,
            accepted: false,
            comments: [{
                text: "That's not right sir...",
                author: "Jimmy Joe",
                date: "Mar 8' 16 at 10:30",
                flagged: true

            }]
        }, {
                text: "IIFE stands for Immediatly Invoked Function Expression. ",
                author: "Joe Joe",
                date: "Mar 8' 16 at 09:00",
                score: 10,
                accepted: false,
                comments: [{
                    text: "Awesome! I never knew that",
                    author: "Ken Wilcox",
                    date: "Mar 8' 16 at 09:15",
                    flagged: false

                }, {
                        text: "Great, but can you expanded some more?",
                        author: "Jim Bob",
                        date: "Mar 8' 16 at 09:20",
                        flagged: false

                    }, {
                        text: "Ok, IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  So for example: 'Hello World = (function () {console.log(\"Hello World\");})'",
                        author: "Ken Wilcox",
                        date: "Mar 8' 16 at 09:40",
                        flagged: false

                    },
                    {
                        text: "Great, but can you expanded even more?  Not sure what is so hard about doing that Dummy!!",
                        author: "Big @",
                        date: "Mar 8' 17 at 00:01",
                        flagged: true

                    }, {
                        text: "Ummm, He did show how you're suppose to do it, L2R!!",
                        author: "Other Big @",
                        date: "Mar 8' 17 at 00:10",
                        flagged: true

                    },
                ]
            }, {
                text: "IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. ",
                author: "Chim Chim",
                date: "Mar 8' 18 at 18:00",
                score: 1024,
                accepted: true,
                comments: [{
                    text: "Awesome! I never knew that",
                    author: "Scott Gillatt",
                    date: "Mar 8' 18 at 18:30",
                    flagged: false

                }, {
                        text: "Awesome! I never knew that",
                        author: "Scott Gillatt",
                        date: "Mar 8' 18 at 18:45",
                        flagged: true

                    }, {
                        text: "You are Welcome!",
                        author: "Chim Chim",
                        date: "Mar 8' 18 at 18:50",
                        flagged: false

                    }]
            }]

    }
    var service = {
        getQuestion: function() {
            return question;
        },
    }
    return service

})