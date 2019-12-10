(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(4),r=t.n(o),s=(t(16),t(9)),c=t(5),i=t(6),m=t(8),u=t(7),d=t(10),h=t(2),p=(t(19),function(e){var a=e.data,t=a.name,l=a.occupation,o=a.description,r=a.social,s=a.address.city,c=r.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},"I'm ",t,"."),n.a.createElement("h3",null,"I'm a ",s," based ",n.a.createElement("span",null,l),". ",o,"."),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},c))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))}),E=function(e){var a=e.data.social.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url},n.a.createElement("i",{className:e.className})))}));return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},a),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),n.a.createElement("li",null,"Design by"," ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))},v=function(e){var a=e.data,t=a.phone,l=a.email,o=a.resumeDownload,r=a.bio,s=a.name,c=a.image,i=a.address,m=i.city,u=i.state,d="images/".concat(c);return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:d,alt:"Tim Baker Profile Pic"})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,r),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,s),n.a.createElement("br",null),n.a.createElement("span",null,m," ",u),n.a.createElement("br",null),n.a.createElement("span",null,t),n.a.createElement("br",null),n.a.createElement("span",null,l))),n.a.createElement("div",{className:"columns download"},n.a.createElement("p",null,n.a.createElement("a",{href:o,className:"button"},n.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))},y=function(e){var a=e.data,t=a.skillmessage,l=a.education,o=a.work,r=a.skills,s=l.map((function(e){return n.a.createElement("div",{key:e.school},n.a.createElement("h3",null,e.school),n.a.createElement("p",{className:"info"},e.degree," ",n.a.createElement("span",null,"\u2022"),n.a.createElement("em",{className:"date"},e.graduated)),n.a.createElement("p",null,e.description))})),c=o.map((function(e){return n.a.createElement("div",{key:e.company},n.a.createElement("h3",null,e.company),n.a.createElement("p",{className:"info"},e.title,n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},e.years)),n.a.createElement("p",null,e.description))})),i=r.map((function(e){var a="bar-expand ".concat(e.name.toLowerCase());return n.a.createElement("li",{key:e.name},n.a.createElement("span",{style:{width:e.level},className:a}),n.a.createElement("em",null,e.name))}));return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},s)))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work"))),n.a.createElement("div",{className:"nine columns main-col"},c)),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,t),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},i)))))},w=function(e){var a=e.data.projects.map((function(e){var a="images/portfolio/".concat(e.image);return n.a.createElement("div",{key:e.title,className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:e.url,title:e.title},n.a.createElement("img",{alt:e.title,src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.title),n.a.createElement("p",null,e.category))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"fa fa-link"})))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Projects."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a))))},f={main:{name:"Ahmed Abdelhay",occupation:"Frontend Engineer",description:"Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",image:"me_profile.jpg",bio:"Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",contactmessage:"Here is where you should write your message to readers to have them get in contact with you.",email:"ahmed.abdelhay.90@gmail.com",phone:"+20 100 470 1196",address:{city:"Cairo",state:"Egypt"},website:"/",resumedownload:"https://drive.google.com/file/d/19i2L3_hZ3SxOCPwC_zARP-cJZzT7bmnx/view?usp=sharing",social:[{name:"facebook",url:"http://facebook.com/abdelhay90",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/ahmed-abdelhay-5b3b9620/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/abdelhay90",className:"fa fa-github"},{name:"skype",url:"a.abd.elhay",className:"fa fa-skype"}]},resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"Ain Shams University",degree:"Bachelor of computer science",graduated:"2011",description:"Studying Computer Science, Algorithms Design and Analysis, Computer Vision, Data Structures, Compiles, etc..."}],work:[{company:"Andela",title:"Senior Software Engineer",years:"March 2019 - Present",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."},{company:"Virgin Gates",title:"Senior / Principal Frontend Engineer",years:"Sept. 2018 - Jan. 2019",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."},{company:"Vodafone",title:"Senior Frontend Engineer",years:"Jan. 2018 - Sept. 2018",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."},{company:"esri Northeast Africa",title:"Senior Frontend Engineer",years:"May 2014 - Jan. 2018",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."},{company:"Data Gear",title:".Net Developer",years:"Feb. 2013 - April 2014",description:"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."}],skills:[{name:"Javascript",level:"75%"},{name:"ReactJs",level:"65%"},{name:"VueJs ",level:"65%"},{name:"Angular ",level:"65%"},{name:"Node.js ",level:"60%"},{name:"CSS",level:"60%"},{name:"HTML5",level:"60%"},{name:"SASS",level:"50%"},{name:"LESS",level:"50%"},{name:"Jquery",level:"70%"},{name:"Dojo",level:"70%"},{name:"esri JS API",level:"70%"},{name:"MapBox",level:"60%"},{name:"Rest",level:"70%"},{name:"Git",level:"60%"},{name:"Docker",level:"50%"},{name:"Kubernetes",level:"40%"},{name:"Google Cloud",level:"40%"},{name:"Travis CI",level:"50%"},{name:"Postgre SQL",level:"50%"},{name:"MongoDB",level:"50%"}]},portfolio:{projects:[{title:"Vodafone DE",category:"Vodafone Germany WebApp",image:"canadian-wanderlust.jpg",url:"https://www.vodafone.de"},{title:"SURVV",category:"SURVV Premium Delivery Service",image:"fury-fighting-gear.jpg",url:"https://survv.com"},{title:"MG Suite",category:"Multi-Gen data display and location services",image:"original-thai-food.jpg",url:"http://www.nextgss.com"}]},testimonials:{testimonials:[{text:"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",user:"Kareem Abdul Jabbar"},{text:"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",user:"Steve Wozniak... impersonator"}]}},g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={resumeData:Object(s.a)({},f)},h.a.initialize("UA-154366389-1"),h.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.resumeData,a=e.main,t=e.resume,l=e.portfolio;return n.a.createElement("div",{className:"App"},n.a.createElement(p,{data:a}),n.a.createElement(v,{data:a}),n.a.createElement(y,{data:t}),n.a.createElement(w,{data:l}),n.a.createElement(E,{data:a}))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.05e61155.chunk.js.map