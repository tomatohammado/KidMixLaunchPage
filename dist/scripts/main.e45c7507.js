!function(a){a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}-\d{4}$|^\d{5}$/.test(a)},"The specified US ZIP Code is invalid")}(jQuery),function(a){window.mc={openPopup:function(){a("#mc_embed_signup a.mc_embed_close").show(),setTimeout(function(){a("#mc_embed_signup").fadeIn()},mc.delayPopup)},closePopup:function(){a("#mc_embed_signup").hide();var b=new Date,c=new Date(b.getTime()+31536e6);document.cookie="MCEvilPopupClosed=yes;expires="+c.toGMTString()+";path=/"},evalPopup:function(){for(a("#mc_embed_signup").hide(),cks=document.cookie.split(";"),i=0;i<cks.length;i++)parts=cks[i].split("="),-1!=parts[0].indexOf("MCEvilPopupClosed")&&(mc.showPopup=!1);mc.showPopup&&mc.openPopup()},getAjaxSubmitUrl:function(){var b=a("form#mc-embedded-subscribe-form").attr("action");return b=b.replace("/post?u=","/post-json?u="),b+="&c=?"},getGroups:function(){var b={};return a(".mc-field-group").each(function(){var c=a(this).find("input:text:not(:hidden)");if(c.length>1){var d=c.first().attr("name"),e=a.map(c,function(a){return a.name});b[d.substring(0,d.indexOf("["))]=e.join(" ")}}),b},isMultiPartField:function(b){return a("input:not(:hidden)",a(b).closest(".mc-field-group")).length>1},isTooEarly:function(b){var c=a("input:not(:hidden)",a(b).closest(".mc-field-group"));return a(c).eq(-1).attr("id")!=a(b).attr("id")},mce_success_cb:function(b){if(a("#mce-success-response").hide(),a("#mce-error-response").hide(),"success"==b.result)a("#mce-"+b.result+"-response").show(),a("#mce-"+b.result+"-response").html(b.msg),a("#mc-embedded-subscribe-form").each(function(){this.reset()});else{var c,d=-1;try{var e=b.msg.split(" - ",2);if(void 0==e[1])c=b.msg;else{var f=parseInt(e[0]);f.toString()==e[0]?(d=e[0],c=e[1]):(d=-1,c=b.msg)}}catch(g){d=-1,c=b.msg}try{if(-1==d)a("#mce-"+b.result+"-response").show(),a("#mce-"+b.result+"-response").html(c);else{var h=a("input[name*='"+fnames[d]+"']").attr("name"),i={};i[h]=c,mc.mce_validator.showErrors(i)}}catch(g){a("#mce-"+b.result+"-response").show(),a("#mce-"+b.result+"-response").html(c)}}}},window.mc.mce_validator=a("#mc-embedded-subscribe-form").validate({errorClass:"mce_inline_error",errorElement:"div",onkeyup:!1,onfocusout:function(b){mc.isTooEarly(b)||a(b).valid()},onblur:function(b){mc.isTooEarly(b)||a(b).valid()},groups:mc.getGroups(),errorPlacement:function(a,b){b.closest(".mc-field-group").append(a)},submitHandler:function(b){a(b).ajaxSubmit(mc.ajaxOptions)}}),window.mc.ajaxOptions={url:mc.getAjaxSubmitUrl(),type:"GET",dataType:"json",contentType:"application/json; charset=utf-8",success:mc.mce_success_cb},a.validator.addClassRules("birthday",{digits:!0,mc_birthday:".datefield"}),a.validator.addClassRules("datepart",{digits:!0,mc_date:".datefield"}),a.validator.addClassRules("phonepart",{digits:!0,mc_phone:".phonefield"}),a("#mc_embed_signup a.mc_embed_close").click(function(){mc.closePopup()}),a(document).keydown(function(a){var b=null==a?event.keyCode:a.which;27==b&&"undefined"!=typeof mc.showPopup&&mc.closePopup()})}(jQuery),function(){window.fnames=new Array,window.ftypes=new Array,fnames[0]="EMAIL",ftypes[0]="email",fnames[1]="FNAME",ftypes[1]="text",fnames[2]="LNAME",ftypes[2]="text",fnames[3]="ZIPCODE",ftypes[3]="zip"}(jQuery),function(a){a(".nav a").on("click",function(){a(".navbar-collapse").collapse("hide")})}(jQuery);