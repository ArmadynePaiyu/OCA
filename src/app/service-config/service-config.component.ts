import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.css']
})
export class ServiceConfigComponent implements OnInit {

  serviceTabs = [
    {
      id : "support",
      val : "Support and Installation Summary"
    },
    {
      id : "otherService",
      val : "Other Services Summary"
    },
    {
      id : "lifecycleService",
      val : "Add Lifecycle Services"
    },
    {
      id : "trainingService",
      val : "Add Training Services"
    },
    {
      id : "consultingService",
      val : "Add Consulting Services"
    },
    {
      id : "creditService",
      val : "Add Support Credit Services"
    },
    {
      id : "factoryExpressService",
      val : "Add Factory Express Services"
    },
    {
      id : "custSpecificService",
      val : "Add Customer Specific Services"
    },
    {
      id : "logisticsService",
      val : "Add Logistics Services"
    },
    {
      id : "nimbleService",
      val : "Add Nimble Services"
    },
    {
      id : "hpcService",
      val : "Add HPC Services"
    }
  ];
  constructor() {
    
   }

  ngOnInit() {
    var hidWidth;
    var scrollBarWidths = 40;

    var widthOfList = function(){
      var itemsWidth = 0;
      $('.list li').each(function(){
        var itemWidth = $(this).outerWidth();
        itemsWidth+=itemWidth;
      });
      return itemsWidth;
    };

    var widthOfHidden = function(){
      return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
    };

    var getLeftPosi = function(){
      return $('.list').position().left;
    };

    var reAdjust = function(){
      if (($('.wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
      }
      else {
        $('.scroller-right').hide();
      }
      
      if (getLeftPosi()<0) {
        $('.scroller-left').show();
      }
      else {
        $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
        $('.scroller-left').hide();
      }
    }

    reAdjust();

    $(window).on('resize',function(e){  
        reAdjust();
    });

    $('.scroller-right').click(function() {
      
      $('.scroller-left').fadeIn('slow');
      $('.scroller-right').fadeOut('slow');
      
      $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){

      });
    });

    $('.scroller-left').click(function() {
      
      $('.scroller-right').fadeIn('slow');
      $('.scroller-left').fadeOut('slow');
      
        $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){
        
        });
    });    
  }
  
  
}
