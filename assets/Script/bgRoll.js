cc.Class({
    extends: cc.Component,

    properties: {
        m_bgs: [cc.Node],
    },

    ctor () {
        //每帧滚动
        this.speed = 400
    },

    onLoad () {
        //三张背景图位置初始化
        //获得当前游戏窗口的高度
        this.height = cc.winSize.height
        //获得当前游戏窗口的宽度
        let width = cc.winSize.width
        for (let index = 0; index < this.m_bgs.length; index++) {
            this.m_bgs[index].height = this.height
            this.m_bgs[index].width = width
            this.m_bgs[index].y = index * this.height
        }
    },

    start () {

    },

    update (dt) {
        this.bgMove()
    },

    lateUpdate (dt) {
        for (let index = 0; index < this.m_bgs.length; index++) {
            if (this.m_bgs[index].y + this.m_bgs[index].height * 0.5 < this.height * -0.5) {
                this.m_bgs[index].y += this.m_bgs[index].height * 3;
            }
        }
    },

    bgMove () {
        for (let index = 0; index < this.m_bgs.length; index++) {
            this.bgAction = cc.sequence(
                cc.moveTo(1, 0, this.m_bgs[index].y - this.speed),
                cc.callFunc(function(target){
                    target.position = cc.v2(Math.round(target.x),Math.round(target.y));
                })
            )
            this.m_bgs[index].runAction(this.bgAction)
        }
    },
});
