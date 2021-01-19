$(function(){
    // 자리셋팅 버튼
    $(".btn_setting").click(function(){
        $(".section.box_intro").removeClass("on");
        loadDataFn();
    });
    
    var loadData; //json 데이터를 담는 변수
    function loadDataFn(){
        $.ajax({
            url:"js/data.json", //데이터 경로
            dataType:"json",
            success:function(result){
                loadData = result.seatInfo;
                settingSeatFn();
            }
        });

        // 자리 배치
        function settingSeatFn(){
            
        }
    }
})