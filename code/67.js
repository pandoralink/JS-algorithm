/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = buildGraph(numCourses, prerequisites);
  const circle = { value: false };
  return (
    traverse(
      graph,
      new Array(numCourses).fill(false),
      new Array(numCourses).fill(false),
      0,
      circle
    ) && !circle.value
  );
};
function buildGraph(numCourses, prerequisites) {
  const res = new Array(numCourses).fill(null).map(() => []);
  for (const course of prerequisites) {
    res[course[1]].push(course[0]);
  }
  return res;
}
function traverse(graph, path, used, curr, circle) {
  if (path[curr] === true) {
    circle.value = true;
    return false;
  } else if (curr === graph.length - 1) {
    return true;
  } else {
    let res = false;
    path[curr] = true;
    used[curr] = true;
    for (const course of graph[curr]) {
      res = res || traverse(graph, path, used, course, circle);
    }
    path[curr] = false;
    return res;
  }
}
canFinish(2, [[1,0],[0,1]]);
