function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//定义插入对象
function BST() {
  this.root = null;
  this.insert = insert;
  this.show = () => {
    console.log(this.root);
  };
}
function insert(data) {
  //实例化Node对象
  let n = new TreeNode(data, null, null);
  //如果不存在节点，则此节点是根节点
  if (this.root == null) {
    this.root = n;
  } else {
    //存在根节点时，定义 current 等于根节点
    let current = this.root;
    let parent;
    while (current) {
      parent = current;
      //当插入的值小于根节点的值时，将值作为左节点插入
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function generateTreeByQueue(arr) {
  let val = arr.shift();
  if(typeof val === 'undefined') {
    return null;
  }
  else if(val === null) {
    return null;
  }
  else {
    return new TreeNode(val,generateTreeByQueue(arr),generateTreeByQueue(arr));
  }
}

export { generateTreeByQueue };
