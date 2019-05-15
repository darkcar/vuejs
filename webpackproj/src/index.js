// import *** from ES 6, importing modules 
import $ from "jquery";
import '../../style/bootstrap.min.css'

$(function() {
    $('li:odd').css('backgroundColor', 'green')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})