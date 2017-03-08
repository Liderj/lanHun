// Input
var myInput = (function () {
    var mi = function () {
        this.maxLength = 500,
		this.currentLength = 0
    }
    mi.prototype = {
        listen: function (thi, evt) {
            var that = this;
            /*if(evt && evt.keyCode && 13==evt.keyCode){
            console.log( evt.keyCode);
            //evt.prevent();
            //thi.innerHTML+="<p></p>";
            }*/
            if ("/:del" == evt.value) {
                thi = evt.srcElement;
                var imgs = thi.querySelectorAll("img");
                if (imgs.length) {
                    imgs[imgs.length - 1].remove();
                }
                return;
            }
            if ("paste" == evt.type) {
                var text = evt.clipboardData.getData('text/plain');
                if (text.length > (that.maxLength - that.currentLength)) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    return false;
                }
            }

            if (evt.keyCode && evt.keyCode > 0 && that.currentLength >= that.maxLength) {
                if (evt.keyCode == 2 || evt.keyCode == 46) {

                } else {
                    evt.preventDefault();
                    evt.stopPropagation();
                    return false;
                }
            }
            if (evt.keyCode && -10 == evt.keyCode) {
                if (evt.value.length > (that.maxLength - that.currentLength)) {
                    return that;
                }
                thi = evt.srcElement;

                var img = new Image();
                img.src = evt.imgUrl;
                img.innerHTML = evt.value;
                img.setAttribute("data-innerHTML", evt.value);
                thi.appendChild(img);

                // var span = document.createElement("span");
                // span.setAttribute("style", "background-image:url("+evt.imgUrl+");");
                // span.setAttribute("contenteditable", "false");
                // span.classList.add("emotion");
                // span.innerText = evt.value;
                // thi.appendChild(span);
                // thi.focus();


            }




            var imgs = thi.querySelectorAll("img");
            var em_count = 0;
            for (var i = 0, ci; ci = imgs[i]; i++) {
                em_count += ci.getAttribute("data-innerHTML").length;
            }
            var fc = document.getElementById("form_count");
            that.currentLength = thi.innerText.length + em_count;

            if (that.maxLength < that.currentLength) {
                thi.innerHTML = thi.innerHTML.slice(0, that.maxLength);
                that.currentLength = that.maxLength;
            }

            fc.innerHTML = that.maxLength - that.currentLength + " 字";
        },
        active: function (thi, evt) {
            return;
            var that = this;
            that.curPos = getCaretCharacterOffsetWithin(thi);
            console.log(that.curPos);
            return that;
        }
    }

    return new mi();
})();

// pics
var form_pics = (function () {
    var fp = function () {
        this.length = 1;
        this.videoLength = 0;
    }

    fp.prototype = {
        addImg: function (thi) {
            if (thi.files && thi.files[0]) {
                var img = thi.nextSibling;

                if (thi.files[0].type.indexOf("video") == -1) {
                    //TODO 处理微信浏览器android图片太大bug
                    if (thi.files[0].size > 1048576) {
                        alert("选择的图片太大,请使用软件处理后上传");
                        return false;
                    }
                    var URL = window.URL || webkitURL;
                    var url = URL.createObjectURL(thi.files[0]);
                    img.src = url;
                    thi.parentNode.setAttribute("type", "image");
                } else {
                    if (this.videoLength >= 1) {
                        alert("只能上传一个视频", 1000);
                        return this;
                    }
                    img.src = 'imgs/3.png';
                    this.videoLength += 1;
                    thi.parentNode.setAttribute("type", "video");
                }

                this.createImgFile(thi);
                this.length++;
                thi.setAttribute("style", "display:none;");
                return this;
            }
        },
        removeImg: function (thi) {
            var type = $(thi).closest("dd").remove().attr("type");
            if ("video" == type) {
                this.videoLength -= 1;
            }
            this.createImgFile(thi);
            this.length--;
            return this;
        },
        createImgFile: function (thi) {
            if (this.length > 2) {
                this.length = 2;
                return this;
            }
            var TPL = '<dd><input type="file" accept="image/jpg, image/jpeg, image/png, video/*"  onchange="form_pics.addImg(this);" name="pics[]" /><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />\
							<span onclick="form_pics.removeImg(this);">&nbsp;</span></dd><dt>\
								<label>最多可上传3张图片</label>\
							</dt>';
            $(thi).closest("dl").append($(TPL));
            return this;
        }
    }

    return new fp();
})();

var lat = "";
var _long = "";
var address = "";
/**
* 以下为html5代码,获取地理位置
*/
function switchPage(thi, index) {
    $("#nav_page li").removeClass("on").eq(index).addClass("on");
}

var form_emotion = (function () {
    var fe = function () {
        this.values = ["/::)", "/::~", "/::B", "/::|", "/:8-)", "/::<", "/::$", "/::X", "/::Z", "/::'(", "/::-|", "/::@", "/::P", "/::D", "/::O", "/::(", "/::+", "/:–b", "/::Q", "/::T", "/:,@P", "/:,@-D", "/::d", "/:,@o", "/::g", "/:|-)", "/::!", "/::L", "/::>", "/::,@", "/:,@f", "/::-S", "/:?", "/:,@x", "/:,@@", "/::8", "/:,@!", "/:!!!", "/:xx", "/:bye", "/:wipe", "/:dig", "/:handclap", "/:&-(", "/:B-)", "/:<@", "/:@>", "/::-O", "/:>-|", "/:P-(", "/::'|", "/:X-)", "/::*", "/:@x", "/:8*", "/:pd", "/:<W>", "/:beer", "/:basketb", "/:oo", "/:coffee", "/:eat", "/:pig", "/:rose", "/:fade", "/:showlove", "/:heart", "/:break", "/:cake", "/:li", "/:bome", "/:kn", "/:footb", "/:ladybug", "/:shit", "/:moon", "/:sun", "/:gift", "/:hug", "/:strong", "/:weak", "/:share", "/:v", "/:@)", "/:jj", "/:@@", "/:bad", "/:lvu", "/:no", "/:ok", "/:love", "/:<L>", "/:jump", "/:shake", "/:<O>", "/:circle", "/:kotow", "/:turn", "/:skip", "[挥手]", "/:#-0", "[街舞]", "/:kiss", "/:<&", "/:&>"].slice(0, -7);
        //console.log(this.values);
        this.spearate = 20;
    };
    fe.prototype = {
        rend: function () {
            var that = this;
            var TPL = '{seprateDiv}<dd><span data-key="{k}_{page}_{v}" style="background-position:{xPos}px 0;"></span></dd>{delHTML}';
            var res = iTemplate.makeList(TPL, that.values, function (k, v) {
                return {
                    k: k,
                    v: v,
                    page: Math.floor(k / that.spearate),
                    xPos: -30 * k,
                    seprateDiv: (0 == k % that.spearate && 0 != k && k != that.values.length) ? "</div><div>" : "",
                    delHTML: (19 == k % that.spearate || k == (that.values.length - 1)) ? '<dd><span data-key="-1_-1_/:del" class="del"></span></dd>' : ''
                }
            });
            //console.log(res);
            $("#list_emotion").html('<div>' + res + '</div>');
            var nav_span = new Array(Math.ceil(that.values.length / that.spearate));
            $("#nav_emotion").html('<span class="on">' + nav_span.join("</span><span>") + '</span>');
            that.bind();

            window.swiper = new Swipe(document.getElementById('page_emotion'), {
                speed: 500,
                // auto:3000,
                callback: function () {
                    //$("#nav_list_uls li").removeClass("on").eq(this.index).addClass("on");
                    $("#nav_emotion span").removeClass("on").eq(this.index).addClass("on");
                }
            });
            return that;
        },
        bind: function () {
            $("#list_emotion").on("click", function (evt) {
                if ("SPAN" == evt.target.tagName) {
                    var val = evt.target.getAttribute("data-key").split('_');
                    myInput.listen(this, {
                        keyCode: -10,
                        srcElement: document.getElementById("form_article"),
                        value: val[2],
                        imgUrl: '/img/SNS/emotion/' + val[0] + ".gif"
                    });
                    this.focus();
                }
            });
        }
    };
    return new fe();
})();

//通用弹窗
function mAlert(msg, size) {
    var width = jQuery(window).width();
    $('body').append('<div class="tips" style="position: fixed;left: ' + (width - (size * 14 + 40)) / 2 + 'px;bottom: 60%;;background:#000;filter:alpha(opacity=60);opacity:0.5;text-align: center;z-index: 29999;">'
        + msg +
        '</div>');
    setTimeout(function () {
        $(".tips").fadeOut();
    }, 1500);
}


function Ajax(url, data) {
    var obj;
    data = data || {};
    $.ajax({
        async: false,
        type: "post",
        url: url,
        data: data,
        dataType: "json",
        success: function (result) {
            obj = result;
        }
    });
    return obj;
}






//发布页面
function emshow(s) {
    var deep = 100;
    var e = new RegExp('<[^<]+/(\\d+).gif[^>]+>', 'i');
    while (e.exec(s) && --deep > 0) {
        s = s.replace(e, '[em' + RegExp.$1 + ']');
    }
    return s.replace(/<[^>]+>/g, '').replace(/\s{2,}/g, " ");
}
//首页
function deFace(s) {
    var tp = '<img src="/img/SNS/emotion/', deep = 100;
    var e = /\[em(\d+)\]/i;
    while (e.exec(s) && --deep > 0) {
        s = s.replace(e, tp + RegExp.$1 + '.gif" />');
    }
    return s;
}
