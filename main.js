function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}
function hi() {
  console.log(10);
}
$(function (){
  // ????
  ques = ['3+4*8', 'line 3, 1~9 letter', ' ', 'WVVkcmFBPT0=', 'F12', '345216', 'ans7', 'ans8', 'ans9', 'ans10',];
  hintL = ['사칙연산 (답: 2글자)', '3번째 줄 1~9번쨰 글자 (답: 3글자)', '클립보드 (답: 7글자)', 'Base64 복호화 (답: 3글자)', 'F12 -> Console (답: 3글자)', '레벨 선택 (답: ?글자)', 'ans7', 'ans8', 'ans9', 'ans10'];
  ans = ['35', '602', 'Answer?', 'hi!', 'wow', '', 'ans7', 'ans8', 'ans9', 'ans10'];
  levelNow = 0;
  levelUnlocked = 0;
  hint = 0;
  cd = 3;
  cdc = 3;
  level6_ans = '';
  $('.ansButton').click(function () {
    if (levelNow != 5) {
      if ($('input#answer').val() == ans[levelNow]) {
        alert('축하합니다 레벨' + (levelNow + 1) + '을(를) 통과 했습니다!');
        if (levelNow == levelUnlocked) {
          $("nav > div:eq(" + levelUnlocked + ")").attr({
              'class' : 'compeleted'
          });
          levelUnlocked = levelUnlocked + 1;
          $("nav > div:eq(" + levelUnlocked + ")").attr({
              'class' : 'continue'
          });
        }
      } else {
        $('.ansButton').html(function (index,html) {
          return '오답';
        });
        setTimeout(function() {
          $('.ansButton').html(function (index,html) {
            return '정답 확인';
          });
        }, 300);
      }
    } else {
      if (level6_ans == '345216') {
        alert('축하합니다 레벨' + (levelNow + 1) + '을(를) 통과 했습니다!');
        if (levelNow == levelUnlocked) {
          $("nav > div:eq(" + levelUnlocked + ")").attr({
              'class' : 'compeleted'
          });
          levelUnlocked = levelUnlocked + 1;
          $("nav > div:eq(" + levelUnlocked + ")").attr({
              'class' : 'continue'
          });
        }
      } else {
        $('.ansButton').html(function (index,html) {
          return '오답';
        });
        setTimeout(function() {
          $('.ansButton').html(function (index,html) {
            return '정답 확인';
          });
        }, 300);
      }
    }
  });
  $('nav > div').click(function () {
    if (levelNow != $("nav > div").index(this) && levelUnlocked >= $("nav > div").index(this)) {
      levelNow = $("nav > div").index(this);
      $('.questionLatter').html(function (index,html) {
        return 'Q' + (levelNow + 1) + '. ' + ques[levelNow];
      });
      $(".questionImage > img").attr({
          'src' : 'q' + (levelNow + 1) + '.png'
      });
      $('.hintShow').html(function (index,html) {
        return '힌트: locked';
      });
    }
    if (levelNow == 2) {
      copyToClipboard('Answer?');
    }
    if (levelNow == 4) {
      console.log('Answer: wow')
    }
    if (levelNow == 2) {
      level6_ans = '';
    }
    level6_ans = level6_ans + (levelNow+1);
  });
  setInterval(function() {
    cd = cd - 1;
    if (cd == 0) {
      hint = hint + 1;
      cdc = cdc + 1;
      cd = cdc;
      $('#hint > span').html(function (index,html) {
          return '남은 힌트 : ' + hint;
      });
    }
    $('#coolDown').html(function (index,html) {
        return '아이템 (' + cd + '분 남음)';
    });
  }, 60000);
  $('#hint > img').click(function () {
    if (hint > 0) {
      hint = hint - 1;
      $('.hintShow').html(function (index,html) {
          return '힌트: ' + hintL[levelNow];
      });
      $('#hint > span').html(function (index,html) {
          return '남은 힌트 : ' + hint;
      });
    }
  });
});
