"use strict";

/*
    不同风格行情配置文件
    !!手机上字体大小需要*分辨率比
*/

function GetDevicePixelRatio() {
    return window.devicePixelRatio || 1;
}

//黑色风格
var BLACK_STYLE = {
    BGColor: 'rgb(0,0,0)', //背景色
    TooltipBGColor: "rgb(255, 255, 255)", //背景色
    TooltipAlpha: 0.92, //透明度

    SelectRectBGColor: "rgba(1,130,212,0.06)", //背景色
    //  SelectRectAlpha: 0.06;                  //透明度

    //K线颜色
    UpBarColor: "rgb(238,21,21)", //上涨
    DownBarColor: "rgb(25,158,0)", //下跌
    UnchagneBarColor: "rgb(228,228,228)", //平盘

    Minute: {
        VolBarColor: "rgb(255,236,0)",
        PriceColor: "rgb(25,180,231)",
        AreaPriceColor: "rgba(63,158,255,.3)",
        AvPriceColor: "rgb(255,236,0)"
    },

    DefaultTextColor: "rgb(101,104,112)",
    DefaultTextFont: 14 * GetDevicePixelRatio() + 'px 微软雅黑',
    TitleFont: 13 * GetDevicePixelRatio() + 'px 微软雅黑', //标题字体(动态标题 K线及指标的动态信息字体)

    UpTextColor: "rgb(238,21,21)",
    DownTextColor: "rgb(25,158,0)",
    UnchagneTextColor: "rgb(101,104,112)",
    CloseLineColor: 'rgb(178,34,34)',

    FrameBorderPen: "rgba(236,236,236,0.13)", //边框
    FrameSplitPen: "rgba(236,236,236,0.13)", //分割线
    FrameSplitTextColor: "rgb(101,104,112)", //刻度文字颜色
    FrameSplitTextFont: 12 * GetDevicePixelRatio() + "px 微软雅黑", //坐标刻度文字字体
    FrameTitleBGColor: "rgb(0,0,0)", //标题栏背景色

    CorssCursorBGColor: "rgb(43,54,69)", //十字光标背景
    CorssCursorTextColor: "rgb(255,255,255)",
    CorssCursorTextFont: 12 * GetDevicePixelRatio() + "px 微软雅黑",
    CorssCursorPenColor: "rgb(130,130,130)", //十字光标线段颜色

    KLine: {
        MaxMin: { Font: 12 * GetDevicePixelRatio() + 'px 微软雅黑', Color: 'rgb(111,111,111)' }, //K线最大最小值显示
        Info: //信息地雷
        {
            Investor: {
                ApiUrl: 'https://opensource.zealink.com/API/NewsInteract', //互动易
                IconFont: { Family: 'iconfont', Text: "\uE631", HScreenText: "\uE684", Color: '#1c65db' //SVG 文本
                } },
            Announcement: //公告
            {
                ApiUrl: 'https://opensource.zealink.com/API/ReportList',
                IconFont: { Family: 'iconfont', Text: "\uE633", HScreenText: "\uE685", Color: '#f5a521' }, //SVG 文本
                IconFont2: { Family: 'iconfont', Text: "\uE634", HScreenText: "\uE686", Color: '#ed7520' //SVG 文本 //季报
                } },
            Pforecast: //业绩预告
            {
                ApiUrl: 'https://opensource.zealink.com/API/StockHistoryDay',
                IconFont: { Family: 'iconfont', Text: "\uE62E", HScreenText: "\uE687", Color: '#986cad' //SVG 文本
                } },
            Research: //调研
            {
                ApiUrl: 'https://opensource.zealink.com/API/InvestorRelationsList',
                IconFont: { Family: 'iconfont', Text: "\uE632", HScreenText: "\uE688", Color: '#19b1b7' //SVG 文本
                } },
            BlockTrading: //大宗交易
            {
                ApiUrl: 'https://opensource.zealink.com/API/StockHistoryDay',
                IconFont: { Family: 'iconfont', Text: "\uE630", HScreenText: "\uE689", Color: '#f39f7c' //SVG 文本
                } },
            TradeDetail: //龙虎榜
            {
                ApiUrl: 'https://opensource.zealink.com/API/StockHistoryDay',
                IconFont: { Family: 'iconfont', Text: "\uE62F", HScreenText: "\uE68A", Color: '#b22626' //SVG 文本
                } }

        },
        NumIcon: {
            Color: 'rgb(251,80,80)', Family: 'iconfont',
            Text: ["\uE649", "\uE63B", "\uE640", "\uE63D", "\uE63F", "\uE645", "\uE641", "\uE647", "\uE648", "\uE646", "\uE636", "\uE635", "\uE637", "\uE638", "\uE639", "\uE63A", "\uE63C", "\uE63E", "\uE642", "\uE644", "\uE643"]
        },
        TradeIcon: //交易指标 图标
        {
            Family: 'iconfont',
            Buy: { Color: 'rgb(255,15,4)', Text: "\uE683", HScreenText: "\uE682" },
            Sell: { Color: 'rgb(64,122,22)', Text: "\uE681", HScreenText: "\uE680" }
        }
    },

    Index: {
        LineColor: //指标线段颜色
        ["rgb(255,189,09)", "rgb(22,198,255)", "rgb(174,35,161)", "rgb(236,105,65)", "rgb(68,114,196)", "rgb(229,0,79)", "rgb(0,128,255)", "rgb(252,96,154)", "rgb(42,230,215)", "rgb(24,71,178)"],
        NotSupport: { Font: "14px 微软雅黑", TextColor: "rgb(52,52,52)" }
    },

    ColorArray: //自定义指标默认颜色
    ["rgb(255,174,0)", "rgb(25,199,255)", "rgb(175,95,162)", "rgb(236,105,65)", "rgb(68,114,196)", "rgb(229,0,79)", "rgb(0,128,255)", "rgb(252,96,154)", "rgb(42,230,215)", "rgb(24,71,178)"],

    DrawPicture: //画图工具
    {
        LineColor: "rgb(30,144,255)",
        PointColor: "rgb(105,105,105)"
    },

    TooltipPaint: {
        BGColor: 'rgba(20,20,20,0.8)', //背景色
        BorderColor: 'rgb(210,210,210)', //边框颜色
        TitleColor: 'rgb(210,210,210)', //标题颜色
        TitleFont: 13 * GetDevicePixelRatio() + 'px 微软雅黑' //字体
    }

};

var STYLE_TYPE_ID = {
    BLACK_ID: 1 //黑色风格
};

function HQChartStyle() {}

HQChartStyle.GetStyleConfig = function (styleid) //获取一个风格的配置变量
{
    switch (styleid) {
        case STYLE_TYPE_ID.BLACK_ID:
            return BLACK_STYLE;
        default:
            return null;
    }
};