(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{216:function(s,e,t){s.exports=t.p+"assets/img/same_header_table_merge.6166dc3b.png"},242:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("先来看一看这次学习任务的案例文档吧")]),s._v(" "),a("p",[a("img",{attrs:{src:t(216),alt:"enter image description here"}})]),s._v(" "),a("p",[s._v("从图中可以看到，我们这次的任务就是要把很多表的很多数据合并到一个"),a("strong",[s._v("合并表")]),s._v("当中去。当然，这些数据表有很明显的特点——表头都是一致的（或者说数据表的"),a("strong",[s._v("列标题")]),s._v("都是一样的）。")]),s._v(" "),a("h1",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("由于表头是一致的，最容易想到的思路就是我们把一个工作表的全部数据复制，然后转到新的工作表当中进行粘贴，就这样重复工作。嗨呀，重复性工作刚好是最适合代码进行替代的，可以省去我们不少时间。")]),s._v(" "),a("p",[s._v("总而言之，大体思路分为：")]),s._v(" "),a("ol",[a("li",[s._v("创建一个新的合并表")]),s._v(" "),a("li",[s._v("对已有表的列标题进行粘贴复制")]),s._v(" "),a("li",[s._v("对已有表的数据进行粘贴复制")])]),s._v(" "),a("h1",{attrs:{id:"实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[s._v("#")]),s._v(" 实战")]),s._v(" "),a("h2",{attrs:{id:"创建新表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新表"}},[s._v("#")]),s._v(" 创建新表")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Set ns = Worksheets.Add\nns.Name = "合并"\n')])])]),a("p",[s._v("这应该不用太多说明，通过VBA建立一个新的工作表，并给ta命名。")]),s._v(" "),a("h2",{attrs:{id:"对表头进行复制粘贴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对表头进行复制粘贴"}},[s._v("#")]),s._v(" 对表头进行复制粘贴")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Sheet1.Range("1:1").Copy ns.Range("A1")\n')])])]),a("p",[s._v("由于表头都是相同的，所以其实不用在意到底用哪个表的表头，这里为了方便就使用"),a("code",[s._v("sheet1")]),s._v("的表头（即第一行的数据）复制到"),a("code",[s._v("合并")]),s._v("表的第一行。")]),s._v(" "),a("h2",{attrs:{id:"对数据进行合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对数据进行合并"}},[s._v("#")]),s._v(" 对数据进行合并")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('For Each st In ThisWorkbook.Sheets\n    st.UsedRange.Offset(1).Copy ns.Range("A" & ns.UsedRange.Rows.Count + 1)\nNext\n')])])]),a("p",[s._v("这里是这次合并的重点，我们要把众多的数据迁移过去，最方便的莫过于使用"),a("code",[s._v("usedrange")]),s._v("啦。但是在后面还要跟上"),a("code",[s._v("offset")]),s._v("函数，把选择的数据区域"),a("strong",[s._v("向下偏移一行")]),s._v("，以达到不重复复制表头的目的，单单将表头下的数据复制进"),a("code",[s._v("合并")]),s._v("表中。")]),s._v(" "),a("h2",{attrs:{id:"需要注意的点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要注意的点"}},[s._v("#")]),s._v(" 需要注意的点")]),s._v(" "),a("p",[s._v("由于我们使用了遍历的结构，所以我们之前创建的"),a("code",[s._v("合并")]),s._v("表也会被遍历到，并把自身的数据再粘贴到"),a("code",[s._v("合并")]),s._v("表当中。避免次错误的最好方法是在遍历结构当中添加一个判断机制，只要不是"),a("code",[s._v("合并")]),s._v("表，就对当前表进行粘贴复制操作。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('For Each st In ThisWorkbook.Sheets\n    If st.Name <> ns.Name Then\n        st.UsedRange.Offset(1).Copy ns.Range("A" & ns.UsedRange.Rows.Count + 1)\n    End If\nNext\n')])])]),a("h2",{attrs:{id:"全部代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全部代码"}},[s._v("#")]),s._v(" 全部代码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Sub 合并()\nDim ns As Worksheet\nDim st As Worksheet\n\nSet ns = Worksheets.Add\nns.Name = "合并"\nSheet1.Range("1:1").Copy ns.Range("A1")\n\nFor Each st In ThisWorkbook.Sheets\n    If st.Name <> ns.Name Then\n        st.UsedRange.Offset(1).Copy ns.Range("A" & ns.UsedRange.Rows.Count + 1)\n    End If\nNext\n\nSet ns = Nothing\n\nEnd Sub\n')])])]),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("虽然代码相对较少，任务也相对比较简单和理想化，但是还是要注意遍历的对象要进行判断和不要重复复制粘贴表头的问题。")])])}),[],!1,null,null,null);e.default=n.exports}}]);