; (function () {
    function Item(value) {
        this.value = value;
    };
    Item.prototype.render = function () {
        let li = document.createElement("li");
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
                li.style.webkitFilter = "grayscale(100%)";
                completed.append(li);
            } else {
                span.style.textDecoration = "none";
                span.style.color = "#000";
                li.style.webkitFilter = "grayscale(0%)";
                unfinished.append(li);
            }
            unfinishedNum.innerText = unfinished.childNodes.length;
            completedNum.innerText = completed.childNodes.length;
        };
        li.appendChild(input);

        //填入事项
        var span = document.createElement("span");
        span.innerText = this.value;
        li.appendChild(span);

        //创建删除标签
        var a = document.createElement("a");
        a.href = "#";
        a.innerText = "-";
        a.onclick = function () {
            li.remove();
            unfinishedNum.innerText = unfinished.childNodes.length;
            completedNum.innerText = completed.childNodes.length;
        }


        li.appendChild(a);
        unfinished.appendChild(li);
        unfinishedNum.innerText = unfinished.childNodes.length;
    };

    title.onkeydown = function (event) {
        //回车键添加事件
        if (event.keyCode == 13) {
            if (title.value) {
                let title = document.querySelector("#title")
                let one = new Item(title.value);
                one.render(title);
                title.value = "";
            }
        }

        window.Item = Item;
    }
})()