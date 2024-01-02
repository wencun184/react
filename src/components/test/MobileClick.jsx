import React from "react";
class MobileClick extends React.Component {
  touchStart = (ev) => {
    let finger = ev.changedTouches[0];
    this.touch = {
      startX: finger.pageX,
      startY: finger.pageY,
      isMove: false,
    };
  };
  touchMove = (ev) => {
    let finger = ev.changedTouches[0];
    let { startX, startY } = this.touch;
    let changeX = startX - finger.pageX;
    let changeY = startY - finger.pageY;
    if (Math.abs(changeX) > 10 || Math.abs(changeY) > 10) {
      this.touch.isMove = true;
    }
  };
  touchEnd = () => {
    let { isMove } = this.touch;
    if (isMove) return;
    console.log("点击了");
  };
  render() {
    return (
      <button
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      >
        移动端按钮
      </button>
    );
  }
}
export default MobileClick;
