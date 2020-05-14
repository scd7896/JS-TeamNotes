class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


/**
 * 처음에 링크드리스트를 만들 때, 첫 데이터를 넣어주어야한다.
 * @param: any
 */
class DoubleLinkedList {
    constructor() {
        this.head = null;
    };
    
    /**
     * 더블 링크드 리스트 제일 마지막에 넣는다.
     * @param {*} data 
     */
    insertLast(data) {
        const newNode = new DoubleNode(data);
        if (this.head == null) {
            newNode.prev = newNode;
            newNode.next = newNode;
            this.head = newNode;
        } else {
            newNode.prev = this.head.prev;
            newNode.next = this.head;
            this.head.prev.next = newNode;
            this.head.prev = newNode;    
        }
    };

    /**
     * 링크드리스트를 전체 순회한다. 
     */
    allSearch() {
        let iteration = this.head;
        if (iteration === null) {
            console.log('리스트가 비었습니다');
            return;
        }
        while(true) {
            console.log(iteration.data);
            iteration = iteration.next;
            if (iteration === this.head) break;
        }
    };
    
    /**
     * 링크드 리스트의 제일 마지막 아이템을 리턴한다.
     */
    getLastNodeData() {
        return this.head.prev.data;
    };

    /**
     * 헤드에서부터 제일 앞에 있는 데이터를 삭제하고, 삭제한 값을 리턴한다.
     * @param {*} data 
     */
    targetDataRemove(data) {
        let iteration = this.head;
        if (iteration === null) {
            console.log('리스트가 비어있습니다');
            return null;
        }
        while(true) {
            if (iteration.data === data) {
                /**
                 * 삭제 로직 작성
                 * iteration이 head인 경우 head를 삭제하고 head.next를 head로 만든다.
                 */
                
            }
            if (iteration.next === this.head) {
                break;
            } 
            iteration = iteration.next;
        }
        return data; 
    }
}

const init = () => {
    const ll = new DoubleLinkedList()
    ll.insertLast('김서버')
    ll.insertLast('링크드리스트 추가')
    ll.allSearch();
    console.log('마지막데이터는', ll.getLastNodeData());
}

init();

/**
 * 타겟을 찾는다
 * 제일 뒤에 넣는다
 */

 /**
  * 찾는다 n
  * 뺴고 뒤에거 댕겨야되잖아요 n
  * 그다음 넣는다
  */

  /**
   * 찾는다 n
   * 뺀다 1
   * 뒤에 넣는다 1
   */

/**
 * 맨 마지막 노드를 찾는다
 * 1. 이터레이션을 돌린다
 * 2. iteration.next가 null일때 까지 돌린다. n
 * 3. null이면 그 데이터를 리턴한다.
 * 
 * 2-1. head.prev.data를 리턴한다 1
 */
