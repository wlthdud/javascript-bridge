/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #upperBridge = [];
  #lowerBridge = [];


  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(command) {
    

  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {

  }

  //사용자가 게임을 종료할 때 사용하는 메서드
  end(){

  }

  /**
   * 게임 성공 여부를 반환하는 메서드
   * <p>
   * 마지막 배열을 비교했을 때 true면 success
   */
  isSuccess(input, answer){
    let i = input.length - 1;
    return input[i] == answer[i];
  }
  
}

module.exports = BridgeGame;
