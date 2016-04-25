app.controller("StackController", function($scope, StackService) {
    // $scope.question = StackService.getQuestion();
    $scope.hello = "Hello World"
    $scope.question1 = [StackService.getQuestion()]

    $scope.question = StackService.getQuestion()


    /*    var question = {
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
    
        }*/
    $scope.answerAccepted = function() {
        for (var i = 0; i < question.answers.length; i++) {
            if (question.answers[i].accepted == true) {
                $scope.accepted = true;
            }
        }
    }
    //Trying to figure out how to mess with the data Question1...
    console.log($scope.question1[0].answers.length)
    //Assign the following variables.

    $scope.questionText = $scope.question.text;
    $scope.questionAnswerCount = $scope.question.answers.length;
    $scope.question2ndAnswerScore = $scope.question.answers[1].score;
    $scope.question2ndAnswer1stCommentFlagged = $scope.question.answers[1].comments[0].flagged;

    console.log($scope.questionText)
    console.log($scope.questionAnswerCount)
    console.log($scope.question2ndAnswerScore)
    console.log($scope.question2ndAnswer1stCommentFlagged)

    $scope.hasAnAcceptedAnswer = function() {
        for (var i = 0; i < $scope.question.answers.length; i++) {
            if ($scope.question.answers[i].accepted === true) {
                return $scope.question.answers[i].author, "The answer #: " + (i + 1);
            }
        }
    };
    console.log($scope.hasAnAcceptedAnswer());


    $scope.totalScoreOfAnswers = function() {
        var total = 0;
        for (var i = 0; i < $scope.question.answers.length; i++) {
            total += $scope.question.answers[i].score
        }
        return total
    }
    console.log($scope.totalScoreOfAnswers());

    $scope.flaggedComments = function() {
        var flagged = []
        for (var i = 0; i < $scope.question.answers.length; i++) {
            for (var j = 0; j < $scope.question.answers[i].comments.length; j++) {
                if ($scope.question.answers[i].comments[j].flagged == true) {
                    flagged.push($scope.question.answers[i].comments[j])
                }
            }
        }
        return flagged;
    }
    console.log($scope.flaggedComments())


    $scope.countComments = function() {
        var totalComments = 0;
        for (var i = 0; i < $scope.question.answers.length; i++) {
            for (var j = 0; j < $scope.question.answers[i].comments.length; j++) {
                totalComments++
            }
        }
        return totalComments
    }
    console.log($scope.countComments())

    $scope.questionTag = function(tag) {
        var value = false
        for (var i = 0; i < $scope.question.tags.length; i++) {
            if ($scope.question.tags[i] == tag) {
                value = true
                break
            }
        }
        return value
    }
    console.log($scope.questionTag("functions"))
})