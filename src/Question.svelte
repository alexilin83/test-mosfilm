<style type="text/scss">
    @import './variables.scss';
    * {
        box-sizing: border-box;
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
        .game__question_done &:not(.game__answer_selected) {
            color: map-get($colors, 'secondary');
            opacity: .5;
            &:hover {
                background: transparent;
                cursor: default;
            }
        }
        &_correct {
            background: linear-gradient(to right, #49cf50, #22be2a);
            cursor: default;
        }
        &_incorrect {
            background: linear-gradient(to right, #F36F49, #E74969);
            cursor: default;
        }

    }
    .game__question-comment {
        position: absolute;
        left: 50%;
        top: 0;
        width: 210px;
        height: 100%;
        background-repeat: no-repeat;
        background: 50% 50%;
        background-size: contain;
        transform: translateX(-50%);
        @for $i from 1 through 25 {
            &_#{$i} {
                background-image: url('/images/poster-#{$i}.jpg');
            }
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
    import { scale, fly, fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    export let questions;
    export let currentQuestion;
    export let currentQuestionAnswer;
    export let currentQuestionStatus;
    export let isCurrentQuestionDone;
    export let isNextQuestionReady;

    const dispatch = createEventDispatcher();

    function handleAnswerClick(e) {
        dispatch('answer', {
            event: e
        });
    }

    function handleNextClick() {
        dispatch('next');
    }

</script>

<div class="game__question" class:game__question_done="{isCurrentQuestionDone}">
    <header class="game__title">
        <div class="game__counter">
            {currentQuestion}/{questions.length}
        </div>
        {#if !isCurrentQuestionDone}
            {@html questions[currentQuestion - 1].title}
        {:else}
            <div class="game__question-comment game__question-comment_{currentQuestion}" in:scale="{{duration: 1000, opacity: 0, start: 0.5, easing: quintOut}}"></div>
        {/if}
    </header>
    <footer class="game__footer">
        {#if !isNextQuestionReady}
            <div class="game__answers">
                {#each questions[currentQuestion - 1].answers as answer, i}
                    <div
                        class="game__answer game__btn"
                        class:game__answer_selected="{isCurrentQuestionDone && i == currentQuestionAnswer}"
                        class:game__answer_correct="{isCurrentQuestionDone && i == currentQuestionAnswer && i == questions[currentQuestion - 1].answer}"
                        class:game__answer_incorrect="{isCurrentQuestionDone && i == currentQuestionAnswer && currentQuestionStatus === 'incorrect'}"
                        on:click={handleAnswerClick} out:fly="{{x: 100, opacity: 0, delay: i * 100}}">
                        {answer}
                    </div>
                {/each}
            </div>
        {:else}
            <button class="game__btn" on:click={handleNextClick} in:fade="{{delay: 600}}">Дальше!</button>
        {/if}
    </footer>
</div>