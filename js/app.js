// 这是我们的玩家要躲避的敌人 
var Enemy = function(col, row, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 已经提供了一个来帮助你实现更多
    this.x = col;
    this.y = row;

    this.originX = this.x;
    this.originY = this.y;
    this.speed = speed || 1;
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来  更新  敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed*dt;
    this.x>6 && (this.x = this.originX);
    this.y>6 && (this.y = this.originY);
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x*100, (this.y-2)*83+55);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function (playerX, playerY) {
    // init
    this.x = (playerX>0 && playerX<6)? playerX: 3;
    this.y = (playerY>4 && playerY<7)? playerY: 6;
    this.originX = this.x;
    this.originY = this.y;
    this.sprite = 'images/char-boy.png';
    this.win_status = 0;
};
Player.prototype.handleInput = function (key) {
    switch (key){
        case 'left': this.x>0 && (this.x -= 1);break;
        case 'up': this.y>1 && (this.y -= 1);break;
        case 'right': this.x<4 && (this.x += 1);break;
        case 'down': this.y<6 && (this.y += 1);break;
    }
    this.render();
};
Player.prototype.win = function(){
    // 玩家过河成功时执行

};
Player.prototype.update = function () {
    var player = this;

    // 碰撞检测
    allEnemies.forEach(function(enemy){
        // player与enemy之间存在距离
        if((enemy.x - player.x - 0.3) > -1 && (enemy.x - player.x - 0.3) < 1 && player.y ===  enemy.y){
            player.reset();
        }
    });
    // 检测玩家过河成功
    if(this.y === 1){
        // self.win();
        this.reset();
    }
};
// 重置玩家的位置
Player.prototype.reset = function() {
    this.sprite = 'images/char-boy.png';
    this.x = this.originX;
    this.y = this.originY;
};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x*100, (this.y-2)*83+55);
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
var allEnemies = [];

// 初始化5个敌人
(function(){
    /*for(var i=0;i<5;i++){
        var _init_x = 1 - Math.ceil(Math.random()*5);
        var _init_y = (Math.floor(Math.random()*3))*83+55;
        var _init_speed = (1-_init_x)*100;
        allEnemies.push( new Enemy(_init_x, _init_y, _init_speed) )
    }*/
    allEnemies.push(new Enemy(-5,2,4));
    allEnemies.push(new Enemy(-3,3,1));
    allEnemies.push(new Enemy(-1,4,2));
    allEnemies.push(new Enemy(-2,2,3));
    allEnemies.push(new Enemy(-4,4,1));
})();


// 把玩家对象放进一个叫 player 的变量里面
var player = new Player();

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
