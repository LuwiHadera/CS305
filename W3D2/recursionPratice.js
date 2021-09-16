 module.exports = {getMatchingTree}

function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}

const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");

abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

one;

function listNames(tree) {
  console.log(tree.value);
  if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      listNames(key);
    }
  }
}
listNames(abe);

two;

function listNames(tree, name) {
  if (tree.value === name) {
    return true;
  } else if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      listNames(key, name);
      return true;
    }
  }
  return false;
}
console.log(listNames(abe, "Lisa"));

// three;

function getMatchingTree(tree, name) {
  if (tree.value === name) {
    return true;
  } else if (tree.descendents && tree.descendents.length > 0) {
    for (let key of tree.descendents) {
      let matchingnode = getMatchingTree(key, name);
      if (matchingnode) {
        return matchingnode;
      }
    }
  }
  return null
}
console.log(getMatchingTree(abe,"Bart"))

four

function ListNode(name,next){
    this.name = name;
    this.next = next;
}

let list = new ListNode("Abe", homer)
list.next = new ListNode("Homer", bart)
list.next.next = new ListNode("bart",lisa)
list.next.next.next = new ListNode("lisa",maggie)

console.log(JSON.stringify(list));




six:

function treeModifiers(tree,cllbk){
    console.log(callback(tree.value))
    if(tree.descendents && tree.descendents.length>0){
        for(let key of tree.descendents){
            treeModifiers(key,cllbk)
        }
    }
}

function allCaps(item){
    return item.toUpperCase()
}

function addStars(item){
    return `*${item}*`
}

function reverseNode(item){
    return item.split('').reverse().join("")
}
console.log(treeModifiers(abe,addStars))








