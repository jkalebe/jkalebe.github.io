import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './navbar.css'


export default class navBar extends Component {

    test(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }
    // $(document).ready(function(){
    //     setTimeout(function(){ test(); });
    // });
    // $(window).on('resize', function(){
    //     setTimeout(function(){ test(); }, 500);
    // });
    // $(".navbar-toggler").click(function(){
    //     $(".navbar-collapse").slideToggle(300);
    //     setTimeout(function(){ test(); });
    // });
    
    
    
    // // --------------add active class-on another-page move----------
    // jQuery(document).ready(function($){
    //     // Get current path and find target link
    //     var path = window.location.pathname.split("/").pop();
    
    //     // Account for home page with empty path
    //     if ( path == '' ) {
    //         path = 'index.html';
    //     }
    
    //     var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
    //     // Add active class to target link
    //     target.parent().addClass('active');
    // });
    
    
    


    render() {
        return (
            <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">Portfólio</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="#home"><i class="fas fa-tachometer-alt"></i>Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#formation"><i class="far fa-address-book">Formação</i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#xperiencia"><i class="far fa-clone"></i>Experiência</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio"><i class="far fa-calendar-alt"></i>Portfólio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact"><i class="far fa-chart-bar"></i>Contato</a>
                </li>
            </ul>
        </div>
    </nav>
    )
    }
}
