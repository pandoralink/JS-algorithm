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

/**
 * 详细链接 https://blog.csdn.net/baoxin1100/article/details/108025393
 * leftFlag 是为了让每一次循环知道当前节点应该填入左节点还是右节点
 * @param {number[]} arr 
 */
function generateTreeByTruthyQueue(arr) {
  // 长度为 0 和首元素为 null 的均为无意义树
  if(arr.length === 0 || arr[0] === null) {
    return null;
  }

  let root;
  let queue = [];
  let leftFlag = true;

  arr.forEach(item => {
    let node = item ? new TreeNode(item,null,null) : null;
    if(queue.length === 0) {
      root = node;
      queue.push(node);
    }
    else if(leftFlag) {
      queue[0].left = node;
      leftFlag = false;
      if(node !== null) {
        queue.push(node);
      }
    }
    else {
      queue[0].right = node;
      if(node !== null) {
        queue.push(node);
      }
      queue.shift();
      leftFlag = true;
    }
  });

  return root;
}

export { generateTreeByQueue,generateTreeByTruthyQueue };
