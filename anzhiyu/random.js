var posts=["leetcode周赛/第375场周赛/","2023/12/leetcode/LC 131 分割回文串/","2023/12/leetcode/LC 17 电话号码的数字组合/","2023/12/leetcode/LC 2698 求一个整数的惩罚数/","2023/12/leetcode/LC 306 累加数/","2023/12/leetcode/LC 50 Pow(x, n)/","2023/12/leetcode/LC 77  组合/","2023/12/leetcode/LC 56 合并区间 /","2023/12/leetcode/LC 78 子集/","2023/12/leetcode/LC 784 字母大小写全排列/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };