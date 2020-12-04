<style type="text/scss">
    @import './variables.scss';
    * {
        box-sizing: border-box;
    }
    .game__question {
        overflow: hidden;
        margin: 0 0 40px;
        text-align: left;
    }
    .game__question-header {
        margin: 0 0 40px;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
        line-height: 1.2;
        :global(i) {
            display: block;
            margin-bottom: 10px;
        }
    }
    .game__question-comment {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        height: 400px;
        background-repeat: no-repeat;
        background: 50% 50%;
        background-size: contain;
        border-radius: 5px;
        transform: translate(-50%, -50%);
        @for $i from 1 through 25 {
            &_#{$i} {
                background-image: url('/images/poster-#{$i}.jpg');
            }
        }
    }
    .game__answers {
        overflow: hidden;
        background: #fff;
        border-radius: 5px;
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
    {#if isCurrentQuestionDone}
        <div class="game__question-comment game__question-comment_{currentQuestion}" in:fly="{{duration: 1500, y: 30, opacity: 0, easing: quintOut}}"></div>
    {/if}
</div>