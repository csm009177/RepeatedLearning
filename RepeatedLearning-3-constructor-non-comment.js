class TitleManager {

  constructor(tagName, stateDataOject = {
    basicTitle : "기본 제목", newTitle : "새로운 제목"}) {
      this._tagName = tagName;
      this._stateDataOject = stateDataOject
    }

    // property : tagName
    get tagName() {
      return this._tagName;
    }
    set tagName(value) {
      if(typeof value === 'string' && value.trim() !== '') {
        this._tagName = value;
      } else {
        throw new Error("유효한 태그 이름이어야 합니다");
      }
    }
    // property : stateData
    get stateData(){
      return this._stateDataOject;
    }
    set stateDataOject(value) {
      const isValidObject = (obj) => {typeof obj === 'object' && obj !== null};
      if (isValidObject(value)) {
        this._stateDataOject = value;
      } else {
        throw new Error("유효한 객체 이름이어야 합니다")
      }
    }
    // method : updateUI
    updateUI() {
      const element = document.getElementsByTagName(this._tagName);
      if(element.length>0){
        element[0].textContent = this._stateDataOject.basicTitle;
      } else {
        throw new Error ("지정된 태그 이름의 요소를 찾을 수 없습니다")
      }
    }
    // method : updateTitle
    updateTitle() {
      this._stateDataOject.basicTitle = this._stateDataOject.newTitle;
      this.updateUI();
    }
}
const test = new TitleManager("h1", {basicTitle:"기본 제목", newTitle:"새로운 제목"});

console.log(test);
console.log(test.tagName)