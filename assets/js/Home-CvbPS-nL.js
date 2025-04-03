import{d as n,r as h,c,a as I,o,b as l,e,t as _,n as i,f as v,g as m,u as A,h as b,s as f,w as y,i as g}from"./index-BnC2ijdi.js";import{_ as P}from"./plugin-vueexport-helper-DlAUqK2U.js";const $={localImage(a){return new URL(a,import.meta.url).href}},C=n({__name:"CalendarWidget",setup(a){const s=h([{key:"today",highlight:{color:"red",fillMode:"solid"},dates:new Date}]);return(t,r)=>{const u=I("VCalendar");return o(),c(u,{class:"border-color-general","is-dark":!1,attributes:s.value},null,8,["attributes"])}}}),z={},q={style:{"margin-bottom":"1rem !important"}};function B(a,s){return o(),l("div",q,s[0]||(s[0]=[e("form",{class:"w-100 me-3 position-relative",role:"search"},[e("label",{for:"docsearch-input",id:"docsearch-label",class:"position-absolute",style:{top:"20% !important",left:"12px !important",color:"#c0c0c0"}},[e("i",{class:"bi bi-search"}),e("span",null," Search")]),e("input",{type:"search",class:"form-control",style:{"border-radius":"50px !important"},placeholder:"","aria-label":"Search",disabled:""})],-1)]))}const V=P(z,[["render",B]]),H=["href"],j={class:"d-flex justify-content-between align-items-center"},D={class:"text-primary"},G={style:{color:"#c0c0c0"}},x=n({__name:"RepoItem",props:{name:String,program:String,desc:String,path:String,badgeColor:{type:String,default:"primary"}},setup(a){const s=a;return(t,r)=>(o(),l("a",{href:s.path,target:"_blank",class:"list-group-item list-group-item-action border-0",style:{"border-radius":"0"}},[e("div",j,[e("div",D,_(s.name),1),e("div",{class:i(["badge rounded-pill","bg-"+s.badgeColor]),style:{"font-size":"14px"}},_(s.program),3)]),e("div",G,_(s.desc),1)],8,H))}}),N={class:"card"},R={class:"card-body p-0"},L={class:"list-group github-list"},M=n({__name:"HomeGithubPartial",setup(a){return(s,t)=>(o(),l("div",N,[e("div",R,[t[1]||(t[1]=e("h4",{class:"ps-3 pt-3 pe-3"},[e("i",{class:"bi bi-fire",style:{color:"red"}}),v("Github")],-1)),e("div",L,[m(x,{name:"chat",program:"TypeScript",desc:"The microservice for chat.",path:"https://github.com/lvnin/chat"}),m(x,{name:"uploader",program:"Go",desc:"The microservice for upload.",path:"https://github.com/lvnin/uploader","badge-color":"info"}),m(x,{name:"apiservfst",program:"TypeScript",desc:"RESTful Api Server",path:"https://github.com/lvnin/apiservfst","badge-color":"primary"}),t[0]||(t[0]=e("a",{href:"https://github.com/lvnin",target:"_blank",class:"list-group-item list-group-item-action border-0 text-primary bg-light",style:{"font-weight":"500 !important","font-size":"14px"}},"查看更多",-1))])])]))}}),E={class:"container mb-5"},U={class:"card text-center border-color-general border-0 animate__animated animate__zoomIn",style:{padding:"150px 20px 150px 20px"}},J={class:"mb-0",style:{"font-size":"128px"}},F={class:"text-secondary"},K={class:"text-silver"},d=n({__name:"JumbotronWidget",props:{icon:String,title:String,desc:String},setup(a){return(s,t)=>(o(),l("section",E,[e("div",U,[e("h1",J,[e("i",{class:i(`bi bi-${a.icon} text-info`)},null,2)]),e("h1",F,_(a.title),1),e("div",K,_(a.desc),1)])]))}}),w=n({__name:"HomeActivityPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"cursor",title:"没有动态",desc:"当前没有发布任何动态"}))}}),O=n({__name:"HomeArticlePartial",setup(a){return(s,t)=>(o(),c(d,{icon:"book",title:"没有文章",desc:"当前没有发布任何文章"}))}}),Q={class:"container"},X={class:"nav nav-pills nav-fill gap-2 p-1 small bg-light rounded-5",style:{"--bs-nav-link-color":"var(--bs-info)","font-weight":"bold"}},Y={class:"nav-item",role:"presentation"},Z={class:"nav-item",role:"presentation"},ee=n({__name:"WorkbarWidget",props:{workType:String},setup(a){return(s,t)=>(o(),l("section",Q,[e("ul",X,[e("li",Y,[e("a",{class:i(["nav-link p-1 rounded-5",a.workType==null?"active bg-info":""]),href:"?tab=work"},t[0]||(t[0]=[e("i",{class:"bi bi-globe"},null,-1),v(" 技术开发 ")]),2)]),e("li",Z,[e("a",{class:i(["nav-link p-1 rounded-5",a.workType=="art"?"active bg-info":""]),href:"?tab=work&type=art"},t[1]||(t[1]=[e("i",{class:"bi bi-palette"},null,-1),v(" 艺术创作 ")]),2)])])]))}}),te={class:"container"},se={class:"nav nav-pills nav-fill gap-2 p-1 small rounded-5",style:{"--bs-nav-link-color":"var(--bs-info)","font-weight":"bold"}},ae={class:"nav-item",style:{width:"20px"},role:"presentation"},oe={class:"nav-item",role:"presentation"},ne={class:"nav-item",role:"presentation"},re={class:"nav-item",role:"presentation"},ie={class:"nav-item",role:"presentation"},ce={class:"nav-item",role:"presentation"},le={class:"nav-item",role:"presentation"},_e=n({__name:"TechWorkbarWidget",props:{techType:String},setup(a){return(s,t)=>(o(),l("section",te,[e("ul",se,[e("li",ae,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType==null?"active bg-info":""]),href:"?tab=work"}," 全部 ",2)]),e("li",oe,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="web"?"active bg-info":""]),href:"?tab=work&category=web"}," Web ",2)]),e("li",ne,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="app"?"active bg-info":""]),href:"?tab=work&category=app"}," App ",2)]),e("li",re,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="applet"?"active bg-info":""]),href:"?tab=work&category=applet"}," Mini Program ",2)]),e("li",ie,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="game"?"active bg-info":""]),href:"?tab=work&category=game"}," Game ",2)]),e("li",ce,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="cloud"?"active bg-info":""]),href:"?tab=work&category=cloud"}," Cloud ",2)]),e("li",le,[e("a",{class:i(["nav-link p-1 rounded-5",a.techType=="ai"?"active bg-info":""]),href:"?tab=work&category=ai"}," Ai ",2)])])]))}}),de={class:"container"},pe={class:"nav nav-pills nav-fill gap-2 p-1 small rounded-5",style:{"--bs-nav-link-color":"var(--bs-info)","font-weight":"bold"}},ue={class:"nav-item",role:"presentation"},me={class:"nav-item",role:"presentation"},ve={class:"nav-item",role:"presentation"},he={class:"nav-item",role:"presentation"},ge={class:"nav-item",role:"presentation"},be={class:"nav-item",role:"presentation"},fe=n({__name:"ArtWorkbarWidget",props:{artType:String},setup(a){return(s,t)=>(o(),l("section",de,[e("ul",pe,[e("li",ue,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType==null?"active bg-info":""]),href:"?tab=work&type=art"}," 全部 ",2)]),e("li",me,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType=="design"?"active bg-info":""]),href:"?tab=work&type=art&category=design"}," Design ",2)]),e("li",ve,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType=="illust"?"active bg-info":""]),href:"?tab=work&type=art&category=illust"}," Illust ",2)]),e("li",he,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType=="video"?"active bg-info":""]),href:"?tab=work&type=art&category=video"}," Video ",2)]),e("li",ge,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType=="book"?"active bg-info":""]),href:"?tab=work&type=art&category=book"}," Book ",2)]),e("li",be,[e("a",{class:i(["nav-link p-1 rounded-5",a.artType=="music"?"active bg-info":""]),href:"?tab=work&type=art&category=music"}," Music ",2)])])]))}}),ye={class:"col-3 col-md-2 p-1 text-center animate__animated animate__zoomIn"},$e={class:"card border-0 only-scale"},ke={class:"card-body p-1"},xe={class:"avatar-container"},we=["href"],Te={class:"position-relative"},We=["src"],Se={class:"badge bg-info position-absolute",style:{right:"-10px",bottom:"0"}},Ae={class:"info-panel"},Pe={class:"align-items-center",style:{"font-weight":"bold"}},Ie={class:"badge bg-info",style:{"font-size":"12px"}},Ce={class:"text-secondary",style:{"font-size":"14px"}},ze={class:"text-silver"},qe=n({__name:"TechItem",props:{type:{},icon:{},name:{},desc:{},code:{},goto:{}},setup(a){return(s,t)=>(o(),l("div",ye,[e("div",$e,[e("div",ke,[e("div",xe,[e("a",{href:s.goto,class:"avatar-container"},[e("div",Te,[e("img",{src:A($).localImage(s.icon),class:"avatar",alt:"avatar"},null,8,We),e("span",Se,_(s.type),1)])],8,we),e("div",Ae,[e("div",Pe,[e("i",Ie,_(s.type),1),t[0]||(t[0]=v(" ")),e("span",null,_(s.name),1)]),e("div",Ce,_(s.desc),1),e("div",ze,_(s.code),1)])])])])]))}}),Be=P(qe,[["__scopeId","data-v-44ee4a08"]]),Ve={class:"row"},T=n({__name:"TechWorkAllPartial",setup(a){return(s,t)=>(o(),l("div",Ve,[m(Be,{type:"App",name:"绘友圈",code:"creatlnk",desc:"画师约稿分享社区",icon:"../assets/img/works/app/app-creatlnk.png",goto:"?tab=work&category=app"})]))}}),He=n({__name:"TechWorkWebPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),je=["src","width","height"],De=n({__name:"AvatarWidget",props:{src:{},size:{}},setup(a){return(s,t)=>(o(),l("img",{class:"avatar",src:A($).localImage(s.src),width:s.size,height:s.size,alt:"avatar"},null,8,je))}}),Ge={class:"col-6 col-md-3 p-1 text-center"},Ne={class:"card border-1 scale-item"},Re={class:"card-body"},Le={style:{"font-weight":"bold","margin-top":"5px"}},Me={class:"text-secondary",style:{"font-size":"14px"}},Ee={class:"text-silver"},Ue=n({__name:"AppItem",props:{icon:{},name:{},desc:{},code:{}},setup(a){return(s,t)=>(o(),l("div",Ge,[e("div",Ne,[e("div",Re,[m(De,{src:s.icon,size:100},null,8,["src"]),e("div",Le,_(s.name),1),e("div",Me,_(s.desc),1),e("div",Ee,_(s.code),1)])])]))}}),Je={class:"row"},Fe=n({__name:"TechWorkAppPartial",setup(a){return(s,t)=>(o(),l("div",Je,[m(Ue,{name:"绘友圈",code:"creatlnk",desc:"画师约稿分享社区",icon:"../assets/img/works/app/app-creatlnk.png"})]))}}),Ke=n({__name:"TechWorkAppletPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),Oe=n({__name:"TechWorkGamePartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),Qe=n({__name:"TechWorkCloudPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),Xe=n({__name:"TechWorkAiPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),W=n({__name:"TechWorkPartial",setup(a){const s=b(),t=h(),r=f(T);return t.value=s.query.category,y(()=>{t.value=s.query.category,t.value=="web"?r.value=He:t.value=="app"?r.value=Fe:t.value=="applet"?r.value=Ke:t.value=="game"?r.value=Oe:t.value=="cloud"?r.value=Qe:t.value=="ai"?r.value=Xe:r.value=T}),(u,k)=>(o(),c(g(r.value)))}}),S=n({__name:"ArtWorkAllPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),Ye=n({__name:"ArtWorkDesignPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),Ze=n({__name:"ArtWorkIllustPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),et=n({__name:"ArtWorkVideoPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),tt=n({__name:"ArtWorkBookPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),st=n({__name:"ArtWorkMusicPartial",setup(a){return(s,t)=>(o(),c(d,{icon:"box2",title:"没有作品",desc:"当前没有发布任何作品"}))}}),at=n({__name:"ArtWorkPartial",setup(a){const s=b(),t=h(),r=f(S);return t.value=s.query.category,y(()=>{t.value=s.query.category,t.value=="design"?r.value=Ye:t.value=="illust"?r.value=Ze:t.value=="video"?r.value=et:t.value=="book"?r.value=tt:t.value=="music"?r.value=st:r.value=S}),(u,k)=>(o(),c(g(r.value)))}}),ot={class:"row ms-2 me-2"},nt={class:"col-sm-12 col-md-12 col-lg-12 pe-0 pt-0 ps-0 pb-2"},rt={class:"col-sm-12 col-md-12 col-lg-12"},it=n({__name:"HomeWorkPartial",setup(a){const s=b(),t=h(),r=h(),u=f(W);return t.value=s.query.type,r.value=s.query.category,y(()=>{t.value=s.query.type,t.value=="art"?u.value=at:u.value=W,r.value=s.query.category}),(k,p)=>(o(),l("div",ot,[e("div",nt,[m(ee,{style:{"margin-bottom":"0.25rem"},workType:t.value},null,8,["workType"]),t.value!=null?(o(),c(fe,{key:0,artType:r.value},null,8,["artType"])):(o(),c(_e,{key:1,techType:r.value},null,8,["techType"]))]),e("div",rt,[(o(),c(g(u.value)))])]))}}),ct={style:{"text-decoration":"none"}},lt={class:"card scale-item"},_t={class:"card-body p-2"},dt={class:"d-flex justify-content-start"},pt={class:"me-2 shadow-sm",style:{border:"0px solid rgb(239, 243, 244)","border-radius":"8px"}},ut=["src"],mt={style:{"font-weight":"400"}},vt={class:"badge bg-info rounded-pill"},ht=n({__name:"BrandItem",props:{logo:String,title:String,industry:String,industryIcon:String,href:String},setup(a){const s=a,t=h($.localImage(s.logo??""));return(r,u)=>(o(),l("div",ct,[e("div",lt,[e("div",_t,[e("div",dt,[e("div",pt,[e("img",{width:"100",height:"100",src:t.value},null,8,ut)]),e("div",null,[e("div",mt,_(a.title),1),e("span",vt,[e("i",{class:i(`bi bi-${a.industryIcon}`)},null,2),v(" "+_(a.industry),1)])])])])])]))}}),gt={class:"row ms-1 me-1"},bt={class:"col-sm-6 col-sm-6 col-lg-6"},ft=n({__name:"HomeStartupBrandPartial",setup(a){return(s,t)=>(o(),l("div",gt,[e("div",bt,[m(ht,{logo:"../assets/img/startup/brand-ishtar-logo.png",title:"Shanghai Ishtar Network Technology Co., Ltd",industry:"互联网",href:"https://www.superishtar.com","industry-icon":"globe"})])]))}}),yt={class:"container"},$t={class:"row"},kt={class:"col-sm-12 col-md-8 position-relative p-0",style:{"border-right":"1px solid rgb(239, 243, 244)"}},xt={class:"position-absolute",style:{top:"130px !important",left:"1rem !important"}},wt=["src"],Tt={class:"breif"},Wt={class:"container"},St={class:"nav nav-tabs"},At={class:"pt-2"},Pt={class:"col-sm-12 col-md-4 order-sm-3 p-2 ps-md-4 ps-sm-0"},It={style:{"margin-top":"1rem"}},qt=n({__name:"Home",setup(a){const s=b(),t=h(s.query.tab),r=f(w),u=h($.localImage("../assets/img/avatar.jpg"));return y(()=>{t.value=s.query.tab,t.value=="article"?r.value=O:t.value=="work"?r.value=it:t.value=="startup"?r.value=ft:r.value=w}),(k,p)=>(o(),l("div",yt,[e("div",$t,[e("div",kt,[p[3]||(p[3]=e("div",{class:"thumbnail jumbotron"},null,-1)),e("div",xt,[e("img",{width:"135",height:"135",style:{border:"3px solid white","border-radius":"50%"},src:u.value},null,8,wt)]),p[4]||(p[4]=e("div",{class:"p-3",style:{"margin-top":"4rem"}},[e("h3",{class:"mb-0"},"Nin Lyu"),e("h6",{class:"text-secondary"},"lvnin"),e("div")],-1)),e("nav",Tt,[e("div",Wt,[e("div",St,[e("a",{class:i(`nav-item nav-link ${t.value==null?"active":""}`),href:"/"},p[0]||(p[0]=[e("i",{class:"bi bi-cursor"},null,-1),v(" 动态")]),2),e("a",{class:i(`nav-item nav-link ${t.value=="article"?"active":""}`),href:"?tab=article"},p[1]||(p[1]=[e("i",{class:"bi bi-book"},null,-1),v(" 文章")]),2),e("a",{class:i(`nav-item nav-link ${t.value=="work"?"active":""}`),href:"?tab=work"},p[2]||(p[2]=[e("i",{class:"bi bi-box2"},null,-1),v(" 作品")]),2)])])]),e("div",At,[(o(),c(g(r.value)))])]),e("div",Pt,[m(V),(o(),c(g(M))),e("div",It,[m(C)])])])]))}});export{qt as default};
