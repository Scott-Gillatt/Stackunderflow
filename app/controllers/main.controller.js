(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);


    function MainController($scope, MainService) {
        $scope.name = ""

        $scope.greetings = []

        $scope.greet = function() {
            var msg = MainService.greet($scope.name)
            $scope.greetings.push(msg)
        }

         var question = {
            text: "What is an IIFE in JavaScript?",
            author: "Scott Gillatt",
            date: new Date(),
            tags: ["javascript", "functions", "encapsulation", "crazy javascript"],
            answers: [{
                text: "An IFFE is something you create when you don't know much about javascript.",
                author: "Jim Bob",
                date: new Date(),
                score: -5,
                accepted: false,
                comments: [{
                    text: "That's not right sir...",
                    author: "Jimmy Joe",
                    date: new Date(),
                    flagged: false

                },
                    {
                        text: "That's not right Ma'me!!...",
                        author: "Jim Bob",
                        date: new Date(),
                        flagged: true

                    },
                    {
                        text: "Sorry, Ma'me!!...",
                        author: "Jimmy Joe",
                        date: new Date(),
                        flagged: true

                    }]
            }, {
                    text: "IIFE stands for Immediatly Invoked Function Expression. ",
                    author: "Joe Joe",
                    date: new Date(),
                    score: 10,
                    accepted: false,
                    comments: [{
                        text: "Awesome! I never knew that",
                        author: "Ken Wilcox",
                        date: new Date(),
                        flagged: false

                    }, {
                            text: "Great, but can you expanded some more?",
                            author: "Jim Bob",
                            date: new Date(),
                            flagged: false

                        }, {
                            text: "Ok, IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  So for example: 'Hello World = (function () {console.log(\"Hello World\");})'",
                            author: "Ken Wilcox",
                            date: new Date(),
                            flagged: false

                        },
                        {
                            text: "Great, but can you expanded some more?",
                            author: "Jim Bob",
                            date: new Date(),
                            flagged: true

                        }, {
                            text: "You are a @$$",
                            author: "Jim Bob",
                            date: new Date(),
                            flagged: true

                        },
                        {
                            text: "Ok, IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  So for example: 'Hello World = (function () {console.log(\"Hello World\");})'",
                            author: "Ken Wilcox",
                            date: new Date(),
                            flagged: false

                        },
                    ]
                }, {
                    text: "IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. ",
                    author: "Chim Chim",
                    date: new Date(),
                    score: 1024,
                    accepted: true,
                    comments: [{
                        text: "Awesome! I never knew that",
                        author: "Scott Gillatt",
                        date: new Date(),
                        flagged: false

                    },
                        {
                            text: "Ok, IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.  So for example: 'Hello World = (function () {console.log(\"Hello World\");})'",
                            author: "Ken Wilcox",
                            date: new Date(),
                            flagged: true

                        }]
                }]

        }
        $scope.questions = [question]
        //Assign the following variables.
        var questionText = question.text;
        var questionAnswerCount = question.answers.length;
        var question2ndAnswerScore = question.answers[1].score;
        var question2ndAnswer1stCommentFlagged = question.answers[1].comments[0].flagged;

        console.log(questionText)
        console.log(questionAnswerCount)
        console.log(question2ndAnswerScore)
        console.log(question2ndAnswer1stCommentFlagged)

        var hasAnAcceptedAnswer = function() {
            for (var i = 0; i < question.answers.length; i++) {
                if (question.answers[i].accepted === true) {
                    return question.answers[i].author, "The answer #: " + (i + 1);
                }
            }
        };
        console.log(hasAnAcceptedAnswer());


        var totalScoreOfAnswers = function() {
            var total = 0;
            for (var i = 0; i < question.answers.length; i++) {
                total += question.answers[i].score
            }
            return total
        }
        console.log(totalScoreOfAnswers());

        console.log("Total of : " + question.answers)

        var showFlagged = function() {
            var temp = [];
            for (var i = 0; i < question.answers.length; i++) {
                for (var j = 0; j < question.answers[i].comments.length; j++) {
                    console.log(question.answers[i].comments.length)
                    if (question.answers[i].comments[j].flagged == true) {
                        console.log(question.answers[i].comments[j].text)
                        temp.push(question.answers[i].comments[j].text)
                    }
                }
            }
            console.log(temp)
        }
        showFlagged();

        var countComments = function() {
            var total = 0;
            for (var i = 0; i < question.answers.length; i++) {
                for (var j = 0; j < question.answers[i].comments.length; j++) {
                    total++
                }
            }
            console.log(total)
        }
        countComments();

        var checkTag = function() {
            for (var i = 0; i < question.tags.length; i++) {
                if (question.tags[i] === "javascript") {
                    console.log(true)
                }
            }
        }
        checkTag();

    }
})();