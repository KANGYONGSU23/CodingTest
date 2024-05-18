const grahp = {
  1: [2, 3],
  2: [4, 5],
  3: [6, 7],
  4: [],
  5: [],
  6: [],
  7: [],
};

//============================================================================

function PreorderTraversal(node) {
  if (!node) {
    return;
  }
  const [child1, child2] = grahp[node];
  console.log(node);
  PreorderTraversal(child1);
  PreorderTraversal(child2);
}

function InorderTraversal(node) {
  if (!node) {
    return;
  }
  const [child1, child2] = grahp[node];
  InorderTraversal(child1);
  console.log(node);
  InorderTraversal(child2);
}

function PostorderTraversal(node) {
  if (!node) {
    return;
  }
  const [child1, child2] = grahp[node];
  PostorderTraversal(child1);
  PostorderTraversal(child2);
  console.log(node);
}

//============================================================================

//PreorderTraversal(1);
//InorderTraversal(1);
PostorderTraversal(1);
