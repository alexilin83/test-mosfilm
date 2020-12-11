<style type="text/scss">
    @import '../variables.scss';
    * {
        box-sizing: border-box;
    }
    .game__quote {
        width: 100%;
        padding: 0 0 80px;
        &-text {
            position: relative;
            border: 2px solid;
            border-bottom: none;
            font: 18px 'Oswald', sans-serif;
            text-transform: uppercase;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                right: 251px;
                border-bottom: 2px solid;
            }
            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: calc(100% - 3px);
                width: 252px;
                height: 42px;
                background: url('/dist/images/quote-triangle.png') no-repeat 0 0;
            }
            &-inner {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 202px;
                padding: 30px 20px;
                &:before {
                    content: '“';
                    position: absolute;
                    left: 25px;
                    top: 15px;
                    font: 900 41px/1 "TT Norms",sans-serif;
                }
            }
        }
        &-photo {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 185px;
            height: 181px;
            background: url('/dist/images/quote-photo.png') no-repeat 0 0;
        }
    }
    .game__answers {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .game__answer {
        min-width: 310px;
        margin-bottom: 15px;
        text-align: center;
        text-transform: none;
        &:last-child {
            margin: 0;
        }
        .game__question_answered & {
            background: transparent;
            color: map-get($colors, 'secondary');
            opacity: .5;
            cursor: default;
        }
        .game__question_answered &_correct,
        .game__question_answered &_incorrect {
            opacity: 1;
            color: inherit;
        }
        .game__question_answered &_correct {
            background: linear-gradient(to right, #49cf50, #22be2a);
        }
        .game__question_answered &_incorrect {
            background: linear-gradient(to right, #F36F49, #E74969);
            animation-duration: .7s;
            animation-fill-mode: both;
            animation-name: flash;
        }

    }
    .game__question-comment {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
    }
    @for $i from 1 through 12 {
        .game__question-comment_test-1.game__question-comment_#{$i} {
            background-image: url('/dist/images/poster-1-#{$i}.jpg');
        }
    }
    @for $i from 1 through 13 {
        .game__question-comment_test-2.game__question-comment_#{$i} {
            background-image: url('/dist/images/poster-2-#{$i}.jpg');
        }
    }
    @media (max-width: 1279px) {
        .game__answer {
            min-width: 0x;
            margin-bottom: 5px;
            &:last-child {
                margin: 0;
            }
        }
    }
    @media (max-width: 640px) {
        .game__quote {
            &-text {
                &-inner {
                    padding: 20px 15px;
                    font-size: 14px
                }
            }
        }
        .game__answer {
            max-width: calc(100% - 16px);
            width: 100%;
            min-width: auto;
        }
    }
</style>
<script>
    import { scale, fly, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    export let test;
    export let questions;
    export let currentQuestion;
    export let currentQuestionAnswer;
    export let currentQuestionStatus;
    export let isCurrentQuestionDone;
    export let isCurrentQuestionAnswered;

    const dispatch = createEventDispatcher();

    function handleAnswerClick(e) {
        dispatch('answer', {
            event: e
        });
    }
</script>

<div class="game__question" class:game__question_answered="{isCurrentQuestionAnswered}">
    <header class="game__title">
        <div class="game__counter">
            {currentQuestion}/{questions.length}
        </div>
        {#if !isCurrentQuestionAnswered}
            <div class="game__quote">
                <div class="game__quote-text" transition:fly="{{y: -100, opacity: 0, duration: 1000, easing: quintOut}}">
                    <div class="game__quote-text-inner">
                        {@html questions[currentQuestion - 1].title}
                    </div>
                </div>
                <div class="game__quote-photo" transition:fly="{{x: 100, opacity: 0, duration: 1000, easing: quintOut}}"></div>
            </div>
        {:else}
            <div class="game__question-comment game__question-comment_test-{test} game__question-comment_{currentQuestion}" in:scale="{{duration: 1000, opacity: 0, start: .5, easing: quintOut}}"></div>
        {/if}
    </header>
    <footer class="game__footer">
        {#if !isCurrentQuestionDone}
            <div class="game__answers">
                {#each questions[currentQuestion - 1].answers as answer, i}
                    <div
                        class="game__answer game__btn"
                        class:game__answer_correct="{isCurrentQuestionAnswered && i == questions[currentQuestion - 1].answer}"
                        class:game__answer_incorrect="{isCurrentQuestionAnswered && i == currentQuestionAnswer && currentQuestionStatus === 'incorrect'}"
                        on:click={handleAnswerClick} in:fly="{{x: -100, opacity: 0, delay: i * 100}}" out:fly="{{x: 100, opacity: 0, delay: i * 100}}">
                        {answer}
                    </div>
                {/each}
            </div>
        {/if}
    </footer>
</div>