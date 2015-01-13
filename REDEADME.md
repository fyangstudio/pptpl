  前端代码的高维护性，高阅读性和高拓展性的要求，view层的模板化需求越来越高，但大部分框架体积较重，伴随着
移动端的发展，轻量化高效的代码是前端工程追求的目标，就像jquery所说，write less do more。使用pptpl你可以这样写
html：
```
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <title>原生js实现前端模板</title>
    </head>
    <body>
        <textarea id="tpl1" style="display:none;">
            {{!有用户信息!}}
            {{#if !!info}}
                <p>你好，{{info.name}}！</p>
                {{#if !!info.vip }}
                    {{#if info.level < 5}}
                        <p>普通会员</p>
                    {{#elseif info.level >= 5 && info.level < 8}}
                        <p>中级会员</p>
                    {{#else}}
                        <p>高级会员</p>
                    {{/if}}
                {{#else}}
                    <p>普通用户</p>
                {{/if}}
                <h3>阅读历史：</h3>
                {{!遍历阅读历史!}}
                {{#list books as book}}
                    {{#if book.read}}
                        {{book.name}}：已读
                    {{#else}}
                        {{book.name}}：未读
                    {{/if}}
                {{/list}}
                <h3>购买信息：</h3>
                <table border="1">
                    {{!遍历订单信息!}}
                    {{#list orders as order}}
                        <tr>
                            <td>{{order.id}}</td>
                            <td>{{order.goods}}</td>
                            <td>{{order.state.replace('发货','出库')}}</td>
                        </tr>
                    {{/list}}
                </table>
            {{/if}}
        </textarea>
        <script src="javascript/pptpl.js"></script>
        <script>
            var data = {
                info: {
                    name: 'Yangfan',
                    vip: true,
                    level: 10,
                    area: 'Hangzhou'
                },
                books: [
                    {name: 'JavaScript高级程序设计', read: true},
                    {name: 'Node.js实战', read: true},
                    {name: 'Java程序设计', read: false}
                ],
                orders: [
                    {id: '1001', goods: "book1", state: "未发货"},
                    {id: '1002', goods: "book2", state: "已发货"}
                ]
            };
            var tpl = document.getElementById('tpl1').innerHTML
            document.write(pptpl(tpl, data));
        </script>
    </body>
</html>
```
