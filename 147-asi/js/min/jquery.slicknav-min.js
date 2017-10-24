!function($,n,e){function t(n,e){this.element=n,this.settings=$.extend({},a,e),this._defaults=a,this._name=i,this.init()}var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";t.prototype.init=function(){var e=this,t=$(this.element),a=this.settings,i,l;a.duplicate?(e.mobileNav=t.clone(),e.mobileNav.removeAttr("id"),e.mobileNav.find("*").each(function(n,e){$(e).removeAttr("id")})):e.mobileNav=t,i=s+"_icon",""===a.label&&(i+=" "+s+"_no-text"),"a"==a.parentTag&&(a.parentTag='a href="#"'),e.mobileNav.attr("class",s+"_nav"),l=$('<div class="'+s+'_menu"></div>'),e.btn=$(["<"+a.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+a.label+"</span>",'<span class="'+i+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+a.parentTag+">"].join("")),$(l).append(e.btn),$(a.prependTo).prepend(l),l.append(e.mobileNav);var o=e.mobileNav.find("li");$(o).each(function(){var n=$(this),t={};if(t.children=n.children("ul").attr("role","menu"),n.data("menu",t),t.children.length>0){var i=n.contents(),l=!1;nodes=[],$(i).each(function(){return $(this).is("ul")?!1:(nodes.push(this),void($(this).is("a")&&(l=!0)))});var o=$("<"+a.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(a.allowParentLinks&&!a.nestedParentLinks&&l)$(nodes).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else{var r=$(nodes).wrapAll(o).parent();r.addClass(s+"_row")}n.addClass(s+"_collapsed"),n.addClass(s+"_parent");var c=$('<span class="'+s+'_arrow">'+a.closedSymbol+"</span>");a.allowParentLinks&&!a.nestedParentLinks&&l&&(c=c.wrap(o).parent()),$(nodes).last().after(c)}else 0===n.children().length&&n.addClass(s+"_txtnode");n.children("a").attr("role","menuitem").click(function(n){a.closeOnClick&&!$(n.target).parent().closest("li").hasClass(s+"_parent")&&$(e.btn).click()}),a.closeOnClick&&a.allowParentLinks&&(n.children("a").children("a").click(function(n){$(e.btn).click()}),n.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(n){$(e.btn).click()}))}),$(o).each(function(){var n=$(this).data("menu");a.showChildren||e._visibilityToggle(n.children,null,!1,null,!0)}),e._visibilityToggle(e.mobileNav,null,!1,"init",!0),e.mobileNav.attr("role","menu"),$(n).mousedown(function(){e._outlines(!1)}),$(n).keyup(function(){e._outlines(!0)}),$(e.btn).click(function(n){n.preventDefault(),e._menuToggle()}),e.mobileNav.on("click","."+s+"_item",function(n){n.preventDefault(),e._itemClick($(this))}),$(e.btn).keydown(function(n){var t=n||event;13==t.keyCode&&(n.preventDefault(),e._menuToggle())}),e.mobileNav.on("keydown","."+s+"_item",function(n){var t=n||event;13==t.keyCode&&(n.preventDefault(),e._itemClick($(n.target)))}),a.allowParentLinks&&a.nestedParentLinks&&$("."+s+"_item a").click(function(n){n.stopImmediatePropagation()})},t.prototype._menuToggle=function(n){var e=this,t=e.btn,a=e.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),e._visibilityToggle(a,t.parent(),!0,t)},t.prototype._itemClick=function(n){var e=this,t=e.settings,a=n.data("menu");a||(a={},a.arrow=n.children("."+s+"_arrow"),a.ul=n.next("ul"),a.parent=n.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=n.parent().parent(),a.ul=n.parent().next("ul")),n.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n))},t.prototype._visibilityToggle=function(n,e,t,a,i){var l=this,o=l.settings,r=l._getActionItems(n),c=0;t&&(c=o.duration),n.hasClass(s+"_hidden")?(n.removeClass(s+"_hidden"),n.slideDown(c,o.easingOpen,function(){$(a).removeClass(s+"_animating"),$(e).removeClass(s+"_animating"),i||o.open(a)}),n.attr("aria-hidden","false"),r.attr("tabindex","0"),l._setVisAttr(n,!1)):(n.addClass(s+"_hidden"),n.slideUp(c,this.settings.easingClose,function(){n.attr("aria-hidden","true"),r.attr("tabindex","-1"),l._setVisAttr(n,!0),n.hide(),$(a).removeClass(s+"_animating"),$(e).removeClass(s+"_animating"),i?"init"==a&&o.init():o.close(a)}))},t.prototype._setVisAttr=function(n,e){var t=this,a=n.children("li").children("ul").not("."+s+"_hidden");a.each(e?function(){var n=$(this);n.attr("aria-hidden","true");var a=t._getActionItems(n);a.attr("tabindex","-1"),t._setVisAttr(n,e)}:function(){var n=$(this);n.attr("aria-hidden","false");var a=t._getActionItems(n);a.attr("tabindex","0"),t._setVisAttr(n,e)})},t.prototype._getActionItems=function(n){var e=n.data("menu");if(!e){e={};var t=n.children("li"),a=t.find("a");e.links=a.add(t.find("."+s+"_item")),n.data("menu",e)}return e.links},t.prototype._outlines=function(n){n?$("."+s+"_item, ."+s+"_btn").css("outline",""):$("."+s+"_item, ."+s+"_btn").css("outline","none")},t.prototype.toggle=function(){var n=this;n._menuToggle()},t.prototype.open=function(){var n=this;n.btn.hasClass(s+"_collapsed")&&n._menuToggle()},t.prototype.close=function(){var n=this;n.btn.hasClass(s+"_open")&&n._menuToggle()},$.fn[i]=function(n){var e=arguments;if(void 0===n||"object"==typeof n)return this.each(function(){$.data(this,"plugin_"+i)||$.data(this,"plugin_"+i,new t(this,n))});if("string"==typeof n&&"_"!==n[0]&&"init"!==n){var a;return this.each(function(){var s=$.data(this,"plugin_"+i);s instanceof t&&"function"==typeof s[n]&&(a=s[n].apply(s,Array.prototype.slice.call(e,1)))}),void 0!==a?a:this}}}(jQuery,document,window);