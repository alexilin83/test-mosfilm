// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".svelte-mlfne4.svelte-mlfne4{box-sizing:border-box}.game__answers.svelte-mlfne4.svelte-mlfne4{display:flex;flex-direction:column;align-items:center}.game__answer.svelte-mlfne4.svelte-mlfne4{min-width:310px;margin-bottom:15px;text-align:center;text-transform:none}.game__answer.svelte-mlfne4.svelte-mlfne4:last-child{margin:0}.game__question_done.svelte-mlfne4 .game__answer.svelte-mlfne4:not(.game__answer_selected){color:#000;opacity:0.5}.game__question_done.svelte-mlfne4 .game__answer.svelte-mlfne4:not(.game__answer_selected):hover{background:transparent;cursor:default}.game__answer_correct.svelte-mlfne4.svelte-mlfne4{background:linear-gradient(to right, #49cf50, #22be2a);cursor:default}.game__answer_incorrect.svelte-mlfne4.svelte-mlfne4{background:linear-gradient(to right, #F36F49, #E74969);cursor:default}.game__question-comment.svelte-mlfne4.svelte-mlfne4{position:absolute;left:50%;top:0;width:210px;height:100%;background-repeat:no-repeat;background:50% 50%;background-size:contain;transform:translateX(-50%)}.game__question-comment_1.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-1.jpg\")}.game__question-comment_2.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-2.jpg\")}.game__question-comment_3.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-3.jpg\")}.game__question-comment_4.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-4.jpg\")}.game__question-comment_5.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-5.jpg\")}.game__question-comment_6.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-6.jpg\")}.game__question-comment_7.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-7.jpg\")}.game__question-comment_8.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-8.jpg\")}.game__question-comment_9.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-9.jpg\")}.game__question-comment_10.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-10.jpg\")}.game__question-comment_11.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-11.jpg\")}.game__question-comment_12.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-12.jpg\")}.game__question-comment_13.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-13.jpg\")}.game__question-comment_14.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-14.jpg\")}.game__question-comment_15.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-15.jpg\")}.game__question-comment_16.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-16.jpg\")}.game__question-comment_17.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-17.jpg\")}.game__question-comment_18.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-18.jpg\")}.game__question-comment_19.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-19.jpg\")}.game__question-comment_20.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-20.jpg\")}.game__question-comment_21.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-21.jpg\")}.game__question-comment_22.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-22.jpg\")}.game__question-comment_23.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-23.jpg\")}.game__question-comment_24.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-24.jpg\")}.game__question-comment_25.svelte-mlfne4.svelte-mlfne4{background-image:url(\"/dist/images/poster-25.jpg\")}@media(max-width: 1279px){.game__question-header.svelte-mlfne4.svelte-mlfne4{font-size:14px}.game__question-comment.svelte-mlfne4.svelte-mlfne4{left:10px;right:10px;font-size:12px}.game__answer.svelte-mlfne4.svelte-mlfne4{padding:10px 10px 10px 60px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}