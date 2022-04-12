$(document).ready(function(){
    var startDate = $('input[name=start_date]').val();
    var endDate = $('input[name=end_date]').val();
    var today = new Date();
    var minDate = today.getFullYear() + '-' + ("0" + (1 + today.getMonth())).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);
    var nextDate = today.getFullYear() + '-' + ("0" + (1 + today.getMonth())).slice(-2) + '-' + ("0" + (today.getDate()+1)).slice(-2);
    if(startDate == 0 && endDate == 0){
        startDate = minDate;
        endDate = minDate;
    }
    console.log(startDate, endDate)

    $(function() {
        console.log("search_ho_daterange 실행")
        $('input[name="search_ho_daterange"]').daterangepicker({
            "startDate": startDate,
            "endDate": endDate,
            "minDate" : minDate,
            opens: 'center',
            locale: {
                "applyLabel": "Apply",
                "cancelLabel": "Cancel",
                "format": 'YYYY-MM-DD',
                "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"], 
                "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            }
        }, 
        function(start, end, label) {
            startDate = start.format('YYYY-MM-DD');
            endDate = end.format('YYYY-MM-DD');
            console.log("search form")
            console.log(startDate, endDate)
        });
    });

    $('[name="date_choice"]').click(function(e) {
        $('.date_pick').css('display', 'none');
        $('#chk_in').html(startDate);
        $('#chk_out').html(endDate);
        $('input[name=start_date]').attr('value', startDate);
        $('input[name=end_date]').attr('value', endDate);
    });
});