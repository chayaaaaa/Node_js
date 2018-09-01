/* 构造函数 */
function Header(){
    this.createDom();
}

/* 头部布局结构模板 */
Header.template = ` <nav class="navbar navbar-inverse navbar-fixed-top">
<div class="container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">职位管理系统</a>
  </div>
  <div id="navbar" class="navbar-collapse collapse">
    <form class="navbar-form navbar-right">
      <div class="form-group">
        <input type="text" placeholder="用户名" class="form-control">
      </div>
      <div class="form-group">
        <input type="password" placeholder="密码" class="form-control">
      </div>
      <button type="submit" class="btn btn-success">登录</button>
      <a href="http://localhost:3000/html/register.html" class="register_user">点我注册</a>
    </form>
  </div><!--/.navbar-collapse -->
</div>
</nav>`
/* 原型链继承 */
$.extend(Header.prototype,{
    // 创建DOM元素并渲染
    createDom(){
      $(Header.template).appendTo("header");
    }, // 创建模态框
  
    });

new Header();