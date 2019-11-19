(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{243:function(t,e,l){"use strict";l.r(e);var n=l(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("p",[l("img",{attrs:{src:"http://7xvrvp.com1.z0.glb.clouddn.com/ExcelVBA%E5%BE%AA%E7%8E%AF.jpg",alt:""}})]),t._v(" "),l("h1",{attrs:{id:"循环"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[t._v("#")]),t._v(" 循环")]),t._v(" "),l("p",[t._v('想让录制的VBA程序自己一步一步往后运行，而不是呆板的我们点击一次运行一次的话，我们需要在录制的程序外"套"上一个循环结构，让它自己多次运行。')]),t._v(" "),l("p",[t._v("如下面这段代码是经过下列操作后录制的：")]),t._v(" "),l("ol",[l("li",[t._v("在第十行下插入一行")]),t._v(" "),l("li",[t._v("计算平均值")]),t._v(" "),l("li",[t._v('在数值前输入"平均值"三个字')]),t._v(" "),l("li",[t._v("把两个单元格字体加粗")]),t._v(" "),l("li",[t._v("给单元格填充蓝色")])]),t._v(" "),l("p",[l("img",{attrs:{src:"http://7xvrvp.com1.z0.glb.clouddn.com/%E5%AE%8F%E5%BD%95%E5%88%B6.gif",alt:"宏录制"}})]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('Sub 宏1()\n\'\n\' 宏1 宏\n\'\n\' 快捷键: Ctrl+t\n\'\n     ActiveCell.Offset(10, 0).Rows("1:1").EntireRow.Select\n     Selection.Insert Shift:=xlDown, CopyOrigin:=xlFormatFromLeftOrAbove\n     ActiveCell.Offset(0, 1).Range("A1").Select\n     ActiveCell.FormulaR1C1 = "=AVERAGE(R[-10]C:R[-1]C)"\n     ActiveCell.Offset(0, -1).Range("A1").Select\n     ActiveCell.FormulaR1C1 = "平均值"\n        ActiveCell.Range("A1:B1").Select\n     With Selection.Interior\n         .Pattern = xlSolid\n         .PatternColorIndex = xlAutomatic\n         .ThemeColor = xlThemeColorAccent1\n         .TintAndShade = 0.599993896298105\n         .PatternTintAndShade = 0\n     End With\n     Selection.Font.Bold = True\n     ActiveCell.Offset(1, 1).Range("A1").Select\nEnd Sub\n')])])]),l("blockquote",[l("p",[t._v('注：在录制之前要先点击 "开发工具" => "使用相对引用"，并且在录制完成后选中下一次开始操作的单元格 '),l("img",{attrs:{src:"http://7xvrvp.com1.z0.glb.clouddn.com/%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%AF%B9%E5%BC%95%E7%94%A8.JPG",alt:"相对引用"}})])]),t._v(" "),l("h2",{attrs:{id:"_1-for-next-结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-for-next-结构"}},[t._v("#")]),t._v(" 1. For...Next 结构")]),t._v(" "),l("ul",[l("li",[t._v("特点："),l("strong",[t._v("事先约定好次数")])])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("For i=1 to 3\n  ...\n  循环体\n  ...\nNext i\n")])])]),l("p",[t._v('这段代码中i是循环变量，3是最大的循环次数，也就是这个循环总共运行3次。每运行完一次的时候，i就会递增，然后进入到下一次循环中。当i不断的变大，达到"事先约定的"最大值的时候（这里是3），就会结束这个循环，开始运行下面的宏代码。')]),t._v(" "),l("h2",{attrs:{id:"_2-do-until-结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-do-until-结构"}},[t._v("#")]),t._v(" 2. Do...Until 结构")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("特点："),l("strong",[t._v("当达到某个条件时终止")])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("Do\n...\n循环体\n...\nLoop Until...\n")])])]),l("p",[t._v('其中"Loop"就是循环的意思。"Until"后面跟一个'),l("strong",[t._v("条件")]),t._v('，当达到这个条件的时候就会退出循环，否则的话这个循环将继续运行下去。值得注意的是，如果"Until"后面的条件一直无法达到，那这个循环将一直运行下去，在程序中这种情况被称之为"死循环"。')])])]),t._v(" "),l("h2",{attrs:{id:"_3-do-while-结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-do-while-结构"}},[t._v("#")]),t._v(" 3. Do while 结构")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("特点："),l("strong",[t._v("符合条件时继续")])]),t._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("Do While...\n...\n循环体\n...\nLoop\n")])])]),l("p",[t._v('这里的语句中"While"后面跟一个条件，当达满足这个条件的时候，循环就开始进行，当不满足这个条件的时候就跳出循环，开始运行下面的宏代码。')])])]),t._v(" "),l("blockquote",[l("p",[t._v("这是闻叨在网易云课堂上学习 方骥老师 的VBA课程的动手笔记，以上侵删")])])])}),[],!1,null,null,null);e.default=a.exports}}]);