(function(){TS.registerModule("web",{login_sig:new signals.Signal(),ds_login_sig:new signals.Signal(),email_regex:new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?","i"),onStart:function(){TS.prefs.messages_theme_changed_sig.add(TS.setThemeClasses,TS);
TS.web.autoToggleSection();
$('[data-toggle="tooltip"]').tooltip({animation:true})
},gogogo:function(){TS.logLoad("TS.web.gogogo");
$("html").bind("mousedown",function(){TS.model.ui.is_mouse_down=true
});
$("html").bind("dragend",function(){TS.model.ui.is_mouse_down=false
});
$("html").bind("mouseup",function(){TS.model.ui.is_mouse_down=false
})
},onMsgsDivClick:function(h){var f=$(h.target);
var d=f.closest(".message").data("ts");
var g=f.closest(".msg_actions");
if(d){d=d.toString()
}if(f.hasClass("member")){if(f.data("member-id")){}else{TS.warn("hmmm, no data-member-id?")
}}if(f.hasClass("internal_member_link")){}if(f.hasClass("internal_channel_link")){}if(g.length==1){TS.info("click on child of .msg_actions");
var i=g.data("msg-ts");
var c=TS.shared.getActiveModelOb();
if(f.hasClass("msg_cog")){h.preventDefault();
if(c){TS.menu.startWithMessageActions(h,i,c.msgs)
}else{TS.warn("Do not have any messages")
}}else{if(f.hasClass("msg_select_cb")){TS.msg_edit.batchDeleteSelectionChanged(f,h.shiftKey)
}}return
}TS.stars.checkForStarClick(h);
TS.inline_imgs.checkForInlineImgClick(h);
TS.inline_videos.checkForInlineVideoClick(h);
TS.inline_audios.checkForInlineAudioClick(h);
TS.inline_others.checkForInlineOtherClick(h);
TS.inline_attachments.checkForInlineAttachmentClick(h)
},toggleSection:function(f){var e=$("#"+f);
var c=e.css("border-bottom");
e.css("border-bottom","1px solid transparent");
e.find(".accordion_subsection").slideToggle(100,function(){e.css("border-bottom",c);
if(e.hasClass("plastic_row")&&!e.hasClass("open")){e.removeAttr("style")
}});
e.toggleClass("open");
var d=e.find(".accordion_expand");
if(d.text()=="expand"){d.text("close");
e.find(".ladda-button").each(function(){Ladda.bind($(this)[0])
})
}else{d.text("expand")
}},openSection:function(d){var c=$("#"+d);
if(!c.hasClass("open")){TS.web.toggleSection(d)
}},closeSection:function(d){var c=$("#"+d);
if(c.hasClass("open")){TS.web.toggleSection(d)
}},autoToggleSection:function(){var e=TS.utility.htmlEntities(window.location.hash);
if(e){if(e.charAt(0)==="#"){e=e.substring(1)
}var c=$('a[name="'+e+'"][data-accordion]');
var d=c.data("accordion");
if(d){TS.web.toggleSection(d)
}}},scrollToElWithHeaderOffset:function(c){var d=$(c);
d.scrollintoview({px_offset:$("header").height()+16})
},startButtonSpinner:function(d){TS.web.resetButtonSpinner(d);
var c=a(d);
if(!c.isLoading()){c.start()
}},stopButtonSpinner:function(d,f){var c=a(d);
if(c.isLoading()){c.stop();
if(f){var e=$(d).find(".ladda-label").text();
$(d).data("original_text",e);
$(d).removeClass("btn-primary").addClass("btn-success").find(".ladda-label").html('<i class="fa fa-check small_right_margin"></i>Saved')
}}},resetButtonSpinner:function(d){var c=a(d);
if(c.isLoading()){return
}var e=$(d).data("original_text");
if(e){$(d).find(".ladda-label").text(e);
$(d).removeData("original_text");
$(d).removeClass("btn-success").addClass("btn-primary")
}},onFirstLoginMS:function(c){$("body").addClass("no_attachment_max_width");
if(TS.model.is_safari_desktop){$("html").addClass("is_safari_desktop")
}b();
TS.logLoad("TS.web logged in first time");
if(TS.boot_data.feature_comment_mentions_autocomplete){TS.makeEmoticonList()
}if(window.load_start_ms){TS.warn((new Date()-window.load_start_ms)+"ms from first html to login_sig.dispatch()")
}TS.web.login_sig.dispatch()
},onEveryLoginMS:function(c){}});
var a=function(d){var c=$(d).data("ladda");
if(!c){c=Ladda.create(d);
$(d).data("ladda",c)
}return c
};
var b=function(){$(".emoji_replace_on_load").each(function(){var c=$(this).html();
c=TS.utility.emojiGraphicReplace(c);
$(this).html(c)
})
}
})();