const div = dom.find('#test>.red')[0]
console.log(div)

console.log("----------我是分割线----------")

console.log("我对test标签的内容做了渲染")
dom.style(test, 'color', 'green')

console.log("----------我是分割线----------")

const divList = dom.find('.red')
dom.each(divList, (n)=>console.log(n))