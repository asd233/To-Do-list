; (function () {
    let that;
    function Item(value) {
        this.value = value;
        this.li = document.createElement("li");
        that = this;
    };
    Item.prototype.render = function () {
        let unfinished = document.querySelector("#unfinished");
        let completed = document.querySelector("#completed");
        let unfinishedNum = document.querySelector("#unfinishedNum");
        var completedNum = document.querySelector("#completedNum");
        //创建复选框
        let input = document.createElement("input");
        input.type = "checkbox";
        input.className = "check";

        //复选框绑定事件
        input.onclick = function () {
            if (this.checked) {
                span.style.textDecoration = "line-through";
                span.style.color = "#778899";
                that.li.style.webkitFilter = "grayscale(100%)";
                completed.append(that.li);
            } else {
                span.style.textDecoration = "none";
                span.style.color = "#000";
                that.li.style.webkitFilter = "grayscale(0%)";
                unfinished.append(that.li);
            }
            unfinishedNum.innerText = unfinished.childNodes.length;
            completedNum.innerText = completed.childNodes.length;
        };
        this.li.appendChild(input);

        //填入事项
        var span = document.createElement("span");
        span.innerHTML = this.value;
        span.onclick = function () {
            let input = document.createElement("input");
            input.type = "text";
            input.value = that.value;
            span.innerText = "";
            input.onblur = function () {
                if (input.value) {
                    that.value = input.value;
                    span.innerText = that.value;
                    input.remove();
                } else {
                    span.innerText = that.value;
                    input.remove();
                }
            }
            that.li.insertBefore(input, span);
            input.focus();
        }
        this.li.appendChild(span);

        //创建删除标签
        var a = document.createElement("a");
        a.href = "#";
        a.innerText = "-";
        a.onclick = function () {
            that.li.remove();
            unfinishedNum.innerText = unfinished.childNodes.length;
            completedNum.innerText = completed.childNodes.length;
        }


        this.li.appendChild(a);
        unfinished.appendChild(this.li);
        unfinishedNum.innerText = unfinished.childNodes.length;
    };

    title.onblur = function () {
        if (title.value) {
            let title = document.querySelector("#title")
            let one = new Item(title.value);
            one.render(title);
            title.value = "";
        }

        window.Item = Item;
    }
})()