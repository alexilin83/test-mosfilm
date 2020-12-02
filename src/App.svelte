<style type="text/scss">
    @import './variables.scss';
    * {
        box-sizing: border-box;
    }
    .game {
        position: relative;
        max-width: 750px;
        margin: 0 auto 50px;
        background: $bg-color-1;
        color: #fff;
        line-height: 1.4;
    }
    .game__title {
        margin: 0 0 20px;
        font-weight: 700;
        font-size: 36px;
        line-height: 1;
    }
    .game__desc {
        margin: 0 0 45px;
        font-size: 16px;
    }
    .game__btn {
        position: relative;
        display: inline-block;
        padding: 25px 80px;
        background: $active-color;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        font-size: 20px;
        line-height: 1;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: scale(1.05);
        }
        &_alt {
            padding: 0;
            background: none;
            color: $active-color;
            &:hover {
                color: $active-color;
            }
        }
        &_reload {
            margin-bottom: 30px;
        }
    }
    .game__layer {
        padding: 30px 20px 20px;
    }
    .game__layer_intro {
        padding: 70px 55px 160px;
        background: linear-gradient($bg-color-2, transparent);
        background-size: cover;
    }
    .game__layer-header {
        text-align: center;
        margin: 0 0 20px;
        font-size: 16px;
        b {
            font-weight: normal;
            color: $active-color;
        }
    }
    .game__result {
        margin: 0 0 45px;
        padding: 60px 20px 80px;
        background: #fff;
        border-radius: 5px;
        color: #000;
        text-align: center;
    }
    .game__result-title {
        margin: 0 0 15px;
        font-weight: bold;
        font-size: 36px;
        line-height: 1;
        color: inherit;
        b {
            color: $active-color;
        }
    }
    .game__result-desc {
        font-size: 16px;
    }
    .game__layer-footer {
        text-align: center;
    }
    .game__share-title {
        margin: 0 0 10px;
    }
    .game__layer_intro .ya-share2 {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 15px 55px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    :global(.game a) {
        color: $active-color;
        &:hover {
            text-decoration: none;
        }
    }
    :global(.game .ya-share2 .ya-share2__container_size_m .ya-share2__item) {
        display: inline-block;
        margin: 0 10px 0 0;
    }
    :global(.game .ya-share2__container .ya-share2__link) {
        color: inherit;
        text-align: center;
    }
    :global(.game .ya-share2 .ya-share2__container .ya-share2__badge) {
        background: none;
    }
    :global(.game .ya-share2__item_service_vkontakte .ya-share2__icon) {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.576-1.496c.588-.19 1.341 1.26 2.14 1.818.605.422 1.064.33 1.064.33l2.137-.03s1.117-.071.587-.964c-.043-.073-.308-.661-1.588-1.87-1.34-1.264-1.16-1.059.453-3.246.983-1.332 1.376-2.145 1.253-2.493-.117-.332-.84-.244-.84-.244l-2.406.015s-.178-.025-.31.056c-.13.079-.212.262-.212.262s-.382 1.03-.89 1.907c-1.07 1.85-1.499 1.948-1.674 1.832-.407-.267-.305-1.075-.305-1.648 0-1.793.267-2.54-.521-2.733-.262-.065-.454-.107-1.123-.114-.858-.009-1.585.003-1.996.208-.274.136-.485.44-.356.457.159.022.519.099.71.363.246.341.237 1.107.237 1.107s.142 2.11-.33 2.371c-.325.18-.77-.187-1.725-1.865-.489-.859-.859-1.81-.859-1.81s-.07-.176-.198-.272c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.161C3.94 7.721 4.043 8 4.043 8s1.79 4.258 3.817 6.403c1.858 1.967 3.968 1.838 3.968 1.838h.957z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    :global(.game .ya-share2__item_service_facebook .ya-share2__icon) {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.423 20v-7.298h2.464l.369-2.845h-2.832V8.042c0-.824.23-1.385 1.417-1.385h1.515V4.111A20.255 20.255 0 0 0 14.148 4c-2.183 0-3.678 1.326-3.678 3.76v2.097H8v2.845h2.47V20h2.953z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    :global(.game .ya-share2__item_service_twitter .ya-share2__icon) {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 7.539a6.56 6.56 0 0 1-1.885.517 3.294 3.294 0 0 0 1.443-1.816 6.575 6.575 0 0 1-2.085.796 3.283 3.283 0 0 0-5.593 2.994A9.32 9.32 0 0 1 5.114 6.6a3.28 3.28 0 0 0 1.016 4.382 3.274 3.274 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.305 3.305 0 0 1-1.482.056 3.286 3.286 0 0 0 3.066 2.28A6.585 6.585 0 0 1 4 17.524 9.291 9.291 0 0 0 9.032 19c6.038 0 9.34-5 9.34-9.337 0-.143-.004-.285-.01-.425A6.672 6.672 0 0 0 20 7.538z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    :global(.game .ya-share2__item_service_odnoklassniki .ya-share2__icon) {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Cpath d='M11.674 6.536a1.69 1.69 0 0 0-1.688 1.688c0 .93.757 1.687 1.688 1.687a1.69 1.69 0 0 0 1.688-1.687 1.69 1.69 0 0 0-1.688-1.688zm0 5.763a4.08 4.08 0 0 1-4.076-4.075 4.08 4.08 0 0 1 4.076-4.077 4.08 4.08 0 0 1 4.077 4.077 4.08 4.08 0 0 1-4.077 4.075zM10.025 15.624a7.633 7.633 0 0 1-2.367-.98 1.194 1.194 0 0 1 1.272-2.022 5.175 5.175 0 0 0 5.489 0 1.194 1.194 0 1 1 1.272 2.022 7.647 7.647 0 0 1-2.367.98l2.279 2.28a1.194 1.194 0 0 1-1.69 1.688l-2.238-2.24-2.24 2.24a1.193 1.193 0 1 1-1.689-1.689l2.279-2.279'/%3E%3C/g%3E%3C/svg%3E");
    }
    @media (max-width: 1279px) {
        .game {
            line-height: 1.2;
        }
        .game__title {
            font-size: 30px;
        }
        .game__desc {
            font-size: 14px;
        }
        .game__btn {
            padding: 20px 46px;
            &_alt {
                padding: 0;
            }
        }
        .game__layer {
            padding: 20px 15px;
        }
        .game__layer_intro {
            padding: 30px 30px 100px;
        }
        .game__layer_intro .ya-share2 {
            padding: 10px 15px;
        }
        .game__result-title {
            margin-bottom: 10px;
            font-size: 30px;
        }
        .game__result-desc {
            font-size: 14px;
        }
    }
    @media (max-width: 1396px) {
        .game .ya-share2 {
            display: block;
        }
    }
</style>

<script>
    import Question from './Question.svelte';
    import { beforeUpdate, afterUpdate } from 'svelte';

    export let desc;
    export let startBtnText;
    export let nextBtnText;
    export let reloadBtnText;
    export let questions;
    export let results;
    export let shareHeading;
    export let shareServices;
    let isGameStarted = false;
    let isGameFinished = false;
    let currentQuestion = 1;
    let isCurrentQuestionDone = false;
    let currentQuestionStatus = null;
    let currentQuestionAnswer = null;
    let points = 0;
    let result = '';
    let resultShare;
    let resultShareEl;
    afterUpdate(() => {
        if (isGameFinished && !resultShare) {
            resultShare = Ya.share2(resultShareEl, {
                theme: {
                    services: shareServices
                }
            });
        }
    });
    
    function handleStart(){
        isGameStarted = true;
    }
    function handleAnswerClick(e){
        if (isCurrentQuestionDone) return false;
        let el = e.currentTarget;
        let answer = [].slice.call(el.parentNode.children).indexOf(el);
        if (questions[currentQuestion - 1].answer == answer) {
            currentQuestionStatus = 'correct';
            points++;
        } else {
            currentQuestionStatus = 'incorrect';
        }
        currentQuestionAnswer = answer;
        isCurrentQuestionDone = true;
    }
    function handleNext(){
        if (currentQuestion == questions.length) {
            setResult();
        }
        currentQuestion++;
        isCurrentQuestionDone = false;
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
            result = results[0];
        } else if (points < 7) {
            result = results[1];
        } else {
            result = results[2];
        }
    }
    function declOfNum(number, words) {  
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
</script>

<div class="game">
    {#if !isGameStarted}
        <div class="game__layer game__layer_intro">
            <div class="game__desc">{@html desc}</div>
            <button class="game__btn" on:click={handleStart}>{startBtnText}</button>
            <div class="ya-share2" data-services={shareServices}></div>
        </div>
    {:else}
        <div class="game__layer">
            {#if !isGameFinished}
                <header class="game__layer-header">
                    <b>{currentQuestion}</b> из <b>{questions.length}</b>
                </header>
                <Question
                    questions={questions}
                    currentQuestion={currentQuestion}
                    currentQuestionAnswer={currentQuestionAnswer}
                    currentQuestionStatus={currentQuestionStatus}
                    isCurrentQuestionDone={isCurrentQuestionDone}
                    on:click={handleAnswerClick}
                />
                {#if isCurrentQuestionDone}
                    <footer class="game__layer-footer">
                        <button class="game__btn" on:click={handleNext}>{nextBtnText}</button>
                    </footer>
                {/if}
            {:else}
                <div class="game__result">
                    <div class="game__result-title">Вы ответили на<br> <b>{points}</b> {declOfNum(points, ['вопрос', 'вопроса', 'вопросов'])} из <b>{questions.length}</b></div>
                    <div class="game__result-desc">{result} Подробнее на <a href="https://dictant.rgo.ru" target="_blank">dictant.rgo.ru</a>.</div>
                </div>
                <footer class="game__layer-footer">
                    <button class="game__btn game__btn_alt game__btn_reload" on:click={handleReload}>{reloadBtnText}</button>
                    <div class="game__share">
                        <div class="game__share-title">{shareHeading}</div>
                        <div class="share" bind:this={resultShareEl}></div>
                    </div>
                </footer>
            {/if}
        </div>
    {/if}
</div>