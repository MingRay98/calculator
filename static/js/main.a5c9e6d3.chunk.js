(this["webpackJsonpcalculate-bootsrap"]=this["webpackJsonpcalculate-bootsrap"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),_component_DisplayBlock__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_component_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),App=function(_React$Component){function App(props){var _this;return Object(C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=Object(C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,props)),_this.checkOverFloat=function(){return _this.state.displaytext.toString().length>=12&&(alert("OverFlow"),!0)},_this.lastCharIsNaN=function(){var e=_this.state.displaytext.toString(),t=e.charAt(e.length-1);return isNaN(t)},_this.handleNumClick=function(e){var temp=e.target.value,dispStr=_this.state.displaytext.toString();if("true"===_this.state.strictMode&&"0"===dispStr.charAt(dispStr.length-1)&&Number(temp)&&dispStr.length>2)return alert("\u904b\u7b97\u7b26\u865f\u5f8c\u76840\u53ea\u80fd\u52a0\u5c0f\u6578\u9ede");if(!0!==isNaN(temp)||!0!==_this.lastCharIsNaN()){if(isNaN(temp))if("."===temp)try{isNaN(eval(_this.state.displaytext+"."))}catch(e){return alert("\u96d9\u91cd\u9ede\u6578\u9ede")}else _this.state.strictMode="true";if(!1===isNaN(temp)&&"0"!==temp&&(_this.state.strictMode="false"),!0!==_this.checkOverFloat()&&("0"!==temp||"0"!==_this.state.displaytext))if("%"!==temp)"0"===_this.state.displaytext&&!1===isNaN(temp)?_this.setState({displaytext:temp}):_this.setState({displaytext:_this.state.displaytext+temp}),console.log(e.target.value);else{var _temp=eval(_this.state.displaytext)/100;_this.setState({displaytext:Number(_temp.toFixed(10)).toString()})}}},_this.handleDelete=function(){var e=_this.state.displaytext.toString().slice(0,-1);1===_this.state.displaytext.toString().length?_this.setState({displaytext:"0"}):_this.setState({displaytext:e})},_this.handleClear=function(){_this.setState({displaytext:"0"})},_this.handleCalculate=function(){var temp=eval(_this.state.displaytext.toString());1==temp.toString().indexOf(".")&&(temp=Number(parseFloat(temp).toFixed(10))),_this.setState({displaytext:temp.toString()})},_this.state={displaytext:"0",strictMode:"false"},_this}return Object(C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component),Object(C_Users_MingRay_Hsu_calculate_bootsrap_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{alignContent:"center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"FirstContainer"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_DisplayBlock__WEBPACK_IMPORTED_MODULE_7__.a,{Component:this.state.displaytext}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_component_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{handleCalculate:this.handleCalculate,handleClear:this.handleClear,handleDelete:this.handleDelete,handleNumClick:this.handleNumClick})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},function(e,t,a){"use strict";var _=a(1),s=a(2),l=a(4),n=a(3),r=a(5),i=a(0),c=a.n(i),o=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(l.a)(this,Object(n.a)(t).call(this,e))).state={},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"DisplayBlock"},this.props.Component)}}]),t}(i.Component);t.a=o},function(e,t,a){"use strict";var _=a(1),s=a(2),l=a(4),n=a(3),r=a(5),i=a(0),c=a.n(i),o=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(l.a)(this,Object(n.a)(t).call(this,e))).btnStyle={borderRadius:"5rem",backgroundColor:"rgb(255, 123, 0)"},a.state={},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"OperationTopBtn"},c.a.createElement("button",{className:"Btn",onClick:this.props.handleClear,style:{borderRadius:"5rem",backgroundColor:"white",color:"red"}},"C"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"%",style:this.btnStyle},"%"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"/",style:this.btnStyle},"/"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"*",style:this.btnStyle},"X")),c.a.createElement("div",{className:"SecondContainer"},c.a.createElement("div",{className:"NumBtnDiv"},c.a.createElement("div",{className:"NumBtnInColumn"},c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"1"},"1"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"2"},"2"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"3"},"3")),c.a.createElement("div",{className:"NumBtnInColumn"},c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"4"},"4"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"5"},"5"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"6"},"6")),c.a.createElement("div",{className:"NumBtnInColumn"},c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"7"},"7"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"8"},"8"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"9"},"9")),c.a.createElement("div",{className:"NumBtnInColumn"},c.a.createElement("button",{onClick:this.props.handleDelete,style:{backgroundColor:"rgb(52, 56, 106)",borderRadius:"5rem",border:"none",width:"95%"}},"\u2190"),c.a.createElement("button",{onClick:this.props.handleNumClick,className:"Btn",value:"0"},"0"),c.a.createElement("button",{onClick:this.props.handleNumClick,className:"Btn",value:"."},"\uff0e"))),c.a.createElement("div",{className:"OperationRigthBtn"},c.a.createElement("div",{className:"OperationRigthBtnPM"},c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"+",style:this.btnStyle},"+"),c.a.createElement("button",{className:"Btn",onClick:this.props.handleNumClick,value:"-",style:this.btnStyle},"-")),c.a.createElement("button",{className:"BigEnter",onClick:this.props.handleCalculate},"="))))}}]),t}(i.Component);t.a=o},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var _=a(0),s=a.n(_),l=a(7),n=a.n(l),r=(a(16),a(8));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);n.a.render(s.a.createElement(r.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.a5c9e6d3.chunk.js.map