window.__require=function t(e,n,o){function c(r,a){if(!n[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+r+"'")}}var d=n[r]={exports:{}};e[r][0].call(d.exports,function(t){return c(e[r][1][t]||t)},d,d.exports,t,e,n,o)}return n[r].exports}for(var i="function"==typeof __require&&__require,r=0;r<o.length;r++)c(o[r]);return c}({EndDialog:[function(t,e,n){"use strict";cc._RF.push(e,"5ae9aNOMTlPWbyviqBepbS3","EndDialog"),function(){var e;e=t("../common/Utils"),cc.Class({extends:cc.Component,properties:{m_score_label:cc.Label},onLoad:function(){var t;return 0,0,t=0,e.triggerEvent("getKline",function(e){return t=e}),e.triggerEvent("getMoney",function(n){return function(o){var c,i,r,a;return r=o.money,a=o.stockMoney,c=r+a,i=e.getItem("highScore")||0,e.formatNum(c),"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("gameFinish",{klineIndex:t,score:c+""}),i<c&&e.setItem("highScore",c),n.m_score_label.string="\u4f60\u7684\u603b\u8d44\u4ea7\u662f: "+e.formatNum(c)}}(this)),e.setItem("gameFinish",!0)},onBack:function(){return cc.director.loadScene("WelcomeDialog")},update:function(t){}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils"}],ExchangePanel:[function(t,e,n){"use strict";cc._RF.push(e,"a96cdoj+wpExoHoM5QUL1Yb","ExchangePanel"),function(){var e;t("../config/stockInfo"),e=t("../common/Utils"),cc.Class({extends:cc.Component,properties:{m_input_label:cc.EditBox,m_buy_button:cc.Node,m_sale_button:cc.Node,m_max_num:cc.Label},onLoad:function(){var t,n,o;return n=(t=e.getDataFromNode()).stockCode,o=t.type,"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("exchange",{type:o}),this._stockCode=n,this._exchangeType=o,this._exchangeNum=100,this._setExchangeButton(),this._initBuyNodeInfo(n),this._addBuyPanelEditbox()},_setExchangeButton:function(){return this.m_buy_button.active="buy"===this._exchangeType,this.m_sale_button.active="sale"===this._exchangeType},_initBuyNodeInfo:function(t){var n,o,c,i;return n=0,e.triggerEvent("getMoney",function(t){var e;return e=t.money,n=e}),c=0,e.triggerEvent("getOwnStockNum",{stockCode:t,callback:function(t){return c=t}}),o=cc.find("buyNode/name",this.node).getComponent(cc.Label),e.triggerEvent("getStockName",{stockCode:t,callback:function(t){return o.string=t}}),i=cc.find("buyNode/price",this.node).getComponent(cc.Label),e.triggerEvent("getStockPrice",{stockCode:t,callback:function(t){return function(e){var o;return i.string=e,"buy"===t._exchangeType?(o=Math.floor(n/e),t.m_max_num.string=o,t._maxNum=o):"sale"===t._exchangeType?(o=c,t.m_max_num.string=o,t._maxNum=o):void 0}}(this)})},_addBuyPanelEditbox:function(){return this._addEditBoxEventHandler(this.m_input_label)},_addEditBoxEventHandler:function(t){var e;return(e=new cc.Component.EventHandler).target=this.node,e.component="ExchangePanel",e.handler="onTextChanged",t.editingDidEnded.push(e)},onTextChanged:function(t){return this._exchangeNum=parseInt(t.string)},onBuy:function(){var t,n;return t=this._exchangeNum,n=this._stockCode,e.triggerEvent("buyStock",{stockCode:n,num:t}),cc.director.loadScene("game")},onSale:function(){var t,n;return t=this._exchangeNum,n=this._stockCode,e.triggerEvent("saleStock",{stockCode:n,num:t}),e.triggerEvent("getOwnStocks",function(t){return t.length>0?cc.director.loadScene("OwnStocksDialog"):cc.director.loadScene("game")})},onClose:function(){return"buy"===this._exchangeType?cc.director.loadScene("game"):"sale"===this._exchangeType?cc.director.loadScene("OwnStocksDialog"):void 0},onMaxNum:function(){return this._exchangeNum=this._maxNum,this.m_input_label.placeholder=this._exchangeNum}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils","../config/stockInfo":"stockInfo"}],HelpDialog:[function(t,e,n){"use strict";cc._RF.push(e,"ba79d+G+A9ArLBw/FlYkRxz","HelpDialog"),function(){cc.Class({extends:cc.Component,properties:{m_help_content:cc.Label},onLoad:function(){return"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("openHelp"),this.m_help_content.string="\u73b0\u5b9e\u7684\u4f01\u4e1a\u6210\u957f\u53d8\u5316\u8f83\u6162\uff0c\u4e8e\u662f\u6a21\u62df\u4e86\u8fd9\u4e2a\u5feb\u901f\u7684\u6e38\u620f\u4f53\u9a8c\u3002 \u4f60\u53ef\u4ee5\u4e70\u80a1\u7968\uff0c\u5356\u80a1\u7968\u6765\u83b7\u5f97\u6536\u76ca\u3002\u64cd\u4f5c\u4e5f\u5f88\u65b9\u4fbf\u5566\uff0c\u4e70\u5165\u80a1\u7968\uff0c\u6216\u5356\u51fa\u80a1\u7968\uff0c\u7136\u540e\u70b9\u51fb\u4e0b\u4e00\u5e74\uff0c \u5c31\u80fd\u8fc5\u901f\u770b\u5230\u80a1\u4ef7\u7684\u53d8\u5316\u4e86\u3002 1\u3001\u4e70\u80a1\u7968 \uff0c\u76f4\u63a5\u70b9\u51fb\u9875\u9762\u4e0a\u7684\u80a1\u7968\u6761\uff0c\u7136\u540e\u5728\u8d2d\u4e70\u754c\u9762\u8fdb\u884c\u64cd\u4f5c\u3002 2\u3001\u5356\u80a1\u7968\uff0c\u70b9\u5f00\u6211\u7684\u6301\u4ed3\uff0c\u7136\u540e\u9009\u62e9\u60f3\u5356\u7684\u80a1\u7968\uff0c\u5728\u5356\u51fa\u754c\u9762\u8fdb\u884c\u64cd\u4f5c \u6ca1\u6709\u5176\u4ed6\u64cd\u4f5c\u4e86\uff0c\u5feb\u53bb\u4f53\u9a8c\u5427\uff0c\u6709\u4ec0\u4e48\u95ee\u9898\u53ef\u4ee5\u5173\u6ce8\u6211\u7684\u516c\u4f17\u53f7\u6765\u63d0\u95ee\u3002"},onBack:function(){return cc.director.loadScene("WelcomeDialog")},update:function(t){}})}.call(this),cc._RF.pop()},{}],OwnStocksDialog:[function(t,e,n){"use strict";cc._RF.push(e,"99f90cUlH1KSqWdr830GD97","OwnStocksDialog"),function(){var e;e=t("../common/Utils"),cc.Class({extends:cc.Component,properties:{m_own_stock_prefab:cc.Prefab,m_own_stocks_content:cc.Node},onLoad:function(){return"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("ownStock"),this._showAllStocks()},_initOwnStockInfo:function(t,e){return cc.find("name",t).getComponent(cc.Label).string=e.stockName,cc.find("num",t).getComponent(cc.Label).string=e.num,cc.find("price",t).getComponent(cc.Label).string=e.price},_showAllStocks:function(){var t,n,o,c,i,r;for(c=[],e.triggerEvent("getOwnStocks",function(t){return c=t}),r=cc.instantiate(this.m_own_stock_prefab),this.m_own_stocks_content.addChild(r),this._initOwnStockInfo(r,{stockName:"\u540d\u79f0",num:"\u6570\u91cf",price:"\u6210\u672c\u4ef7\u683c"}),n=0,o=c.length;n<o;n++)i=c[n],r=cc.instantiate(this.m_own_stock_prefab),this.m_own_stocks_content.addChild(r),this._initOwnStockInfo(r,i),t=cc.find("touch",r).getComponent(cc.Button),this._addTouchEvent(t,i.stockCode)},_addTouchEvent:function(t,e){var n;return(n=new cc.Component.EventHandler).target=this.node,n.component="OwnStocksDialog",n.handler="onTouchItem",n.customEventData=e,t.getComponent(cc.Button).clickEvents.push(n)},onTouchItem:function(t,n){var o;return o=n,this._onExchangeStockCode=o,e.setDataOnNode({stockCode:o,type:"sale"}),e.triggerEvent("showExchangeDialog")},onClose:function(){return cc.director.loadScene("game")}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils"}],Record:[function(t,e,n){"use strict";cc._RF.push(e,"c0571UcoHlED7JpJIq7em3J","Record"),function(){cc.Class({extends:cc.Component,properties:{},onLoad:function(){return cc.game.addPersistRootNode(this.node)},setData:function(t){return this._data=t},getData:function(){return this._data}})}.call(this),cc._RF.pop()},{}],StockData:[function(t,e,n){"use strict";cc._RF.push(e,"cd330Cu+h9CIoQjhoD900Zs","StockData"),function(){var t;t=function(){function t(t){this._info=t,this.reset()}return t.prototype.reset=function(){return this._data={name:this._info.name,price:this._info.price,PE:this._info.PE,peWave:0,dividend:0,desc:"",price:0,priceWave:0}},t.prototype.getName=function(){return this._data.name},t.prototype.getPrice=function(){return this._data.price},t.prototype.setPrice=function(t){return t<1&&(t=1),this._data.price=t},t.prototype.getPriceWave=function(){return this._data.priceWave},t.prototype.setPriceWave=function(t){return this._data.priceWave=t},t.prototype.getPE=function(){return this._data.PE},t.prototype.setPE=function(t){return this._data.PE=t},t.prototype.getPEWave=function(){return this._data.peWave},t.prototype.setPEWave=function(t){return this._data.peWave=t},t.prototype.getOriginPE=function(){return this._info.PE},t.prototype.getDividend=function(){return this._data.dividend},t.prototype.setDividend=function(t){return this._data.dividend=t},t.prototype.save=function(){return this._data},t.prototype.load=function(t){return this._data=t},t}(),e.exports=t}.call(this),cc._RF.pop()},{}],UserData:[function(t,e,n){"use strict";cc._RF.push(e,"4cbf7DYlylLo4kYOAa+G12x","UserData"),function(){var t;t=function(){function t(){this.reset()}return t.prototype.getYear=function(){return this._data.year},t.prototype.addYear=function(){return this._data.year+=1},t.prototype.getMoney=function(){return this._data.money},t.prototype.setMoney=function(t){return this._data.money=t},t.prototype.getOwnStocks=function(){return this._data.ownStocks},t.prototype.setOwnStocks=function(t){return this._data.ownStocks=t},t.prototype.reset=function(){return this._data={name:"",year:0,money:1e6,ownStocks:[]}},t.prototype.save=function(){return this._data},t.prototype.load=function(t){return this._data=t},t}(),e.exports=t}.call(this),cc._RF.pop()},{}],Utils:[function(t,e,n){"use strict";cc._RF.push(e,"81c4722ILxLYJM0YaBlt0t/","Utils"),function(){var t;t={bindEvent:function(t,e){return cc.director.getScene().getChildByName("LogicNode").on(t,e)},triggerEvent:function(t,e){return cc.director.getScene().getChildByName("LogicNode").emit(t,e)},getDataFromNode:function(){return cc.director.getScene().getChildByName("RecordNode").getComponent("Record").getData()},setDataOnNode:function(t){return cc.director.getScene().getChildByName("RecordNode").getComponent("Record").setData(t)},formatNum:function(t){return(t+"").replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,")},setItem:function(t,e){return cc.sys.localStorage.setItem(t,JSON.stringify(e))},getItem:function(t){try{return JSON.parse(cc.sys.localStorage.getItem(t))}catch(t){}}},e.exports=t}.call(this),cc._RF.pop()},{}],WelcomeDialog:[function(t,e,n){"use strict";cc._RF.push(e,"44e0eRsENZBtKAXPR8xyDfM","WelcomeDialog"),function(){var e;e=t("../common/Utils"),cc.Class({extends:cc.Component,properties:{m_high_score:cc.Label},onLoad:function(){var t,n;return this._isFinish=e.getItem("gameFinish")||!1,t=e.getItem("highScore")||0,this.m_high_score.string="\u6700\u597d\u6210\u7ee9: "+e.formatNum(t),"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onPageLeave(),null!=(n=cc.debug)&&"function"==typeof n.setDisplayStats&&n.setDisplayStats(!1),console.log("isFinish:"+this._isFinish)},onBegin:function(){return"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("begin"),!0===this._isFinish&&(e.triggerEvent("resetGame"),e.triggerEvent("selectKLine"),e.setItem("gameFinish",!1)),cc.director.loadScene("game")},onReset:function(){return"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("reset"),e.triggerEvent("resetGame")},onHelp:function(){return cc.director.loadScene("HelpDialog")},update:function(t){}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils"}],game:[function(t,e,n){"use strict";cc._RF.push(e,"ec5035Y1StP5K4HK7nqjpm/","game"),function(){var e,n;e=t("../config/stockInfo"),n=t("../common/Utils"),cc.Class({extends:cc.Component,properties:{m_content:cc.Node,m_stock_prefab:cc.Prefab,m_year:cc.Label,m_money:cc.Label,m_stock_money:cc.Label,m_last_year:cc.Label,m_tips_Label:cc.Label},onLoad:function(){return this._stockPanelTable=[],this._updateYear(),this._updateMoney(),this._initStockPanel(),this._updateStockInfo(),this._setCount(),this._showDividendInfo()},_setCount:function(){var t;return t=n.getItem("playCount")||0,n.setItem("playCount",t+1)},_initTips:function(t){return this.m_tips_Label.string=t},_updateMoney:function(){var t,e;return e=0,t=0,n.triggerEvent("getMoney",function(n){var o,c;return o=n.money,c=n.stockMoney,e=o,t=c}),this.m_money.string="\u6e38\u620f\u5e01: "+n.formatNum(e),this.m_stock_money.string="\u5e02\u503c: "+n.formatNum(t)},_initStockPanel:function(){var t,n,o;for(n in e)e[n],o=cc.instantiate(this.m_stock_prefab),this.m_content.addChild(o),this._stockPanelTable.push(o),t=cc.find("touch",o),this._addTouchEvent(t,n)},_initName:function(t,e){var o;return o=cc.find("infoNode/name",this._stockPanelTable[e]).getComponent(cc.Label),n.triggerEvent("getStockName",{stockCode:t,callback:function(t){return o.string=t}})},_initPrice:function(t,e){var o;return o=cc.find("infoNode/price",this._stockPanelTable[e]).getComponent(cc.Label),n.triggerEvent("getStockPrice",{stockCode:t,callback:function(t){return o.string="\u5e02\u4ef7: "+t}})},_initPE:function(t,e){var o;return o=cc.find("infoNode/pe",this._stockPanelTable[e]).getComponent(cc.Label),n.triggerEvent("getStockPE",{stockCode:t,callback:function(t){return o.string="PE: "+t}})},_initDesc:function(t,e){var o,c;return c=cc.find("infoNode/desc",this._stockPanelTable[e]),o=c.getComponent(cc.Label),n.triggerEvent("getStockPriceWave",{stockCode:t,callback:function(t){var e;return e="",t<-50?(e="\u4e1a\u7ee9\u5927\u5e45\u4e0b\u964d",o.node.color=cc.Color.GREEN):100>t&&t>50?(e="\u4e1a\u7ee9\u5927\u5e45\u63d0\u5347",o.node.color=cc.Color.RED):1001===t?(e="\u4e45\u7b49\u4e86\uff0c\u5747\u503c\u56de\u5f52",o.node.color=cc.Color.MAGENTA):1002===t&&(e="\u4eba\u6c14\u5206\u6563\uff0cPE\u56de\u5f52",o.node.color=cc.Color.CYAN),o.string=e}})},_updateStockInfo:function(){var t,o;for(t in-1,n.triggerEvent("getYear",function(t){return t}),o=0,e)e[t],this._initName(t,o),this._initPrice(t,o),this._initPE(t,o),this._initDesc(t,o),o++},_addTouchEvent:function(t,e){var n;return(n=new cc.Component.EventHandler).target=this.node,n.component="game",n.handler="onTouchItem",n.customEventData=e,t.getComponent(cc.Button).clickEvents.push(n)},onTouchItem:function(t,e){var o;return console.log("customEventData:"+JSON.stringify(e)),o=e,this._onExchangeStockCode=o,n.setDataOnNode({stockCode:o,type:"buy"}),n.triggerEvent("showExchangeDialog")},_updateYear:function(){var t;return t=-1,n.triggerEvent("getYear",function(e){return t=e}),this.m_year.string="\u5e74\u4efd: "+(t+2019),this.m_last_year.string="\u8fd8\u5269 "+(50-t)+" \u5e74"},onNextYear:function(){var t;if("undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("nextYear"),t=!1,n.triggerEvent("nextYear",function(e){return t=e}),t)return this._showDividendInfo(),this._updateYear(),this._updateMoney(),this._updateStockInfo()},_showDividendInfo:function(){var t,e;return t=0,n.triggerEvent("getDividendMoney",function(e){return t=e}),e=t>0?"\u80a1\u7968\u5206\u7ea2\uff0c\u83b7\u5f97: "+n.formatNum(t)+"\u5143":-1===t?"\u4eca\u5e74\u516c\u53f8\u4e0d\u5206\u7ea2\uff0c\u5177\u4f53\u539f\u56e0\u8bf7\u770b\u516c\u544a":"\u6709\u80a1\u7968\u624d\u6709\u5206\u7ea2\u54e6",this._initTips(e)},onOpenOwnStock:function(){return n.triggerEvent("openMyStockDialog")},onExit:function(){var t,e;return e=0,t=0,n.triggerEvent("getMoney",function(n){var o,c;return o=n.money,c=n.stockMoney,e=o,t=c}),"undefined"!=typeof TDGA&&null!==TDGA&&TDGA.onEvent("gameReturn",{currentMoney:e+t+""}),cc.director.loadScene("WelcomeDialog")}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils","../config/stockInfo":"stockInfo"}],logic:[function(t,e,n){"use strict";cc._RF.push(e,"31d45sv0B9OqpK/+m//J70n","logic"),function(){var e,n,o,c,i;n=t("../model/StockData"),o=t("../config/stockInfo"),c=t("../model/UserData"),i=t("../common/Utils"),e=[[1,6,6,7,7,6,6,10,20,50,60,100,150,-20,-10,-30,6,6,6,7,8,-5,5,-5,6,-20,-10,10,10,30,50,60,90,200,300,10,20,-10,-20,30,-20,5,6,7,9,10,-20,-10,90,-30,80],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,-5,-5,-10,10,-5,-3,-3,-3,-3,-3,-5,-5,-10,10,-5,-3,-3,-3,-3,-3,-5,-5,-10,10,-5,-3,-3,-3,-3,-3,-5,-5,-10,10,-5,-3,-3,-3,-3,-3,-5,-5,-10,10,-5,-3,-3,-3,-3,-3],[1,6,6,6,6,6,6,10,15,6,6,-6,-6,-6,-6,-6,-6,-10,-15,-6,-6,6,6,6,6,6,6,10,15,6,6,-6,-6,-6,-6,-6,-6,-10,-15,-6,-6,6,6,6,6,6,6,10,15,6,6],[1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]],cc.Class({extends:cc.Component,onLoad:function(){return this._userData=new c,this._loadUserData(),this._registerEventListener(),this._initStockInfo(),this._loadStockData(),this._kLineIndex=0,this._dividendMoney=0,cc.game.addPersistRootNode(this.node)},_loadUserData:function(){var t,e;return t=this._userData.save(),e=i.getItem("user.data.key")||t,this._userData.load(e)},_loadStockData:function(){var t,e,n,o,c;for(e in n=this._allStockDataObj)t=(c=n[e]).save(),o=i.getItem("stock.data.key"+e)||t,c.load(o)},_registerEventListener:function(){return i.bindEvent("buyStock",function(t){return function(e){var n,o,c,i,r,a,s,u,d,l,f,g,_;if(f=e.stockCode,o=(u=e.num)*(d=(g=t._allStockDataObj[f]).getPrice()),_=g.getName(),(c=t._userData.getMoney())>=o){for(n=c-o,t._userData.setMoney(n),a=!1,r=0,s=(i=t._userData.getOwnStocks()).length;r<s;r++)if((l=i[r]).stockName===_){a=!0,d=(l.num*l.price+u*d)/(l.num+u)*100,l.price=Math.floor(d/100),l.num+=u;break}!1===a&&i.push({stockCode:f,stockName:_,num:u,price:d}),t._userData.setOwnStocks(i),t._saveUserData()}return console.log("msg : "+JSON.stringify({stockName:_,num:u,price:d}))}}(this)),i.bindEvent("nextYear",function(t){return function(n){var o,c,i;return i=t._userData.getYear(),1===t._randomInt(1,10)?c=!0:5===t._randomInt(1,10)&&(o=!0),i<e[t._kLineIndex].length-1?(t._userData.addYear(),t._updateStockData(c,o),t._dividendMoney=t._dividend(),t._saveUserData(),t._saveStockData(),n(!0)):(n(!1),cc.director.loadScene("EndDialog"))}}(this)),i.bindEvent("getOwnStockNum",function(t){return function(e){var n;return n=e.stockCode,(0,e.callback)(t._getStockNum(n))}}(this)),i.bindEvent("saleStock",function(t){return function(e){var n,o,c,i;if(i=e.stockCode,c=e.num,!(t._getStockNum(i)<c))return o=c*t._allStockDataObj[i].getPrice(),n=t._userData.getMoney()+o,t._userData.setMoney(n),t._delStockNum(i,c)}}(this)),i.bindEvent("getMoney",function(t){return function(e){var n,o,c,i,r,a,s;for(i=Math.floor(t._userData.getMoney()),a=0,o=0,c=(n=t._userData.getOwnStocks()).length;o<c;o++)r=n[o],s=t._getStockPriceByStockCode(r.stockCode),a+=r.num*s;return e({money:i,stockMoney:a=Math.floor(a)})}}(this)),i.bindEvent("getStockPrice",function(t){return function(e){var n,o;return n=e.callback,o=e.stockCode,n(t._getStockPriceByStockCode(o))}}(this)),i.bindEvent("getStockPE",function(t){return function(e){var n,o;return n=e.callback,o=e.stockCode,n(t._allStockDataObj[o].getPE())}}(this)),i.bindEvent("getStockName",function(t){return function(e){var n,o;return n=e.callback,o=e.stockCode,n(t._allStockDataObj[o].getName())}}(this)),i.bindEvent("getStockPriceWave",function(t){return function(e){var n,o;return n=e.callback,o=e.stockCode,n(t._allStockDataObj[o].getPriceWave())}}(this)),i.bindEvent("showExchangeDialog",function(){return cc.director.loadScene("ExchangePanel")}),i.bindEvent("getYear",function(t){return function(e){return e(t._userData.getYear())}}(this)),i.bindEvent("openMyStockDialog",function(){return cc.director.loadScene("OwnStocksDialog")}),i.bindEvent("getOwnStocks",function(t){return function(e){return e(t._userData.getOwnStocks())}}(this)),i.bindEvent("resetGame",function(t){return function(){var e,n,o,c,r,a;for(n in t._userData.reset(),t._saveUserData(),o=t._allStockDataObj)a=o[n],i.setItem("stock.data.key"+n,null);for(n in t._initStockInfo(),c=t._allStockDataObj)e=(a=c[n]).save(),r=i.getItem("stock.data.key"+n)||e,a.load(r)}}(this)),i.bindEvent("selectKLine",function(t){return function(){var e;return e=i.getItem("playCount")||0,t._kLineIndex=0===e?0:t._randomInt(0,4)}}(this)),i.bindEvent("getKline",function(t){return function(e){return e(t._kLineIndex)}}(this)),i.bindEvent("getDividendMoney",function(t){return function(e){return e(t._dividendMoney)}}(this))},_dividend:function(){var t,e,n,o,c,i,r,a,s,u,d,l;if(this._randomInt(1,10)<=2)return-1;for(l=0,c=0,i=(e=this._userData.getOwnStocks()).length;c<i;c++)d=e[c],s=(n=(u=this._allStockDataObj[d.stockCode]).getDividend())*u.getPrice(),l+=o=Math.floor(d.num*s*100)/100,a=u.getPrice(),u.setPrice(Math.floor(100*(a-s))/100),r=this._userData.getMoney(),this._userData.setMoney(r+o),t=u.getPE(),t=Math.floor(t*(1-n)*100)/100,u.setPE(t);return l=Math.floor(l)},_delStockNum:function(t,e){var n,o,c,i,r,a,s;for(s=null,c=o=0,i=(a=this._userData.getOwnStocks()).length;o<i;c=++o)if(t===(r=a[c]).stockCode){s=r;break}return 0===(n=s.num-e)?a.splice(c,1):s.num=n},_getStockNum:function(t){var e,n,o,c;for(e=0,n=(c=this._userData.getOwnStocks()).length;e<n;e++)if(t===(o=c[e]).stockCode)return o.num;return 0},_getStockPriceByStockCode:function(t){return this._allStockDataObj[t].getPrice()},_randomInt:function(t,e){return Math.floor(Math.random()*(e-t+1))+t},_updateStockData:function(t,n){var o,c,i,r,a,s,u,d,l,f,g,_,h,m,p;for(u in p=this._userData.getYear(),a=e[this._kLineIndex][p],_=this._allStockDataObj)h=_[u],!0===t||!0===n?(m=0,!0===t&&(m=30,h.setPriceWave(1001)),!0===n&&(m=h.getOriginPE(),h.setPriceWave(1002)),c=((m+=this._randomInt(-2,2))-(o=h.getPE()))/o,l=h.getPrice(),r=Math.floor(l*(1+c)*100)/100,h.setPrice(r),h.setPE(m)):(l=h.getPrice(),f=this._randomInt(-60,100),h.setPriceWave(f),g=this._randomInt(-f,f),r=Math.floor(((g+a)/100+1)*l*100),r/=100,h.setPrice(r),o=h.getPE(),s=g+a,d=h.getPEWave(),i=Math.floor((s*(1-d)/100+1)*o*100)/100,h.setPE(i))},_saveUserData:function(){var t;return t=this._userData.save(),i.setItem("user.data.key",t)},_saveStockData:function(){var t,e,n;for(e in n=this._allStockDataObj)t=n[e].save(),i.setItem("stock.data.key"+e,t)},_setItem:function(t,e){return cc.sys.localStorage.setItem(t,JSON.stringify(e))},_getItem:function(t){try{return JSON.parse(cc.sys.localStorage.getItem(t))}catch(t){}},_initStockInfo:function(){var t,e,c,i,r,a,s;for(e in this._allStockDataObj={},o)s=o[e],a=new n(s),i=this._randomInt(1,10)/10,a.setPEWave(i),t=this._randomInt(1,10)/100,a.setDividend(t),r=this._randomInt(10,200),a.setPrice(r),c=this._randomInt(5,100),a.setPE(c),this._allStockDataObj[e]=a}})}.call(this),cc._RF.pop()},{"../common/Utils":"Utils","../config/stockInfo":"stockInfo","../model/StockData":"StockData","../model/UserData":"UserData"}],stockInfo:[function(t,e,n){"use strict";cc._RF.push(e,"2d2abomVUlH2oKUekzADAPr","stockInfo"),function(){e.exports={"001":{name:"\u7a7a\u8c03",PE:12},"002":{name:"\u767d\u9152",PE:30},"003":{name:"\u6c7d\u8f66",PE:16},"004":{name:"\u5236\u836f",PE:60},"005":{name:"\u7535\u89c6",PE:30},"006":{name:"\u5730\u4ea7",PE:12},"007":{name:"\u6e38\u620f",PE:35},"008":{name:"\u7f51\u8d2d",PE:30},"009":{name:"\u4fdd\u9669",PE:15},"010":{name:"\u94f6\u884c",PE:10}}}.call(this),cc._RF.pop()},{}]},{},["Record","Utils","stockInfo","logic","StockData","UserData","EndDialog","ExchangePanel","HelpDialog","OwnStocksDialog","WelcomeDialog","game"]);