; (function () {
    $(function () {
        let that;
        function Item(value) {
            this.value = value;
            that = this;
        };
        Item.prototype.render = function () {
            let li = document.createElement("li");
            let unfinished = document.querySelector("#unfinished");
            let completed = document.querySelector("#completed");
            let unfinishedNum = document.querySelector("#unfinishedNum");
            var completedNum = document.querySelector("#completedNum");

            //创建复选框
            let input = $("<input>");
            input.prop({ "type": "checkbox", "className": "check" })

            //复选框绑定事件
            input.on("click", function () {
                if (this.checked) {
                    li.style.webkitFilter = "grayscale(100%)";
                    span.css({ "textDecoration": "line-through", "color": "#778899" })
                    completed.append(li);
                } else {
                    span.css({ "textDecoration": "none", "color": "#000" });
                    li.style.webkitFilter = "grayscale(0%)";
                    unfinished.append(li);
                }
                unfinishedNum.innerText = unfinished.childNodes.length;
                completedNum.innerText = completed.childNodes.length;
            });
            li.append(input[0]);

            //填入事项
            let span = $("<span></span>");
            span.text(this.value);
            span.on("click", function () {
                let input = $("<input>");
                input.prop({ "type": "text", "value": that.value })
                span.text("");
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
            var a = $("<a />");
            a.prop("href", "#").text("-");
            a.on("click", function () {
                li.remove();
                unfinishedNum.innerText = unfinished.childNodes.length;
                completedNum.innerText = completed.childNodes.length;
            })

            li.append(a[0]);
            unfinished.appendChild(li);
            unfinishedNum.innerText = unfinished.childNodes.length;
        };
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
