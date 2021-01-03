class Node {
  int data;
  Node left, right;

  public Node(int data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  Node root;

  Tree() {
    this.root = null;
  }

  void traverseInOrder(Node node) {
    if (node == null) return;

    traverseInOrder(node.left);
    System.out.print(node.data + " ");
    traverseInOrder(node.right);
  }

  public static void main(String[] args) {
    Tree tree = new Tree();

    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);

    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(5);

    System.out.println("In-order traversal");
    tree.traverseInOrder(tree.root);
  }
}



