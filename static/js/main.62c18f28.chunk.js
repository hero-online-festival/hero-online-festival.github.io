(this["webpackJsonphero-online-festival.github.io"]=this["webpackJsonphero-online-festival.github.io"]||[]).push([[1],{29:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return i}));var c=t(13),r=Object(c.b)({name:"mbti",initialState:{scores:[0,0,0,0]},reducers:{updateMBTIAnswer:function(e,n){switch(n.payload.questionIdx){case 0:case 3:case 9:e.scores[0]+=n.payload.answer;break;case 5:case 7:case 10:e.scores[1]+=n.payload.answer;break;case 1:case 2:case 8:e.scores[2]+=n.payload.answer;break;case 4:case 6:case 11:e.scores[3]+=n.payload.answer}},initMBTIAnswer:function(e,n){e.scores.map((function(n,t){e.scores[t]=0}))}}}),a=r.actions,s=a.updateMBTIAnswer,i=a.initMBTIAnswer;n.a=r.reducer},30:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return i}));var c=t(13),r=Object(c.b)({name:"trend",initialState:{answers:[0,0,0,0,0,0,0,0,0,0,0,0]},reducers:{updateTrendAnswer:function(e,n){e.answers[n.payload.questionIdx]=n.payload.answer},initTrendAnswer:function(e,n){e.answers.map((function(n,t){e.answers[t]=0}))}}}),a=r.actions,s=a.updateTrendAnswer,i=a.initTrendAnswer;n.a=r.reducer},41:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c,r=t(0),a=t.n(r),s=t(16),i=t.n(s),o=t(26),u=t(19),d=t(27),b=t(2),l=t(31),j=t.n(l),f=t(3),h=function(e){return j()({loader:e,loading:function(){return Object(f.jsx)(f.Fragment,{})}})},p=h((function(){return t.e(7).then(t.bind(null,52))})),x=h((function(){return t.e(6).then(t.bind(null,53))})),w=h((function(){return t.e(4).then(t.bind(null,55))})),m=h((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,56))})),O=h((function(){return t.e(5).then(t.bind(null,57))})),g=h((function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,58))})),T=(t(41),Object(u.b)(c||(c=Object(o.a)(["\n  body {\n    width: 100%;\n    height: 100vh;\n    margin: auto;\n    background-color: #f2f0f0;\n  }\n"])))),y=function(){return Object(f.jsxs)(d.a,{children:[Object(f.jsx)(u.a,{styles:T}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/",component:p}),Object(f.jsx)(b.a,{exact:!0,path:"/main",component:x}),Object(f.jsx)(b.a,{exact:!0,path:"/mbti/:idx",component:w}),Object(f.jsx)(b.a,{exact:!0,path:"/result/mbti",component:m}),Object(f.jsx)(b.a,{exact:!0,path:"/trend/:idx",component:O}),Object(f.jsx)(b.a,{exact:!0,path:"/result/trend",component:g})]})]})},I=function(e){e&&e instanceof Function&&t.e(10).then(t.bind(null,54)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},A=t(28),v=t(13),B=t(9),k=t(29),M=t(30),F=Object(B.b)({MBTIReducer:k.a,TrendReducer:M.a}),P=Object(v.a)({reducer:F});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(A.a,{store:P,children:Object(f.jsx)(y,{})})}),document.getElementById("root")),I()}},[[45,2,3]]]);
//# sourceMappingURL=main.62c18f28.chunk.js.map