import{_ as i,r as a,o,c as t,b as s,w as r,d as e,e as l}from"./app.cd4415e3.js";const c={},d=e("h1",{id:"promise-\u5B66\u4E60\u7B14\u8BB0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#promise-\u5B66\u4E60\u7B14\u8BB0","aria-hidden":"true"},"#"),l(" Promise \u5B66\u4E60\u7B14\u8BB0")],-1),u=e("h2",{id:"promise-all-\u7684\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#promise-all-\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),l(" Promise.all \u7684\u4F7F\u7528")],-1),m=e("blockquote",null,[e("p",null,"\u4F5C\u7528\uFF1A\u5F53\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\u6210\u65F6\uFF0CPromise.all() \u8FD4\u56DE resolve\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u5931\u8D25\uFF08reject\uFF09,\u5219\u8FD4\u56DE\u5931\u8D25\u7684\u4FE1\u606F\uFF0C\u5373\u4F7F\u5176\u4ED6 promise \u6267\u884C\u6210\u529F\uFF0C\u4E5F\u4F1A\u8FD4\u56DE\u5931\u8D25\u3002")],-1),p=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`    let p1 = new Promise((resolve,reject)=>{
        resolve('p1==ok')
    })

    let p2 = new Promise((resolve,reject)=>{
        resolve('p2==ok')
    })

     let p3 = new Promise((resolve,reject)=>{
        resolve('p3==ok')
    })


    let pa = new Promise.all([p1,p2,p3])
    console.log(pa) // \u5982\u679C p1 p2 p3 \u6709\u4E00\u4E2A\u62A5\u9519\u5219 pa\u5C31\u4F1A\u62A5\u9519

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("h2",{id:"promise-allsettled-\u7684\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#promise-allsettled-\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),l(" Promise.allSettled \u7684\u4F7F\u7528")],-1),b=e("blockquote",null,[e("p",null,"\u4F5C\u7528\uFF1AallSettled \u65B9\u6CD5\u7528\u6765\u786E\u5B9A\u4E00\u7EC4\u5F02\u6B65\u7684\u64CD\u4F5C\u662F\u5426\u90FD\u7ED3\u675F\u4E86\uFF08\u4E0D\u7BA1\u65F6\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF09\u5176\u4E2D\u5305\u542B\u4E86 fulfilled \u548C rejected \u4E24\u79CD\u60C5\u51B5")],-1),h=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`function ajax(url){}

Promise.allSettled([ajax(url),ajax(url)]).then(()=>{
    console.log("\u4E24\u4E2A\u8BF7\u6C42\u90FD\u7ED3\u675F")
})

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("h2",{id:"promise-any-\u7684\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#promise-any-\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),l(" Promise.any \u7684\u4F7F\u7528")],-1),x=e("blockquote",null,[e("p",null,"promise \u4E0B\u7684 any \u65B9\u6CD5\uFF0C\u53EA\u8981\u53C2\u6570\u4E2D\u6709\u4E00\u4E2A Promise \u5B9E\u4F8B\u5316\u5BF9\u8C61\u7684\u72B6\u6001\u4E3A\u6210\u529F\uFF0C\u5219\u6574\u4F53\u7ED3\u679C\u5C31\u4F1A\u4E3A\u6210\u529F\u3002")],-1),g=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`    let p1 = new Promise((resolve,reject)=>{        resolve('p1==ok')    })    

    let p2 = new Promise((resolve,reject)=>{        reject('p2==error')    })     

    let p3 = new Promise((resolve,reject)=>{        reject('p3==error')    })    

    let pa = new Promise.all([p1,p2,p3])   

    console.log(pa) // \u5982\u679C p1 p2 p3 \u6709\u4E00\u4E2A\u6210\u529F\u5219 pa\u5C31\u4F1A\u6210\u529F
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("h2",{id:"promise-race-\u7684\u4F7F\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#promise-race-\u7684\u4F7F\u7528","aria-hidden":"true"},"#"),l(" Promise.race \u7684\u4F7F\u7528")],-1),f=e("blockquote",null,[e("p",null,"\u4F5C\u7528\uFF1A\u8C01\u5148\u6267\u884C\u5B8C\u6210\uFF0C\u5C31\u8FD4\u56DE\u8C01\uFF0C\u65E0\u8BBA\u5BF9\u9519")],-1),j=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`    let p1 = new Promise((resolve,reject)=>{        resolve('p1==ok')    })    

    let p2 = new Promise((resolve,reject)=>{        reject('p2==error')    })     

    let p3 = new Promise((resolve,reject)=>{        reject('p3==error')    })    

    let pa = new Promise.all([p1,p2,p3])   

    console.log(pa) // \u5982\u679C p1 p2 p3 \u8C01\u5148\u6267\u884C\u5B8C\u6210\uFF0Cpa \u5C31\u8FD4\u56DE\u8C01\uFF0C\u65E0\u8BBA\u5BF9\u9519
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function w(k,y){const n=a("Copy");return o(),t("div",null,[d,u,m,s(n,null,{default:r(()=>[p]),_:1}),v,b,s(n,null,{default:r(()=>[h]),_:1}),_,x,s(n,null,{default:r(()=>[g]),_:1}),P,f,s(n,null,{default:r(()=>[j]),_:1})])}const C=i(c,[["render",w],["__file","index.html.vue"]]);export{C as default};
