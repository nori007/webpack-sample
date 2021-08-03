require.config({
    hgn: {
        templateExtension: ".html"
    },
    paths: {
        "boot": '../boot',
        // folders..
        "conf": "../conf",
        "configs": "../conf", // 과거 호환(추후 삭제)
        "plugins": "../plugins",
        "lang": "../lang",
        "default-lang": "../lang/ko",
        "stylesheets": "../../css",
        // !! danger !!
        // go-nametags 와 같이 따로 path 가 지정된 lib 는
        // require 할때 libraries/go-nametags 의 형태로 사용하면 안된다.
        // ie10 에서 timeout error 발생함.
        "libraries": "../libs",
        "libs": "../libs",
        "components": "../components",

        // shortcut
        "hogan": "../vendors/hogan",
        "smarteditor": "../vendors/smartEditor/js/HuskyEZCreator",
        "dext5editor": "../vendors/dext5editor/js/dext5editor",
        // 웹에디터 공통
        /**
         * @deprecated
         * go-webeditor/jquery.go-webeditor 사용하세요...
         */
        // 양식편집기 공통
        "formeditor": "../libs/go-formeditor",
        // 양식편집기 공통유틸
        "formutil": "../libs/go-formutil",
        "formparse": "../libs/go-formparse",
        "strophe": "../vendors/strophe/strophe",
        "bonegirl": "../libs/bone-girl",
        "swfupload": "../vendors/swfupload/swfupload",
        "swfupload.plugin": "../vendors/swfupload/plugin/jquery.swfupload",
        "raphael": "../vendors/raphael.2.1.2",
        "justgage": "../vendors/justgage/justgage.1.0.1",
        "browser": "../vendors/browser",
        "axisj": "../vendors/axisj/lib/AXJ.min",
        "mousetrap": "../vendors/mousetrap",

        // plugins...
        // requirejs 플러그인들은 네임스페이스 없이, 그외 플러그인들은 {라이브러리명}.{플러그인명} 으로 이름을 부여한다.
        "text": "../vendors/requirejs/plugins/text",
        "json": "../vendors/requirejs/plugins/json",
        "registry": "../vendors/requirejs/plugins/registry/main",
        "i18n": "../vendors/requirejs/plugins/i18n",
        "hgn": "../vendors/requirejs/plugins/hgn",
        "css": "../vendors/requirejs/plugins/css/css",

        // jquery plugins
        "jquery.ui": "../vendors/jquery/jquery-ui/js/jquery-ui-1.10.3.custom",
        "jquery.datepicker": '../vendors/jquery/jquery-ui/js/jquery-ui-1.10.3.datepicker',
        "jquery.progressbar": '../vendors/jquery/jquery-ui/js/jquery.progressbar',
        "jquery.dataTables": "../vendors/jquery/plugins/dataTables/js/jquery.dataTables",  // 게시판 상세에서 사용(pc전용)
        "jquery.jstree": "../vendors/jquery/plugins/jstree/jquery.jstree",     // 조직도 트리에서 사용(pc 전용)
        "jquery.tooltipster": "../vendors/jquery/plugins/tooltipster/jquery.tooltipster", //Works에서 사용
        "jquery.nanoscroller": "../vendors/jquery/plugins/nanoscroller/jquery.nanoscroller",    // 커뮤니티, Works에서 사용(pc 전용)
        "jquery.fancybox": "../vendors/jquery/plugins/fancybox/jquery.fancybox", // 썸네일 라이브러리(pc 전용)
        "jquery.placeholder": "../vendors/jquery/plugins/placeholder/jquery.placeholder.min",    // pc, mobile 공통
        "jquery.printElement": "../vendors/jquery/plugins/jquery.printElement",  // 인쇄 기능에 사용(pc 전용)
        "jquery.autocomplete": "../vendors/jquery/plugins/jquery.autocomplete",  // 캘린더, 쪽지에서 사용(pc 전용)
        "jquery.mobile.autocomplete": "../vendors/jquery/plugins/jquery.mobile.autocomplete",
        "jquery.fileupload": "../vendors/jquery/jquery-fileupload/jquery.fileupload",
        "jquery.filedownload": "../vendors/jquery/plugins/jquery.fileDownload",
        "jquery.jqplugin": "../vendors/jquery/plugins/jquery.jqplugin.1.0.2.min",    // fileupload 컴포넌트에서 사용
        "jquery.ui.widget": "../vendors/jquery/jquery-fileupload/vendor/jquery.ui.widget",
        "jquery.iframe-transport": "../vendors/jquery/jquery-fileupload/jquery.iframe-transport",
        "jquery.ajaxmock": "../vendors/jquery/plugins/jquery.ajaxmock",     // 개발 모드 전용
        "jquery.mockjax": "../vendors/jquery/plugins/jquery.mockjax",       // 개발 모드 전용
        "jquery.maskMoney": "../vendors/jquery/plugins/jquery.maskMoney",   // formutil, 폼빌더에서 사용(pc 전용)
        "jquery.inputmask": "../vendors/jquery/plugins/jquery.inputmask.bundle.min",   // 폼빌더 숫자 컴포넌트에서 사용
        "jquery.dotdotdot": "../vendors/jquery/plugins/jquery.dotdotdot",  // 대시보드에서 사용(pc 전용)
        "jquery.bxslider": "../vendors/jquery/plugins/bxslider/jquery.bxslider", //Works에서 사용

        "jquery.ui.touch-punch": "../vendors/jquery/plugins/jquery.ui.touch-punch.min",
        "interact": "../vendors/jquery/plugins/interact-1.2.8.min",

        // 기타 플러그인들
        "backbone.routefilter": "../vendors/backbone/plugins/backbone.routefilter",
//            "backbone.touch": "../vendors/backbone/plugins/backbone.touch",
        "swipe": "../vendors/swipe/swipe",

        //mobile
        "iscroll": "../vendors/iscroll/iscroll",   // 모바일 전용 커스텀 스크롤 라이브러리(모바일 전용)
        "jquery.mobile": "../vendors/jquery/jquery-mobile/jquery.mobile.custom", // touch & page(모바일 전용)

        //jQuery 자체 확장 모듈
        "jquery.go-sdk": "../libs/go-jssdk",   // ajax 처리 라이브러리(pc, 모바일 공통)
        "jquery.go-popup": "../libs/go-popup", // pc, 모바일 공통(의도되지 않은 사용, 원래 pc에서만 사용)
        "jquery.go-nodetree": "../libs/node/go-nodetree",
        "jquery.go-nodelist": "../libs/node/go-nodelist",
        "jquery.go-org": "../libs/node/go-org",
        "jquery.go-orgslide": "../libs/node/go-orgslide",
        "jquery.go-aliasorgslide": "../libs/node/go-aliasorgslide",
        "jquery.go-aliasnodelist": "../libs/node/go-aliasnodelist",
        "jquery.go-orgtab": "../libs/node/go-orgtab",
        "jquery.go-grid": "../libs/go-grid",
        "jquery.go-validation": "../libs/go-validation",   // pc, 모바일 공통
        "jquery.calbean": "../libs/calbean/calbean",       // pc 캘린더 전용
        "jquery.go-preloader": "../libs/go-preloader",
        "jquery.go-recurrence": "../libs/go-recurrence",
        "jquery.go-placeholder": "../libs/go-placeholder",

        // 기타 바로가기
        "GO.util": "../libs/go-util",
        "GO.m.util": "../libs/go-mobile-util",
        "formspy": "../libs/go-formspy",
        "go-notification": "../libs/go-notification",
        "go-ignoreduplicatemethod": "../libs/go-ignoreduplicatemethod",     // 중복 처리 방지. 주로 윈도우 리사이징에 이용(pc 전용)
        "go-gadget": "../libs/go-gadget",   // 가젯 스크립트, pc 전용
        "go-nametags": "../libs/go-nametags",   // pc, 모바일 공통(todo, Works에서 공통으로 사용)
        "go-datastore": "../libs/go-datastore",
        "go-notice": "../libs/go-notice",
        "go-calendar": "../libs/go-calendar",
        "go-charts": "../libs/go-charts",   // 대시보드, 설문, ToDO 에서 사용(pc, 모바일 공통)
        "go-scroller": "../libs/go-scroller",   // 커스텀 스크롤 라이브러리(browser, axisj 지원)
        "go-hogan": "../libs/go-hogan",

        // 플러그인
        "dashboard": "../plugins/dashboard",
        "calendar": "../plugins/calendar",
        "board": "../plugins/board",
        "community": "../plugins/community",
        "admin": "../plugins/admin",
        "contact": "../plugins/contact",
        "asset": "../plugins/asset",
        "survey": "../plugins/survey",
        "approval": "../plugins/approval",
        "system": "../plugins/system",
        "report": "../plugins/report",
        "task": "../plugins/task",
        "todo": "../plugins/todo",
        "works": "../plugins/works",
        "note": "../plugins/note",
        "ehr": "../plugins/ehr",
        "attendance": "../plugins/ehr/attendance",
        "timeline": "../plugins/ehr/timeline",
        "hrcard": "../plugins/ehr/hrcard",
        "vacation": "../plugins/ehr/vacation",
        "welfare": "../plugins/ehr/welfare",
        "sms": "../plugins/sms",
        "docs": "../plugins/docs",
        "mail" : "../plugins/mail",
        "webfolder" : "../plugins/webfolder",

        // only development
        "jquery": "../vendors/jquery/jquery-1.10.2",
        "jquery-migrate": "../vendors/jquery/jquery-migrate-1.2.1",
        "underscore": "../vendors/lodash",
        "json2": "../vendors/json2",
        "backbone": "../vendors/backbone/backbone",
        "moment": "../vendors/moment/moment-2.4.0",
        "amplify": "../vendors/amplify",

        "jquery.ui.locale.ko": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-ko",
        "jquery.ui.locale.ja": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-ja",
        "jquery.ui.locale.en": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-en-AU",
        "jquery.ui.locale.zh_CN": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-zh_CN",
        "jquery.ui.locale.zh_TW": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-zh_TW",
        "jquery.ui.locale.vi": "../vendors/jquery/jquery-ui/lang/jquery.ui.datepicker-vi",

        "jquery.cookie": "../vendors/jquery/plugins/jquery.cookie",

        "jquery.jstree.hotkeys": "../vendors/jquery/plugins/jstree/_lib/jquery.hotkeys",

        "jquery.fancybox-thumbs": "../vendors/jquery/plugins/fancybox/helpers/jquery.fancybox-thumbs",
        "jquery.fancybox-buttons": "../vendors/jquery/plugins/fancybox/helpers/jquery.fancybox-buttons",

        // only production
        "vendors": "../vendors",

        "mail-swfupload": "../plugins/mail/swfupload/swfupload",
        "mail-jqueryupload": "../plugins/mail/libs/jquery.swfupload",

        "classjs": "../vendors/class",

        "when": "../vendors/when/when",
        "when/sequence": "../vendors/when/sequence",

        "lottie": "../vendors/lottie/lottie.min"
    },

    packages: [{
        name : "comment",
        location : "../components/comment",
        main : "comment"
    }, {
        name : "m_comment",
        location : "../components/m_comment"
    }, {
        name : "editor_inlineImg_upload",
        location : "../components/inlineUpload"
    }, {
        name : "email_send_layer",
        location : "../components/emailSend"
    }, {
        name: "when",
        main: "when",
        location: "../vendors/when"
    }, {
        name : "file_upload",
        location : "../components/fileupload"
    }, {
        name : "attach_file",
        location : "../components/attach_file"
    }, {
        name : "favorite",
        location : "../components/favorite"
    }, {
        name : "print",
        location: "../components/print",
        main: 'views/print'
    }, {
        name : "go-webeditor",
        location: "../components/go-webeditor",
        main: "go-webeditor"
    }, {
        name : "content_viewer",
        location : "../components/content_viewer",
        main : "content_viewer"
    }, {
        name : "grid",
        location : "../components/grid",
        main : "grid"
    }, {
        name : "micincal",
        location : "../components/minical",
        main : "views/minical_app"
    }, {
        name: "jquery.flot",
        main: "jquery.flot",
        location: "../vendors/jquery/plugins/flot"
    },{
        name : "go-fancybox",
        location : "../components/go-fancybox",
        main : "go-fancybox"
    },{
        name : "matrix",
        location : "../components/matrix",
        main : "matrix"
    }],

    shim: {
        "main": ["boot", "app"],
        "backbone": {
            deps: ["underscore", "jquery", "json2"],
            exports: "Backbone"
        },
        "underscore": { exports: "_" },
        "hogan": { exports: "Hogan" },
        "go-hogan": ["GO.util"],
        "amplify": {
            deps: ["jquery", "json2"],
            exports: "amplify"
        },
        "strophe": {
            deps: ["jquery"],
            exports: "Strophe"
        },
        "hgn": ["hogan", "text"],

        "classjs": {
            exports: "Klass",
            init: function(Klass) {
                Klass.noConflict();
            }
        },

        "axisj": {
            deps: ["jquery"],
            exports: "AXJ",
            init: function($) {
                require(["css!../vendors/axisj/ui/arongi/AXJ.min"]);
            }
        },

        "jquery.dataTables": ["jquery"],
        "jquery.go-sdk" : ["jquery"],
        "jquery.go-popup" : ["jquery"],
        "jquery.go-org" : ["jquery", "jquery.ui","jquery.jstree", "jquery.placeholder", "jquery.go-nodetree", "jquery.go-nodelist" ],
        "jquery.go-orgslide" : ["jquery", "jquery.ui", "jquery.jstree", "jquery.placeholder", "jquery.go-nodetree", "jquery.go-nodelist"],
        "jquery.go-aliasorgslide" : ["jquery", "jquery.ui", "jquery.jstree", "jquery.placeholder", "jquery.go-aliasnodelist"],
        "jquery.go-orgtab" : ["jquery", "jquery.ui", "jquery.jstree", "jquery.placeholder", "jquery.go-nodetree", "jquery.go-nodelist"],
        "jquery.go-grid" : ["jquery", "jquery.dataTables", "jquery.go-sdk", "jquery.go-popup"],
        "jquery.go-validation" : ["jquery"],
        "go-notice" : ["jquery", "jquery.ui", "jquery.cookie"],
        "jquery.go-preloader" : ["jquery"],
        "jquery.calbean" : ["jquery"],
        "jquery.mobile" : {
            deps: ["jquery"],
            init: function($) {
                require(["css!../vendors/jquery/jquery-mobile/jquery.mobile.custom"]);
            }
        },
        "jquery.nanoscroller" : {
            deps: ["jquery"],
            init: function($) {
                require(["css!../vendors/jquery/plugins/nanoscroller/nanoscroller"]);
            }
        },
        "jquery.tooltipster": {
            deps: ["jquery"]
        },
        "jquery.bxslider" : {
            deps: ["jquery"],
            init: function($) {
                require(["css!../vendors/jquery/plugins/bxslider/jquery.bxslider.custom"]);
            }
        },
        "jquery.placeholder" : ["jquery"],
        "jquery.flot": {
            deps: ["jquery"],
            init: function() {
                require([
                    "jquery.flot/jquery.flot.pie",
                    "jquery.flot/jquery.flot.stack",
                    "jquery.flot/jquery.flot.orderBars",
                    "jquery.flot/jquery.flot.tooltip",
                    "jquery.flot/jquery.flot.selection"
                ]);
            }
        },
        "jquery.flot/jquery.flot.pie": ["jquery.flot"],
        "jquery.flot/jquery.flot.stack": ["jquery.flot"],
        "jquery.flot/jquery.flot.orderBars": ["jquery.flot"],
        "jquery.flot/jquery.flot.tooltip": ["jquery.flot"],
        "jquery.flot/jquery.flot.selection": ["jquery.flot"],
        "swipe" : ["jquery"],
        "backbone.routefilter": ["backbone"],
        "GO.util": ["underscore", "moment", 'amplify'],
        "formspy": {
            deps: ["jquery", "underscore"],
            exports: "FormSpy"
        },
        "go-notification": {
            deps: ["jquery", "strophe"],
            exports: "GONotification"
        },

        "go-ignoreduplicatemethod": {
            deps: ["jquery"],
            exports: "GOIgnoreDuplicateMethod"
        },

        "justgage": {
            deps: ["raphael"],
            exports: "JustGage"
        },

        "when/sequence": ["when"],

        // only development
        "jquery" : {
            exports: "$"
        },
        "jquery-migrate" : ["jquery"],
        "jquery.ui" : {
            deps: ["jquery"],
            init: function($) {
                // vendors.js로 합쳐질 때, locale 변수관련 오류 발생
                // init내용이 define의 내용으로 들어가는 것을 확인. 중복 코드지만 반드시 아래와 같이 해줘야 한다.
                function getMetaValue( key, defaults ) {
                    var metaTags = document.getElementsByTagName('meta'),
                        result = defaults || '';

                    for(var i=0, len=metaTags.length; i < len; i++) {
                        if(metaTags[i].name === key) {
                            result = metaTags[i].content;
                        }
                    }

                    return result;
                }

                function getLocale() {
                    return getMetaValue( 'locale', 'ko' );
                }

                if(getLocale() !== 'en') {
                    require(["jquery.ui.locale." + getLocale()]);
                }
            }
        },

        // for mobile
        "jquery.datepicker" : {
            deps: ["jquery"],
            init: function($) {
                // vendors.js로 합쳐질 때, locale 변수관련 오류 발생
                // init내용이 define의 내용으로 들어가는 것을 확인. 중복 코드지만 반드시 아래와 같이 해줘야 한다.
                function getMetaValue( key, defaults ) {
                    var metaTags = document.getElementsByTagName('meta'),
                        result = defaults || '';

                    for(var i=0, len=metaTags.length; i < len; i++) {
                        if(metaTags[i].name === key) {
                            result = metaTags[i].content;
                        }
                    }

                    return result;
                }

                function getLocale() {
                    return getMetaValue( 'locale', 'ko' );
                }

                if(getLocale() !== 'en') {
                    require(["jquery.ui.locale." + getLocale()]);
                }
            }
        },

        "jquery.ui.locale.ko": ["jquery", "jquery.ui"],
        "jquery.ui.locale.ja": ["jquery", "jquery.ui"],
        "jquery.ui.locale.en" :  ["jquery", "jquery.ui"],
        "jquery.ui.locale.zh_CN" :  ["jquery", "jquery.ui"],
        "jquery.ui.locale.zh_TW" :  ["jquery", "jquery.ui"],
        "jquery.ui.locale.vi" :  ["jquery", "jquery.ui"],

        "jquery.cookie" : ["jquery"],
        "jquery.jstree.hotkeys" : ["jquery"],
        "jquery.jstree" : ["jquery", "jquery.cookie"],

        "jquery.fancybox" : ["jquery", "jquery-migrate"],
        "jquery.fancybox-thumbs" : ["jquery.fancybox"],
        "jquery.fancybox-buttons" : ["jquery.fancybox"],

        "jquery.fileupload": ["jquery", "jquery.ui", "jquery.iframe-transport"],

        "libs/go-utils": ["jquery", "amplify"],
        "go-webeditor": ['underscore', 'jquery'],
        "go-webeditor/editors/smarteditor": ['go-webeditor', 'smarteditor'],
        "go-webeditor/editors/activedesigner": ['go-webeditor'],
        "go-webeditor/editors/dext5editor": ['go-webeditor', 'dext5editor'],

        "content_viewer" : ['underscore', 'jquery']
    }
});
