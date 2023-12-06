var posts=["2023/12/leetcode/LC 131 分割回文串/","2023/12/leetcode/LC 17 电话号码的数字组合/","2023/12/leetcode/LC 78 子集/","2023/12/leetcode/LC 784 字母大小写全排列/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };