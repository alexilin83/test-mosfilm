<style type="text/scss">
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
    @import '../variables.scss';
    .game {
        position: relative;
        overflow: hidden;
        width: 100%;
        max-width: 741px;
        margin: 0 auto;
        background: rgba(map-get($colors, 'main'), .1);
        color: #fff;
        line-height: 1.5;
        font-family: 'TT Norms',sans-serif;
        text-align: center;
        :global(*) {
            box-sizing: border-box;
        }
        :global(h3) {
            font-size: 16px;
            &:first-child {
                margin-top: 0;
            }
        }
        :global(p) {
            font-size: 16px;
            &:first-child {
                margin-top: 0;
            }
        }
        :global(a) {
            color: map-get($colors, 'main');
        }
    }
    :global(.game__btn) {
        position: relative;
        display: inline-block;
        padding: 15px 22px;
        background: transparent;
        border: 1px solid currentColor;
        border-radius: 0px;
        color: map-get($colors, 'main');
        font: 16px/1 'TT Norms',sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        transition: .3s;
        &:hover {
            background: rgba(map-get($colors, 'main'), .2);
        }
        .game__layer_intro & {
            margin-top: 52px;
        }
        :global(.game__footer) > & {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
        }
    }
    .game__btn_lg {
        min-width: 315px;
        margin-bottom: 10px;
    }
    .game__btn_reload {
        &:before {
            content: '';
            position: absolute;
            left: 28px;
            top: 50%;
            width: 24px;
            height: 24px;
            background: url('/dist/images/icon-reload.png') no-repeat 50% 50%;
            transform: translateY(-50%);
            transition: .3s;
        }
        &:hover {
            &:before {
                transform: translateY(-50%) rotate(360deg);
            }
        }
    }
    .game__layer {
        padding: 30px 82px 50px;
    }
    .game__intro-photo {
        padding-bottom: 56.25%;
        background: url('/dist/images/intro.png') no-repeat 50% 50% / contain;
        border-bottom: 1px solid;
    }
    :global(.game__title) {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        min-height: 324px;
        margin: 0 0 30px;
        padding: 20px;
        background: url('/dist/images/title-bg.png') no-repeat 0 0 / cover, linear-gradient(#8B35D9, #2A2DED);
    }
    :global(.game__footer) {
        position: relative;
        min-height: 50px;
    }
    :global(.game__counter) {
        position: absolute;
        left: 20px;
        bottom: 15px;
        font-size: 12px;
        background-image: 1px;
        z-index: 5;
        font-weight: 600;
        text-shadow: 0 1px 3px rgba(0,0,0,0.25);
    }
    .game__result {
        padding: 0 40px;
    }
    .game__score {
        margin-bottom: 30px;
        font-size: 24px;
    }
    .game__share {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 34px;
        h3 {
            margin: 0 20px 0 0;
            font-weight: normal;
            font-size: 12px;
        }
        .game__layer_intro & {
            margin: 84px 0 0;
        }
    }
    .game :global(.ya-share2__list.ya-share2__list_direction_horizontal) {
        margin: 0;
    }
    .game :global(.ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item) {
        margin: 0 11px 0 0;
    }
    .game :global(.ya-share2 .ya-share2__container .ya-share2__badge) {
        background: none;
    }
    .game :global(.ya-share2__container_size_m .ya-share2__badge .ya-share2__icon) {
        height: 32px;
        width: 32px;
        background-size: 32px 32px;
    }
    .game :global(.ya-share2__item_service_vkontakte .ya-share2__icon) {
        background: url('/dist/images/icon-vk.png');
    }
    .game :global(.ya-share2__item_service_facebook .ya-share2__icon) {
        background: url('/dist/images/icon-fb.png');
    }
    .game :global(.ya-share2__item_service_twitter .ya-share2__icon) {
        background: url('/dist/images/icon-tw.png');
    }
    .game :global(.ya-share2__item_service_odnoklassniki .ya-share2__icon) {
        background: url('/dist/images/icon-od.png');
    }
    @media (max-width: 768px) {
        .game {
            line-height: 1.2;
        }
        .game__layer {
            padding: 20px 15px;
        }
        :global(.game__btn) {
            padding: 15px 22px;
            .game__layer_intro & {
                margin-top: 20px;
            }
        }
        :global(.game__title) {
            margin-bottom: 15px;
            padding: 15px;
        }
        .game__share {
            .game__layer_intro & {
                margin-top: 30px;
            }
        }
    }
    @media (max-width: 640px) {
        .game__layer {
            padding: 16px 0
        }
        .game__counter {
            bottom: 8px;
            left: 8px
        }
        .game__result {
            span {
                display: block;
            }
        }
        .game :global(.ya-share2__list.ya-share2__list_direction_horizontal > .ya-share2__item) {
            margin: 0 4px 4px 0;
        }
        .game :global(.ya-share2__container_size_m .ya-share2__badge .ya-share2__icon) {
            height: 24px;
            width: 24px;
            background-size: 100% auto;
        }
        .game__share {
            display: block;
            margin: 0 auto 10px;
            font-weight: 400;
            font-size: 10px;
            h3 {
                margin: 0 0 10px;
            }
        }
    }
</style>

<script>
    import Question from './Question.svelte';
    import { afterUpdate } from 'svelte';
    import settings from '../settings';

    export let test;
    export let questions;
    let isGameStarted = false;
    let isGameFinished = false;
    let currentQuestion = 1;
    let isCurrentQuestionDone = false;
    let isNextQuestionReady = false;
    let currentQuestionStatus = null;
    let currentQuestionAnswer = null;
    let points = 0;
    let result = '';
    let resultShare;
    let resultShareEl;
    afterUpdate(() => {
        if (isGameFinished && !resultShare) {
            resultShare = Ya.share2(resultShareEl, {
                content: {
                    title: `Мой результат: ${points} из ${questions.length}`,
                    url: window.location.href + `?result=${result + 1}`,
                },
                theme: {
                    services: settings.shareServices
                }
            });
        }
    });
    
    function handleStart(){
        isGameStarted = true;
    }
    function handleAnswerClick(event){
        if (isCurrentQuestionDone) return false;
        let el = event.detail.event.currentTarget;
        let answer = [].slice.call(el.parentNode.children).indexOf(el);
        if (questions[currentQuestion - 1].answer == answer) {
            currentQuestionStatus = 'correct';
            points++;
        } else {
            currentQuestionStatus = 'incorrect';
        }
        currentQuestionAnswer = answer;
        isCurrentQuestionDone = true;

        setTimeout(() => {
            isNextQuestionReady = true;
        }, 2000);
    }
    function handleNext(){
        if (currentQuestion == questions.length) {
            setResult();
        }
        currentQuestion++;
        isCurrentQuestionDone = false;
        isNextQuestionReady = false;
        currentQuestionAnswer = null;
    }
    function handleReload(){
        isGameFinished = false;
        points = 0;
        currentQuestion = 1;
        isCurrentQuestionDone = false;
        currentQuestionAnswer = null;
        resultShare = null;
    }
    function setResult() {
        isGameFinished = true;
        if (points < 5) {
            result = 0;
        } else if (points < 10) {
            result = 1;
        } else {
            result = 2;
        }
    }
</script>

<div class="game">
    {#if !isGameStarted}
        <div class="game__layer game__layer_intro">
            <div class="game__intro-photo"></div>
            <p>А насколько хорошо вы знаете советское кино?</p>
            <p>Проверьте себя на знание цитат из любимых фильмов.</p>
            <p><b>Камера! Мотор! Поехали!</b></p>
            <button class="game__btn" on:click={handleStart}>Пройти тест</button>
            <div class="game__share">
                <h3>ПОДЕЛИТЬСЯ:</h3>
                <div class="ya-share2" data-services={settings.shareServices}></div>
            </div>
        </div>
    {:else}
        <div class="game__layer">
            {#if !isGameFinished}
                <Question
                    test={test}
                    questions={questions}
                    currentQuestion={currentQuestion}
                    currentQuestionAnswer={currentQuestionAnswer}
                    currentQuestionStatus={currentQuestionStatus}
                    isCurrentQuestionDone={isCurrentQuestionDone}
                    isNextQuestionReady={isNextQuestionReady}
                    on:answer={handleAnswerClick}
                    on:next={handleNext}
                />
            {:else}
                <header class="game__title">
                    <div class="game__counter">
                        {questions.length}/{questions.length}
                    </div>
                    <div class="game__result">
                        <div class="game__score">Мой результат: <span>{points} из {questions.length}</span></div>
                        {@html settings.results[result]}
                    </div>
                </header>
                <div class="game__share">
                    <h3>ПОДЕЛИТЬСЯ РЕЗУЛЬТАТОМ:</h3>
                    <div class="share" bind:this={resultShareEl}></div>
                </div>
                <button class="game__btn game__btn_lg game__btn_reload" on:click={handleReload}>Пройти еще раз</button>
                <a href="https://mosfilmgold.ru/program" class="game__btn game__btn_lg" target="_blank">Расписание телесеансов</a>
            {/if}
        </div>
    {/if}
</div>