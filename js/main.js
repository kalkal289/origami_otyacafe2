//ページロード時のイベント
$(window).on("load", function() {
  $(".js-enter-img").addClass("opacity100");
  $(".js-enter-back").addClass("opacity100");
  setTimeout(function(){
    $(".js-enter-text").addClass("opacity100");
  },1500);
  setTimeout(function(){
    $(".js-enter-view").fadeOut(1000);
  },3500);
});

//フォームリンクの透明化
$(function() {
  $(window).on('scroll', function() {
    if($(this).scrollTop() + $(window).height() > $(".footer").offset().top){
      $(".form-link").fadeOut();
    } else {
      $(".form-link").fadeIn();
    }
  });
});

$(function() {  
  // Q&Aのスライド処理
  $(".js-question").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).children(".qa-icon").toggleClass("open");
  });
  
  // メニュー選択時のスムーススクロール処理
  $('a[href^="#"]').click(function() {
    $(".header-menu-list").removeClass("is-show");

    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var kind = $(this).parent().parent().parent().data("nav-kind");
    console.log(kind);
    if(kind == "top") {
      position -= 50;
    } else if(kind == "menu") {
      position -= 250;
    }
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });

  // ハンバーバーメニュー開閉処理
  $(".toggle-menu-button").on("click", function() {
    if ($(".header-menu-list").hasClass("is-show")) {
      $(".header-menu-list").removeClass("is-show");
    } else {
      $(".header-menu-list").addClass("is-show");
    }
  });

  // トップダウンメニュー折りたたみ処理
  $(".header-menu-list").click(function() {
    $(".header-menu-list").removeClass("is-show");
  });


  //クイズ進行処理
  const quizNumber = 5; //クイズの数
  let correctCount = 0;

  $(".js-answer-btn").click(function() {
    var number = $(this).parent().data('quiz-number');
    if ($(this).hasClass("correct")) {
      correctCount++;
      $(".js-result" + number).html('<span class="correct-color">正解</span>');
    } else {
      $(".js-result" + number).html('<span class="incorrect-color">不正解</span>');
    }
    $(".js-quiz" + number).hide();
    if (number != quizNumber) {
      $(".js-quiz" + (number + 1)).fadeIn(300);
    } else {
      if (correctCount == quizNumber) {
        $(".js-result-mess").html('<p class="correct-mess">おめでとう！！全問正解だよ！！君もめちゃお茶博士だね！！</p>');
        // $(".js-result-mess").show();
      } else if (correctCount == 0) {
        $(".js-result-mess").html('<p class="incorrect-mess">おめでとう、君は今日最も成長した人の一人だ！');
        // $(".js-result-mess").show();
      } else {
        $(".js-result-mess").html('<p class="normal-mess">惜しい！次こそはきっと全問正解できるよ！');
      }
      $(".js-quiz-result").fadeIn(300);
      $(".js-result-number").html(correctCount);
    }
  });
  
  //クイズ結果
  $(".js-quiz-reset").click(function() {
    correctCount = 0;
    // $(".js-result-mess").hide();
    $(".js-quiz-result").hide();
    $(".js-quiz1").fadeIn(300);
  });
});
