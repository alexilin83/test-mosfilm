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
                    font-size: 41px;
                    line-height: 1;
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
                background-image: url('/dist/images/poster-#{$i}.jpg');
            }
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
            <div class="game__quote">
                <div class="game__quote-text" transition:fly="{{y: -100, opacity: 0, duration: 1000, easing: quintOut}}">
                    <div class="game__quote-text-inner">
                        {@html questions[currentQuestion - 1].title}
                    </div>
                </div>
                <div class="game__quote-photo" transition:fly="{{x: 100, opacity: 0, duration: 1000, easing: quintOut}}"></div>
            </div>
        {:else}
            <div class="game__question-comment game__question-comment_{currentQuestion}" in:scale="{{duration: 1000, opacity: 0, easing: quintOut}}"></div>
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