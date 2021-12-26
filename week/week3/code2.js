/**
 * 递归真他妈傻逼，迭代最多让你等久一点，TM 的递归直接爆栈
 * 傻子递归解法
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  let result = new Set();
  let resultIndex = new Set(recipes.map((item, index) => index)); // 记录未完成菜品的索引
  supplies = new Set(supplies);
  ingredients.forEach((element, index) => {
    element = element.map((el) => supplies.has(el));
    if (!element.includes(false)) {
      supplies.add(recipes[index]);
      resultIndex.delete(index);

      let flag = true;
      let tempIndex = index; // 如果新增原料后再次搜寻发现能够生成之前的菜品则继续搜寻
      while (flag) {
        flag = false;
        for (let i of resultIndex) {
          let temp = ingredients[i].map((el) => supplies.has(el));
          if (!temp.includes(false)) {
            flag = true;
            supplies.add(recipes[tempIndex]);
            result.add(recipes[tempIndex]);
            resultIndex.delete(tempIndex);
            tempIndex = i;
            break;
          }
        }
      }
      result.add(recipes[index]);
    }
  });
  return [...result];
};

/**
 * 第一名的解法
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
 var findAllRecipes = function (recipes, ingredients, supplies) {
  let result = new Set();
  let resultIndex = new Set(recipes.map((item, index) => index)); // 记录未完成菜品的索引
  supplies = new Set(supplies);
  ingredients.forEach((element, index) => {
    element = element.map((el) => supplies.has(el));
    if (!element.includes(false)) {
      supplies.add(recipes[index]);
      resultIndex.delete(index);

      let flag = true;
      let tempIndex = index; // 如果新增原料后再次搜寻发现能够生成之前的菜品则继续搜寻
      while (flag) {
        flag = false;
        for (let i of resultIndex) {
          let temp = ingredients[i].map((el) => supplies.has(el));
          if (!temp.includes(false)) {
            flag = true;
            supplies.add(recipes[tempIndex]);
            result.add(recipes[tempIndex]);
            resultIndex.delete(tempIndex);
            tempIndex = i;
            break;
          }
        }
      }
      result.add(recipes[index]);
    }
  });
  return [...result];
};