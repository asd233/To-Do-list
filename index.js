var id_num = 0;
function jiaru(){
    // 获得输入的值
    var title = document.getElementById("title").value;
    //生成元素并修改样式
    var li_ele = document.createElement("li");
    var input_ele = document.createElement("input");
    input_ele.setAttribute("type","checkbox");
    input_ele.setAttribute("class","check");
    var p_ele = document.createElement("p");
    p_ele.setAttribute("id","p_"+id_num);
    p_ele.innerHTML=title;
    var a_ele = document.createElement("a");
    a_ele.innerHTML="-";
    //将生成的节点插入原有节点
    li_ele.appendChild(input_ele);
    li_ele.appendChild(p_ele);
    li_ele.appendChild(a_ele);
    document.getElementById("todolist").appendChild(li_ele);
    id_num++;
}
function del(){
    
}