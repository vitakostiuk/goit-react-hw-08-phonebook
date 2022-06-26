(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{9597:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(885),a=n(2791),s=n(9434),o=n(7619),u=n(6429),c=n.n(u),i=n(4403),l=n(3329),m=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],m=(0,a.useState)(""),d=(0,r.Z)(m,2),p=d[0],h=d[1],f=c().generate(),x=c().generate(),b=(0,s.I0)(),g=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":u(r);break;case"number":h(r);break;default:return}};return(0,l.jsxs)("form",{className:i.Z.ContactForm,onSubmit:function(e){e.preventDefault(),b((0,o.uK)({name:n,number:p})),u(""),h("")},children:[(0,l.jsxs)("div",{className:i.Z.InputWrapper,children:[(0,l.jsx)("label",{className:i.Z.Label,htmlFor:f,children:"Name"}),(0,l.jsx)("input",{id:f,className:i.Z.Input,type:"text",name:"name",value:n,onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("div",{className:i.Z.InputWrapper,children:[(0,l.jsx)("label",{className:i.Z.Label,htmlFor:x,children:"Number"}),(0,l.jsx)("input",{id:x,className:i.Z.Input,type:"tel",name:"number",value:p,onChange:g,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{type:"submit",className:i.Z.FormBtn,children:"Add contact"})]})}},8814:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(2791),a=n(9434),s=n(9368),o=n(7619),u=n(885),c=n(6856),i=n(6429),l=n.n(i),m="EditForm_ContactForm__g730m",d="EditForm_InputWrapper__gAbKr",p="EditForm_Label__a5rou",h="EditForm_Input__Tk3iF",f="EditForm_FormBtn__Ibl1L",x="EditForm_CloseBtn__hY9PD",b=n(3329),g=function(e){var t=e.nameForEdit,n=e.numberForEdit,s=e.id,i=e.toggleModal,g=(0,r.useState)(t),v=(0,u.Z)(g,2),_=v[0],j=v[1],N=(0,r.useState)(n),C=(0,u.Z)(N,2),F=C[0],Z=C[1],w=l().generate(),I=l().generate(),k=(0,a.I0)(),y=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":j(r);break;case"number":Z(r);break;default:return}};return(0,b.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault();var t={name:_,number:F,id:s};k((0,o.mP)(t)),i()},children:[(0,b.jsx)("div",{className:d,children:(0,b.jsxs)("label",{className:p,htmlFor:w,children:["Name",(0,b.jsx)("input",{id:w,className:h,type:"text",name:"name",value:_,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),(0,b.jsx)("div",{className:d,children:(0,b.jsxs)("label",{className:p,htmlFor:I,children:["Number",(0,b.jsx)("input",{id:I,className:h,type:"tel",name:"number",value:F,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),(0,b.jsx)("button",{type:"submit",className:f,children:"Edit contact"}),(0,b.jsx)("button",{className:x,onClick:i,children:(0,b.jsx)(c.FU5,{size:"24"})})]})},v=n(7872),_={List:"ContactList_List__gG+lN",Item:"ContactList_Item__Yiq5T",Btn:"ContactList_Btn__IP20b",WrapperBtn:"ContactList_WrapperBtn__39bvR"},j=function(e){var t=e.contacts,n=e.onDeleteContact,a=(0,r.useState)(!1),s=(0,u.Z)(a,2),o=s[0],c=s[1],i=(0,r.useState)(),l=(0,u.Z)(i,2),m=l[0],d=l[1],p=(0,r.useState)(),h=(0,u.Z)(p,2),f=h[0],x=h[1],j=(0,r.useState)(),N=(0,u.Z)(j,2),C=N[0],F=N[1],Z=function(e,t,n){return d(n),x(t),F(e),c(!o)};return(0,b.jsxs)(b.Fragment,{children:[t.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,b.jsxs)("li",{children:[(0,b.jsxs)("div",{className:_.Item,children:[(0,b.jsx)("span",{children:r}),(0,b.jsx)("span",{className:_.Number,children:a})]}),(0,b.jsxs)("div",{className:_.WrapperBtn,children:[(0,b.jsx)("button",{type:"button",className:_.Btn,onClick:function(){return n(t)},children:"Delete"}),(0,b.jsx)("button",{type:"button",className:_.Btn,onClick:function(){return Z(t,a,r)},children:"Edit"})]})]},t)})),o&&(0,b.jsx)(v.Z,{children:(0,b.jsx)(g,{toggleEditForm:Z,toggleModal:function(){c(!o)},nameForEdit:m,numberForEdit:f,id:C})})]})};var N=function(){var e=(0,a.v9)(s.u.LP),t=(0,a.I0)();(0,r.useEffect)((function(){t((0,o.K2)())}),[t]);var n=(0,a.v9)((function(e){return function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(e.phonebook.contacts,e.phonebook.filter)}));return(0,b.jsx)("ul",{className:_.List,children:e&&(0,b.jsx)(j,{contacts:n,onDeleteContact:function(e){return t((0,o.GK)(e))}})})},C=n(9597),F=n(6694),Z=n(4403),w=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.phonebook.filter}));return(0,b.jsxs)("div",{className:Z.Z.InputWrapper,children:[(0,b.jsx)("label",{className:Z.Z.Label,htmlFor:l().generate(),children:"Find contacts by name"}),(0,b.jsx)("input",{type:"text",value:t,id:l().generate(),className:Z.Z.Input,onChange:function(t){return e((0,F.M)(t.currentTarget.value))}})]})},I={},k=function(e){var t=e.toggleModal;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h2",{className:I.Title,children:"Phonebook"}),(0,b.jsx)(C.Z,{}),(0,b.jsx)("h2",{className:I.Title,children:"Contacts"}),(0,b.jsx)(w,{}),(0,b.jsx)(N,{toggleModal:t})]})}},6429:function(e,t,n){"use strict";e.exports=n(5274)},8857:function(e,t,n){"use strict";var r,a,s,o=n(5408),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){s=!1}function i(e){if(e){if(e!==r){if(e.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,c()}}else r!==u&&(r=u,c())}function l(){return s||(s=function(){r||i(u);for(var e,t=r.split(""),n=[],a=o.nextValue();t.length>0;)a=o.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||u},characters:function(e){return i(e),r},seed:function(e){o.seed(e),a!==e&&(c(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},7098:function(e,t,n){"use strict";var r,a,s=n(2226);n(8857);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=s(7),t+=s(e),r>0&&(t+=s(r)),t+=s(n)}},2226:function(e,t,n){"use strict";var r=n(8857),a=n(9139),s=n(2483);e.exports=function(e){for(var t,n=0,o="";!t;)o+=s(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return o}},5274:function(e,t,n){"use strict";var r=n(8857),a=n(7098),s=n(6046),o=n(5347)||0;function u(){return a(o)}e.exports=u,e.exports.generate=u,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=s},6046:function(e,t,n){"use strict";var r=n(8857);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},9139:function(e){"use strict";var t,n="object"===typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},5408:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},5347:function(e){"use strict";e.exports=0},2483:function(e){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),s="";;)for(var o=e(a),u=a;u--;)if((s+=t[o[u]&r]||"").length===+n)return s}},4403:function(e,t){"use strict";t.Z={ContactForm:"ContactForm_ContactForm__QuT-m",InputWrapper:"ContactForm_InputWrapper__xYPub",Label:"ContactForm_Label__ykus5",Input:"ContactForm_Input__+bOEZ",FormBtn:"ContactForm_FormBtn__qtcqm"}}}]);
//# sourceMappingURL=ContactsPage.03275e6c.chunk.js.map