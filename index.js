; (function () {
    $(function () {
        let that;
        function Item(value) {
            this.value = value;
            that = this;
        };
        Item.prototype.render = function () {
            let li = document.createElement("li");
            li.draggable = true;
            let unfinished = $("#unfinished");
            let completed = $("#completed");

            //拖拽效果开始
            let obj = null;
            unfinished[0].ondragstart = function (e) {
                obj = e.target;
            }
            unfinished[0].ondragover = function () {
                return false;
            }
            unfinished[0].ondrop = function (e) {
                if (e.target.tagName == "LI") {
                    e.target.before(obj);
                } else if (e.target.parentNode.tagName == "LI") {
                    e.target.parentNode.before(obj);
                }
            }
            //拖拽效果结束

            let unfinishedNum = $("#unfinishedNum");
            let completedNum = $("#completedNum");

            //创建复选框
            let input = $("<input>");
            input.prop({ "type": "checkbox", "className": "check" })

            //复选框绑定事件
            input.on("click", function () {
                if (this.checked) {
                    //事件完成
                    li.draggable = false;
                    li.style.webkitFilter = "grayscale(100%)";
                    span.css({ "textDecoration": "line-through", "color": "#778899" })
                    completed.append(li);
                } else {
                    //事件未完成
                    li.draggable = true;
                    li.style.webkitFilter = "grayscale(0%)";
                    span.css({ "textDecoration": "none", "color": "#000" });
                    unfinished.append(li);
                }
                unfinishedNum.text(unfinished[0].childNodes.length);
                completedNum.text(completed[0].childNodes.length);
            });
            li.append(input[0]);

            //点击文本可修改事项
            let span = $("<span></span>");
            span.text(this.value);
            span.on("click", function () {
                let input = $("<input>");
                input.prop({ "type": "text", "value": this.innerText })
                span.text("");
                //文本控件失去焦点时修改事件
                input.on("blur", function () {
                    if (input.val()) {
                        that.value = input.val();
                        span.text(that.value);
                        input.remove();
                    } else {
                        span.text(that.value);
                        input.remove();
                    }
                })
                span.before(input);
                input.focus();
            })
            li.append(span[0]);

            //创建删除标签
            var a = $("<a/>");
            a.prop("href", "#").text("-");
            a.on("click", function () {
                li.remove();
                unfinishedNum.text(unfinished[0].childNodes.length);
                completedNum.text(completed[0].childNodes.length);
            })

            li.append(a[0]);
            unfinished.append(li);
            unfinishedNum.text(unfinished[0].childNodes.length);
        };

        //回车时添加事件
        title.onkeydown = function (e) {
            if (e.keyCode === 13) {
                if (title.value) {
                    let one = new Item(title.value);
                    one.render(title);
                    title.value = "";
                }
            }
        }
        window.Item = Item;

    })
})()
