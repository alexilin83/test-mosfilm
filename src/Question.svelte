<style type="text/scss">
    @import './variables.scss';
    * {
        box-sizing: border-box;
    }
    .game__question {
        overflow: hidden;
        margin: 0 0 20px;
        border-radius: 5px;
        text-align: left;
    }
    .game__question-header {
        margin: 0 0 20px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        :global(i) {
            display: block;
            margin-bottom: 10px;
        }
    }
    .game__question-photo {
        position: relative;
        height: 400px;
        background-color: #000;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        border-radius: 5px 5px 0 0;
        z-index: 1;
        small {
            position: absolute;
            left: 0;
            bottom: 0;
            display: block;
            width: 100%;
            padding: 30px 15px 10px;
            background: linear-gradient(transparent, #000);
            text-align: right;
            color: rgba(255, 255, 255, .5);
            font-size: 12px;
        }
    }
    .game__question-comment {
        position: absolute;
        left: 20px;
        top: 50%;
        right: 20px;
        padding: 20px;
        border-radius: 5px;
        background: rgba(0,0,0,.7);
        transform: translateY(-50%);
        font-size: 16px;
    }
    .game__answers {
        background: #fff;
    }
    .game__answer {
        position: relative;
        padding: 20px 20px 20px 60px;
        border-top: 1px solid rgba(0, 0, 0, .1);
        color: #000;
        font-size: 16px;
        line-height: 1.333;
        cursor: pointer;
        transition: .3s;
        &_selected {
            &:before {
                background-color: $active-color;
            }
        }
        &_correct {
            background: $success-color;
        }
        &_incorrect {
            background: $error-color;
        }
        &:before {
            content: '';
            position: absolute;
            left: 20px;
            top: 50%;
            width: 16px;
            height: 16px;
            background-clip: padding-box;
            border: 2px solid transparent;
            box-shadow: 0 0 0 1px $active-color;
            border-radius: 50%;
            transform: translateY(-50%);
        }
        .game__question:not(.game__question_done) &:hover {
            background:#eee;
        }
    }
    @media (max-width: 1279px) {
        .game__question-header {
            font-size: 14px;
        }
        .game__question-photo {
            height: 300px;
        }
        .game__question-comment {
            left: 10px;
            right: 10px;
            font-size: 12px;
        }
        .game__answer {
            padding: 10px 10px 10px 60px;
        }
    }
</style>
<script>
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    
    export let questions;
    export let currentQuestion;
    export let currentQuestionAnswer;
    export let currentQuestionStatus;
    export let isCurrentQuestionDone;
</script>

<div class="game__question" class:game__question_done="{isCurrentQuestionDone}">
    <header class="game__question-header">{@html questions[currentQuestion - 1].title}</header>
    <div class="game__question-photo game__question-photo_{currentQuestion}">
        {#if questions[currentQuestion - 1].photoAuthor}
            <small>{questions[currentQuestion - 1].photoAuthor}</small>
        {/if}
        {#if isCurrentQuestionDone}
            <div class="game__question-comment" in:fly="{{duration: 1500, y: 30, opacity: 0, easing: quintOut}}">{questions[currentQuestion - 1].comment}</div>
        {/if}
    </div>
    <div class="game__answers">
        {#each questions[currentQuestion - 1].answers as answer, i}
            <div
                class="game__answer"
                class:game__answer_selected="{isCurrentQuestionDone && i == currentQuestionAnswer}"
                class:game__answer_correct="{isCurrentQuestionDone && i == questions[currentQuestion - 1].answer}"
                class:game__answer_incorrect="{isCurrentQuestionDone && currentQuestionStatus === 'incorrect' && i == currentQuestionAnswer}"
                on:click>
                {answer}
            </div>
        {/each}
    </div>
</div>