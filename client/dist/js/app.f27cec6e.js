(function(t){function e(e){for(var a,n,r=e[0],d=e[1],l=e[2],m=0,u=[];m<r.length;m++)n=r[m],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var d=s[r];0!==o[d]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"0b13":function(t,e,s){"use strict";var a=s("c185"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n={name:"App"},r=n,d=(s("034f"),s("2877")),l=Object(d["a"])(r,o,i,!1,null,null,null),c=l.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards container-fluid"},[s("home-top"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},t._l(t.boards,(function(e){return s("div",{key:e._id,staticClass:"card bg-dark m-1 text-light"},[s("div",{staticClass:"card-header text-center"},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[s("h3",{},[t._v(t._s(e.title))])]),t._v(" "),s("i",{staticClass:"fa fa-close",on:{click:function(s){t.deleteBoard(e._id)}}})],1)])})))])],1)},p=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top row bg-dark"},[t._m(0),t._v(" "),s("div",{staticClass:"col-6"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description",required:""},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-light btn-lg",attrs:{type:"submit"}},[t._v("Create Board")])])])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6"},[s("h1",{staticClass:"text-white"},[t._v("The Boards")])])}],w={name:"top",data(){return{newBoard:{title:"",description:""}}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}}},b=w,f=Object(d["a"])(b,h,v,!1,null,null,null),g=f.exports,k={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{}},computed:{boards(){return this.$store.state.boards}},methods:{deleteBoard(t){confirm("Are You Sure You Want To Delete This Board?")&&this.$store.dispatch("deleteBoard",t)}},components:{homeTop:g}},_=k,C=(s("c552"),Object(d["a"])(_,u,p,!1,null,"2d44bce9",null)),y=C.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board container-fluid"},[s("top"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[t._v(t._s(t.board.title))]),t._v(" "),s("p",[t._v(t._s(t.board.description))])])]),t._v(" "),s("div",{staticClass:"row"},t._l(t.lists,(function(t){return s("div",{key:t._id,staticClass:"col-3 m-0.5"},[s("list",{attrs:{listData:t}})],1)}))),t._v(" "),t._m(0)],1)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"})])}],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card list bg-dark text-light"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"listTitle"},[t._v(t._s(t.listData.title))]),t._v(" "),s("i",{staticClass:"fa fa-close",on:{click:t.deleteList}}),t._v(" "),s("i",{staticClass:"fa fa-plus",on:{click:t.showModal}})]),t._v(" "),t._l(t.tasks,(function(e,a){return s("ul",{key:a,staticClass:"list-group list-group-flush"},[s("task",{attrs:{taskData:e},on:{passed:t.passTaskId}})],1)})),t._v(" "),t._l(t.tasks,(function(t){return s("modalTwo",{key:t._id,attrs:{id:"comment",taskData:t}})})),t._v(" "),s("modal",{attrs:{id:"modal",name:"listModal"+this.listData.id}},[s("form",{staticClass:"text-center",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[s("label",{attrs:{for:"description"}},[s("h4",{staticClass:"text-dark mt-2"},[t._v("Add A Task")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"description",required:"",name:"description"},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-light text-light bg-dark btn-lg",on:{click:t.hideModal}},[t._v("Create Task")])])])],2)},B=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"task list-group-item text-dark"},[s("h5",{},[t._v(t._s(t.taskData.description))]),t._v(" "),s("i",{staticClass:"fa fa-plus",attrs:{"data-toggle":"modal","data-target":"#comment"},on:{click:t.passTaskData}}),t._v(" "),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}}),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",on:{click:t.deleteTask}},[t._v("Delete")]),t._v(" "),s("span",{staticClass:"dropdown-item-text"},[t._v("Move To")]),t._v(" "),t._l(t.lists,(function(e){return s("a",{key:e.id,staticClass:"dropdown-item",on:{click:function(s){t.moveTask(e.id)}}},[t._v(t._s(e.title))])}))],2)])])},x=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._v("\n  hello\n  "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{type:"text",placeholder:"Add Comment..."},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-dark btn-sm"},[t._v("Add")])]),t._v(" "),t._l(t.comments,(function(e){return s("div",{key:e.id},[t._v(t._s(e.content))])}))],2)},M=[],U={name:"comment",data(){return{newComment:{content:"",taskId:this.taskId}}},mounted(){this.$store.dispatch("getCommentsByTaskId",this.taskId),console.log(this.taskId)},props:["taskId"],computed:{comments(){return this.$store.state.comments[this.taskId]||[]}},methods:{addComment(){let t={...this.newComment};this.$store.dispatch("addComment",t),this.newComment={content:"",taskId:this.taskId}}}},O=U,j=Object(d["a"])(O,L,M,!1,null,null,null),A=j.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",attrs:{id:t.id,tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title text-dark"},[t._v(t._s(t.taskData.description))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"modal-body text-dark"},[s("div",[s("comment",{attrs:{taskId:t.taskData.id}})],1)]),t._v(" "),t._m(1)])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[s("span",[t._v("×")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],N={name:"modalComment",mounted(){this.$store.dispatch("getCommentsByTaskId",this.taskData.id)},data(){return{}},props:["taskData","id"],computed:{comments(){return this.$store.state.comments[this.taskData.id]||[]}},methods:{},components:{comment:A}},R=N,S=Object(d["a"])(R,E,P,!1,null,"5cfa52f2",null),Y=S.exports,F={name:"task",mounted(){},data(){return{newComment:{content:"",taskId:this.taskData.id}}},props:["taskData","listData","commentData"],methods:{deleteTask(){confirm("Are You Sure You Want To Delete This Task?")&&this.$store.dispatch("deleteTask",[this.taskData.id,this.taskData.listId])},moveTask(t){this.$store.dispatch("editTask",[this.taskData.id,this.taskData.listId,t])},addComment(){let t={...this.newComment};this.$store.dispatch("addComment",t),this.newComment={content:"",taskId:this.taskData.id}},showCommentModal(){this.$modal.show("commentModal"+this.taskData.id),this.$modal.show(A)},hideCommentModal(){this.$modal.hide("commentModal"+this.taskData.id)},passTaskData(){this.$emit("passed",this.taskData.id)}},computed:{lists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskData.id]||[]}},components:{comment:A,modalTwo:Y}},q=F,W=(s("0b13"),Object(d["a"])(q,D,x,!1,null,"7185498a",null)),J=W.exports,z={name:"list",mounted(){this.$store.dispatch("getTasksByListId",this.listData.id)},props:["listData"],data(){return{newTask:{description:"",listId:this.listData.id,boardId:this.listData.boardId},taskId:""}},methods:{addTask(t){let e={...this.newTask};this.$store.dispatch("addTask",e),this.newTask={description:"",listId:this.listData.id,boardId:this.listData.boardId}},deleteList(){confirm("Are You Sure You Want To Delete This List?")&&this.$store.dispatch("deleteList",[this.listData.id,this.listData.boardId])},showModal(){this.$modal.show("listModal"+this.listData.id)},hideModal(){this.$modal.hide("listModal"+this.listData.id)},showCommentModal(){this.$comment.show("commentModal")},hideCommentModal(){this.$comment.hide("commentModal")},passTaskId(t){this.taskId=t}},computed:{tasks(){let t=this.$store.state.tasks[this.listData.id]||[];return t},lists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskId]||[]}},components:{task:J,modalTwo:Y}},G=z,H=(s("f62b"),Object(d["a"])(G,I,B,!1,null,null,null)),K=H.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top row p-3 bg-dark"},[s("div",{staticClass:"col-6"},[s("router-link",{attrs:{to:"/"}},[s("button",{staticClass:"btn btn-outline-light btn-lg"},[t._v("Back To The Boards")])]),t._v(" "),s("button",{staticClass:"btn btn-outline-light btn-lg",on:{click:t.deleteBoard}},[t._v("Delete This Board")])],1),t._v(" "),s("div",{staticClass:"col-6"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title...",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-light btn-lg"},[t._v("Add List")])])])])},V=[],X={name:"top",data(){return{newList:{title:"",boardId:this.$route.params.boardId}}},methods:{addList(){let t={...this.newList};this.$store.dispatch("addList",t),this.newList={title:"",boardId:this.$route.params.boardId}},deleteBoard(){confirm("Are You Sure You Want To Delete This Board?")&&(this.$store.dispatch("deleteBoard",this.$route.params.boardId),this.$router.replace("/"))}}},Z=X,tt=Object(d["a"])(Z,Q,V,!1,null,null,null),et=tt.exports,st={name:"board",mounted(){this.$store.dispatch("setActiveBoard",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId)},data(){return{newList:{title:"",boardId:this.$route.params.boardId}}},methods:{addList(){let t={...this.newList};this.$store.dispatch("addList",t),this.newList={title:"",boardId:this.$route.params.boardId}}},computed:{board(){return this.$store.state.activeBoard||{title:"Loading..."}},lists(){return this.$store.state.lists}},components:{list:K,top:et},props:["boardId"]},at=st,ot=Object(d["a"])(at,$,T,!1,null,null,null),it=ot.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},rt=[],dt={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},lt=dt,ct=(s("d6db"),Object(d["a"])(lt,nt,rt,!1,null,null,null)),mt=ct.exports;a["a"].use(m["a"]);var ut=new m["a"]({routes:[{path:"/",name:"boards",component:y},{path:"/boards/:boardId",name:"board",props:!0,component:it},{path:"/login",name:"login",component:mt},{path:"*",redirect:"/"}]}),pt=s("2f62"),ht=s("bc3a"),vt=s.n(ht);let wt=location.host.includes("localhost")?"//localhost:3000/":"/",bt=vt.a.create({baseURL:wt+"account/",timeout:3e3,withCredentials:!0});class ft{static async Login(t){try{let e=await bt.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await bt.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await bt.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await bt.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}let gt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",kt=vt.a.create({baseURL:gt+"api/",timeout:3e3,withCredentials:!0});var _t={actions:{async getBoards({commit:t,dispatch:e}){let s=await kt.get("boards");t("setResource",{resource:"boards",data:s.data})},async addBoard({commit:t,dispatch:e},s){await kt.post("boards",s);e("getBoards")},async setActiveBoard({commit:t,dispatch:e},s){let a=await kt.get("boards/"+s);t("setResource",{resource:"activeBoard",data:a.data})},async deleteBoard({commit:t,dispatch:e},s){await kt.delete("boards/"+s);e("getBoards")}}};let Ct=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",yt=vt.a.create({baseURL:Ct+"api/",timeout:3e3,withCredentials:!0});var $t={actions:{async getLists({commit:t,dispatch:e},s){let a=await yt.get("boards/"+s+"/lists");t("setResource",{resource:"lists",data:a.data})},async addList({commit:t,dispatch:e},s){await yt.post("lists",s);e("getLists",s.boardId)},async deleteList({commit:t,dispatch:e},s){await yt.delete("lists/"+s[0]);e("getLists",s[1])}}};let Tt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",It=vt.a.create({baseURL:Tt+"api/",timeout:3e3,withCredentials:!0});var Bt={actions:{async getTasksByListId({commit:t,dispatch:e},s){let a=await It.get("lists/"+s+"/tasks");t("setTasks",{tasks:a.data,listId:s})},async addTask({commit:t,dispatch:e},s){await It.post("tasks",s);e("getTasksByListId",s.listId)},async deleteTask({commit:t,dispatch:e},s){await It.delete("tasks/"+s[0]);e("getTasksByListId",s[1])},async editTask({commit:t,dispatch:e},s){await It.put("lists/"+s[1]+"/tasks/"+s[0],{listId:s[2]});e("getTasksByListId",s[1]),e("getTasksByListId",s[2])}}};let Dt=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",xt=vt.a.create({baseURL:Dt+"api/",timeout:3e3,withCredentials:!0});var Lt={actions:{async addComment({commit:t,dispatch:e},s){await xt.post("comments",s);e("getCommentsByTaskId",s.taskId)},async getCommentsByTaskId({commit:t,dispatch:e},s){let a=await xt.get("tasks/"+s+"/comments");t("setComments",{comments:a.data,taskId:s})}}};a["a"].use(pt["a"]);var Mt=new pt["a"].Store({modules:{boardModule:_t,listModule:$t,taskModule:Bt,commentModule:Lt},state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},comments:{}},mutations:{setResource(t,e){t[e.resource]=e.data},setUser(t,e){t.user=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)}},actions:{async register({commit:t,dispatch:e},s){try{let e=await ft.Register(s);t("setUser",e),ut.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await ft.Login(s);t("setUser",e),ut.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await ft.Logout();t("resetState"),ut.push({name:"login"})}catch(s){console.warn(s.message)}}}}),Ut=s("1881"),Ot=s.n(Ut);async function jt(){let t=await ft.Authenticate();t?Mt.commit("setUser",t):ut.push({name:"login"}),new a["a"]({router:ut,store:Mt,render:t=>t(c)}).$mount("#app")}a["a"].use(Ot.a),jt()},"65da":function(t,e,s){},"85ec":function(t,e,s){},8835:function(t,e,s){},c185:function(t,e,s){},c552:function(t,e,s){"use strict";var a=s("8835"),o=s.n(a);o.a},d6db:function(t,e,s){"use strict";var a=s("e67a"),o=s.n(a);o.a},e67a:function(t,e,s){},f62b:function(t,e,s){"use strict";var a=s("65da"),o=s.n(a);o.a}});
//# sourceMappingURL=app.f27cec6e.js.map