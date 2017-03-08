

//Namespace
window.usingNamespace = function (a) {
    var ro = window;
    if (!(typeof (a) === "string" && a.length != 0)) {
        return ro;
    }
    var co = ro;
    var nsp = a.split(".");
    for (var i = 0; i < nsp.length; i++) {
        var cp = nsp[i];
        if (!ro[cp]) {
            ro[cp] = {};
        };
        co = ro = ro[cp];
    };
    return co;
};

(function ($) {
    $.share = {
        format: function (source, params) {
            if (arguments.length == 1)
                return function () {
                    var args = $.makeArray(arguments);
                    args.unshift(source);
                    return $.share.format.apply(this, args);
                };
            if (arguments.length > 2 && params.constructor != Array) {
                params = $.makeArray(arguments).slice(1);
            }
            if (params.constructor != Array) {
                params = [params];
            }
            $.each(params, function (i, n) {
                source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
            });
            return source;
        },
        format2: function (source, params) {
            if (arguments.length == 1)
                return function () {
                    var args = $.makeArray(arguments);
                    args.unshift(source);
                    return $.share.format.apply(this, args);
                };
            if (arguments.length > 2 && params.constructor != Array) {
                params = $.makeArray(arguments).slice(1);
            }
            if (params.constructor != Array) {
                params = [params];
            }
            $.each(params, function (i, n) {
                source = source.replace("{" + i + "}", n);
            });
            return source;
        },
        cookie: {
            set: function (name, value, options) {
                var cv = "";
                options = options || {};
                value = value || null;

                if (value == null) {
                    options = $.extend({}, options);
                    options.expires = -1;
                }

                if (value != null && typeof (value) == "string") {
                    cv = escape(value);
                } else if (value != null && typeof (value) == "object") {
                    var jsonv = $.share.cookie.ToJson($.share.cookie.get(name));
                    if (jsonv == false) jsonv = {};
                    for (var k in value) {
                        eval("jsonv." + k + "=\"" + value[k] + "\"");
                    }
                    for (var k in jsonv) {
                        cv += k + '=' + escape(jsonv[k]) + '&';
                    }
                    cv = cv.substring(0, cv.length - 1);
                }

                var expires = "";
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                    var date;
                    if (typeof options.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = options.expires;
                    }
                    expires = "; expires=" + date.toUTCString();
                }
                var path = options.path ? "; path=" + (options.path) : "; path=/";
                var domain = options.domain ? "; domain=" + (options.domain) : "";
                if (options.topdomain) {
                    var host = location.hostname
                    hostindex = host.indexOf('.');
                    if (hostindex > 0) {
                        host = host.substring(hostindex);
                        domain = "; domain=" + host;
                    }
                }
                var secure = options.secure ? "; secure" : "";
                document.cookie = [name, '=', cv, expires, path, domain, secure].join('');
            },
            get: function (n, k) {
                var reg = new RegExp("(^| )" + n + "=([^;]*)(;|$)");
                var arr = document.cookie.match(reg);
                if (arguments.length == 2) {
                    if (arr != null) {
                        var kArr, kReg = new RegExp("(^| |&)" + k + "=([^&]*)(&|$)");
                        var c = arr[2];
                        var c = c ? c : document.cookie;
                        if (kArr = c.match(kReg)) {
                            return unescape(kArr[2]);
                        } else {
                            return "";
                        }
                    } else {
                        return "";
                    }
                } else if (arguments.length == 1) {
                    if (arr != null) {
                        return unescape(arr[2]);
                    } else {
                        return "";
                    }
                }
            },
            ToJson: function (cv) {
                var cv = cv.replace(new RegExp("=", "gi"), ":'").replace(new RegExp("&", "gi"), "',").replace(new RegExp(";\\s", "gi"), "',");
                return eval("({" + cv + (cv.length > 0 ? "'" : "") + "})");
            },
            clear: function (name, options) {
                var expires = ";expires=Thu, 01-Jan-1900 00:00:01 GMT";
                var path = options.path ? "; path=" + (options.path) : "; path=/";
                var domain = options.domain ? "; domain=" + (options.domain) : "";
                if (options.topdomain) {
                    var host = location.hostname
                    hostindex = host.indexOf('.');
                    if (hostindex > 0) {
                        host = host.substring(hostindex);
                        domain = "; domain=" + host;
                    }
                }
                var secure = options.secure ? "; secure" : "";
                document.cookie = [name, '=', expires, path, domain, secure].join('');
            }
        },
        querystring: {
            get: function (key) {
                var qs = $.share.querystring.parse();
                var value = qs[key];
                return (value != null) ? value : "";
            },
            set: function (key, value) {
                var qs = $.share.querystring.parse();
                qs[key] = encodeURIComponent(value);
                return $.share.querystring.toString(qs);
            },
            parse: function (qs) {
                var params = {};

                if (qs == null) qs = location.search.substring(1, location.search.length);
                if (qs.length == 0) return params;

                qs = qs.replace(/\+/g, ' ');
                var args = qs.split('&');
                for (var i = 0, l = args.length; i < l; i++) {
                    var pair = args[i].split('=');
                    var name = pair[0];

                    var value = (pair.length == 2)
						? pair[1]
						: name;
                    params[name] = value;
                }

                return params;
            },
            toString: function (qs) {
                if (qs == null) qs = $.share.querystring.parse();

                var val = "";
                for (var k in qs) {
                    if (val == "") val = "?";
                    val = val + k + "=" + qs[k] + "&";
                }
                val = val.substring(0, val.length - 1);
                return val;
            }
        }

    };
})(jQuery);

Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}


var template_UserSendMsg = "<ul class=\"ul_talk reply\"><li class=\"tbox\"><div><span class=\"head\"><img src=\"{1}\" /></span> </div><div><span class=\"arrow\"> <svg><path d=\"M18,40 A9,5,0,0,0,2,37 L0,23\" stroke-width=\"1\" stroke=\"#2792ff\" fill=\"#2792ff\" /> </svg></span></div><div> <article class=\"content\">{0}</article></div></li> </ul>";
var template_UserSendFaceMsg = "<ul class=\"ul_talk reply\"><li class=\"tbox\"><div><span class=\"head\"><img src=\"{1}\" /></span> </div><div><span class=\"arrow\"> </span></div><div class=\"faceContent\"> {0}</div></li>  </ul>";
var template_UserSendImageMsg = "<ul class=\"ul_talk reply\"><li class=\"tbox\"><div><span class=\"head\"><img src=\"{1}\" /></span> </div><div><span class=\"arrow\"> </span></div><div > <img src=\"{0}\"   class=\"image\" /></div></li>  </ul>";

var template_UserRecevieMsg = "<ul class=\"ul_talk\"> <li class=\"tbox\"> <div><span class=\"head\"><img src=\"{1}\" /></span><label class=\"name\">{2}</label></div><div><span class=\"arrow\"><svg><path d=\"M2,20 A9,5,0,0,1,18,24 L20,0\" stroke-width=\"1\" stroke=\"#e2e2e2\" fill=\"#e2e2e2\" /></svg></span></div><div><article class=\"content\">{0}</article></div> </li> </ul>";
var template_UserRecevieFaceMsg = "<ul class=\"ul_talk\"> <li class=\"tbox\"> <div><span class=\"head\"><img src=\"{1}\" /></span><label class=\"name\">{2}</label></div><div><span class=\"arrow\"></span></div><div  class=\"faceContent\">{0}</div> </li> </ul>";
var template_UserRecevieImageMsg = "<ul class=\"ul_talk\"> <li class=\"tbox\"> <div><span class=\"head\"><img src=\"{1}\" /></span><label class=\"name\">{2}</label></div><div><span class=\"arrow\"></span></div><div><img src=\"{0}\"   class=\"image\" /></div> </li> </ul>";

var template_CustomerSendMsg = "<dl class=\"message \"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"contentMsg\">{0}</lable></dd></dl>";
var template_CustomerReplyMsg = "<dl class=\"message msgreply\"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"contentMsg\">{0}</lable></dd></dl>";
var template_CustomerSendFaceMsg = "<dl class=\"message\"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"faceMsg\">{0}</lable></dd></dl>";
var template_CustomerReplyFaceMsg = "<dl class=\"message msgreply\"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"faceMsg\">{0}</lable></dd></dl>";
var template_CustomerSendImageMsg = "<dl class=\"message\"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"imageMsg\"><img src=\"{0}\"></img></lable></dd></dl>";
var template_CustomerReplyImageMsg = "<dl class=\"message msgreply\"><p><a>{1}</a><label>{2}</label></p><dd><lable class=\"imageMsg\"><img src=\"{0}\"></img></lable></dd></dl>";

var template_HistoryUser = "<tr data-key=\"{3}\"> <td colspan=\"2\" style=\"width: 45%;\">{0}</td><td style=\"width: 35%;\">{1}</td><td style=\"width: 20%;\">{2}</td></tr>";
var template_CustomerMenu = "<li name=\"ContactList_TalkingList\" id=\"ContactList_TalkingList_{0}\" class=\"ContactList_TalkingList goldenrod\" data-value=\"{1}\"  data-username=\"{2}\"><table><tbody><tr><td style=\"width: 20%; text-align: center;\"><img src=\"{3}\"></td><td style=\"width: 30%; text-align: center;\"> {4}</td><td>{5}</td></tr> </tbody></table></li>";
var template_QuickReply = "<li class=\"quickReplyli\"><ol><label class=\"poi\" name=\"quickreply_my_floder\" data-id=\"{0}\" data-isreply=\"{1}\">{2}</label></ol></li>";

//w微信墙 

var template_WebWall_IndexMsg = "<div class=\"MsgItem msgin\" style=\"display:none\"><div class=\"head\" style=\"background-image: url({0});\"></div> <div class=\"nickname\" >{1}</div><div class=\"msgword\" >{2}</div> </div>";
var template_WebWall_IndexFace = "<div class=\"MsgItem msgin\" style=\"display:none\"><div class=\"head\" style=\"background-image: url({0});\"></div> <div class=\"nickname\" >{1}</div><div class=\"msgword  \" > <img class=\"msgImage\" src=\"{2}\"></div> </div>";
var template_WebWall_lotteryPrice = "  <div class=\"award-box\" key-number=\"{0}\"><div class=\"award-image\"><img src=\"{1}\" /></div> <div class=\"award-desc\"><span>{2}</span></div></div>";
var template_WebWall_lotteryUserShow = " <div class=\"lotteryUser\" style=\"width:{2}px;height:{3}px\" ><img src=\"{0}\" style=\"width:{4}px;height:{5}px\" /><div class=\"lotterNick\"> <span>{1}</span> </div></div>";

var template_WebWall_lotteryAwardUser = " <li data-openid=\"{2}\"  style=\"display:none\"><div class=\"reward-box-headImage fl\"><img src=\"{0}\"></div><span class=\"reward-box-nickName fl\">{1}</span><a class=\"reward-box-close fl\"></a></li>";
var template_WebWall_lotteryAwardBox = "<div class=\"reward-box\" id=\"reward-box{5}\" data-prize=\"{7}\"> <div class=\"reward-box-head\"><span class=\"reward-level\">{0}</span><div class=\"reward-box-head-info\"><div class=\"labelGroup-me\"><span>名额</span> <span>{1}</span></div><div class=\"labelGroup-yc\"><span>已抽</span><span class=\"hasAwardCount\">{2}</span></div></div></div><div class=\"reward-box-content\"><ul><li  data-openid=\"{6}\"><div class=\"reward-box-headImage fl\"> <img src=\"{3}\"></div><span class=\"reward-box-nickName fl\"> {4}</span><a class=\"reward-box-close fl\"></a></li></ul></div></div>"

                  

var templateDictionary = {};
usingNamespace("Share.WebUI")["Template"] = {
    Get: function (key) {
        return templateDictionary[key];
    },
    GetValue: function (key, params) {
        if (arguments.length == 1)
            return function () {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.share.format.apply(this, args);
            };
        if (arguments.length > 2 && params.constructor != Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor != Array) {
            params = [params];
        }
        return $.share.format2(templateDictionary[key], params);
    },
    Insert: function (mykey, myvalue) {
        templateDictionary[mykey] = myvalue;
    }
}
Share.WebUI.Template.Insert("key_UserSendMsg", template_UserSendMsg);

Share.WebUI.Template.Insert("key_UserSendFaceMsg", template_UserSendFaceMsg);
Share.WebUI.Template.Insert("key_UserRecevieMsg", template_UserRecevieMsg);
Share.WebUI.Template.Insert("key_UserRecevieFaceMsg", template_UserRecevieFaceMsg);
Share.WebUI.Template.Insert("key_UserRecevieImageMsg", template_UserRecevieImageMsg);

Share.WebUI.Template.Insert("key_CustomerSendMsg", template_CustomerSendMsg);
Share.WebUI.Template.Insert("key_UserSendImageMsg", template_UserSendImageMsg);

Share.WebUI.Template.Insert("key_CustomerReplyFaceMsg", template_CustomerReplyFaceMsg);
Share.WebUI.Template.Insert("key_CustomerSendFaceMsg", template_CustomerSendFaceMsg);
Share.WebUI.Template.Insert("key_CustomerReplyImageMsg", template_CustomerReplyImageMsg);
Share.WebUI.Template.Insert("key_CustomerSendImageMsg", template_CustomerSendImageMsg);

Share.WebUI.Template.Insert("key_HistoryUser", template_HistoryUser);

Share.WebUI.Template.Insert("key_CustomerMenu", template_CustomerMenu);
Share.WebUI.Template.Insert("key_QuickReply", template_QuickReply);
Share.WebUI.Template.Insert("key_CustomerReplyMsg", template_CustomerReplyMsg);

Share.WebUI.Template.Insert("key_WebWall_IndexMsg", template_WebWall_IndexMsg);
Share.WebUI.Template.Insert("key_WebWall_IndexFace", template_WebWall_IndexFace);
Share.WebUI.Template.Insert("key_WebWall_lotteryPrice", template_WebWall_lotteryPrice);
Share.WebUI.Template.Insert("key_WebWall_lotteryUserShow", template_WebWall_lotteryUserShow);
Share.WebUI.Template.Insert("key_WebWall_lotteryAwardUser", template_WebWall_lotteryAwardUser);
Share.WebUI.Template.Insert("key_WebWall_lotteryAwardBox", template_WebWall_lotteryAwardBox);

usingNamespace("Share.WebUI")["Base"] = {
    //发送Ajax
    Ajax: function (opt) {
        var url = opt.url;
        var type = "POST";
        var dataType = "json";
        if (opt.hasOwnProperty("type")) {
            type = opt.type;
        }
        if (opt.hasOwnProperty("dataType")) {
            dataType = opt.dataType;
        }
        $.ajax({
            type: type,
            url: url,
            beforeSend: function () {
                if (opt.hasOwnProperty("beforeSend")) {
                    opt.beforeSend();
                }
            },
            dataType: dataType,
            data: opt.data,
            success: function (data, textStatus) {
                if (opt.hasOwnProperty("success")) {
                    opt.success(data, textStatus);
                }
            },
            error: function (data,text) {
                if (opt.hasOwnProperty("error")) {
                    opt.error(data, textStatus);
                }
            }
        });
    }
    ,
    //全盘显示
    fullScreen: function (e) {
        e.preventDefault(),
	    e.stopPropagation();
        var i = document.documentElement,
	    r = i.webkitRequestFullscreen || i.requestFullScreen || i.webkitRequestFullScreen || i.mozRequestFullScreen || i.msRequestFullscreen;
        r && r.call(i);
    },
    ///打开音乐
    playMsc: function (thi, evt) {
        var msc = document.getElementById('msc');
        if (thi.className.indexOf("on") > -1) {
            msc.pause();
        } else {
            msc.play();
        }
        $(thi).toggleClass("on");
    },
    requestFullScreen: function (element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            try {
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
            catch (e) {
            }
        }
    }



}