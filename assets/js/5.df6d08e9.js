(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{213:function(t,n,e){t.exports=e.p+"assets/img/VBA_Dict_2.86438b94.jpg"},214:function(t,n,e){t.exports=e.p+"assets/img/VBA_Dict_3.5887cc2f.jpg"},215:function(t,n,e){t.exports=e.p+"assets/img/VBA_Dict_4.4f258641.jpg"},216:function(t,n,e){t.exports=e.p+"assets/img/VBA_Dict_5.bb6a058b.jpg"},241:function(t,n,e){"use strict";e.r(n);var s=e(0),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"字典是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字典是什么"}},[t._v("#")]),t._v(" 字典是什么")]),t._v(" "),s("p",[s("img",{attrs:{src:e(213),alt:"解释"}}),t._v(" "),s("img",{attrs:{src:e(214),alt:"图片解释"}})]),t._v(" "),s("h1",{attrs:{id:"如何使用字典删除重复项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用字典删除重复项"}},[t._v("#")]),t._v(" 如何使用字典删除重复项")]),t._v(" "),s("p",[s("img",{attrs:{src:e(215),alt:"分开四步走"}})]),t._v(" "),s("h1",{attrs:{id:"两种方法的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种方法的区别"}},[t._v("#")]),t._v(" 两种方法的区别")]),t._v(" "),s("p",[t._v("两种方法最大的差别就是"),s("strong",[t._v("是否直接对单元格进行删除操作")]),t._v("。\n"),s("code",[t._v("字典")]),t._v("并不会直接对单元格进行删除操作，我们仅仅是利用字典只能保存唯一值的特点进行中间过渡，把所有唯一值都保存到字典数组中去，然后再把字典中的唯一值输出赋值给单元格。我们进行的操作仅仅是写入和赋值。\n"),s("code",[t._v("Excel删除重复项函数")]),t._v("则是一次次循环对比，对满足条件的行进行"),s("code",[t._v("删除行")]),t._v("的处理，而不仅仅是对字符串的读写了。\n"),s("img",{attrs:{src:e(216),alt:"两种方法的比较"}}),t._v("\n相对来说，"),s("code",[t._v("字典")]),t._v("比"),s("code",[t._v("Excel删除重复项")]),t._v("操作要更快，更有效率一些。这是为什么呢？主要是因为对字符串的处理只是文字级别上的，而对单元格的删除处理已经达到窗口级别。（好吧，我承认这是我编的，我自己这么理解，反正对单元格的操作层级更高，需要更多的计算和处理）计算机对操作字符串会更在行，更有效率。")]),t._v(" "),s("p",[t._v("最后贴上这次完成的代码：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Sub test()\n'声明各种变量\nDim dic As Object\nDim i As Integer\nDim s As String\nDim rw\nDim col\n'因为后期会多次使用到usedrange对象的行数和列数，所以就先创建变量，精简后期冗长的代码\nrw = ActiveSheet.UsedRange.Rows.Count\ncol = ActiveSheet.UsedRange.col.Count\n'创建字典对象的语句\nSet dic = CreateObject(\"scripting.dictionary\")\n'建立循环\nFor i = 2 To rw\n    '用join函数把一行中的所有数值拼成一个字符串，join函数的参数是一个数组\n    '然而因为一行的数据并不是一个数组，所以我们用index函数把一行的数值转成一个一维数组（当然用transpose函数也是可以的）\n    'Index函数的对象是二维的区域，所以我们给结束的单元格行号加1，让整个对象变成两行多列的二维区域\n    '再写上第二个参数1，表示提取第一行的数值\n    s = VBA.Join(WorksheetFunction.Index(Range(Cells(i, 1), Cells(i + 1, col)).Value, 1))\n    '把一整行的数据作为item，方便在最后的时候给单元格赋值进行还原\n    dic(s) = Range(Cells(i, 1), Cells(i, col))\nNext i\n\n'声明一个数组，并把已经经过字典处理的唯一值赋值（即唯一的数据行）给他\nDim arr2()\narr2 = dic.items\n'数据行是一个二维区域无法进行赋值，使用两次transpose进行转制（数组转成字符串，再转成一个个单独的数值）之后赋值给原来从第二行开始的区域\nRange(Cells(2, 1), Cells(dic.Count + 1, col)) = WorksheetFunction.Transpose(WorksheetFunction.Transpose(arr2))\n'明显经过上述的处理之后只有字典里的那么多行数据还原给了表格中的单元格\n'然而原有的数据是多于字典里的数据的，所以在dic.count+1行下面还有原先的数据\n'使用clear函数把这些多余的数据清除\nRange(Cells(dic.Count + 2, 1), Cells(rw, col)).Clear\n\nEnd Sub\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);