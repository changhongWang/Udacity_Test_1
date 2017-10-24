
#Udacity Test 1 - Arcade Game Clone v1.0
#优达学城前端进阶课程测试 - 经典街机游戏克隆
===============================
## 项目部署方式

直接下载项目或使用Git Clone，然后在服务器中运行index.html。

## 核心
1. 学习MarkDown的使用
2. 学习JavaScript面向对象开发思维，掌握闭包、作用域、模拟类继承、对象实例化等
3. 使用面向对象的开发方式编写简易接机游戏

## 难点
1. 碰撞检测的实现

   发生碰撞的情况：当Enemy的位置进入Player所在区域时，两者发生碰撞。但是，由于player与enemy并不是占据整个格子，他们与格子边界存在一定距离，所以在计算时需要减掉这个距离，否则会出现怪物还没碰到玩家，玩家已经死亡并回到起点。
    
2. 面向对象的实际使用
   
   Enemy和Player对象的方法均放在各自的prototype中，确保实例化的各个对象都拥有方法。

## 未来版本
预期在v1.1版本中
1. 加入玩家成功过河的奖励动画，取代当前的直接返回起点。
2. 开始的时候并不直接初始化玩家位置，加入启动画面。
