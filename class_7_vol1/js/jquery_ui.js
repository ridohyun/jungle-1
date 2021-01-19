$(function(){
  $(".input_area input[type='text']").keypress(function(e){ //input에 키가 눌리는 순간 발생하는 이벤트
    if(e.keyCode==13 && $(this).val().length){ //엔터키의 키코드는13, 입력되는 input창에 값이 있을 경우만 실행
      const _val = $(this).val(); //입력된 input의 내용을 담는 변수
      const _class = $(this).attr('class'); //입력된 input의 클래스 명을 담는 변수(나 인지 상대방인지를 확인)
      let _time; //입력되는 순간의 시간을 담는 변수

      //현재 시간 구하기
      const _date = new Date(); //Date객체 -> pc의 전체 시간 정보를 담고있음
      let _hh = _date.getHours();
      const _mm = _date.getMinutes();
      let _apm = "오전";
      if(_hh>12){
        _apm = "오후";
        _hh -=12;
      }

      _time = _apm+" "+_hh+":"+_mm;

      // 말충선 태그에 번수를 담아서 append로 html에 동적으로 추가
      $(".chat_area").append('<div class="item '+_class+'"><div class="box"><p class="msg">'+_val+'</p><span class="time">'+_time+'</span></div></div>');
      
      // 0.01초 delay 후 chart_area 맨 끝 item(말풍선)에게 on class를 추가
      setTimeout(function(){
        $(".chat_area .item").last().addClass('on');
      },10)

      // 엔터누르면 지워주기
      $(this).val("");

      // 채팅창이 맨 밑으로 갈 수 있게하는 스크롤 이벤트
      const _itemL = $(".chat_area .item").length; //말풍선의 개수 구하기
      let _itemH = 0;
      for(let i=0; i<_itemL; i++){ //반복문 각 말풍선의 높이값을 구해서 _itemH에 더해주기 위해서
          _itemH = _itemH + $(".chat_area .item").eq(i).height() + 15; //15는 말풍선 사이의 마진값(초기에 설정해줌)
      };

      //scrollTop을 통해 스크롤을 맨 밑으로 이동시키는 animation을 적용
      $(".chat_area").stop().animate({
        scrollTop:_itemH
      });
    }
  });
});